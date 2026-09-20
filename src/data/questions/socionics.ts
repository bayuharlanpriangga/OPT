import { Question } from '../../types';

export const SOCIONICS_QUESTIONS: Question[] = [
  // Rationality (j) vs Irrationality (p)
  {
    id: 'soc_rat_1',
    testType: 'socionics',
    dimension: 'soc_rationality',
    polarity: 1, // Rational
    text: {
      id: 'Saya merasa paling tenang ketika ritme hidup saya didorong oleh rencana yang stabil dibanding bergantung pada dorongan mood sesaat.',
      en: 'I function best when my lifestyle follows deliberate decisions rather than fluctuating momentary moods.',
    },
  },
  {
    id: 'soc_rat_2',
    testType: 'socionics',
    dimension: 'soc_rationality',
    polarity: -1, // Irrational
    text: {
      id: 'Saya cenderung fleksibel, bereaksi secara langsung terhadap situasi yang sedang terjadi tanpa memaksakan jadwal kaku.',
      en: 'I prefer adapting opportunistically to changing circumstances rather than adhering to rigid schedules.',
    },
  },
  {
    id: 'soc_rat_3',
    testType: 'socionics',
    dimension: 'soc_rationality',
    polarity: 1, // Rational
    text: {
      id: 'Ketika berinteraksi, saya mengutamakan kejelasan kesepakatan dan kepastian komitmen.',
      en: 'In partnerships, I prioritize reliable agreements and honoring structured commitments.',
    },
  },
  {
    id: 'soc_rat_4',
    testType: 'socionics',
    dimension: 'soc_rationality',
    polarity: -1, // Irrational
    text: {
      id: 'Energi dan produktivitas saya naik-turun dalam gelombang alami daripada garis lurus yang konstan.',
      en: 'My creative energy naturally ebbs and flows in organic waves rather than steady linear output.',
    },
  },

  // Extraversion vs Introversion
  {
    id: 'soc_ei_1',
    testType: 'socionics',
    dimension: 'soc_ei',
    polarity: 1, // E
    text: {
      id: 'Fokus perhatian utama saya selalu tertuju pada objek dan orang-orang di lingkungan luar daripada kondisi internal diri.',
      en: 'My psychic focus naturally gravitates outward toward transforming external objects and people.',
    },
  },
  {
    id: 'soc_ei_2',
    testType: 'socionics',
    dimension: 'soc_ei',
    polarity: -1, // I
    text: {
      id: 'Saya lebih sadar akan hubungan antara diri saya dengan lingkungan, serta menjaga jarak psikologis yang aman.',
      en: 'I am primarily attuned to internal psychological boundaries and my relational distance to things.',
    },
  },
  {
    id: 'soc_ei_3',
    testType: 'socionics',
    dimension: 'soc_ei',
    polarity: 1, // E
    text: {
      id: 'Saya suka menggerakkan lingkungan dan memulai inisiatif baru secara aktif.',
      en: 'I enjoy actively shaping dynamics and boldly initiating outward momentum.',
    },
  },
  {
    id: 'soc_ei_4',
    testType: 'socionics',
    dimension: 'soc_ei',
    polarity: -1, // I
    text: {
      id: 'Saya lebih memilih mencerna informasi secara mendalam di ruang privat sebelum membagikannya.',
      en: 'I prefer quietly synthesizing impressions in solitude before putting them into circulation.',
    },
  },

  // Intuition vs Sensing
  {
    id: 'soc_ns_1',
    testType: 'socionics',
    dimension: 'soc_ns',
    polarity: 1, // N (Intuition)
    text: {
      id: 'Saya terpesona oleh proyeksi masa depan, tren tersembunyi, dan evolusi makna ide abstrak.',
      en: 'I am captivated by historical trajectories, future forecasts, and abstract conceptual paradigms.',
    },
  },
  {
    id: 'soc_ns_2',
    testType: 'socionics',
    dimension: 'soc_ns',
    polarity: -1, // S (Sensing)
    text: {
      id: 'Saya memiliki kepekaan kuat terhadap estetika fisik, kenyamanan ruang, atau penguasaan pengaruh langsung.',
      en: 'I possess strong acumen regarding physical sensations, territorial influence, and tactile reality.',
    },
  },
  {
    id: 'soc_ns_3',
    testType: 'socionics',
    dimension: 'soc_ns',
    polarity: 1, // N
    text: {
      id: 'Saya sering melihat potensi yang belum terwujud dalam diri seseorang atau situasi yang belum terjadi.',
      en: 'I immediately perceive latent potential in people and emergent future possibilities.',
    },
  },
  {
    id: 'soc_ns_4',
    testType: 'socionics',
    dimension: 'soc_ns',
    polarity: -1, // S
    text: {
      id: 'Saya sangat praktis dalam menangani kebutuhan ragawi, materi, dan mempertahankan ruang kekuasaan.',
      en: 'I am grounded in managing physical resources, comfort, health, and tangible force.',
    },
  },

  // Logic vs Ethics
  {
    id: 'soc_tf_1',
    testType: 'socionics',
    dimension: 'soc_tf',
    polarity: 1, // Logic
    text: {
      id: 'Ketika menganalisis sebuah masalah, saya memperlakukannya seperti mekanisme sistem logis yang harus diuraikan.',
      en: 'I dissect complex dilemmas as structural systems and algorithmic causal chains.',
    },
  },
  {
    id: 'soc_tf_2',
    testType: 'socionics',
    dimension: 'soc_tf',
    polarity: -1, // Ethics
    text: {
      id: 'Saya sangat peka terhadap nuansa simpati, relasi antarpribadi, dan ketulusan emosional lawan bicara.',
      en: 'I have keen sensitivity to emotional sincerity, psychological warmth, and interpersonal bonds.',
    },
  },
  {
    id: 'soc_tf_3',
    testType: 'socionics',
    dimension: 'soc_tf',
    polarity: 1, // Logic
    text: {
      id: 'Kebenaran fakta dan analisis objektif harus tetap ditegakkan terlepas dari perasaan emosional siapa pun.',
      en: 'Objective truth and rigorous rationale must take precedence over hurt feelings.',
    },
  },
  {
    id: 'soc_tf_4',
    testType: 'socionics',
    dimension: 'soc_tf',
    polarity: -1, // Ethics
    text: {
      id: 'Kemampuan menginspirasi, menghibur, atau menyatukan suasana hati orang adalah kekuatan terbesar saya.',
      en: 'Inspiring, validating, and shaping the emotional heart of human connections is my true forte.',
    },
  },
];
