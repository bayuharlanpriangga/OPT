import React from 'react';
import { useApp } from '../../context/AppContext';
import { TESTS_METADATA } from '../../data/metadata';
import { M3Card } from '../m3/M3Card';
import { M3Button } from '../m3/M3Button';
import type { TestType } from '../../types';

export const DashboardView: React.FC = () => {
  const {
    language,
    startTest,
    showResult,
    setViewResultTestType,
    setActiveTab,
    isCompleted,
    completedCount,
    allResults,
    clearAllData,
  } = useApp();

  const totalTests = TESTS_METADATA.length;
  const progressPercent = Math.round((completedCount / totalTests) * 100);

  const handleTestCardClick = (testId: TestType) => {
    if (isCompleted(testId)) {
      showResult(testId);
    } else {
      startTest(testId);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-20 md:pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-m3-xl bg-linear-to-br from-primary-container/80 via-surface-container to-surface-container-high p-6 md:p-10 border border-outline-variant shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-outline-variant/60 shadow-xs">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>8 Sistem Tipologi Kepribadian Terpadu</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-on-surface mb-3 leading-tight">
            {language === 'id' ? (
              <>
                Petakan Diri Anda dalam <span className="text-primary">8 Dimensi Psikologi</span>
              </>
            ) : (
              <>
                Map Your Identity in <span className="text-primary">8 Typology Dimensions</span>
              </>
            )}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
            {language === 'id'
              ? 'Eksplorasi mendalam menggabungkan MBTI, Enneagram & Tritype, Instinctual Variant, Classic Jungian, Socionics, Attitudinal Psyche, Big 5 SLOAN, dan Moral Alignment dalam balutan desain Material 3 Google.'
              : 'A comprehensive psychometric suite integrating MBTI, Enneagram & Tritype, Instinctual Variant, Classic Jungian, Socionics, Attitudinal Psyche, Big 5 SLOAN, and Moral Alignment in Google Material 3.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <M3Button
              variant="filled"
              size="lg"
              icon="play_arrow"
              onClick={() => startTest('grand_assessment')}
            >
              {language === 'id' ? 'Mulai Tes Lengkap (All-in-One)' : 'Start Grand Assessment (All-in-One)'}
            </M3Button>

            <M3Button
              variant="outlined"
              size="lg"
              icon="diversity_3"
              onClick={() => setActiveTab('match')}
            >
              {language === 'id' ? 'Cek Kecocokan Pasangan' : 'Type Compatibility'}
            </M3Button>

            {completedCount > 0 && (
              <M3Button
                variant="tonal"
                size="lg"
                icon="badge"
                onClick={() => setActiveTab('passport')}
              >
                {language === 'id' ? 'Buka Personality Dossier' : 'Open Personality Dossier'}
              </M3Button>
            )}
          </div>
        </div>

        {/* Decorative Background Symbol */}
        <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none select-none text-primary">
          <span className="material-symbols-outlined text-[240px]">psychology</span>
        </div>
      </section>

      {/* Progress & Quick Stats Card */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <M3Card variant="outlined" className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">task_alt</span>
          </div>
          <div>
            <div className="text-2xl font-black text-on-surface">{completedCount} / {totalTests}</div>
            <div className="text-xs text-on-surface-variant font-medium">
              {language === 'id' ? 'Modul Diselesaikan' : 'Modules Completed'}
            </div>
          </div>
        </M3Card>

        <M3Card variant="outlined" className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">timelapse</span>
          </div>
          <div>
            <div className="text-2xl font-black text-on-surface">~20 Min</div>
            <div className="text-xs text-on-surface-variant font-medium">
              {language === 'id' ? 'Durasi Seluruh Tes' : 'Total Test Duration'}
            </div>
          </div>
        </M3Card>

        <M3Card variant="outlined" className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">sync_alt</span>
          </div>
          <div>
            <div className="text-2xl font-black text-on-surface">{progressPercent}%</div>
            <div className="text-xs text-on-surface-variant font-medium">
              {language === 'id' ? 'Kelengkapan Profil' : 'Profile Completeness'}
            </div>
          </div>
        </M3Card>

        <M3Card variant="outlined" className="p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-on-surface-variant font-medium mb-1">
              {language === 'id' ? 'Kelola Data' : 'Manage Data'}
            </div>
            <button
              onClick={() => {
                if (window.confirm(language === 'id' ? 'Apakah Anda yakin ingin menghapus semua jawaban dan hasil tes?' : 'Are you sure you want to reset all answers and results?')) {
                  clearAllData();
                }
              }}
              className="text-xs font-semibold text-error hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
              <span>{language === 'id' ? 'Reset Semua Data' : 'Reset All Data'}</span>
            </button>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline">
            <span className="material-symbols-outlined text-[20px]">settings_backup_restore</span>
          </div>
        </M3Card>
      </section>

      {/* 8 Personality Systems Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-on-surface">
              {language === 'id' ? '8 Modul Tes Kepribadian' : '8 Personality Modules'}
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant">
              {language === 'id'
                ? 'Pilih modul tes secara bebas untuk dikerjakan secara terpisah atau lihat hasilnya.'
                : 'Select any specific test module to take individually or view past findings.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTS_METADATA.map((test) => {
            const completed = isCompleted(test.id);

            // Display current result snippet if completed
            let resultSnippet = '';
            if (completed) {
              if (test.id === 'mbti' && allResults.mbti) resultSnippet = allResults.mbti.type;
              else if (test.id === 'enneagram' && allResults.enneagram) resultSnippet = `${allResults.enneagram.notation} (${allResults.enneagram.tritype})`;
              else if (test.id === 'instinct' && allResults.instinct) resultSnippet = allResults.instinct.stacking;
              else if (test.id === 'jungian' && allResults.jungian) resultSnippet = `Dom: ${allResults.jungian.dominantFunction}`;
              else if (test.id === 'socionics' && allResults.socionics) resultSnippet = `${allResults.socionics.code} (${allResults.socionics.quadra})`;
              else if (test.id === 'attitudinal_psyche' && allResults.attitudinal_psyche) resultSnippet = allResults.attitudinal_psyche.type;
              else if (test.id === 'big5' && allResults.big5) resultSnippet = allResults.big5.sloanCode;
              else if (test.id === 'alignment' && allResults.alignment) resultSnippet = allResults.alignment.alignment;
            }

            return (
              <M3Card
                key={test.id}
                variant={completed ? 'elevated' : 'outlined'}
                interactive
                onClick={() => handleTestCardClick(test.id)}
                className="flex flex-col justify-between group hover:border-primary/50 transition-all min-h-55"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-m3-md bg-surface-container-high group-hover:bg-primary-container group-hover:text-on-primary-container text-primary flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[22px]">{test.icon}</span>
                    </div>
                    {completed ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        {language === 'id' ? 'Selesai' : 'Done'}
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-outline bg-surface-container-high px-2 py-0.5 rounded-full">
                        {test.estMinutes} {language === 'id' ? 'menit' : 'mins'}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {test.title[language]}
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 mb-3">
                    {test.summary[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/60 flex items-center justify-between">
                  {completed ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary bg-primary-container px-2 py-0.5 rounded-full">
                        {resultSnippet}
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        {language === 'id' ? 'Lihat Rincian' : 'View Details'}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[11px] text-outline">
                        {test.questionCount} {language === 'id' ? 'pertanyaan' : 'items'}
                      </span>
                      <span className="text-xs font-semibold text-primary flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                        {language === 'id' ? 'Mulai' : 'Start'}
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </span>
                    </div>
                  )}
                </div>
              </M3Card>
            );
          })}
        </div>
      </section>

      {/* Unified Dossier Invitation Card */}
      <section className="rounded-m3-xl bg-surface-container p-6 md:p-8 border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>{language === 'id' ? 'Personality Dossier & Passport' : 'Personality Dossier & Passport'}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-2">
            {language === 'id'
              ? 'Sintesis Identitas Multidimensi Lengkap'
              : 'Complete Multidimensional Identity Synthesis'}
          </h3>
          <p className="text-xs md:text-sm text-on-surface-variant">
            {language === 'id'
              ? 'Setelah Anda menyelesaikan tes, sistem akan mensintesis semua hasil Anda menjadi satu Dossier Holistik yang memadukan pola kognitif, bayangan insting, quadra socionics, hingga kompas moral.'
              : 'As you complete tests, the system synthesizes your results into a Holistic Dossier connecting cognitive patterns, instinctual shadows, socionics quadras, and moral axes.'}
          </p>
        </div>

        <M3Button
          variant="filled"
          size="lg"
          icon="badge"
          onClick={() => setActiveTab('passport')}
        >
          {language === 'id' ? 'Buka Dossier Saya' : 'View My Dossier'}
        </M3Button>
      </section>
    </div>
  );
};
