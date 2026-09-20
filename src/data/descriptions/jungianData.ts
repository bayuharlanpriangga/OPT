import { LocalizedString } from '../../types';

export interface JungianFunctionInfo {
  code: string;
  name: LocalizedString;
  type: 'Perceiving' | 'Judging';
  attitude: 'Introverted' | 'Extraverted';
  description: LocalizedString;
  keywords: LocalizedString[];
}

export const JUNGIAN_FUNCTIONS_INFO: Record<string, JungianFunctionInfo> = {
  Ti: {
    code: 'Ti',
    name: { id: 'Introverted Thinking (Pikiran Kedalam)', en: 'Introverted Thinking' },
    type: 'Judging',
    attitude: 'Introverted',
    description: {
      id: 'Menganalisis prinsip-prinsip fundamental, membangun kerangka logika internal yang konsisten, dan membedah esensi suatu konsep secara presisi murni.',
      en: 'Deconstructs first principles, builds coherent internal logical frameworks, and demands exacting conceptual precision.',
    },
    keywords: [
      { id: 'Presisi Logis', en: 'Logical Precision' },
      { id: 'Prinsip Dasar', en: 'First Principles' },
      { id: 'Kerangka Mental', en: 'Mental Architecture' },
    ],
  },
  Te: {
    code: 'Te',
    name: { id: 'Extraverted Thinking (Pikiran Keluar)', en: 'Extraverted Thinking' },
    type: 'Judging',
    attitude: 'Extraverted',
    description: {
      id: 'Mengorganisir lingkungan luar secara empiris, memaksimalkan efisiensi sistem, dan mengeksekusi rencana dengan tolak ukur terukur.',
      en: 'Organizes the external environment empirically, optimizes workflows, and executes goals with measurable benchmarks.',
    },
    keywords: [
      { id: 'Efisiensi Sistem', en: 'System Efficiency' },
      { id: 'Bukti Empiris', en: 'Empirical Evidence' },
      { id: 'Eksekusi Taktis', en: 'Tactical Execution' },
    ],
  },
  Fi: {
    code: 'Fi',
    name: { id: 'Introverted Feeling (Perasaan Kedalam)', en: 'Introverted Feeling' },
    type: 'Judging',
    attitude: 'Introverted',
    description: {
      id: 'Memelihara kompas moral batin yang murni, menjaga keaslian identitas jiwa, dan peka terhadap penderitaan individu yang tertindas.',
      en: 'Nurtures an uncompromised inner moral compass, guards emotional authenticity, and resonates with individual soul depth.',
    },
    keywords: [
      { id: 'Autentisitas Jiwa', en: 'Soul Authenticity' },
      { id: 'Integritas Moral', en: 'Moral Integrity' },
      { id: 'Empati Batin', en: 'Deep Resonance' },
    ],
  },
  Fe: {
    code: 'Fe',
    name: { id: 'Extraverted Feeling (Perasaan Keluar)', en: 'Extraverted Feeling' },
    type: 'Judging',
    attitude: 'Extraverted',
    description: {
      id: 'Membaca dan memelihara keharmonisan sosial antarpribadi, menyatukan suasana hati kelompok, dan peduli pada etika kemanusiaan bersama.',
      en: 'Attunes to communal emotional climate, orchestrates interpersonal harmony, and promotes relational benevolence.',
    },
    keywords: [
      { id: 'Harmoni Sosial', en: 'Social Harmony' },
      { id: 'Koneksi Relasional', en: 'Relational Warmth' },
      { id: 'Kecerdasan Emosi', en: 'Interpersonal EQ' },
    ],
  },
  Ni: {
    code: 'Ni',
    name: { id: 'Introverted Intuition (Intuisi Kedalam)', en: 'Introverted Intuition' },
    type: 'Perceiving',
    attitude: 'Introverted',
    description: {
      id: 'Menangkap esensi pola simbolik di balik tabir kenyataan, melihat ke mana garis nasib masa depan bermuara, dan mengalami sintesis pemikiran kilat.',
      en: 'Synthesizes subconscious symbols into visionary master trajectories, predicting emergent future outcomes.',
    },
    keywords: [
      { id: 'Visi Masa Depan', en: 'Visionary Foresight' },
      { id: 'Sintesis Simbolik', en: 'Symbolic Synthesis' },
      { id: 'Wawasan Eureka', en: 'Epiphany Insight' },
    ],
  },
  Ne: {
    code: 'Ne',
    name: { id: 'Extraverted Intuition (Intuisi Keluar)', en: 'Extraverted Intuition' },
    type: 'Perceiving',
    attitude: 'Extraverted',
    description: {
      id: 'Mengeksplorasi jalinan kemungkinan baru, mencetuskan ide-ide bercabang tak terbatas, dan menyambungkan konsep-konsep yang tidak biasa.',
      en: 'Explores divergent possibilities, links unrelated concepts, and sparks boundless novel alternatives.',
    },
    keywords: [
      { id: 'Kemungkinan Tak Terbatas', en: 'Infinite Possibilities' },
      { id: 'Brainstorming Liar', en: 'Divergent Ideation' },
      { id: 'Eksplorasi Inovasi', en: 'Novelty Exploration' },
    ],
  },
  Si: {
    code: 'Si',
    name: { id: 'Introverted Sensing (Sensasi Kedalam)', en: 'Introverted Sensing' },
    type: 'Perceiving',
    attitude: 'Introverted',
    description: {
      id: 'Merekam jejak memori detail, merawat kontinuitas tradisi yang teruji, dan peka terhadap sinyal ritme fisik tubuh internal.',
      en: 'Catalogs vivid historical impressions, preserves proven precedent, and tunes into internal somatic equilibria.',
    },
    keywords: [
      { id: 'Memori Historis', en: 'Historical Precedent' },
      { id: 'Stabilitas & Tradisi', en: 'Steady Continuity' },
      { id: 'Detail Presisi', en: 'Somatic Attunement' },
    ],
  },
  Se: {
    code: 'Se',
    name: { id: 'Extraverted Sensing (Sensasi Keluar)', en: 'Extraverted Sensing' },
    type: 'Perceiving',
    attitude: 'Extraverted',
    description: {
      id: 'Melebur sepenuhnya dalam detik ini, tangkas menanggapi rangsangan fisik lingkungan secara langsung, dan menikmati sensasi nyata.',
      en: 'Immerses fearlessly in the kinetic present, takes decisive action in real time, and savors vibrant sensory reality.',
    },
    keywords: [
      { id: 'Aksi Nyata Seketika', en: 'Kinetic Real-Time Action' },
      { id: 'Sensasi Panca Indra', en: 'Sensory Richness' },
      { id: 'Kesiagaan Fisik', en: 'Tactile Presence' },
    ],
  },
};
