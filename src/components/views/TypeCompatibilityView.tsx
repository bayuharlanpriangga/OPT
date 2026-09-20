import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { M3Card } from '../m3/M3Card';
import { M3Button } from '../m3/M3Button';
import { MBTI_PROFILES } from '../../data/descriptions/mbtiData';

interface CompatibilityDetail {
  score: number;
  relationType: { id: string; en: string };
  badgeColor: string;
  summary: { id: string; en: string };
  strengths: { id: string; en: string }[];
  challenges: { id: string; en: string }[];
  communicationAdvice: { id: string; en: string };
}

const MBTI_TYPES = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP',
];

// Determine compatibility between two MBTI types
function getMBTICompatibility(type1: string, type2: string): CompatibilityDetail {
  if (!type1 || !type2) {
    return {
      score: 50,
      relationType: { id: 'Netral', en: 'Neutral' },
      badgeColor: 'bg-outline-variant text-on-surface-variant',
      summary: { id: 'Pilih dua tipe untuk melihat analisis.', en: 'Select two types to see analysis.' },
      strengths: [],
      challenges: [],
      communicationAdvice: { id: '', en: '' },
    };
  }

  if (type1 === type2) {
    return {
      score: 85,
      relationType: { id: 'Cermin Diri (Identik)', en: 'Identical Reflection' },
      badgeColor: 'bg-primary-container text-on-primary-container',
      summary: {
        id: `Dua individu ${type1} berbagi cara pandang dan pola pikir yang hampir identik. Pemahaman instan dan rasa saling menghargai logika masing-masing sangat kuat.`,
        en: `Two ${type1} individuals share nearly identical mental lenses. Mutual cognitive understanding is instantaneous and natural.`,
      },
      strengths: [
        { id: 'Pemahaman instan tanpa perlu banyak penjelasan', en: 'Effortless mutual understanding' },
        { id: 'Tujuan dan standar kualitas yang selaras', en: 'Aligned goals and shared benchmarks' },
      ],
      challenges: [
        { id: 'Memiliki blindspot kognitif yang sama persis', en: 'Shared cognitive blindspots with no compensation' },
        { id: 'Dapat bersaing jika terjadi benturan ego atau opini', en: 'Risk of stubborn deadlock when opinions clash' },
      ],
      communicationAdvice: {
        id: 'Buka ruang bagi sudut pandang luar agar tidak terjebak dalam bias konfirmasi bersama.',
        en: 'Invite external perspectives to avoid collective confirmation bias.',
      },
    };
  }

  // Golden Pair matches: same middle functions flipped, or complementary cognitive stack
  const goldenPairs: Record<string, string> = {
    INTJ: 'ENFP', ENFP: 'INTJ',
    INFJ: 'ENTP', ENTP: 'INFJ',
    INTP: 'ENTJ', ENTJ: 'INTP',
    INFP: 'ENFJ', ENFJ: 'INFP',
    ISTJ: 'ESFP', ESFP: 'ISTJ',
    ISFJ: 'ESTP', ESTP: 'ISFJ',
    ISTP: 'ESTJ', ESTJ: 'ISTP',
    ISFP: 'ESFJ', ESFJ: 'ISFP',
  };

  if (goldenPairs[type1] === type2) {
    return {
      score: 96,
      relationType: { id: 'Pasangan Emas (Golden Pair)', en: 'Golden Pair Dynamic' },
      badgeColor: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold',
      summary: {
        id: `Kombinasi klasik legendaris antara ${type1} dan ${type2}. Fungsi dominan saling melengkapi secara intuitif; yang satu membawa visi mendalam, yang lain menyalakan antusiasme dan variasi ide.`,
        en: `A legendary classic pairing of ${type1} and ${type2}. Cognitive stacks organically complement each other, blending deep vision with expansive exploration.`,
      },
      strengths: [
        { id: 'Daya tarik kimiawi psikologis yang tinggi', en: 'High psychological chemistry and mutual intrigue' },
        { id: 'Saling menyeimbangkan kelemahan tanpa merendahkan', en: 'Natural balancing of weaknesses without judgment' },
        { id: 'Pertumbuhan pribadi yang terakselerasi', en: 'Mutual acceleration of self-growth and maturity' },
      ],
      challenges: [
        { id: 'Perbedaan kebutuhan energi sosial (Introvert vs Ekstrovert)', en: 'Social energy calibration differences' },
        { id: 'Kecepatan pengambilan keputusan yang berbeda tempo', en: 'Divergent decision-making cadences' },
      ],
      communicationAdvice: {
        id: 'Hargai ritme waktu sendiri pasangan dan komunikasikan rencana tanpa membuat asumsi sepihak.',
        en: 'Respect individual solitude rhythms and communicate priorities transparently.',
      },
    };
  }

  // Check N vs S mismatch
  const t1N = type1[1];
  const t2N = type2[1];
  const t1T = type1[2];
  const t2T = type2[2];

  if (t1N !== t2N && t1T !== t2T) {
    return {
      score: 62,
      relationType: { id: 'Tantangan Polarisasi (Polar Opposites)', en: 'Polar Dynamic' },
      badgeColor: 'bg-amber-500/20 text-amber-800 dark:text-amber-300',
      summary: {
        id: `${type1} dan ${type2} beroperasi pada frekuensi kognitif yang sangat berlainan. Membutuhkan kesabaran ekstra namun berpotensi memperluas spektrum kedewasaan kedua belah pihak.`,
        en: `${type1} and ${type2} operate on distinct cognitive bandwidths. Demands deliberate patience but offers tremendous maturity expansion.`,
      },
      strengths: [
        { id: 'Melihat seluruh spektrum dunia yang luput dari pandangan sendiri', en: 'Covers whole panoramic angles missed by the other' },
        { id: 'Sangat tangguh bila dipadukan dalam tim kerja dengan pembagian tugas jelas', en: 'Powerful pragmatic synergy when roles are cleanly partitioned' },
      ],
      challenges: [
        { id: 'Kerap terjadi miskomunikasi asumsi dan motivasi dasar', en: 'Frequent misinterpretation of underlying intent' },
        { id: 'Gaya diskusi yang terasa asing atau dingin satu sama lain', en: 'Communication styles feel foreign or aloof' },
      ],
      communicationAdvice: {
        id: 'Gunakan komunikasi eksplisit tanpa implikasi tersirat. Jelaskan "mengapa" dan "bagaimana" secara konkret.',
        en: 'Use explicit, grounded language without unspoken assumptions.',
      },
    };
  }

  // Shared N/S axis or T/F axis
  return {
    score: 82,
    relationType: { id: 'Kolaborasi Sinergis (Harmonic Cohort)', en: 'Harmonic Cohort' },
    badgeColor: 'bg-blue-500/20 text-blue-800 dark:text-blue-300',
    summary: {
      id: `${type1} dan ${type2} memiliki jembatan pemahaman bersama yang solid. Mereka dapat bekerja sama, berdiskusi secara produktif, dan saling menginspirasi dengan gesekan minimal.`,
      en: `${type1} and ${type2} share a solid conceptual foundation. They collaborate smoothly and inspire each other with low friction.`,
    },
    strengths: [
      { id: 'Kelancaran alur percakapan dan pertukaran ide', en: 'Fluid conversation flow and fruitful ideation' },
      { id: 'Rasa hormat terhadap kemampuan analitis dan emosional satu sama lain', en: 'Mutual respect for cognitive capabilities' },
    ],
    challenges: [
      { id: 'Bisa timbul salah paham bila ada stres tinggi', en: 'Occasional friction during high-stress episodes' },
    ],
    communicationAdvice: {
      id: 'Fokus pada titik temu nilai dan tujuan bersama daripada memperdebatkan detail metode kerja.',
      en: 'Focus on shared values rather than debating procedural minutiae.',
    },
  };
}

export const TypeCompatibilityView: React.FC = () => {
  const { allResults, language } = useApp();

  const userMBTI = allResults.mbti?.type || 'INTJ';
  const [typeA, setTypeA] = useState<string>(userMBTI);
  const [typeB, setTypeB] = useState<string>('ENFP');

  const compatibility = getMBTICompatibility(typeA, typeB);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-2">
          <span className="material-symbols-outlined text-[16px]">diversity_3</span>
          <span>{language === 'id' ? 'Dinamika Interpersonal' : 'Interpersonal Dynamics'}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
          {language === 'id' ? 'Analisis Kecocokan & Relasi Tipe' : 'Type Compatibility & Relation Analyzer'}
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant mt-1">
          {language === 'id'
            ? 'Pilih dua tipe kepribadian untuk mengevaluasi *chemistry*, dinamika kognitif, kelebihan sinergi, dan panduan komunikasi.'
            : 'Select two personality archetypes to explore relational chemistry, cognitive dynamics, and communication guidelines.'}
        </p>
      </div>

      {/* Selectors Card */}
      <M3Card variant="elevated" className="p-6 bg-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Person A */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-outline tracking-wider flex items-center justify-between">
              <span>{language === 'id' ? 'Tipe Pertama (Anda)' : 'First Persona (You)'}</span>
              {allResults.mbti?.type === typeA && (
                <span className="text-primary text-[10px] font-bold uppercase bg-primary-container px-2 py-0.5 rounded">
                  {language === 'id' ? 'Hasil Anda' : 'Your Result'}
                </span>
              )}
            </label>
            <select
              value={typeA}
              onChange={(e) => setTypeA(e.target.value)}
              className="w-full bg-surface-container-high border border-outline-variant rounded-m3-lg px-4 py-3 font-black text-lg text-primary focus:outline-hidden focus:ring-2 focus:ring-primary cursor-pointer"
            >
              {MBTI_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t} — {MBTI_PROFILES[t]?.title[language] || ''}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-on-surface-variant italic">
              {MBTI_PROFILES[typeA]?.nickname[language]}
            </p>
          </div>

          {/* Person B */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-outline tracking-wider">
              {language === 'id' ? 'Tipe Kedua (Rekan / Pasangan)' : 'Second Persona (Partner / Peer)'}
            </label>
            <select
              value={typeB}
              onChange={(e) => setTypeB(e.target.value)}
              className="w-full bg-surface-container-high border border-outline-variant rounded-m3-lg px-4 py-3 font-black text-lg text-secondary focus:outline-hidden focus:ring-2 focus:ring-secondary cursor-pointer"
            >
              {MBTI_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t} — {MBTI_PROFILES[t]?.title[language] || ''}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-on-surface-variant italic">
              {MBTI_PROFILES[typeB]?.nickname[language]}
            </p>
          </div>
        </div>

        {/* Quick swap button */}
        <div className="flex justify-center mt-4">
          <M3Button
            variant="tonal"
            size="sm"
            icon="swap_horiz"
            onClick={() => {
              const temp = typeA;
              setTypeA(typeB);
              setTypeB(temp);
            }}
          >
            {language === 'id' ? 'Tukar Posisi' : 'Swap Positions'}
          </M3Button>
        </div>
      </M3Card>

      {/* Compatibility Result Overview */}
      <div className="rounded-m3-xl bg-linear-to-br from-surface-container-highest via-surface-container to-surface-container-low border border-outline-variant p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/80 pb-6">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase font-bold tracking-wider mb-2 ${compatibility.badgeColor}`}>
              {compatibility.relationType[language]}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-on-surface">
              {typeA} <span className="text-primary font-normal">&times;</span> {typeB}
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <div className="text-3xl md:text-4xl font-black text-primary">
              {compatibility.score}%
            </div>
            <div className="text-xs text-on-surface-variant font-medium">
              {language === 'id' ? 'Indeks Keselarasan' : 'Resonance Index'}
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
          {compatibility.summary[language]}
        </p>

        {/* Strengths and Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant/60">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase mb-2">
              <span className="material-symbols-outlined text-[18px]">thumb_up</span>
              <span>{language === 'id' ? 'Sinergi Kekuatan Bersama' : 'Shared Strengths'}</span>
            </div>
            <ul className="space-y-1.5">
              {compatibility.strengths.map((s, idx) => (
                <li key={idx} className="text-xs text-on-surface-variant flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{s[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant/60">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase mb-2">
              <span className="material-symbols-outlined text-[18px]">warning</span>
              <span>{language === 'id' ? 'Potensi Gesekan Kognitif' : 'Potential Friction'}</span>
            </div>
            <ul className="space-y-1.5">
              {compatibility.challenges.map((c, idx) => (
                <li key={idx} className="text-xs text-on-surface-variant flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{c[language]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Communication Advice */}
        {compatibility.communicationAdvice[language] && (
          <div className="p-4 rounded-m3-lg bg-primary-container/20 border border-primary/30">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-1">
              <span className="material-symbols-outlined text-[18px]">tips_and_updates</span>
              <span>{language === 'id' ? 'Panduan Komunikasi Efektif' : 'Effective Communication Guide'}</span>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              {compatibility.communicationAdvice[language]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
