import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { getQuestionsForTest, getAllQuestionsSequential } from '../../data/questions';
import { TESTS_METADATA } from '../../data/metadata';
import { M3ProgressBar } from '../m3/M3ProgressBar';
import { M3LikertScale } from '../m3/M3LikertScale';
import { M3Button } from '../m3/M3Button';
import { M3Card } from '../m3/M3Card';
import type { Question, TestType } from '../../types';

export const TestRunnerView: React.FC = () => {
  const {
    activeTestType,
    userAnswers,
    saveAnswer,
    submitTestAnswers,
    setViewResultTestType,
    setActiveTab,
    language,
  } = useApp();

  const isGrandAssessment = activeTestType === 'grand_assessment';

  // Build question list
  const [questions, setQuestions] = useState<{ question: Question; testType: TestType }[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [showQuestionGrid, setShowQuestionGrid] = useState<boolean>(false);

  useEffect(() => {
    if (!activeTestType) return;

    if (isGrandAssessment) {
      setQuestions(getAllQuestionsSequential());
    } else {
      const qList = getQuestionsForTest(activeTestType as TestType);
      setQuestions(qList.map((q) => ({ question: q, testType: activeTestType as TestType })));
    }
    setCurrentIndex(0);
  }, [activeTestType, isGrandAssessment]);

  const currentItem = questions[currentIndex];
  const currentQuestion = currentItem?.question;
  const currentTestMeta = currentItem
    ? TESTS_METADATA.find((m) => m.id === currentItem.testType)
    : null;

  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;

  // Track progress
  const answeredCount = questions.filter((q) => userAnswers[q.question.id] !== undefined).length;
  const totalQuestions = questions.length;
  const progressPercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  const remainingQuestions = Math.max(0, totalQuestions - answeredCount);
  const estRemainingMinutes = Math.max(1, Math.ceil((remainingQuestions * 12) / 60));
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectAnswer = useCallback(
    (val: number) => {
      if (!currentQuestion) return;
      saveAnswer(currentQuestion.id, val);

      if (autoAdvance && currentIndex < questions.length - 1) {
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 180);
      }
    },
    [currentQuestion, autoAdvance, currentIndex, questions.length, saveAnswer]
  );

  // Keyboard navigation: 1, 2, 3, 4, 5, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showQuestionGrid) return;
      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        handleSelectAnswer(parseInt(e.key, 10));
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, questions.length, handleSelectAnswer, showQuestionGrid]);

  const handleFinish = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    if (isGrandAssessment) {
      // Submit all 8 tests
      const testTypes: TestType[] = [
        'mbti',
        'enneagram',
        'instinct',
        'jungian',
        'socionics',
        'attitudinal_psyche',
        'big5',
        'alignment',
      ];
      for (const t of testTypes) {
        submitTestAnswers(t);
      }
      setActiveTab('passport');
    } else if (activeTestType) {
      submitTestAnswers(activeTestType as TestType);
      setViewResultTestType(activeTestType as TestType);
      setActiveTab('result');
    }
  };

  if (!currentItem || !currentQuestion) {
    return (
      <div className="text-center py-20">
        <p className="text-on-surface-variant">Memuat pertanyaan...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in pb-20 md:pb-12">
      {/* Top Header Card */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab('dashboard')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-on-surface cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>{language === 'id' ? 'Kembali ke Dashboard' : 'Back to Dashboard'}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAutoAdvance(!autoAdvance)}
            className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
            title="Otomatis lompat ke nomor berikutnya setelah memilih jawaban"
          >
            <span className={`material-symbols-outlined text-[18px] ${autoAdvance ? 'text-primary' : 'text-outline'}`}>
              {autoAdvance ? 'toggle_on' : 'toggle_off'}
            </span>
            <span className="hidden sm:inline">
              {language === 'id' ? 'Lompat Otomatis' : 'Auto-advance'}
            </span>
          </button>

          <button
            onClick={() => setShowQuestionGrid(!showQuestionGrid)}
            className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary-container/60 hover:bg-primary-container px-2.5 py-1 rounded-full cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">grid_on</span>
            <span>{currentIndex + 1} / {totalQuestions}</span>
          </button>
        </div>
      </div>

      {/* Progress Bar & Subsystem Info */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">
              {currentTestMeta?.icon}
            </span>
            <span className="font-bold text-on-surface">
              {currentTestMeta?.title[language]}
            </span>
            {isGrandAssessment && (
              <span className="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
                Grand Assessment
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary-container/40 px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-[14px]">timer</span>
              <span>
                {language === 'id' ? `~${estRemainingMinutes} mnt tersisa` : `~${estRemainingMinutes} min left`}
              </span>
            </span>
            <span>
              {answeredCount} / {totalQuestions} {language === 'id' ? 'terjawab' : 'answered'} ({progressPercent}%)
            </span>
          </div>
        </div>
        <M3ProgressBar progress={progressPercent} height="h-2" />
      </div>

      {/* Question Drawer / Grid Popover */}
      {showQuestionGrid && (
        <M3Card variant="outlined" className="p-4 bg-surface-container animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-outline">
              {language === 'id' ? 'Daftar Nomor Pertanyaan' : 'Question Index'}
            </h4>
            <button
              onClick={() => setShowQuestionGrid(false)}
              className="text-xs text-outline hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2 max-h-56 overflow-y-auto p-1">
            {questions.map((q, idx) => {
              const isAnswered = userAnswers[q.question.id] !== undefined;
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.question.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowQuestionGrid(false);
                  }}
                  className={`h-8 rounded-m3-sm text-xs font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-primary text-on-primary ring-2 ring-primary ring-offset-2'
                      : isAnswered
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container-high text-outline hover:bg-surface-container-highest'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </M3Card>
      )}

      {/* Main Question Card */}
      <M3Card
        variant="elevated"
        className="p-6 md:p-10 border border-outline-variant/60 relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-container px-3 py-1 rounded-full">
            {language === 'id' ? 'Pertanyaan' : 'Question'} #{currentIndex + 1}
          </span>
          <span className="text-xs text-outline font-medium">
            {isGrandAssessment ? currentTestMeta?.badge : currentTestMeta?.subtitle[language]}
          </span>
        </div>

        {/* Prompt Statement */}
        <div className="min-h-27.5 flex items-center justify-center my-4 text-center">
          <p className="text-lg md:text-2xl font-bold tracking-tight text-on-surface leading-snug max-w-2xl">
            "{currentQuestion.text[language]}"
          </p>
        </div>

        {/* M3 Likert Scale */}
        <div className="mt-8 pt-6 border-t border-outline-variant/60">
          <M3LikertScale
            value={currentAnswer}
            onChange={handleSelectAnswer}
          />
        </div>
      </M3Card>

      {/* Navigation Actions Footer */}
      <div className="flex items-center justify-between pt-2">
        <M3Button
          variant="outlined"
          icon="arrow_back"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
        >
          {language === 'id' ? 'Sebelumnya' : 'Previous'}
        </M3Button>

        <div className="flex items-center gap-3">
          {!isLastQuestion ? (
            <M3Button
              variant="filled"
              trailingIcon="arrow_forward"
              disabled={currentAnswer === undefined}
              onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
            >
              {language === 'id' ? 'Selanjutnya' : 'Next'}
            </M3Button>
          ) : (
            <M3Button
              variant="filled"
              icon="check_circle"
              disabled={answeredCount < totalQuestions}
              onClick={handleFinish}
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              {language === 'id' ? 'Selesaikan Tes' : 'Finish Assessment'}
            </M3Button>
          )}
        </div>
      </div>
    </div>
  );
};
