import { TestMetadata } from '../types';

export const TESTS_METADATA: TestMetadata[] = [
  {
    id: 'mbti',
    title: {
      id: 'MBTI (16 Tipe Kepribadian)',
      en: 'MBTI (16 Personalities)',
    },
    subtitle: {
      id: 'Myers-Briggs Type Indicator: E/I, S/N, T/F, J/P',
      en: 'Myers-Briggs Type Indicator: E/I, S/N, T/F, J/P',
    },
    icon: 'psychology',
    badge: '16 Types',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'primary',
    summary: {
      id: 'Menganalisis cara Anda memproses energi, mengumpulkan informasi, mengambil keputusan, dan berinteraksi dengan dunia luar.',
      en: 'Analyzes how you direct energy, take in information, make decisions, and organize your outer world.',
    },
  },
  {
    id: 'enneagram',
    title: {
      id: 'Enneagram & Tritype',
      en: 'Enneagram & Tritype',
    },
    subtitle: {
      id: '9 Core Motivasi, Sayap (Wings) & 3 Pusat Kecerdasan',
      en: '9 Core Motivations, Wings & 3 Centers of Intelligence',
    },
    icon: 'hub',
    badge: 'Core + Tritype',
    estMinutes: 4,
    questionCount: 18,
    colorScheme: 'secondary',
    summary: {
      id: 'Mengungkap luka dasar, ketakutan bawah sadar, fiksasi mental, serta formula Tritype unik dari Pusat Insting, Hati, dan Kepala.',
      en: 'Unveils core desires, subconscious fears, fixation patterns, and your unique Tritype across Gut, Heart, and Head centers.',
    },
  },
  {
    id: 'instinct',
    title: {
      id: 'Instinctual Variant (IV)',
      en: 'Instinctual Variant (IV)',
    },
    subtitle: {
      id: 'Subtipe Naluri: Self-Preservation, Social, Sexual',
      en: 'Instinctual Subtypes: Self-Preservation, Social, Sexual',
    },
    icon: 'fingerprint',
    badge: 'sp / so / sx',
    estMinutes: 2,
    questionCount: 12,
    colorScheme: 'tertiary',
    summary: {
      id: 'Menentukan urutan prioritas energi biologis Anda: sp (bertahan hidup), so (kelompok/koneksi), atau sx (intensitas/intimasi).',
      en: 'Identifies the hierarchical stacking of your primal biological energies: self-preservation, social, or one-to-one sexual intensity.',
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
      en: 'Carl Gustav Jung’s Original 8 Cognitive Functions',
    },
    icon: 'neurology',
    badge: 'Ne Ni Se Si Te Ti Fe Fi',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'primary',
    summary: {
      id: 'Mengevaluasi kekuatan murni dari 8 fungsi kognitif (Ti, Te, Fi, Fe, Ni, Ne, Si, Se) serta struktur Dominan, Auxiliary, dan Inferior.',
      en: 'Evaluates empirical strength across all 8 cognitive functions and plots your authentic Dominant, Auxiliary, and Inferior hierarchy.',
    },
  },
  {
    id: 'socionics',
    title: {
      id: 'Socionics & Quadra',
      en: 'Socionics & Quadra',
    },
    subtitle: {
      id: '16 Sosiotipe & 4 Quadra (Alpha, Beta, Gamma, Delta)',
      en: '16 Sociotypes & 4 Quadras (Alpha, Beta, Gamma, Delta)',
    },
    icon: 'groups_3',
    badge: 'Model A & Quadras',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'secondary',
    summary: {
      id: 'Psikologi informasi Eropa Timur (Model A) yang memetakan metabolisme informasi psikis dan dinamika inter-relasi antar tipe.',
      en: 'Eastern European information metabolism system (Model A) mapping psychological information processing and inter-type dynamics.',
    },
  },
  {
    id: 'attitudinal_psyche',
    title: {
      id: 'Attitudinal Psyche (AP)',
      en: 'Attitudinal Psyche (AP)',
    },
    subtitle: {
      id: '4 Aspek: Kemauan, Logika, Emosi, Fisik (V, L, E, F)',
      en: '4 Aspects: Volition, Logic, Emotion, Physics (V, L, E, F)',
    },
    icon: 'account_tree',
    badge: '24 Attitudes',
    estMinutes: 3,
    questionCount: 16,
    colorScheme: 'tertiary',
    summary: {
      id: 'Memetakan 4 hierarki sikap (Percaya Diri, Fleksibel, Ragu/Insecure, Masa Bodoh) terhadap Kehendak, Logika, Emosi, dan Fisik.',
      en: 'Categorizes your self-positive/negative and others-positive/negative attitudes across Volition, Logic, Emotion, and Physics.',
    },
  },
  {
    id: 'big5',
    title: {
      id: 'Big Five & SLOAN',
      en: 'Big Five & SLOAN',
    },
    subtitle: {
      id: '5 Dimensi Ilmiah OCEAN & Kode 5 Huruf SLOAN',
      en: '5 Scientific OCEAN Dimensions & 5-Letter SLOAN Code',
    },
    icon: 'bar_chart',
    badge: 'OCEAN / SLOAN',
    estMinutes: 3,
    questionCount: 15,
    colorScheme: 'primary',
    summary: {
      id: 'Standar emas psikometri ilmiah modern untuk mengukur Extraversion, Neuroticism, Conscientiousness, Agreeableness, dan Openness.',
      en: 'The empirical scientific gold standard measuring Social/Reserved, Limbic/Calm, Organized/Unstructured, Accommodating/Egocentric, and Inquisitive.',
    },
  },
  {
    id: 'alignment',
    title: {
      id: 'Moral Alignment',
      en: 'Moral Alignment',
    },
    subtitle: {
      id: 'Matriks 3x3: Keteraturan vs Kekacauan & Kebaikan vs Kejahatan',
      en: '3x3 Matrix: Order vs Chaos & Good vs Evil',
    },
    icon: 'balance',
    badge: '3x3 D&D Matrix',
    estMinutes: 2,
    questionCount: 12,
    colorScheme: 'secondary',
    summary: {
      id: 'Menentukan kompas etika dan moralitas Anda dalam kisi 9 kuadran legendaris: Lawful Good hingga Chaotic Evil.',
      en: 'Plots your ethical compass on the classic 9-box spectrum balancing societal rules against internal moral conviction.',
    },
  },
];
