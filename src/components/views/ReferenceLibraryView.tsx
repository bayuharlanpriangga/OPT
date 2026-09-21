import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { M3Card } from '../m3/M3Card';
import { M3Chip } from '../m3/M3Chip';
import { M3Button } from '../m3/M3Button';
import { TypeDetailPage } from './TypeDetailPage';
import { MBTI_PROFILES } from '../../data/descriptions/mbtiData';
import { ENNEAGRAM_CORE_PROFILES, TRITYPE_ARCHETYPES } from '../../data/descriptions/enneagramData';
import { INSTINCT_PROFILES } from '../../data/descriptions/instinctData';
import { JUNGIAN_FUNCTIONS_INFO } from '../../data/descriptions/jungianData';
import { SOCIOTYPES, QUADRA_DETAILS } from '../../data/descriptions/socionicsData';
import { AP_TYPE_ARCHETYPES, AP_ASPECT_INFO } from '../../data/descriptions/apData';
import { BIG5_DIMENSIONS, SLOAN_ARCHETYPES } from '../../data/descriptions/big5Data';
import { ALIGNMENT_DETAILS } from '../../data/descriptions/alignmentData';
import type { TestType } from '../../types';

export const ReferenceLibraryView: React.FC = () => {
  const { language } = useApp();
  const [activeCategory, setActiveCategory] = useState<TestType>('mbti');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [enneagramSubView, setEnneagramSubView] = useState<'core' | 'tritype'>('core');
  const [big5SubView, setBig5SubView] = useState<'sloan32' | 'dimensions'>('sloan32');

  const [selectedDetail, setSelectedDetail] = useState<{ category: TestType; typeId: string } | null>(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const parts = hash.split('/');
    if (parts[0] === 'library' && parts[1] && parts[2]) {
      return { category: parts[1] as TestType, typeId: parts[2] };
    }
    return null;
  });

  // Handle hash changes for browser back/forward buttons
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const parts = hash.split('/');
      if (parts[0] === 'library' && parts[1] && parts[2]) {
        setSelectedDetail({ category: parts[1] as TestType, typeId: parts[2] });
      } else if (parts[0] === 'library' && parts.length === 1) {
        setSelectedDetail(null);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenDetail = (category: TestType, typeId: string) => {
    setSelectedDetail({ category, typeId });
    window.location.hash = `#library/${category}/${typeId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseDetail = () => {
    setSelectedDetail(null);
    window.location.hash = '#library';
  };

  if (selectedDetail) {
    return (
      <TypeDetailPage
        category={selectedDetail.category}
        typeId={selectedDetail.typeId}
        onBack={handleCloseDetail}
      />
    );
  }

  const categories: { id: TestType; label: string }[] = [
    { id: 'mbti', label: 'MBTI (16)' },
    { id: 'enneagram', label: 'Enneagram (9)' },
    { id: 'instinct', label: 'Instinct (IV)' },
    { id: 'jungian', label: 'Jungian Functions' },
    { id: 'socionics', label: 'Socionics & Quadra' },
    { id: 'attitudinal_psyche', label: 'Attitudinal Psyche (24)' },
    { id: 'big5', label: 'Big 5 / SLOAN (32)' },
    { id: 'alignment', label: 'Alignment (3x3)' },
  ];

  const q = searchQuery.toLowerCase().trim();

  // Filtered lists
  const filteredMBTI = Object.values(MBTI_PROFILES).filter(
    (p) =>
      !q ||
      p.type.toLowerCase().includes(q) ||
      p.title[language].toLowerCase().includes(q) ||
      p.description[language].toLowerCase().includes(q) ||
      p.cognitiveStack.some((fn) => fn.toLowerCase().includes(q))
  );

  const filteredEnneagram = Object.values(ENNEAGRAM_CORE_PROFILES).filter(
    (p) =>
      !q ||
      `tipe ${p.type}`.includes(q) ||
      p.type.toString().includes(q) ||
      p.title[language].toLowerCase().includes(q) ||
      p.description[language].toLowerCase().includes(q)
  );

  const filteredTritypes = Object.entries(TRITYPE_ARCHETYPES).filter(
    ([code, item]) =>
      !q ||
      code.includes(q) ||
      item.title[language].toLowerCase().includes(q) ||
      item.description[language].toLowerCase().includes(q)
  );

  const filteredInstinct = Object.values(INSTINCT_PROFILES).filter(
    (p) =>
      !q ||
      p.stacking.toLowerCase().includes(q) ||
      p.title[language].toLowerCase().includes(q) ||
      p.description[language].toLowerCase().includes(q)
  );

  const filteredJungian = Object.values(JUNGIAN_FUNCTIONS_INFO).filter(
    (f) =>
      !q ||
      f.code.toLowerCase().includes(q) ||
      f.name[language].toLowerCase().includes(q) ||
      f.description[language].toLowerCase().includes(q) ||
      f.keywords.some((k) => k[language].toLowerCase().includes(q))
  );

  const filteredSociotypes = Object.values(SOCIOTYPES).filter(
    (s) =>
      !q ||
      s.code.toLowerCase().includes(q) ||
      s.mbtiEquivalent.toLowerCase().includes(q) ||
      s.name[language].toLowerCase().includes(q) ||
      s.quadra.toLowerCase().includes(q) ||
      s.description[language].toLowerCase().includes(q)
  );

  const filteredAP = Object.entries(AP_TYPE_ARCHETYPES).filter(
    ([type, arch]) =>
      !q ||
      type.toLowerCase().includes(q) ||
      arch.title[language].toLowerCase().includes(q) ||
      arch.description[language].toLowerCase().includes(q)
  );

  const filteredSloan32 = Object.entries(SLOAN_ARCHETYPES).filter(
    ([code, prof]) =>
      !q ||
      code.toLowerCase().includes(q) ||
      prof.title[language].toLowerCase().includes(q) ||
      prof.description[language].toLowerCase().includes(q)
  );

  const filteredBig5Dim = Object.values(BIG5_DIMENSIONS).filter(
    (dim) =>
      !q ||
      dim.name[language].toLowerCase().includes(q) ||
      dim.code.toLowerCase().includes(q) ||
      dim.description[language].toLowerCase().includes(q)
  );

  const filteredAlignment = Object.values(ALIGNMENT_DETAILS).filter(
    (al) =>
      !q ||
      al.alignment.toLowerCase().includes(q) ||
      al.title[language].toLowerCase().includes(q) ||
      al.description[language].toLowerCase().includes(q)
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-20 md:pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-on-surface tracking-tight">
            {language === 'id' ? 'Pustaka Tipologi Psikologi' : 'Typology Reference Library'}
          </h1>
          <p className="text-xs md:text-sm text-on-surface-variant mt-1">
            {language === 'id'
              ? 'Pilih tipe apa pun untuk membuka halaman pembahasan aspek mendalam, dinamika relasi, dan strategi pertumbuhan.'
              : 'Select any personality archetype to open in-depth aspect discussions, relational dynamics, and growth paths.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'id' ? 'Cari tipe, fungsi, kata kunci...' : 'Search types, functions, terms...'}
            className="w-full pl-9 pr-8 py-2 bg-surface-container border border-outline-variant rounded-full text-xs text-on-surface placeholder:text-outline focus:outline-hidden focus:ring-2 focus:ring-primary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">cancel</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 pb-2 overflow-x-auto">
        {categories.map((c) => (
          <M3Chip
            key={c.id}
            label={c.label}
            selected={activeCategory === c.id}
            onClick={() => {
              setActiveCategory(c.id);
            }}
          />
        ))}
      </div>

      {/* Category Content */}
      <div className="space-y-4">
        {/* MBTI Section */}
        {activeCategory === 'mbti' && (
          filteredMBTI.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMBTI.map((p) => (
                <M3Card
                  key={p.type}
                  variant="outlined"
                  className="p-5 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  onClick={() => handleOpenDetail('mbti', p.type)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-black text-primary group-hover:underline">{p.type}</span>
                      <div className="flex gap-1">
                        {p.cognitiveStack.map((fn) => (
                          <span key={fn} className="text-[10px] font-bold bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded">
                            {fn}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-bold text-sm text-on-surface mb-1">{p.title[language]}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                      {p.description[language]}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[11px]">
                    <span className="text-outline italic">{p.nickname[language]}</span>
                    <span className="text-primary font-bold inline-flex items-center gap-0.5">
                      {language === 'id' ? 'Buka Detail' : 'Full Detail'} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  </div>
                </M3Card>
              ))}
            </div>
          )
        )}

        {/* Enneagram Section */}
        {activeCategory === 'enneagram' && (
          <div className="space-y-4">
            {/* Sub-view toggle */}
            <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
              <button
                onClick={() => setEnneagramSubView('core')}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  enneagramSubView === 'core'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {language === 'id' ? '9 Tipe Pokok (Core Types)' : '9 Core Types'}
              </button>
              <button
                onClick={() => setEnneagramSubView('tritype')}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  enneagramSubView === 'tritype'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {language === 'id' ? '27 Arketipe Tritype' : '27 Tritype Archetypes'}
              </button>
            </div>

            {enneagramSubView === 'core' && (
              filteredEnneagram.length === 0 ? (
                <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredEnneagram.map((p) => (
                    <M3Card
                      key={p.type}
                      variant="outlined"
                      className="p-5 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                      onClick={() => handleOpenDetail('enneagram', p.type.toString())}
                    >
                      <div>
                        <div className="text-2xl font-black text-primary mb-1 group-hover:underline">Tipe {p.type}</div>
                        <h3 className="font-bold text-sm text-on-surface mb-1">{p.title[language]}</h3>
                        <span className="text-[10px] font-bold text-outline uppercase bg-surface-container-high px-2 py-0.5 rounded">
                          {p.centerLabel[language]}
                        </span>
                        <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                          {p.description[language]}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[11px]">
                        <span className="text-error font-medium truncate mr-1">Fobia: {p.coreFear[language]}</span>
                        <span className="text-primary font-bold shrink-0 inline-flex items-center">
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </M3Card>
                  ))}
                </div>
              )
            )}

            {enneagramSubView === 'tritype' && (
              filteredTritypes.length === 0 ? (
                <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredTritypes.map(([code, item]) => (
                    <M3Card
                      key={code}
                      variant="outlined"
                      className="p-4 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                      onClick={() => handleOpenDetail('enneagram', code)}
                    >
                      <div>
                        <span className="text-base font-black text-primary group-hover:underline">Tritype {code}</span>
                        <h4 className="text-xs font-bold text-on-surface mt-0.5 mb-1">{item.title[language]}</h4>
                        <p className="text-[11px] text-on-surface-variant leading-relaxed mb-2">
                          {item.description[language]}
                        </p>
                      </div>
                      <div className="pt-1 border-t border-outline-variant/60 text-right">
                        <span className="text-[10px] text-primary font-bold inline-flex items-center">
                          Detail <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                        </span>
                      </div>
                    </M3Card>
                  ))}
                </div>
              )
            )}
          </div>
        )}

        {/* Instinct Section */}
        {activeCategory === 'instinct' && (
          filteredInstinct.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredInstinct.map((p) => (
                <M3Card
                  key={p.stacking}
                  variant="outlined"
                  className="p-5 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  onClick={() => handleOpenDetail('instinct', p.stacking)}
                >
                  <div>
                    <span className="text-xl font-black text-primary group-hover:underline">{p.stacking}</span>
                    <h3 className="font-bold text-sm text-on-surface mt-1 mb-2">{p.title[language]}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                      {p.description[language]}
                    </p>
                  </div>
                  <div className="text-xs bg-surface-container-high p-2.5 rounded-m3-sm flex items-center justify-between">
                    <div>
                      <span className="font-bold text-primary">Tantangan: </span>
                      <span className="text-on-surface-variant">{p.growthEdge[language]}</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-primary ml-2 shrink-0">arrow_forward</span>
                  </div>
                </M3Card>
              ))}
            </div>
          )
        )}

        {/* Jungian Section */}
        {activeCategory === 'jungian' && (
          filteredJungian.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredJungian.map((f) => (
                <M3Card
                  key={f.code}
                  variant="outlined"
                  className="p-5 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  onClick={() => handleOpenDetail('jungian', f.code)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black text-primary group-hover:underline">{f.code}</span>
                      <span className="text-[10px] uppercase font-bold bg-primary-container px-2 py-0.5 rounded text-on-primary-container">
                        {f.attitude} {f.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-on-surface mb-2">{f.name[language]}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                      {f.description[language]}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1.5 pt-2 border-t border-outline-variant/60">
                    <div className="flex flex-wrap gap-1">
                      {f.keywords.map((k, idx) => (
                        <span key={idx} className="text-[10px] bg-surface-container-high px-2 py-0.5 rounded text-outline font-medium">
                          #{k[language]}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-primary inline-flex items-center">
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </div>
                </M3Card>
              ))}
            </div>
          )
        )}

        {/* Socionics Section */}
        {activeCategory === 'socionics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {Object.keys(QUADRA_DETAILS).map((qKey) => {
                const qDetail = QUADRA_DETAILS[qKey];
                return (
                  <div key={qKey} className="p-4 rounded-m3-lg bg-surface-container border border-primary/20">
                    <h4 className="font-bold text-sm text-primary mb-1">{qDetail.title[language]}</h4>
                    <p className="text-[11px] text-on-surface-variant">{qDetail.values[language]}</p>
                  </div>
                );
              })}
            </div>

            {filteredSociotypes.length === 0 ? (
              <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {filteredSociotypes.map((s) => (
                  <M3Card
                    key={s.code}
                    variant="outlined"
                    className="p-4 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                    onClick={() => handleOpenDetail('socionics', s.code)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base font-black text-primary group-hover:underline">{s.code}</span>
                        <span className="text-xs text-outline font-bold">{s.mbtiEquivalent}</span>
                      </div>
                      <div className="text-xs font-bold text-on-surface mb-1">{s.name[language]}</div>
                      <div className="text-[10px] text-outline font-semibold mb-2">Quadra {s.quadra}</div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {s.description[language]}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[11px] mt-2">
                      <span className="text-outline">{s.leadFunction}</span>
                      <span className="text-primary font-bold inline-flex items-center">
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </span>
                    </div>
                  </M3Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Attitudinal Psyche Section - NOW UNIFIED IN M3CARD STYLE */}
        {activeCategory === 'attitudinal_psyche' && (
          <div className="space-y-6">
            {/* 4 Aspects Primer */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {Object.keys(AP_ASPECT_INFO).map((k) => {
                const asp = AP_ASPECT_INFO[k];
                return (
                  <div key={k} className="p-3.5 rounded-m3-lg bg-surface-container border border-outline-variant">
                    <div className="text-lg font-black text-primary mb-1">{k}</div>
                    <div className="font-bold text-xs text-on-surface mb-1">{asp.title[language]}</div>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">{asp.domain[language]}</p>
                  </div>
                );
              })}
            </div>

            {filteredAP.length === 0 ? (
              <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAP.map(([type, arch]) => (
                  <M3Card
                    key={type}
                    variant="outlined"
                    className="p-5 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                    onClick={() => handleOpenDetail('attitudinal_psyche', type)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-black text-primary group-hover:underline">{type}</span>
                        <div className="flex gap-1">
                          {type.split('').map((char, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-bold bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded"
                              title={`${i + 1}: ${AP_ASPECT_INFO[char]?.title[language] || char}`}
                            >
                              {i + 1}{char}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-bold text-sm text-on-surface mb-1">{arch.title[language]}</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                        {arch.description[language]}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[11px]">
                      <span className="text-outline">
                        1: {AP_ASPECT_INFO[type[0]]?.title[language].split(' ')[0]} • 3: {AP_ASPECT_INFO[type[2]]?.title[language].split(' ')[0]}
                      </span>
                      <span className="text-primary font-bold inline-flex items-center gap-0.5">
                        {language === 'id' ? 'Buka Aspek' : 'Full Aspects'} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </span>
                    </div>
                  </M3Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Big 5 / SLOAN Section - NOW MAPPED FULLY TO 32 SLOAN TYPES + 5 DIMENSIONS */}
        {activeCategory === 'big5' && (
          <div className="space-y-4">
            {/* Sub-view toggle */}
            <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
              <button
                onClick={() => setBig5SubView('sloan32')}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  big5SubView === 'sloan32'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {language === 'id' ? '32 Tipe Kombinasi SLOAN' : '32 SLOAN Composite Types'}
              </button>
              <button
                onClick={() => setBig5SubView('dimensions')}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  big5SubView === 'dimensions'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {language === 'id' ? '5 Dimensi Spektrum OCEAN / FFM' : '5 OCEAN Dimensions'}
              </button>
            </div>

            {big5SubView === 'sloan32' && (
              filteredSloan32.length === 0 ? (
                <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSloan32.map(([code, prof]) => (
                    <M3Card
                      key={code}
                      variant="outlined"
                      className="p-5 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                      onClick={() => handleOpenDetail('big5', code)}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl font-black text-primary group-hover:underline">{code}</span>
                          <div className="flex gap-1">
                            {code.split('').map((char, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-bold bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded"
                              >
                                {char}
                              </span>
                            ))}
                          </div>
                        </div>
                        <h3 className="font-bold text-sm text-on-surface mb-1">{prof.title[language]}</h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                          {prof.description[language]}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[11px]">
                        <span className="text-outline truncate max-w-[220px]">
                          {prof.traits[0] ? prof.traits[0][language] : ''}
                        </span>
                        <span className="text-primary font-bold inline-flex items-center gap-0.5 shrink-0">
                          {language === 'id' ? 'Buka Profil' : 'View Profile'} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </M3Card>
                  ))}
                </div>
              )
            )}

            {big5SubView === 'dimensions' && (
              filteredBig5Dim.length === 0 ? (
                <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {filteredBig5Dim.map((dim) => (
                    <div key={dim.code} className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant">
                      <h4 className="font-bold text-sm text-primary mb-1">{dim.name[language]}</h4>
                      <p className="text-xs text-on-surface-variant mb-2 leading-relaxed">{dim.description[language]}</p>
                      <div className="text-[11px] space-y-1 pt-2 border-t border-outline-variant/60">
                        <div><span className="font-bold text-on-surface">{dim.highPole.letter}:</span> {dim.highPole.trait[language]}</div>
                        <div><span className="font-bold text-on-surface">{dim.lowPole.letter}:</span> {dim.lowPole.trait[language]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        )}

        {/* Alignment Section */}
        {activeCategory === 'alignment' && (
          filteredAlignment.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {filteredAlignment.map((al) => (
                <M3Card
                  key={al.alignment}
                  variant="outlined"
                  className="p-5 bg-surface-container hover:border-primary/60 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  onClick={() => handleOpenDetail('alignment', al.alignment)}
                >
                  <div>
                    <span className="text-lg font-black text-primary group-hover:underline">{al.alignment}</span>
                    <h3 className="font-bold text-sm text-on-surface mt-1 mb-1">{al.title[language]}</h3>
                    <p className="text-xs italic text-outline mb-2">"{al.motto[language]}"</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-2">
                      {al.description[language]}
                    </p>
                  </div>
                  <div className="text-[11px] text-outline pt-2 border-t border-outline-variant/60 flex items-center justify-between">
                    <div>
                      <span className="font-bold">Arketipe: </span>
                      <span>{al.archetypes[0][language]}</span>
                    </div>
                    <span className="text-primary font-bold inline-flex items-center">
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  </div>
                </M3Card>
              ))}
            </div>
          )
        )}
      </div>

      {/* Academic Bibliography & Scientific Methodology Section */}
      <section className="pt-8 border-t border-outline-variant/80 space-y-4">
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
          <span className="material-symbols-outlined text-[20px]">menu_book</span>
          <span>{language === 'id' ? 'Landasan Teori & Bibliografi Akademis' : 'Theoretical Foundations & Academic Bibliography'}</span>
        </div>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          {language === 'id'
            ? 'Setiap instrumen dalam OPT dipetakan berdasarkan literatur psikologi kepribadian klasik dan modern. Model empiris (Big Five) dan kerangka heuristik kognitif (Jungian/MBTI/Socionics) diposisikan secara transparan sesuai derajat validitas psikometrinya.'
            : 'Each instrument in OPT is grounded in classical and contemporary personality literature. Empirical models (Big Five) and cognitive heuristics (Jungian/MBTI/Socionics) are transparently categorized according to their psychometric validity.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-m3-md bg-surface-container border border-outline-variant/60 space-y-1">
            <span className="font-bold text-primary">1. Big Five (OCEAN / FFM) — Konsensus Empiris Utama</span>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Costa, P. T., & McCrae, R. R. (1992). <em>Revised NEO Personality Inventory (NEO PI-R) and NEO Five-Factor Inventory (NEO-FFI) Professional Manual</em>. Psychological Assessment Resources.
            </p>
          </div>

          <div className="p-3.5 rounded-m3-md bg-surface-container border border-outline-variant/60 space-y-1">
            <span className="font-bold text-primary">2. Tipologi Kognitif Carl G. Jung</span>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Jung, C. G. (1921). <em>Psychologische Typen</em> (Psychological Types, Collected Works Vol. 6). Princeton University Press.
            </p>
          </div>

          <div className="p-3.5 rounded-m3-md bg-surface-container border border-outline-variant/60 space-y-1">
            <span className="font-bold text-primary">3. Myers-Briggs Type Indicator (MBTI)</span>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Myers, I. B., & Myers, P. B. (1980). <em>Gifts Differing: Understanding Personality Type</em>. Davies-Black Publishing.
            </p>
          </div>

          <div className="p-3.5 rounded-m3-md bg-surface-container border border-outline-variant/60 space-y-1">
            <span className="font-bold text-primary">4. Enneagram & Tritype Dynamics</span>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Riso, D. R., & Hudson, R. (1999). <em>The Wisdom of the Enneagram</em>. Bantam Books; Fauvre, K. (2010). <em>Tritype Archetypes</em>.
            </p>
          </div>

          <div className="p-3.5 rounded-m3-md bg-surface-container border border-outline-variant/60 space-y-1">
            <span className="font-bold text-primary">5. Socionics (Metabolisme Informasi Kognitif)</span>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Augusta, A. (1980). <em>The Dual Nature of Humanity</em>. International Institute of Socionics, Vilnius/Kyiv.
            </p>
          </div>

          <div className="p-3.5 rounded-m3-md bg-surface-container border border-outline-variant/60 space-y-1">
            <span className="font-bold text-primary">6. Attitudinal Psyche & Psychosophy</span>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Afanasyev, A. (1993). <em>The Syntax of Love: Typology of Personalities and Prognosis of Relations</em>. Black Squirrel Books.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const NoResultsReset: React.FC<{ onReset: () => void; language: string }> = ({ onReset, language }) => (
  <div className="text-center py-12 p-6 rounded-m3-xl bg-surface-container border border-dashed border-outline-variant">
    <span className="material-symbols-outlined text-[36px] text-outline mb-2">
      search_off
    </span>
    <p className="text-sm font-semibold text-on-surface mb-1">
      {language === 'id' ? 'Tidak ditemukan hasil pencarian' : 'No matching items found'}
    </p>
    <p className="text-xs text-on-surface-variant mb-4">
      {language === 'id' ? 'Coba gunakan kata kunci lain atau bersihkan pencarian.' : 'Try different keywords or clear search.'}
    </p>
    <button
      onClick={onReset}
      className="text-xs font-bold text-primary hover:underline cursor-pointer"
    >
      {language === 'id' ? 'Reset Pencarian' : 'Clear Search'}
    </button>
  </div>
);

