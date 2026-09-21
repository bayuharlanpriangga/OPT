import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { M3Card } from '../m3/M3Card';
import { M3Chip } from '../m3/M3Chip';
import { MBTI_PROFILES } from '../../data/descriptions/mbtiData';
import { ENNEAGRAM_CORE_PROFILES } from '../../data/descriptions/enneagramData';
import { INSTINCT_PROFILES } from '../../data/descriptions/instinctData';
import { JUNGIAN_FUNCTIONS_INFO } from '../../data/descriptions/jungianData';
import { SOCIOTYPES, QUADRA_DETAILS } from '../../data/descriptions/socionicsData';
import { AP_TYPE_ARCHETYPES, AP_ASPECT_INFO } from '../../data/descriptions/apData';
import { BIG5_DIMENSIONS } from '../../data/descriptions/big5Data';
import { ALIGNMENT_DETAILS } from '../../data/descriptions/alignmentData';
import type { TestType } from '../../types';

export const ReferenceLibraryView: React.FC = () => {
  const { language } = useApp();
  const [activeCategory, setActiveCategory] = useState<TestType>('mbti');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: TestType; label: string }[] = [
    { id: 'mbti', label: 'MBTI (16)' },
    { id: 'enneagram', label: 'Enneagram (9)' },
    { id: 'instinct', label: 'Instinct (IV)' },
    { id: 'jungian', label: 'Jungian Functions' },
    { id: 'socionics', label: 'Socionics & Quadra' },
    { id: 'attitudinal_psyche', label: 'Attitudinal Psyche' },
    { id: 'big5', label: 'Big 5 / SLOAN' },
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

  const filteredBig5 = Object.values(BIG5_DIMENSIONS).filter(
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
              ? 'Pelajari teori mendalam, deskripsi tipe, fungsi kognitif, dan hubungan antar sistem.'
              : 'Explore in-depth theories, type descriptions, cognitive functions, and cross-system models.'}
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
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
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
            onClick={() => setActiveCategory(c.id)}
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
                <M3Card key={p.type} variant="outlined" className="p-5 bg-surface-container">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-black text-primary">{p.type}</span>
                    <div className="flex gap-1">
                      {p.cognitiveStack.map((fn) => (
                        <span key={fn} className="text-[10px] bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded">
                          {fn}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm text-on-surface mb-1">{p.title[language]}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                    {p.description[language]}
                  </p>
                  <div className="text-[11px] text-outline italic">
                    {p.nickname[language]}
                  </div>
                </M3Card>
              ))}
            </div>
          )
        )}

        {/* Enneagram Section */}
        {activeCategory === 'enneagram' && (
          filteredEnneagram.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredEnneagram.map((p) => (
                <M3Card key={p.type} variant="outlined" className="p-5 bg-surface-container">
                  <div className="text-2xl font-black text-primary mb-1">Tipe {p.type}</div>
                  <h3 className="font-bold text-sm text-on-surface mb-1">{p.title[language]}</h3>
                  <span className="text-[10px] font-bold text-outline uppercase bg-surface-container-high px-2 py-0.5 rounded">
                    {p.centerLabel[language]}
                  </span>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {p.description[language]}
                  </p>
                  <div className="mt-3 pt-2 border-t border-outline-variant/60 text-[11px] text-error font-medium">
                    Fobia: {p.coreFear[language]}
                  </div>
                </M3Card>
              ))}
            </div>
          )
        )}

        {/* Instinct Section */}
        {activeCategory === 'instinct' && (
          filteredInstinct.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredInstinct.map((p) => (
                <M3Card key={p.stacking} variant="outlined" className="p-5 bg-surface-container">
                  <span className="text-xl font-black text-primary">{p.stacking}</span>
                  <h3 className="font-bold text-sm text-on-surface mt-1 mb-2">{p.title[language]}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                    {p.description[language]}
                  </p>
                  <div className="text-xs bg-surface-container-high p-2.5 rounded-m3-sm">
                    <span className="font-bold text-primary">Tantangan: </span>
                    <span className="text-on-surface-variant">{p.growthEdge[language]}</span>
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
                <M3Card key={f.code} variant="outlined" className="p-5 bg-surface-container">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black text-primary">{f.code}</span>
                    <span className="text-[10px] uppercase font-bold bg-primary-container px-2 py-0.5 rounded text-on-primary-container">
                      {f.attitude} {f.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-on-surface mb-2">{f.name[language]}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                    {f.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {f.keywords.map((k, idx) => (
                      <span key={idx} className="text-[10px] bg-surface-container-high px-2 py-0.5 rounded text-outline font-medium">
                        #{k[language]}
                      </span>
                    ))}
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
                  <M3Card key={s.code} variant="outlined" className="p-4 bg-surface-container">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base font-black text-primary">{s.code}</span>
                      <span className="text-xs text-outline font-bold">{s.mbtiEquivalent}</span>
                    </div>
                    <div className="text-xs font-bold text-on-surface mb-1">{s.name[language]}</div>
                    <div className="text-[10px] text-outline font-semibold mb-2">Quadra {s.quadra}</div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {s.description[language]}
                    </p>
                  </M3Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Attitudinal Psyche Section */}
        {activeCategory === 'attitudinal_psyche' && (
          <div className="space-y-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {filteredAP.map(([type, arch]) => (
                  <div key={type} className="p-3 rounded-m3-md bg-surface-container-high border border-outline-variant/60">
                    <div className="text-sm font-black text-primary">{type}</div>
                    <div className="text-xs font-bold text-on-surface mb-1">{arch.title[language]}</div>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">{arch.description[language]}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Big 5 / SLOAN Section */}
        {activeCategory === 'big5' && (
          filteredBig5.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {filteredBig5.map((dim) => (
                  <div key={dim.code} className="p-4 rounded-m3-lg bg-surface-container border border-outline-variant">
                    <h4 className="font-bold text-sm text-primary mb-1">{dim.name[language]}</h4>
                    <p className="text-xs text-on-surface-variant mb-2">{dim.description[language]}</p>
                    <div className="text-[11px] space-y-1">
                      <div><span className="font-bold text-on-surface">{dim.highPole.letter}:</span> {dim.highPole.trait[language]}</div>
                      <div><span className="font-bold text-on-surface">{dim.lowPole.letter}:</span> {dim.lowPole.trait[language]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        {/* Alignment Section */}
        {activeCategory === 'alignment' && (
          filteredAlignment.length === 0 ? (
            <NoResultsReset onReset={() => setSearchQuery('')} language={language} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {filteredAlignment.map((al) => (
                <M3Card key={al.alignment} variant="outlined" className="p-5 bg-surface-container">
                  <span className="text-lg font-black text-primary">{al.alignment}</span>
                  <h3 className="font-bold text-sm text-on-surface mt-1 mb-1">{al.title[language]}</h3>
                  <p className="text-xs italic text-outline mb-2">"{al.motto[language]}"</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-2">
                    {al.description[language]}
                  </p>
                  <div className="text-[11px] text-outline">
                    <span className="font-bold">Arketipe: </span>
                    <span>{al.archetypes[0][language]}</span>
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
