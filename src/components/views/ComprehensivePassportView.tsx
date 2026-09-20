import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { generateSynergyAnalysis } from '../../data/descriptions/synergyData';
import { TESTS_METADATA } from '../../data/metadata';
import { M3Button } from '../m3/M3Button';

export const ComprehensivePassportView: React.FC = () => {
  const {
    allResults,
    language,
    completedCount,
    startTest,
    setViewResultTestType,
    setActiveTab,
  } = useApp();

  const [copied, setCopied] = useState(false);
  const synergy = generateSynergyAnalysis(allResults);

  const handleCopySummary = () => {
    const summaryText = `
=== OMNIPERSONA PERSONALITY DOSSIER ===
MBTI: ${allResults.mbti?.type || 'N/A'} - ${allResults.mbti?.title[language] || ''}
Enneagram: ${allResults.enneagram?.notation || 'N/A'} (Tritype: ${allResults.enneagram?.tritype || 'N/A'})
Instinctual Variant: ${allResults.instinct?.stacking || 'N/A'}
Classic Jungian: Dominant ${allResults.jungian?.dominantFunction || 'N/A'} (Aux: ${allResults.jungian?.auxiliaryFunction || 'N/A'})
Socionics: ${allResults.socionics?.code || 'N/A'} (${allResults.socionics?.quadra || 'N/A'} Quadra)
Attitudinal Psyche: ${allResults.attitudinal_psyche?.type || 'N/A'}
Big Five / SLOAN: ${allResults.big5?.sloanCode || 'N/A'}
Moral Alignment: ${allResults.alignment?.alignment || 'N/A'}
=======================================
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allResults, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `omnipersona_dossier_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-24 md:pb-12">
      {/* Top Banner / Incomplete Notice */}
      {completedCount < 8 && (
        <div className="rounded-m3-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[24px]">
              info
            </span>
            <p className="text-xs md:text-sm text-amber-900 dark:text-amber-200">
              {language === 'id'
                ? `Anda telah menyelesaikan ${completedCount} dari 8 sistem. Lengkapi sisa tes untuk membuka sinergi 100% sempurna!`
                : `You have completed ${completedCount} of 8 systems. Complete the remaining tests for full synthesis!`}
            </p>
          </div>
          <M3Button
            variant="tonal"
            size="sm"
            onClick={() => startTest('grand_assessment')}
          >
            {language === 'id' ? 'Lanjutkan Tes' : 'Continue Tests'}
          </M3Button>
        </div>
      )}

      {/* Grand Personality Passport Card */}
      <div className="rounded-m3-xl bg-gradient-to-b from-surface-container-highest via-surface-container to-surface-container-low border-2 border-primary/40 p-6 md:p-10 shadow-lg relative overflow-hidden">
        {/* Passport Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-outline-variant/80 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Personality Passport</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
              {synergy?.compositeTitle[language]}
            </h1>
            <p className="text-sm md:text-base font-semibold text-primary mt-1">
              {synergy?.primaryArchetype[language]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <M3Button
              variant="tonal"
              size="sm"
              icon={copied ? 'check' : 'content_copy'}
              onClick={handleCopySummary}
            >
              {copied ? (language === 'id' ? 'Tersalin!' : 'Copied!') : (language === 'id' ? 'Salin Ringkasan' : 'Copy Summary')}
            </M3Button>

            <M3Button
              variant="outlined"
              size="sm"
              icon="download"
              onClick={handleExportJSON}
            >
              JSON
            </M3Button>

            <M3Button
              variant="outlined"
              size="sm"
              icon="print"
              onClick={handlePrint}
            >
              {language === 'id' ? 'Cetak' : 'Print'}
            </M3Button>
          </div>
        </div>

        {/* 8 Systems Mini Matrix Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {TESTS_METADATA.map((meta) => {
            const result = allResults[meta.id];
            let value = '—';
            let sub = meta.title[language];

            if (result) {
              if (meta.id === 'mbti' && allResults.mbti) value = allResults.mbti.type;
              else if (meta.id === 'enneagram' && allResults.enneagram) value = `${allResults.enneagram.notation} (${allResults.enneagram.tritype})`;
              else if (meta.id === 'instinct' && allResults.instinct) value = allResults.instinct.stacking;
              else if (meta.id === 'jungian' && allResults.jungian) value = `${allResults.jungian.dominantFunction} / ${allResults.jungian.auxiliaryFunction}`;
              else if (meta.id === 'socionics' && allResults.socionics) value = `${allResults.socionics.code} • ${allResults.socionics.quadra}`;
              else if (meta.id === 'attitudinal_psyche' && allResults.attitudinal_psyche) value = allResults.attitudinal_psyche.type;
              else if (meta.id === 'big5' && allResults.big5) value = allResults.big5.sloanCode;
              else if (meta.id === 'alignment' && allResults.alignment) value = allResults.alignment.alignment;
            }

            return (
              <div
                key={meta.id}
                onClick={() => {
                  if (result) {
                    setViewResultTestType(meta.id);
                    setActiveTab('result');
                  } else {
                    startTest(meta.id);
                  }
                }}
                className={`p-3 rounded-m3-lg border transition-all cursor-pointer ${
                  result
                    ? 'bg-surface-container-high border-primary/30 hover:border-primary'
                    : 'bg-surface-container-lowest/50 border-dashed border-outline-variant hover:bg-surface-container'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-outline font-bold uppercase mb-1">
                  <span>{meta.badge}</span>
                  <span className="material-symbols-outlined text-[14px]">
                    {result ? 'arrow_forward' : 'add'}
                  </span>
                </div>
                <div className={`text-base font-black truncate ${result ? 'text-primary' : 'text-outline italic text-xs'}`}>
                  {result ? value : (language === 'id' ? '+ Ambil Tes' : '+ Take Test')}
                </div>
                <div className="text-[10px] text-on-surface-variant truncate mt-0.5">
                  {sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Holistic Synergy Narrative */}
        {synergy && (
          <div className="space-y-6 pt-6 border-t border-outline-variant/80">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                {language === 'id' ? 'Analisis Sintesis Holistik' : 'Holistic Synthesis Narrative'}
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                {synergy.synergyNarrative[language]}
              </p>
            </div>

            {/* Core Mindset & Environment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant/60">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-1.5">
                  <span className="material-symbols-outlined text-[18px]">psychology</span>
                  <span>{language === 'id' ? 'Pola Pikir Inti' : 'Core Mindset'}</span>
                </div>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  {synergy.coreMindset[language]}
                </p>
              </div>

              <div className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant/60">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-1.5">
                  <span className="material-symbols-outlined text-[18px]">nature_people</span>
                  <span>{language === 'id' ? 'Lingkungan Optimal' : 'Ideal Environment'}</span>
                </div>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  {synergy.idealEnvironment[language]}
                </p>
              </div>
            </div>

            {/* Strengths & Growth Vectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant/60">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase mb-2">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                  <span>{language === 'id' ? 'Sinergi Kekuatan' : 'Synergy Strengths'}</span>
                </div>
                <ul className="space-y-1.5">
                  {synergy.strengths.map((s, idx) => (
                    <li key={idx} className="text-xs text-on-surface-variant flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{s[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant/60">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase mb-2">
                  <span className="material-symbols-outlined text-[18px]">crisis_alert</span>
                  <span>{language === 'id' ? 'Tantangan Bayangan' : 'Growth & Shadow'}</span>
                </div>
                <ul className="space-y-1.5">
                  {synergy.growthChallenges.map((g, idx) => (
                    <li key={idx} className="text-xs text-on-surface-variant flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{g[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
