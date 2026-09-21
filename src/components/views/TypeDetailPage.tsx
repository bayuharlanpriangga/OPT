import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { M3Card } from '../m3/M3Card';
import { M3Button } from '../m3/M3Button';
import { MBTI_PROFILES } from '../../data/descriptions/mbtiData';
import { MBTI_DEEP_DATA } from '../../data/descriptions/mbtiDeepData';
import { ENNEAGRAM_CORE_PROFILES, TRITYPE_ARCHETYPES } from '../../data/descriptions/enneagramData';
import { INSTINCT_PROFILES } from '../../data/descriptions/instinctData';
import { JUNGIAN_FUNCTIONS_INFO } from '../../data/descriptions/jungianData';
import { SOCIOTYPES, QUADRA_DETAILS } from '../../data/descriptions/socionicsData';
import { AP_TYPE_ARCHETYPES, AP_ASPECT_INFO, AP_ATTITUDES_INFO } from '../../data/descriptions/apData';
import { SLOAN_ARCHETYPES, BIG5_DIMENSIONS, getSloanProfile } from '../../data/descriptions/big5Data';
import { ALIGNMENT_DETAILS } from '../../data/descriptions/alignmentData';
import type { TestType } from '../../types';

interface TypeDetailPageProps {
  category: TestType;
  typeId: string;
  onBack: () => void;
}

export const TypeDetailPage: React.FC<TypeDetailPageProps> = ({
  category,
  typeId,
  onBack,
}) => {
  const { language, startTest } = useApp();
  const [copied, setCopied] = useState(false);
  const [mbtiSection, setMbtiSection] = useState<'intro' | 'strengths' | 'romance' | 'friends' | 'careers' | 'workplace' | 'cognition'>('intro');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // 1. MBTI Detail (Expanded with 16Personalities-level depth)
  if (category === 'mbti') {
    const profile = MBTI_PROFILES[typeId] || MBTI_PROFILES['INTJ'];
    const deep = MBTI_DEEP_DATA[typeId] || MBTI_DEEP_DATA['INTJ'];
    const funcRole = ['Fungsi Dominan (Core)', 'Fungsi Auxiliary (Penyeimbang)', 'Fungsi Tersier (Eksplorasi)', 'Fungsi Inferior (Luka / Bawah Sadar)'];
    const funcRoleEn = ['Dominant Function (Core)', 'Auxiliary Function (Balancer)', 'Tertiary Function (Playful Relief)', 'Inferior Function (Aspirational / Stress)'];

    const mbtiNavItems = [
      { id: 'intro', label: { id: 'Pengantar & Tokoh', en: 'Introduction' }, icon: 'menu_book' },
      { id: 'strengths', label: { id: 'Kekuatan & Kelemahan', en: 'Strengths & Weaknesses' }, icon: 'verified' },
      { id: 'romance', label: { id: 'Percintaan & Pasangan', en: 'Romantic Relationships' }, icon: 'favorite' },
      { id: 'friends', label: { id: 'Persahabatan', en: 'Friendships' }, icon: 'diversity_3' },
      { id: 'careers', label: { id: 'Jalur Karier', en: 'Career Paths' }, icon: 'work' },
      { id: 'workplace', label: { id: 'Kebiasaan Kerja', en: 'Workplace Habits' }, icon: 'badge' },
      { id: 'cognition', label: { id: 'Fungsi Kognitif', en: 'Cognitive Stack' }, icon: 'neurology' },
    ];

    return (
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
        {/* Navigation & Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
          </button>
          <div className="flex items-center gap-2">
            <M3Button variant="tonal" size="sm" icon={copied ? 'check' : 'share'} onClick={handleCopyLink}>
              {copied ? (language === 'id' ? 'Tersalin!' : 'Copied!') : (language === 'id' ? 'Bagikan' : 'Share')}
            </M3Button>
            <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('mbti')}>
              {language === 'id' ? 'Ambil Tes MBTI' : 'Take MBTI Test'}
            </M3Button>
          </div>
        </div>

        {/* Hero Header */}
        <div className="p-6 md:p-8 rounded-m3-xl bg-linear-to-br from-primary-container/80 via-surface-container to-surface-container-high border border-primary/30 space-y-3 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface text-primary border border-primary/20">
              {deep.temperamentLabel[language]}
            </span>
            <span className="text-xs font-semibold text-on-surface-variant">
              {profile.nickname[language]}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
            {profile.type} — {profile.title[language]}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-3xl">
            {deep.overviewExtended[language]}
          </p>

          {/* Famous Quote Block */}
          {deep.quote && (
            <div className="mt-4 p-4 rounded-m3-lg bg-surface/70 border-l-4 border-primary text-xs md:text-sm italic text-on-surface">
              <p className="leading-relaxed">"{deep.quote.text[language]}"</p>
              <span className="block mt-1 font-bold not-italic text-primary text-[11px]">
                — {deep.quote.author}
              </span>
            </div>
          )}
        </div>

        {/* 16Personalities-style Aspect Sub-navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-outline-variant/80 pb-2 overflow-x-auto">
          {mbtiNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setMbtiSection(item.id as any)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                mbtiSection === item.id
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
              <span>{item.label[language]}</span>
            </button>
          ))}
        </div>

        {/* Sub-tab 1: Introduction */}
        {mbtiSection === 'intro' && (
          <div className="space-y-6 animate-fade-in">
            <M3Card variant="outlined" className="p-6 bg-surface-container space-y-4">
              <h3 className="text-lg font-bold text-on-surface">
                {language === 'id' ? `Siapakah Tipe Kepribadian ${profile.type}?` : `Who is the ${profile.type} Personality?`}
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {profile.description[language]}
              </p>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {deep.overviewExtended[language]}
              </p>
            </M3Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <M3Card variant="outlined" className="p-5 bg-surface-container">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-2">
                  <span className="material-symbols-outlined text-[18px]">psychology</span>
                  <span>{language === 'id' ? 'Pola Pikir Khas' : 'Distinctive Mindset'}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {language === 'id'
                    ? `Tipe ${profile.type} memadukan preferensi kognitif yang kuat untuk menafsirkan informasi secara orisinal, menguji validitas fakta, dan menolak kepatuhan buta pada tradisi.`
                    : `${profile.type} combines structured cognitive preferences to decode reality organically, demanding intellectual rigor while resisting blind conformity.`}
                </p>
              </M3Card>

              <M3Card variant="outlined" className="p-5 bg-surface-container">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-2">
                  <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                  <span>{language === 'id' ? 'Nilai Fundamental' : 'Core Values'}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {language === 'id'
                    ? 'Integritas pemikiran, otonomi pribadi, rasa ingin tahu yang tidak pernah padam, dan pencarian kebenaran di atas kenyamanan semu.'
                    : 'Intellectual honesty, radical personal agency, relentless curiosity, and genuine truth over superficial comfort.'}
                </p>
              </M3Card>
            </div>
          </div>
        )}

        {/* Sub-tab 2: Strengths & Weaknesses */}
        {mbtiSection === 'strengths' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <M3Card variant="outlined" className="p-6 bg-surface-container">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase mb-4">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>{language === 'id' ? 'Kekuatan Inti & Superpower' : 'Core Strengths & Superpowers'}</span>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-on-surface-variant">
                {profile.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold text-base">•</span>
                    <span className="leading-relaxed">{s[language]}</span>
                  </li>
                ))}
              </ul>
            </M3Card>

            <M3Card variant="outlined" className="p-6 bg-surface-container">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase mb-4">
                <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
                <span>{language === 'id' ? 'Titik Buta & Kelemahan' : 'Blindspots & Weaknesses'}</span>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-on-surface-variant">
                {profile.growth.map((g, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-500 font-bold text-base">•</span>
                    <span className="leading-relaxed">{g[language]}</span>
                  </li>
                ))}
              </ul>
            </M3Card>
          </div>
        )}

        {/* Sub-tab 3: Romantic Relationships */}
        {mbtiSection === 'romance' && (
          <div className="space-y-6 animate-fade-in">
            <M3Card variant="outlined" className="p-6 bg-surface-container space-y-4">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span>{language === 'id' ? 'Dinamika Percintaan & Hubungan Asmara' : 'Romantic Chemistry & Dating'}</span>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {deep.romantic.summary[language]}
              </p>
            </M3Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <M3Card variant="outlined" className="p-5 bg-surface-container">
                <h4 className="font-bold text-xs uppercase text-emerald-600 dark:text-emerald-400 mb-2">
                  {language === 'id' ? 'Kelebihan dalam Hubungan' : 'Relational Strengths'}
                </h4>
                <ul className="space-y-2 text-xs text-on-surface-variant">
                  {deep.romantic.strengths.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{item[language]}</span>
                    </li>
                  ))}
                </ul>
              </M3Card>

              <M3Card variant="outlined" className="p-5 bg-surface-container">
                <h4 className="font-bold text-xs uppercase text-amber-600 dark:text-amber-400 mb-2">
                  {language === 'id' ? 'Tantangan Asmara' : 'Relational Challenges'}
                </h4>
                <ul className="space-y-2 text-xs text-on-surface-variant">
                  {deep.romantic.challenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{item[language]}</span>
                    </li>
                  ))}
                </ul>
              </M3Card>
            </div>
          </div>
        )}

        {/* Sub-tab 4: Friendships */}
        {mbtiSection === 'friends' && (
          <M3Card variant="outlined" className="p-6 bg-surface-container space-y-4 animate-fade-in">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">diversity_3</span>
              <span>{language === 'id' ? 'Persahabatan & Lingkaran Sosial' : 'Friendships & Social Dynamics'}</span>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              {deep.friendships.summary[language]}
            </p>
            <div className="p-4 rounded-m3-md bg-surface-container-high border border-outline-variant/60 text-xs">
              <span className="font-bold text-primary mr-1">{language === 'id' ? 'Gaya Pertemanan: ' : 'Friendship Style: '}</span>
              <span className="text-on-surface-variant">{deep.friendships.circleStyle[language]}</span>
            </div>
          </M3Card>
        )}

        {/* Sub-tab 5: Career Paths */}
        {mbtiSection === 'careers' && (
          <div className="space-y-6 animate-fade-in">
            <M3Card variant="outlined" className="p-6 bg-surface-container space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[20px]">work</span>
                <span>{language === 'id' ? 'Lingkungan Kerja Paling Optimal' : 'Optimal Career Environment'}</span>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {deep.careers.idealEnvironments[language]}
              </p>
            </M3Card>

            <M3Card variant="outlined" className="p-6 bg-surface-container space-y-3">
              <h4 className="text-xs font-bold uppercase text-primary tracking-wider">
                {language === 'id' ? 'Rekomendasi Profesi & Jabatan Pilihan' : 'Recommended Professional Paths'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {deep.careers.topMatches.map((career, idx) => (
                  <div key={idx} className="p-3.5 rounded-m3-md bg-surface-container-high border border-outline-variant/60 font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">arrow_right_alt</span>
                    <span>{career[language]}</span>
                  </div>
                ))}
              </div>
            </M3Card>
          </div>
        )}

        {/* Sub-tab 6: Workplace Habits */}
        {mbtiSection === 'workplace' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
            <M3Card variant="outlined" className="p-5 bg-surface-container space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">person</span>
                <span>{language === 'id' ? 'Sebagai Bawahan' : 'As Subordinates'}</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {deep.workplace.subordinate[language]}
              </p>
            </M3Card>

            <M3Card variant="outlined" className="p-5 bg-surface-container space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">groups</span>
                <span>{language === 'id' ? 'Sebagai Rekan Kerja' : 'As Colleagues'}</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {deep.workplace.colleague[language]}
              </p>
            </M3Card>

            <M3Card variant="outlined" className="p-5 bg-surface-container space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">military_tech</span>
                <span>{language === 'id' ? 'Sebagai Manajer' : 'As Managers'}</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {deep.workplace.manager[language]}
              </p>
            </M3Card>
          </div>
        )}

        {/* Sub-tab 7: Cognitive Stack */}
        {mbtiSection === 'cognition' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">neurology</span>
              <span>{language === 'id' ? 'Anatomi Susunan Fungsi Kognitif' : 'Cognitive Function Architecture'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {profile.cognitiveStack.map((funcKey, i) => {
                const funcInfo = JUNGIAN_FUNCTIONS_INFO[funcKey];
                return (
                  <M3Card key={funcKey} variant="outlined" className="p-4 bg-surface-container">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-outline uppercase">{language === 'id' ? funcRole[i] : funcRoleEn[i]}</span>
                      <span className="text-xs font-black text-primary px-1.5 py-0.5 bg-primary-container rounded">{funcKey}</span>
                    </div>
                    <h4 className="font-bold text-sm text-on-surface mt-1">{funcInfo?.name[language] || funcKey}</h4>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      {funcInfo?.description[language]}
                    </p>
                  </M3Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. Enneagram Detail (Core or Tritype) - FIXED SO ALL 27 TRITYPES CAN BE VIEWED
  if (category === 'enneagram') {
    const isCore = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(typeId.trim());
    const coreNum = isCore ? parseInt(typeId, 10) : 0;
    const coreDetail = isCore ? ENNEAGRAM_CORE_PROFILES[coreNum] : null;

    const cleanDigits = typeId.replace(/[^0-9]/g, '');
    const sortedKey = cleanDigits.split('').sort().join('');
    const tritypeDetail = !isCore ? (TRITYPE_ARCHETYPES[sortedKey] || TRITYPE_ARCHETYPES[typeId]) : null;

    if (coreDetail) {
      return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
            </button>
            <div className="flex items-center gap-2">
              <M3Button variant="tonal" size="sm" icon={copied ? 'check' : 'share'} onClick={handleCopyLink}>
                {copied ? (language === 'id' ? 'Tersalin!' : 'Copied!') : (language === 'id' ? 'Bagikan' : 'Share')}
              </M3Button>
              <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('enneagram')}>
                {language === 'id' ? 'Ambil Tes Enneagram' : 'Take Enneagram Test'}
              </M3Button>
            </div>
          </div>

          {/* Hero Card */}
          <div className="p-6 md:p-8 rounded-m3-xl bg-linear-to-br from-secondary-container/70 via-surface-container to-surface-container-high border border-secondary/30 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface text-secondary border border-secondary/20">
                Enneagram Core
              </span>
              <span className="text-xs font-semibold text-outline">
                {coreDetail.centerLabel[language]}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
              {coreDetail.title[language]}
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              {coreDetail.description[language]}
            </p>
          </div>

          {/* Existential Drivers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <M3Card variant="outlined" className="p-5 bg-surface-container border-error/30">
              <div className="flex items-center gap-2 text-error font-bold text-xs uppercase mb-2">
                <span className="material-symbols-outlined text-[18px]">crisis_alert</span>
                <span>{language === 'id' ? 'Ketakutan Bawah Sadar (Core Fear)' : 'Core Subconscious Fear'}</span>
              </div>
              <p className="text-sm font-semibold text-on-surface">
                {coreDetail.coreFear[language]}
              </p>
            </M3Card>

            <M3Card variant="outlined" className="p-5 bg-surface-container border-primary/30">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-2">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span>{language === 'id' ? 'Hasrat & Motivasi Pokok (Core Desire)' : 'Core Primal Desire'}</span>
              </div>
              <p className="text-sm font-semibold text-on-surface">
                {coreDetail.coreDesire[language]}
              </p>
            </M3Card>
          </div>

          {/* Center of Intelligence & Integration */}
          <M3Card variant="outlined" className="p-6 bg-surface-container space-y-4">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
              {language === 'id' ? 'Dinamika Pertumbuhan & Garis Integrasi' : 'Developmental Lines & Growth Dynamics'}
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {language === 'id'
                ? `Tipe ${coreDetail.type} berkembang dengan bergerak menuju kutub sehat integrasinya ketika merasa aman, dan sebaliknya mengadopsi pola reaktif tipe disintegrasinya saat berada di bawah tekanan stres berat.`
                : `Type ${coreDetail.type} evolves by embracing their healthy line of integration during emotional safety, while manifesting stress patterns along their line of disintegration under acute pressure.`}
            </p>
          </M3Card>
        </div>
      );
    } else if (tritypeDetail) {
      // Deconstruct the 3 centers
      const digits = cleanDigits.split('');
      const gutDigit = digits.find((d) => ['8', '9', '1'].includes(d)) || '1';
      const heartDigit = digits.find((d) => ['2', '3', '4'].includes(d)) || '3';
      const headDigit = digits.find((d) => ['5', '6', '7'].includes(d)) || '5';

      return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
            </button>
            <div className="flex items-center gap-2">
              <M3Button variant="tonal" size="sm" icon={copied ? 'check' : 'share'} onClick={handleCopyLink}>
                {copied ? (language === 'id' ? 'Tersalin!' : 'Copied!') : (language === 'id' ? 'Bagikan' : 'Share')}
              </M3Button>
              <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('enneagram')}>
                {language === 'id' ? 'Ambil Tes Enneagram' : 'Take Enneagram Test'}
              </M3Button>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-m3-xl bg-linear-to-br from-secondary-container/80 via-surface-container to-surface-container-high border border-secondary/30 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface text-secondary border border-secondary/20">
                Enneagram Tritype Archetype
              </span>
              <span className="text-xs font-bold text-primary bg-primary-container px-2 py-0.5 rounded">
                Formula: {cleanDigits}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-on-surface">
              {tritypeDetail.title[language]}
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              {tritypeDetail.description[language]}
            </p>
          </div>

          {/* 3 Centers Triad Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
              {language === 'id' ? '3 Pusat Kecerdasan dalam Tritype Ini' : '3 Centers of Intelligence in this Tritype'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <M3Card variant="outlined" className="p-4 bg-surface-container space-y-1">
                <div className="text-[10px] font-bold text-outline uppercase">Gut Center (Tubuh)</div>
                <div className="text-lg font-black text-primary">Tipe {gutDigit}</div>
                <p className="text-xs text-on-surface-variant">
                  {language === 'id'
                    ? `Mengelola batas diri, kemarahan naluriah, dan dorongan otonomi fisik.`
                    : `Regulates instinctive boundaries, visceral anger, and personal autonomy.`}
                </p>
              </M3Card>

              <M3Card variant="outlined" className="p-4 bg-surface-container space-y-1">
                <div className="text-[10px] font-bold text-outline uppercase">Heart Center (Hati)</div>
                <div className="text-lg font-black text-primary">Tipe {heartDigit}</div>
                <p className="text-xs text-on-surface-variant">
                  {language === 'id'
                    ? `Mengelola citra diri, rasa malu sosial, dan kebutuhan koneksi emosional.`
                    : `Regulates identity image, social shame, and emotional connection.`}
                </p>
              </M3Card>

              <M3Card variant="outlined" className="p-4 bg-surface-container space-y-1">
                <div className="text-[10px] font-bold text-outline uppercase">Head Center (Kepala)</div>
                <div className="text-lg font-black text-primary">Tipe {headDigit}</div>
                <p className="text-xs text-on-surface-variant">
                  {language === 'id'
                    ? `Mengelola ketakutan eksistensial, pencarian rasa aman, dan nalar antisipasi.`
                    : `Regulates existential anxiety, safety-seeking, and anticipatory strategy.`}
                </p>
              </M3Card>
            </div>
          </div>
        </div>
      );
    }
  }

  // 3. Attitudinal Psyche Detail
  if (category === 'attitudinal_psyche') {
    const arch = AP_TYPE_ARCHETYPES[typeId] || AP_TYPE_ARCHETYPES['VLEF'];
    const aspects = typeId.split(''); // e.g. ['V', 'L', 'E', 'F']

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
          </button>
          <div className="flex items-center gap-2">
            <M3Button variant="tonal" size="sm" icon={copied ? 'check' : 'share'} onClick={handleCopyLink}>
              {copied ? (language === 'id' ? 'Tersalin!' : 'Copied!') : (language === 'id' ? 'Bagikan' : 'Share')}
            </M3Button>
            <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('attitudinal_psyche')}>
              {language === 'id' ? 'Ambil Tes AP' : 'Take AP Test'}
            </M3Button>
          </div>
        </div>

        {/* Hero */}
        <div className="p-6 md:p-8 rounded-m3-xl bg-linear-to-br from-primary-container/80 via-surface-container to-surface-container-high border border-primary/30 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface text-primary border border-primary/20">
              Attitudinal Psyche
            </span>
            <div className="flex gap-1">
              {aspects.map((asp, idx) => (
                <span key={idx} className="text-xs font-black bg-primary text-on-primary px-2 py-0.5 rounded">
                  {idx + 1}{asp}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
            {typeId} — {arch.title[language]}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            {arch.description[language]}
          </p>
        </div>

        {/* 4 Positions In-Depth Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">format_list_numbered</span>
            <span>{language === 'id' ? 'Hierarki 4 Sikap Mental (Position Breakdown)' : '4 Mental Attitude Hierarchies'}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aspects.map((aspLetter, i) => {
              const posNum = i + 1;
              const attInfo = AP_ATTITUDES_INFO[posNum];
              const aspInfo = AP_ASPECT_INFO[aspLetter];

              return (
                <M3Card key={posNum} variant="outlined" className="p-5 bg-surface-container space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary px-2 py-0.5 bg-primary-container rounded">
                      Posisi {posNum}: {aspLetter} ({aspInfo?.title[language]?.split(' ')[0] || aspLetter})
                    </span>
                    <span className="text-[11px] font-bold text-outline uppercase">{attInfo?.title[language]}</span>
                  </div>
                  <h4 className="font-bold text-sm text-on-surface">{aspInfo?.title[language]}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {aspInfo?.domain[language]}
                  </p>
                  <div className="pt-2 border-t border-outline-variant/60 text-[11px] text-outline italic">
                    {attInfo?.dynamic[language]}
                  </div>
                </M3Card>
              );
            })}
          </div>
        </div>

        {/* Growth on 3rd Position */}
        <M3Card variant="outlined" className="p-6 bg-surface-container space-y-3">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase">
            <span className="material-symbols-outlined text-[20px]">psychology</span>
            <span>{language === 'id' ? `Titik Transformasi: Mengembangkan Aspek 3${aspects[2]}` : `Growth Edge: Maturing 3${aspects[2]}`}</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {language === 'id'
              ? `Dalam sistem Attitudinal Psyche, Posisi ke-3 (3${aspects[2]}) adalah titik kerentanan sekaligus pendorong pertumbuhan kepribadian terbesar. Belajarlah untuk menerima masukan pada aspek ini tanpa merasa harga diri Anda diserang.`
              : `In Attitudinal Psyche, the 3rd position (3${aspects[2]}) represents your core insecurity and your greatest growth lever. Nurture process-oriented confidence here without taking critique as an attack on your identity.`}
          </p>
        </M3Card>
      </div>
    );
  }

  // 4. Big 5 / SLOAN Detail
  if (category === 'big5') {
    const sloanProfile = getSloanProfile(typeId);
    const letters = typeId.split(''); // e.g. ['R', 'L', 'O', 'A', 'I']

    const letterLabels: Record<string, { name: string; pole: string }> = {
      S: { name: 'Social', pole: 'Tinggi Extraversion' },
      R: { name: 'Reserved', pole: 'Rendah Extraversion' },
      L: { name: 'Limbic', pole: 'Tinggi Neuroticism / Emosional' },
      C: { name: 'Calm', pole: 'Tinggi Stabilitas Emosi' },
      O: { name: 'Organized', pole: 'Tinggi Keteraturan (Conscientiousness)' },
      U: { name: 'Unstructured', pole: 'Spontan & Adaptif' },
      A: { name: 'Accommodating', pole: 'Tinggi Keramahan (Agreeableness)' },
      E: { name: 'Egocentric', pole: 'Mandiri & Kompetitif' },
      I: { name: 'Inquisitive', pole: 'Tinggi Keterbukaan Pikiran (Openness)' },
      N: { name: 'Non-curious', pole: 'Praktis & Konvensional' },
    };

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
          </button>
          <div className="flex items-center gap-2">
            <M3Button variant="tonal" size="sm" icon={copied ? 'check' : 'share'} onClick={handleCopyLink}>
              {copied ? (language === 'id' ? 'Tersalin!' : 'Copied!') : (language === 'id' ? 'Bagikan' : 'Share')}
            </M3Button>
            <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('big5')}>
              {language === 'id' ? 'Ambil Tes Big 5' : 'Take Big Five Test'}
            </M3Button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="p-6 md:p-8 rounded-m3-xl bg-linear-to-br from-primary-container/80 via-surface-container to-surface-container-high border border-primary/30 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface text-primary border border-primary/20">
              Big Five / SLOAN Composite Type
            </span>
            <div className="flex gap-1">
              {letters.map((char, i) => (
                <span key={i} className="text-xs font-black bg-primary text-on-primary px-2 py-0.5 rounded">
                  {char}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
            {typeId} — {sloanProfile.title[language]}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            {sloanProfile.description[language]}
          </p>
        </div>

        {/* 5 Letters Deconstruction */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span>{language === 'id' ? 'Dekomposisi 5 Karakter SLOAN' : '5-Factor Trait Deconstruction'}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {letters.map((char, i) => {
              const meta = letterLabels[char] || { name: char, pole: '' };
              return (
                <div key={i} className="p-3 rounded-m3-md bg-surface-container border border-outline-variant/60 text-center">
                  <div className="text-2xl font-black text-primary mb-1">{char}</div>
                  <div className="text-xs font-bold text-on-surface">{meta.name}</div>
                  <div className="text-[10px] text-outline mt-1">{meta.pole}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Traits & Career */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <M3Card variant="outlined" className="p-5 bg-surface-container">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase mb-3">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>{language === 'id' ? 'Ciri Perilaku Dominan' : 'Distinctive Behavioral Traits'}</span>
            </div>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              {sloanProfile.traits.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span className="leading-relaxed">{t[language]}</span>
                </li>
              ))}
            </ul>
          </M3Card>

          <M3Card variant="outlined" className="p-5 bg-surface-container">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-3">
              <span className="material-symbols-outlined text-[18px]">work</span>
              <span>{language === 'id' ? 'Kecocokan Karier & Peran' : 'Career Alignment & Fields'}</span>
            </div>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              {sloanProfile.careerMatches.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="leading-relaxed">{c[language]}</span>
                </li>
              ))}
            </ul>
          </M3Card>
        </div>

        {/* Growth Edge */}
        <M3Card variant="outlined" className="p-6 bg-surface-container space-y-2">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase">
            <span className="material-symbols-outlined text-[18px]">upgrade</span>
            <span>{language === 'id' ? 'Nasihat Pengembangan Diri' : 'Actionable Growth Advice'}</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {sloanProfile.growthEdge[language]}
          </p>
        </M3Card>
      </div>
    );
  }

  // 5. Socionics Detail
  if (category === 'socionics') {
    const s = SOCIOTYPES[typeId] || SOCIOTYPES['ILE'];
    const qInfo = QUADRA_DETAILS[s.quadra];

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
          </button>
          <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('socionics')}>
            {language === 'id' ? 'Ambil Tes Socionics' : 'Take Socionics Test'}
          </M3Button>
        </div>

        <div className="p-6 md:p-8 rounded-m3-xl bg-linear-to-br from-primary-container/80 via-surface-container to-surface-container-high border border-primary/30 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface text-primary border border-primary/20">
              Socionics • Quadra {s.quadra}
            </span>
            <span className="text-xs font-bold text-outline">MBTI: {s.mbtiEquivalent}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
            {s.code} — {s.name[language]} ({s.historicalName})
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{s.description[language]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <M3Card variant="outlined" className="p-5 bg-surface-container space-y-2">
            <h4 className="font-bold text-xs uppercase text-primary">Model A: Lead & Creative</h4>
            <div className="text-xs space-y-1">
              <div><span className="font-bold text-on-surface">Fungsi Utama (Lead):</span> {s.leadFunction}</div>
              <div><span className="font-bold text-on-surface">Fungsi Kreatif:</span> {s.creativeFunction}</div>
              <div><span className="font-bold text-on-surface">Kelompok (Club):</span> {s.club[language]}</div>
            </div>
          </M3Card>

          <M3Card variant="outlined" className="p-5 bg-surface-container space-y-2">
            <h4 className="font-bold text-xs uppercase text-primary">Nilai-Nilai Quadra {s.quadra}</h4>
            <p className="text-xs text-on-surface-variant">{qInfo?.values[language]}</p>
            <p className="text-[11px] text-outline italic">{qInfo?.ethos[language]}</p>
          </M3Card>
        </div>
      </div>
    );
  }

  // 6. Instinctual Variant Detail
  if (category === 'instinct') {
    const inst = INSTINCT_PROFILES[typeId] || INSTINCT_PROFILES['sp/so'];
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
          </button>
          <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('instinct')}>
            {language === 'id' ? 'Ambil Tes Insting' : 'Take Instinct Test'}
          </M3Button>
        </div>
        <div className="p-6 md:p-8 rounded-m3-xl bg-surface-container border border-outline-variant space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Instinctual Variant ({typeId})</span>
          <h1 className="text-4xl font-black text-on-surface">{inst.title[language]}</h1>
          <p className="text-sm text-on-surface-variant leading-relaxed">{inst.description[language]}</p>
          <div className="pt-4 border-t border-outline-variant/60 text-xs space-y-2">
            <div><span className="font-bold text-primary">Gaya Hidup & Pola Energi: </span>{inst.lifeStyle[language]}</div>
            <div><span className="font-bold text-amber-600 dark:text-amber-400">Tantangan Pertumbuhan: </span>{inst.growthEdge[language]}</div>
          </div>
        </div>
      </div>
    );
  }

  // 7. Jungian Functions Detail
  if (category === 'jungian') {
    const fn = JUNGIAN_FUNCTIONS_INFO[typeId] || JUNGIAN_FUNCTIONS_INFO['Ni'];
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
          </button>
          <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('jungian')}>
            {language === 'id' ? 'Ambil Tes Jungian' : 'Take Jungian Test'}
          </M3Button>
        </div>
        <div className="p-6 md:p-8 rounded-m3-xl bg-surface-container border border-outline-variant space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-primary">{fn.code}</span>
            <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-primary-container text-on-primary-container">
              {fn.attitude} {fn.type}
            </span>
          </div>
          <h1 className="text-3xl font-black text-on-surface">{fn.name[language]}</h1>
          <p className="text-sm text-on-surface-variant leading-relaxed">{fn.description[language]}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {fn.keywords.map((k, idx) => (
              <span key={idx} className="text-xs bg-surface-container-high px-2.5 py-1 rounded text-outline font-medium">
                #{k[language]}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 8. Alignment Detail
  if (category === 'alignment') {
    const al = ALIGNMENT_DETAILS[typeId] || ALIGNMENT_DETAILS['True Neutral'];
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20 md:pb-12">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'id' ? 'Kembali ke Katalog Pustaka' : 'Back to Library Catalog'}</span>
          </button>
          <M3Button variant="filled" size="sm" icon="play_arrow" onClick={() => startTest('alignment')}>
            {language === 'id' ? 'Ambil Tes Alignment' : 'Take Alignment Test'}
          </M3Button>
        </div>
        <div className="p-6 md:p-8 rounded-m3-xl bg-surface-container border border-outline-variant space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Moral Alignment (3x3)</span>
          <h1 className="text-4xl font-black text-on-surface">{al.alignment} — {al.title[language]}</h1>
          <p className="text-sm italic text-outline">"{al.motto[language]}"</p>
          <p className="text-sm text-on-surface-variant leading-relaxed">{al.description[language]}</p>
          <div className="text-xs text-outline pt-2">
            <span className="font-bold text-on-surface">Contoh Arketipe: </span>{al.archetypes[0][language]}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
