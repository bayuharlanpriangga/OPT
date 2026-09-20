import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { generateSynergyAnalysis } from '../../data/descriptions/synergyData';
import { TESTS_METADATA } from '../../data/metadata';
import { M3Button } from '../m3/M3Button';
import { M3ConfirmDialog } from '../m3/M3ConfirmDialog';
import { downloadSocialCard } from '../../utils/socialCard';
import type { TestHistoryItem } from '../../types';

export const ComprehensivePassportView: React.FC = () => {
  const {
    allResults,
    language,
    completedCount,
    startTest,
    setViewResultTestType,
    setActiveTab,
    history,
    restoreHistorySnapshot,
    deleteHistoryItem,
    importAllData,
    clearAllData,
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [importStatus, setImportStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const res = importAllData(content);
        setImportStatus(res);
        setTimeout(() => setImportStatus(null), 4000);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleDownloadCard = () => {
    const title = synergy?.compositeTitle[language] || 'OmniPersona Dossier';
    const archetype = synergy?.primaryArchetype[language] || 'Unified Typology Synthesis';

    const cardItems = [
      { label: 'MBTI', value: allResults.mbti?.type || 'N/A' },
      { label: 'Enneagram', value: allResults.enneagram?.notation ? `${allResults.enneagram.notation} (${allResults.enneagram.tritype})` : 'N/A' },
      { label: 'Instinct (IV)', value: allResults.instinct?.stacking || 'N/A' },
      { label: 'Jungian', value: allResults.jungian?.dominantFunction ? `Dom ${allResults.jungian.dominantFunction} / Aux ${allResults.jungian.auxiliaryFunction}` : 'N/A' },
      { label: 'Socionics', value: allResults.socionics?.code ? `${allResults.socionics.code} (${allResults.socionics.quadra})` : 'N/A' },
      { label: 'Attitudinal Psyche', value: allResults.attitudinal_psyche?.type || 'N/A' },
      { label: 'Big 5 / SLOAN', value: allResults.big5?.sloanCode || 'N/A' },
      { label: 'Moral Alignment', value: allResults.alignment?.alignment || 'N/A' },
    ];

    downloadSocialCard(title, archetype, cardItems, language);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-24 md:pb-12">
      {/* Hidden File Input for Import */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />

      {/* Import Toast Alert */}
      {importStatus && (
        <div
          className={`p-4 rounded-m3-lg border flex items-center justify-between animate-fade-in ${
            importStatus.success
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-800 dark:text-emerald-200'
              : 'bg-error-container text-on-error-container border-error'
          }`}
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="material-symbols-outlined text-[20px]">
              {importStatus.success ? 'check_circle' : 'error'}
            </span>
            <span>{importStatus.message}</span>
          </div>
          <button
            onClick={() => setImportStatus(null)}
            className="text-xs font-bold underline cursor-pointer"
          >
            Tutup
          </button>
        </div>
      )}

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
      <div className="rounded-m3-xl bg-linear-to-b from-surface-container-highest via-surface-container to-surface-container-low border-2 border-primary/40 p-6 md:p-10 shadow-lg relative overflow-hidden">
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
              variant="filled"
              size="sm"
              icon="image"
              onClick={handleDownloadCard}
              title="Unduh Kartu Gambar PNG untuk Media Sosial"
            >
              {language === 'id' ? 'Kartu PNG' : 'Share Card'}
            </M3Button>

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
              icon="file_upload"
              onClick={handleImportClick}
              title="Pulihkan data hasil tes dari berkas JSON"
            >
              {language === 'id' ? 'Impor JSON' : 'Import'}
            </M3Button>

            <M3Button
              variant="outlined"
              size="sm"
              icon="download"
              onClick={handleExportJSON}
              title="Cadangkan data ke berkas JSON"
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
                  <span>{language === 'id' ? 'Tantangan Bayangan & Shadow' : 'Growth & Shadow'}</span>
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

            {/* Actionable Recommendations for Growth */}
            <div className="p-5 rounded-m3-xl bg-primary-container/20 border border-primary/30 space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                <span>{language === 'id' ? 'Rekomendasi Pengembangan Diri Holistik' : 'Actionable Growth Blueprint'}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-on-surface-variant">
                <div className="space-y-1">
                  <h5 className="font-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">chat</span>
                    <span>{language === 'id' ? 'Gaya Komunikasi' : 'Communication'}</span>
                  </h5>
                  <p className="leading-relaxed">
                    {language === 'id'
                      ? 'Ungkapkan konteks dan tujuan dasar terlebih dahulu sebelum menyampaikan kritik atau analisis teknis.'
                      : 'Anchor your underlying vision and intent clearly before offering sharp analytical critique.'}
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">self_improvement</span>
                    <span>{language === 'id' ? 'Regulasi Stres' : 'Stress Management'}</span>
                  </h5>
                  <p className="leading-relaxed">
                    {language === 'id'
                      ? 'Sediakan waktu hening berkala untuk dekompresi mental tanpa paparan stimulasi eksternal yang padat.'
                      : 'Carve out deliberate periods of solitude to prevent sensory and cognitive overload.'}
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">work</span>
                    <span>{language === 'id' ? 'Kolaborasi Tim' : 'Team Collaboration'}</span>
                  </h5>
                  <p className="leading-relaxed">
                    {language === 'id'
                      ? 'Padukan kekuatan analitis Anda dengan rekan tipe ekstrovert/eksekutor untuk merealisasikan ide ke lapangan.'
                      : 'Pair your strategic mind with active executors to manifest vision into real-world momentum.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* History & Timeline Section */}
      <div className="rounded-m3-xl bg-surface-container border border-outline-variant p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">history</span>
            <h3 className="font-bold text-base text-on-surface">
              {language === 'id' ? 'Riwayat Pengambilan Tes & Snapshot' : 'Test History & Snapshots'}
            </h3>
            <span className="text-xs bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full font-bold">
              {history.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <M3Button
              variant="tonal"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory
                ? (language === 'id' ? 'Sembunyikan' : 'Hide')
                : (language === 'id' ? 'Tampilkan' : 'View History')}
            </M3Button>

            <M3Button
              variant="text"
              size="sm"
              className="text-error!"
              onClick={() => setResetDialogOpen(true)}
            >
              {language === 'id' ? 'Hapus Semua' : 'Reset All'}
            </M3Button>
          </div>
        </div>

        {showHistory && (
          <div className="space-y-2 pt-2 animate-fade-in max-h-72 overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic py-2">
                {language === 'id' ? 'Belum ada riwayat tes tersimpan.' : 'No test snapshots recorded yet.'}
              </p>
            ) : (
              history.map((item: TestHistoryItem) => (
                <div
                  key={item.id}
                  className="p-3 rounded-m3-md bg-surface-container-high border border-outline-variant/60 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-on-surface">{item.summary}</div>
                    <div className="text-[11px] text-outline">
                      {new Date(item.timestamp).toLocaleString(language === 'id' ? 'id-ID' : 'en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => restoreHistorySnapshot(item)}
                      className="text-primary hover:underline font-semibold cursor-pointer"
                    >
                      {language === 'id' ? 'Pulihkan' : 'Restore'}
                    </button>
                    <button
                      onClick={() => deleteHistoryItem(item.id)}
                      className="text-error hover:underline cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Confirmation Dialog for Data Reset */}
      <M3ConfirmDialog
        isOpen={resetDialogOpen}
        title={language === 'id' ? 'Hapus Seluruh Data?' : 'Reset All Profile Data?'}
        message={
          language === 'id'
            ? 'Tindakan ini akan menghapus seluruh jawaban, hasil tes, dan riwayat yang tersimpan di peramban ini. Pastikan Anda sudah mengunduh berkas JSON jika ingin menyimpannya.'
            : 'This will permanently wipe all answers, test scores, and historical snapshots stored in this browser. Ensure you exported your JSON if you wish to keep them.'
        }
        confirmText={language === 'id' ? 'Hapus Permanen' : 'Delete Permanently'}
        cancelText={language === 'id' ? 'Batal' : 'Cancel'}
        isDestructive={true}
        onConfirm={() => {
          clearAllData();
          setResetDialogOpen(false);
        }}
        onCancel={() => setResetDialogOpen(false)}
      />
    </div>
  );
};
