import { TestMetadata } from '../types';

export const TESTS_METADATA: TestMetadata[] = [
  {
    id: 'mbti',
    title: {
      id: 'MBTI (16 Tipe Kepribadian)',
      en: 'MBTI (16 Personality Types)',
    },
    subtitle: {
      id: 'Myers-Briggs Type Indicator',
      en: 'Myers-Briggs Type Indicator',
    },
    icon: 'psychology',
    badge: '16 Types',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'primary',
    summary: {
      id: 'Memetakan preferensi kognitif Anda dalam 4 dimensi: Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, dan Judging/Perceiving.',
      en: 'Maps your cognitive preferences across 4 dichotomies: Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, and Judging/Perceiving.',
    },
  },
  {
    id: 'enneagram',
    title: {
      id: 'Enneagram & Tritype',
      en: 'Enneagram & Tritype',
    },
    subtitle: {
      id: '9 Tipe Motivasi Jiwa & 3 Pusat Kecerdasan',
      en: '9 Core Soul Drives & 3 Intelligence Centers',
    },
    icon: 'token',
    badge: '9 Types & Tritype',
    estMinutes: 4,
    questionCount: 18,
    colorScheme: 'secondary',
    summary: {
      id: 'Mengungkap luka dasar, fobia inti, sayap (wing), serta kombinasi Tritype unik dari Pusat Insting (Gut), Hati (Heart), dan Kepala (Head).',
      en: 'Uncovers your core fears, primary wing, and Tritype synthesis uniting the Gut, Heart, and Head centers.',
    },
  },
  {
    id: 'instinct',
    title: {
      id: 'Instinctual Variant (IV)',
      en: 'Instinctual Variant (IV)',
    },
    subtitle: {
      id: 'Subtipe Biologis: sp / so / sx',
      en: 'Biological Subtypes: sp / so / sx',
    },
    icon: 'vital_signs',
    badge: 'Subtypes',
    estMinutes: 2,
    questionCount: 12,
    colorScheme: 'tertiary',
    summary: {
      id: 'Mengidentifikasi prioritas energi hidup: Self-Preservation (sp), Social (so), atau Sexual/One-to-One (sx) beserta blindspot Anda.',
      en: 'Pinpoints your instinctual stacking priority: Self-Preservation, Social, or Sexual/One-to-One along with your shadow blindspot.',
    },
  },
  {
    id: 'jungian',
    title: {
      id: 'Classic Jungian Functions',
      en: 'Classic Jungian Functions',
    },
    subtitle: {
      id: '8 Fungsi Kognitif Asli Carl Gustav Jung',
      en: 'Carl Jung’s 8 Original Cognitive Functions',
    },
    icon: 'hub',
    badge: '8 Functions',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'primary',
    summary: {
      id: 'Mengukur kekuatan objektif 8 fungsi kognitif: Ti, Te, Fi, Fe, Ni, Ne, Si, Se untuk menentukan fungsi Dominan dan Auxiliary Anda.',
      en: 'Measures your empirical activation of the 8 cognitive functions to establish your authentic Jungian hierarchy.',
    },
  },
  {
    id: 'socionics',
    title: {
      id: 'Socionics (Model A)',
      en: 'Socionics (Model A)',
    },
    subtitle: {
      id: 'Metabolisme Informasi & 4 Quadra',
      en: 'Information Metabolism & 4 Quadras',
    },
    icon: 'account_tree',
    badge: '16 Sociotypes',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'secondary',
    summary: {
      id: 'Sistem kepribadian Eropa Timur yang menganalisis pertukaran informasi psikologis dan menempatkan Anda dalam Quadra (Alpha, Beta, Gamma, Delta).',
      en: 'Eastern European typology analyzing information exchange, communication dynamics, and your Quadra allegiance.',
    },
  },
  {
    id: 'attitudinal_psyche',
    title: {
      id: 'Attitudinal Psyche (AP)',
      en: 'Attitudinal Psyche (AP)',
    },
    subtitle: {
      id: 'Sikap terhadap Volition, Logic, Emotion & Physics',
      en: 'Attitudes to Volition, Logic, Emotion & Physics',
    },
    icon: 'diamond',
    badge: '24 Types',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'tertiary',
    summary: {
      id: 'Menentukan hierarki sikap Anda terhadap Kemauan (V), Logika (L), Emosi (E), dan Materi Fisik (F/P) dari posisi 1 hingga 4 (contoh: VLEF).',
      en: 'Evaluates your hierarchy of confidence and openness across Volition, Logic, Emotion, and Physics into a 4-letter type.',
    },
  },
  {
    id: 'big5',
    title: {
      id: 'Big Five & SLOAN',
      en: 'Big Five & SLOAN',
    },
    subtitle: {
      id: 'Model Kepribadian Ilmiah Global OCEAN',
      en: 'Standard Scientific OCEAN / SLOAN Model',
    },
    icon: 'analytics',
    badge: 'SLOAN Code',
    estMinutes: 3,
    questionCount: 15,
    colorScheme: 'primary',
    summary: {
      id: 'Standar emas psikologi modern: Extraversion (S/R), Neuroticism (L/C), Conscientiousness (O/U), Agreeableness (A/E), dan Openness (I/N).',
      en: 'The gold standard in academic trait psychology mapping your 5 core factors into a precise SLOAN code (e.g., RCOAI).',
    },
  },
  {
    id: 'alignment',
    title: {
      id: 'Moral Alignment (D&D Grid)',
      en: 'Moral Alignment (D&D Grid)',
    },
    subtitle: {
      id: 'Matriks 3x3 Keteraturan vs Moralitas',
      en: '3x3 Matrix: Order vs Morality',
    },
    icon: 'balance',
    badge: '3x3 Grid',
    estMinutes: 2,
    questionCount: 12,
    colorScheme: 'secondary',
    summary: {
      id: 'Menentukan kompas etika Anda pada sumbu Hukum/Kekacauan (Lawful/Chaotic) dan Kebaikan/Kejahatan (Good/Evil).',
      en: 'Positions your ethical philosophy on the dual axes of Order (Lawful/Chaotic) and Morality (Good/Evil).',
    },
  },
];
