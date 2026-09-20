import React from 'react';
import { useApp } from '../../context/AppContext';
import { M3Card } from '../m3/M3Card';
import { M3Button } from '../m3/M3Button';
import { M3ProgressBar } from '../m3/M3ProgressBar';
import { TESTS_METADATA } from '../../data/metadata';
import { JUNGIAN_FUNCTIONS_INFO } from '../../data/descriptions/jungianData';
import { AP_ASPECT_INFO, AP_ATTITUDES_INFO } from '../../data/descriptions/apData';
import { BIG5_DIMENSIONS } from '../../data/descriptions/big5Data';
import type { TestType } from '../../types';

export const TestResultView: React.FC = () => {
  const {
    viewResultTestType,
    startTest,
    setActiveTab,
    language,
  } = useApp();

  const testMeta = TESTS_METADATA.find((m) => m.id === viewResultTestType);

  if (!viewResultTestType || !testMeta) {
    return (
      <div className="text-center py-20">
        <p className="text-on-surface-variant">Hasil tes tidak ditemukan.</p>
        <M3Button variant="tonal" onClick={() => setActiveTab('dashboard')} className="mt-4">
          Kembali ke Dashboard
        </M3Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
      {/* Top Breadcrumb & Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab('dashboard')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-on-surface cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>{language === 'id' ? 'Kembali ke Dashboard' : 'Back to Dashboard'}</span>
        </button>

        <div className="flex items-center gap-2">
          <M3Button
            variant="outlined"
            size="sm"
            icon="replay"
            onClick={() => startTest(viewResultTestType as TestType)}
          >
            {language === 'id' ? 'Tes Ulang' : 'Retake'}
          </M3Button>
          <M3Button
            variant="filled"
            size="sm"
            icon="badge"
            onClick={() => setActiveTab('passport')}
          >
            {language === 'id' ? 'Lihat Dossier' : 'View Dossier'}
          </M3Button>
        </div>
      </div>

      {/* Render Specific Test Result */}
      {viewResultTestType === 'mbti' && <MBTIResultDetail />}
      {viewResultTestType === 'enneagram' && <EnneagramResultDetail />}
      {viewResultTestType === 'instinct' && <InstinctResultDetail />}
      {viewResultTestType === 'jungian' && <JungianResultDetail />}
      {viewResultTestType === 'socionics' && <SocionicsResultDetail />}
      {viewResultTestType === 'attitudinal_psyche' && <APResultDetail />}
      {viewResultTestType === 'big5' && <Big5ResultDetail />}
      {viewResultTestType === 'alignment' && <AlignmentResultDetail />}
    </div>
  );
};

// 1. MBTI Detail View
const MBTIResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.mbti;
  if (!res) return null;

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Myers-Briggs Type Indicator
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mt-1">
              {res.type}
            </h1>
            <p className="text-lg font-bold text-primary mt-1">{res.title[language]}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {res.cognitiveStack.map((func, i) => (
              <span
                key={func}
                className="px-3 py-1 rounded-full text-xs font-bold bg-primary-container text-on-primary-container"
              >
                {i === 0 ? 'Dom: ' : i === 1 ? 'Aux: ' : i === 2 ? 'Tert: ' : 'Inf: '}
                {func}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
          {res.description[language]}
        </p>

        {/* 4 Dichotomies Progress Spectrums */}
        <div className="space-y-4 pt-4 border-t border-outline-variant/60">
          <h3 className="text-xs font-bold uppercase tracking-wider text-outline mb-2">
            {language === 'id' ? 'Spektrum Kognitif' : 'Cognitive Spectrum'}
          </h3>

          {/* E vs I */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className={res.percentages.E >= 50 ? 'text-primary' : 'text-outline'}>
                Extraversion ({res.percentages.E}%)
              </span>
              <span className={res.percentages.I > 50 ? 'text-primary' : 'text-outline'}>
                Introversion ({res.percentages.I}%)
              </span>
            </div>
            <M3ProgressBar progress={res.percentages.E} />
          </div>

          {/* S vs N */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className={res.percentages.S >= 50 ? 'text-primary' : 'text-outline'}>
                Sensing ({res.percentages.S}%)
              </span>
              <span className={res.percentages.N > 50 ? 'text-primary' : 'text-outline'}>
                Intuition ({res.percentages.N}%)
              </span>
            </div>
            <M3ProgressBar progress={res.percentages.S} />
          </div>

          {/* T vs F */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className={res.percentages.T >= 50 ? 'text-primary' : 'text-outline'}>
                Thinking ({res.percentages.T}%)
              </span>
              <span className={res.percentages.F > 50 ? 'text-primary' : 'text-outline'}>
                Feeling ({res.percentages.F}%)
              </span>
            </div>
            <M3ProgressBar progress={res.percentages.T} />
          </div>

          {/* J vs P */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className={res.percentages.J >= 50 ? 'text-primary' : 'text-outline'}>
                Judging ({res.percentages.J}%)
              </span>
              <span className={res.percentages.P > 50 ? 'text-primary' : 'text-outline'}>
                Perceiving ({res.percentages.P}%)
              </span>
            </div>
            <M3ProgressBar progress={res.percentages.J} />
          </div>
        </div>
      </M3Card>

      {/* Strengths & Growth Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <M3Card variant="outlined" className="p-5 bg-surface-container-low">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-3">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span>{language === 'id' ? 'Kekuatan Utama' : 'Core Strengths'}</span>
          </div>
          <ul className="space-y-2">
            {res.strengths.map((str, i) => (
              <li key={i} className="text-xs md:text-sm text-on-surface-variant flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>{str[language]}</span>
              </li>
            ))}
          </ul>
        </M3Card>

        <M3Card variant="outlined" className="p-5 bg-surface-container-low">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-3">
            <span className="material-symbols-outlined text-[20px]">upgrade</span>
            <span>{language === 'id' ? 'Ruang Pertumbuhan' : 'Growth Vectors'}</span>
          </div>
          <ul className="space-y-2">
            {res.growth.map((gro, i) => (
              <li key={i} className="text-xs md:text-sm text-on-surface-variant flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>{gro[language]}</span>
              </li>
            ))}
          </ul>
        </M3Card>
      </div>
    </div>
  );
};

// 2. Enneagram Detail View
const EnneagramResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.enneagram;
  if (!res) return null;

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Enneagram of Personality
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mt-1">
              {res.notation}
            </h1>
            <p className="text-lg font-bold text-primary mt-1">{res.title[language]}</p>
          </div>

          <div className="p-3 rounded-m3-lg bg-primary-container text-on-primary-container text-right">
            <div className="text-xs font-bold uppercase tracking-wider">Tritype</div>
            <div className="text-2xl font-black">{res.tritype}</div>
            <div className="text-xs font-semibold">{res.tritypeArchetype[language]}</div>
          </div>
        </div>

        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
          {res.description[language]}
        </p>

        {/* 3 Intelligence Centers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-m3-md bg-surface-container-high border border-outline-variant/60">
            <div className="text-xs font-bold text-outline uppercase">Gut Center (Tubuh)</div>
            <div className="text-lg font-bold text-on-surface">Tipe {res.gutType}</div>
            <p className="text-[11px] text-on-surface-variant">Kemarahan & Batas Diri (8, 9, 1)</p>
          </div>
          <div className="p-3 rounded-m3-md bg-surface-container-high border border-outline-variant/60">
            <div className="text-xs font-bold text-outline uppercase">Heart Center (Hati)</div>
            <div className="text-lg font-bold text-on-surface">Tipe {res.heartType}</div>
            <p className="text-[11px] text-on-surface-variant">Citra Diri & Rasa Malu (2, 3, 4)</p>
          </div>
          <div className="p-3 rounded-m3-md bg-surface-container-high border border-outline-variant/60">
            <div className="text-xs font-bold text-outline uppercase">Head Center (Kepala)</div>
            <div className="text-lg font-bold text-on-surface">Tipe {res.headType}</div>
            <p className="text-[11px] text-on-surface-variant">Keamanan & Ketakutan (5, 6, 7)</p>
          </div>
        </div>

        {/* 9 Types Score breakdown */}
        <div className="space-y-3 pt-4 border-t border-outline-variant/60">
          <h3 className="text-xs font-bold uppercase tracking-wider text-outline">
            {language === 'id' ? 'Skor 9 Tipe Enneagram' : '9 Types Score Distribution'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((t) => {
              const score = res.scores[t] || 0;
              const isCore = t === res.coreType;
              const isWing = t === res.wing;
              return (
                <div
                  key={t}
                  className={`p-2.5 rounded-m3-sm border ${
                    isCore
                      ? 'bg-primary/10 border-primary text-primary font-bold'
                      : isWing
                      ? 'bg-secondary-container/40 border-secondary text-on-secondary-container font-semibold'
                      : 'bg-surface-container-low border-outline-variant text-on-surface-variant'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span>
                      Tipe {t} {isCore && '(Core)'} {isWing && '(Wing)'}
                    </span>
                    <span>{score} pts</span>
                  </div>
                  <M3ProgressBar progress={score * 10} height="h-1.5" />
                </div>
              );
            })}
          </div>
        </div>
      </M3Card>
    </div>
  );
};

// 3. Instinctual Variant Detail View
const InstinctResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.instinct;
  if (!res) return null;

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Instinctual Variant Stacking
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mt-1">
              {res.stacking}
            </h1>
            <p className="text-lg font-bold text-primary mt-1">{res.title[language]}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-primary text-on-primary">
              Dominan: {res.dominant.toUpperCase()}
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-container">
              Sekunder: {res.secondary.toUpperCase()}
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-error-container text-on-error-container">
              Blindspot: {res.blindspot.toUpperCase()}
            </span>
          </div>
        </div>

        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
          {res.description[language]}
        </p>

        {/* 3 Instinct Bars */}
        <div className="space-y-3 pt-4 border-t border-outline-variant/60">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span>Self-Preservation (sp) — Kenyamanan, Sumber Daya, Kesehatan</span>
              <span>{res.scores.sp} pts</span>
            </div>
            <M3ProgressBar progress={res.scores.sp * 5} />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span>Social (so) — Peran Komunitas, Jaringan, Hierarki Kelompok</span>
              <span>{res.scores.so} pts</span>
            </div>
            <M3ProgressBar progress={res.scores.so * 5} />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span>Sexual / 1-on-1 (sx) — Daya Tarik Magnetik, Gairah, Intensitas</span>
              <span>{res.scores.sx} pts</span>
            </div>
            <M3ProgressBar progress={res.scores.sx * 5} />
          </div>
        </div>
      </M3Card>
    </div>
  );
};

// 4. Jungian Detail View
const JungianResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.jungian;
  if (!res) return null;

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="border-b border-outline-variant pb-6 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Classic Jungian Cognitive Hierarchy
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-on-surface tracking-tight mt-1">
            {res.title[language]}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant mt-2">
            {res.description[language]}
          </p>
        </div>

        {/* Hierarchy Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded-m3-md bg-primary-container text-on-primary-container">
            <div className="text-[10px] font-bold uppercase tracking-wider">Fungsi Dominan</div>
            <div className="text-2xl font-black">{res.dominantFunction}</div>
            <div className="text-[11px]">Kekuatan Utama Jiwa</div>
          </div>
          <div className="p-3 rounded-m3-md bg-secondary-container text-on-secondary-container">
            <div className="text-[10px] font-bold uppercase tracking-wider">Fungsi Auxiliary</div>
            <div className="text-2xl font-black">{res.auxiliaryFunction}</div>
            <div className="text-[11px]">Penyeimbang Sadar</div>
          </div>
          <div className="p-3 rounded-m3-md bg-surface-container-high text-on-surface">
            <div className="text-[10px] font-bold uppercase tracking-wider">Fungsi Tersier</div>
            <div className="text-2xl font-black">{res.tertiaryFunction}</div>
            <div className="text-[11px]">Eksplorasi Santai</div>
          </div>
          <div className="p-3 rounded-m3-md bg-error-container text-on-error-container">
            <div className="text-[10px] font-bold uppercase tracking-wider">Fungsi Inferior</div>
            <div className="text-2xl font-black">{res.inferiorFunction}</div>
            <div className="text-[11px]">Pintu Alam Bawah Sadar</div>
          </div>
        </div>

        {/* 8 Functions Spectrum */}
        <div className="space-y-3 pt-4 border-t border-outline-variant/60">
          <h3 className="text-xs font-bold uppercase tracking-wider text-outline mb-2">
            {language === 'id' ? 'Distribusi 8 Fungsi Kognitif' : '8 Cognitive Functions Distribution'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.keys(res.scores).map((funcKey) => {
              const score = res.scores[funcKey];
              const info = JUNGIAN_FUNCTIONS_INFO[funcKey];
              return (
                <div key={funcKey} className="p-3 rounded-m3-md bg-surface-container-low border border-outline-variant/60">
                  <div className="flex justify-between items-center text-xs font-bold text-on-surface mb-1">
                    <span>{info?.name[language]}</span>
                    <span>{score}</span>
                  </div>
                  <M3ProgressBar progress={score * 2} height="h-2" />
                </div>
              );
            })}
          </div>
        </div>
      </M3Card>
    </div>
  );
};

// 5. Socionics Detail View
const SocionicsResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.socionics;
  if (!res) return null;

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Socionics Model A
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mt-1">
              {res.code} ({res.mbtiEquivalent})
            </h1>
            <p className="text-lg font-bold text-primary mt-1">{res.name[language]}</p>
          </div>

          <div className="p-3 rounded-m3-lg bg-primary-container text-on-primary-container text-right">
            <div className="text-xs font-bold uppercase tracking-wider">Quadra</div>
            <div className="text-2xl font-black">{res.quadra}</div>
            <div className="text-xs font-semibold">{res.club[language]}</div>
          </div>
        </div>

        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
          {res.description[language]}
        </p>

        <div className="p-4 rounded-m3-lg bg-surface-container-high border border-outline-variant/60">
          <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
            {language === 'id' ? 'Nilai Budaya Quadra' : 'Quadra Values & Ethos'}
          </h4>
          <p className="text-xs md:text-sm text-on-surface-variant">
            {res.quadraDescription[language]}
          </p>
        </div>
      </M3Card>
    </div>
  );
};

// 6. AP Detail View
const APResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.attitudinal_psyche;
  if (!res) return null;

  const positions = [
    { pos: 1, aspect: res.aspects.first },
    { pos: 2, aspect: res.aspects.second },
    { pos: 3, aspect: res.aspects.third },
    { pos: 4, aspect: res.aspects.fourth },
  ];

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="border-b border-outline-variant pb-6 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Attitudinal Psyche
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mt-1">
            {res.type}
          </h1>
          <p className="text-lg font-bold text-primary mt-1">{res.archetype[language]}</p>
          <p className="text-xs md:text-sm text-on-surface-variant mt-2">{res.description[language]}</p>
        </div>

        {/* 4 Positions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {positions.map(({ pos, aspect }) => {
            const att = AP_ATTITUDES_INFO[pos];
            const asp = AP_ASPECT_INFO[aspect[0]];
            return (
              <div
                key={pos}
                className="p-4 rounded-m3-lg bg-surface-container-low border border-outline-variant/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-primary">
                    {att?.title[language]}
                  </span>
                  <span className="text-lg font-black text-on-surface">
                    {pos}{aspect[0]}
                  </span>
                </div>
                <div className="font-bold text-sm text-on-surface mb-1">
                  {asp?.title[language]}
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {att?.dynamic[language]}
                </p>
              </div>
            );
          })}
        </div>
      </M3Card>
    </div>
  );
};

// 7. Big 5 Detail View
const Big5ResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.big5;
  if (!res) return null;

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Big Five / SLOAN Model
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mt-1">
              {res.sloanCode}
            </h1>
            <p className="text-lg font-bold text-primary mt-1">{res.title[language]}</p>
          </div>
        </div>

        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
          {res.description[language]}
        </p>

        {/* 5 Factors */}
        <div className="space-y-4 pt-4 border-t border-outline-variant/60">
          {Object.keys(BIG5_DIMENSIONS).map((dimKey) => {
            const dim = BIG5_DIMENSIONS[dimKey];
            const score = res.scores[dimKey as keyof typeof res.scores];
            return (
              <div key={dimKey} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className={score >= 50 ? 'text-primary font-bold' : 'text-on-surface'}>
                    {dim.highPole.label[language]}
                  </span>
                  <span className="text-xs text-outline">{score}%</span>
                  <span className={score < 50 ? 'text-primary font-bold' : 'text-on-surface'}>
                    {dim.lowPole.label[language]}
                  </span>
                </div>
                <M3ProgressBar progress={score} />
              </div>
            );
          })}
        </div>
      </M3Card>
    </div>
  );
};

// 8. Alignment Detail View
const AlignmentResultDetail: React.FC = () => {
  const { allResults, language } = useApp();
  const res = allResults.alignment;
  if (!res) return null;

  const gridRows = ['Lawful', 'Neutral', 'Chaotic'];
  const gridCols = ['Good', 'Neutral', 'Evil'];

  return (
    <div className="space-y-6">
      <M3Card variant="elevated" className="p-6 md:p-8 bg-surface-container">
        <div className="border-b border-outline-variant pb-6 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Moral Alignment (D&D 3x3 Grid)
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mt-1">
            {res.alignment}
          </h1>
          <p className="text-lg font-bold text-primary mt-1">{res.title[language]}</p>
          <p className="text-sm md:text-base text-on-surface-variant mt-2">{res.description[language]}</p>
        </div>

        {/* 3x3 Grid Matrix */}
        <div className="pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-outline mb-3 text-center">
            {language === 'id' ? 'Matriks 3x3 Posisi Moral' : '3x3 Alignment Matrix'}
          </h3>

          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
            {gridRows.map((r) =>
              gridCols.map((c) => {
                let cellName = `${r} ${c}`;
                if (r === 'Neutral' && c === 'Neutral') cellName = 'True Neutral';
                const isUser = cellName === res.alignment;

                return (
                  <div
                    key={cellName}
                    className={`h-20 p-2 rounded-m3-md border text-center flex flex-col items-center justify-center transition-all ${
                      isUser
                        ? 'bg-primary text-on-primary ring-4 ring-primary-container shadow-md scale-105 font-black'
                        : 'bg-surface-container-high border-outline-variant/50 text-on-surface-variant text-xs'
                    }`}
                  >
                    <span className="text-[11px] leading-tight font-bold">{cellName}</span>
                    {isUser && (
                      <span className="text-[9px] bg-white text-primary px-1.5 py-0.2 rounded-full mt-1 font-bold">
                        YOU
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </M3Card>
    </div>
  );
};
