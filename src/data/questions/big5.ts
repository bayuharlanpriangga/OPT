import { Question } from '../../types';

export const BIG5_QUESTIONS: Question[] = [
  // Extraversion (Social vs Reserved)
  {
    id: 'b5_e_1',
    testType: 'big5',
    dimension: 'extraversion',
    polarity: 1, // Social
    text: {
      id: 'Saya adalah orang yang ramah, ekspresif, dan mudah mencairkan suasana di tengah keramaian.',
      en: 'I am outgoing, expressive, and quickly warm up the atmosphere in any social gathering.',
    },
  },
  {
    id: 'b5_e_2',
    testType: 'big5',
    dimension: 'extraversion',
    polarity: -1, // Reserved
    text: {
      id: 'Saya cenderung pendiam, menjaga jarak dalam percakapan santai, dan tidak suka menjadi pusat perhatian.',
      en: 'I tend to keep to myself, avoid small talk, and feel uncomfortable being in the spotlight.',
    },
  },
  {
    id: 'b5_e_3',
    testType: 'big5',
    dimension: 'extraversion',
    polarity: 1, // Social
    text: {
      id: 'Saya menikmati hari-hari yang penuh dengan percakapan, aktivitas ramai, dan interaksi tanpa henti.',
      en: 'I thrive during days packed with energetic conversations, buzz, and constant human contact.',
    },
  },

  // Neuroticism (Limbic vs Calm)
  {
    id: 'b5_n_1',
    testType: 'big5',
    dimension: 'neuroticism',
    polarity: 1, // Limbic
    text: {
      id: 'Saya sering merasa cemas, gelisah, atau khawatir berlebihan terhadap hal-hal yang mungkin salah.',
      en: 'I frequently experience anxiety, inner tension, and worry over things that could go awry.',
    },
  },
  {
    id: 'b5_n_2',
    testType: 'big5',
    dimension: 'neuroticism',
    polarity: -1, // Calm
    text: {
      id: 'Dalam situasi krisis atau tekanan berat, saya tetap berkepala dingin dan emosi saya sangat stabil.',
      en: 'During emergencies or heavy pressure, I stay remarkably unflappable and composed.',
    },
  },
  {
    id: 'b5_n_3',
    testType: 'big5',
    dimension: 'neuroticism',
    polarity: 1, // Limbic
    text: {
      id: 'Suasana hati saya mudah terpengaruh oleh kritik kecil atau kekecewaan sehari-hari.',
      en: 'My emotional equilibrium is easily destabilized by minor criticism or unexpected setbacks.',
    },
  },

  // Conscientiousness (Organized vs Unstructured)
  {
    id: 'b5_c_1',
    testType: 'big5',
    dimension: 'conscientiousness',
    polarity: 1, // Organized
    text: {
      id: 'Saya sangat disiplin, menyelesaikan tugas sebelum waktunya, dan menjaga kerapian barang-barang saya.',
      en: 'I am highly disciplined, complete tasks well ahead of deadlines, and keep my spaces pristine.',
    },
  },
  {
    id: 'b5_c_2',
    testType: 'big5',
    dimension: 'conscientiousness',
    polarity: -1, // Unstructured
    text: {
      id: 'Saya sering menunda pekerjaan hingga menit-menit terakhir dan tidak terlalu mementingkan rencana kaku.',
      en: 'I procrastinate until the final hour and prefer improvising over adhering to rigid plans.',
    },
  },
  {
    id: 'b5_c_3',
    testType: 'big5',
    dimension: 'conscientiousness',
    polarity: 1, // Organized
    text: {
      id: 'Bekerja dengan teliti, sistematis, dan bertanggung jawab penuh adalah etos kerja mendasar saya.',
      en: 'Working with rigorous thoroughness, systematic precision, and dependability is second nature to me.',
    },
  },

  // Agreeableness (Accommodating vs Egocentric)
  {
    id: 'b5_a_1',
    testType: 'big5',
    dimension: 'agreeableness',
    polarity: 1, // Accommodating
    text: {
      id: 'Saya tulus mempercayai kebaikan orang lain dan bersedia mengalah demi kepentingan bersama.',
      en: 'I sincerely believe in people’s good intentions and willingly compromise for group welfare.',
    },
  },
  {
    id: 'b5_a_2',
    testType: 'big5',
    dimension: 'agreeableness',
    polarity: -1, // Egocentric
    text: {
      id: 'Saya selalu bersikap skeptis terhadap motif orang lain dan mendahulukan kepentingan pribadi di atas segalanya.',
      en: 'I remain skeptical of others’ motives and fiercely defend my self-interest first.',
    },
  },
  {
    id: 'b5_a_3',
    testType: 'big5',
    dimension: 'agreeableness',
    polarity: 1, // Accommodating
    text: {
      id: 'Membantu sesama dan memperlakukan setiap orang dengan kelembutan adalah prinsip moral hidup saya.',
      en: 'Being supportive, treating everyone with kindness, and extending grace is a core life tenet.',
    },
  },

  // Openness (Inquisitive vs Non-curious)
  {
    id: 'b5_o_1',
    testType: 'big5',
    dimension: 'openness',
    polarity: 1, // Inquisitive
    text: {
      id: 'Saya memiliki rasa ingin tahu intelektual yang sangat tinggi terhadap sains, seni, filosofi, dan budaya asing.',
      en: 'I have intense intellectual curiosity regarding science, art, philosophy, and unfamiliar cultures.',
    },
  },
  {
    id: 'b5_o_2',
    testType: 'big5',
    dimension: 'openness',
    polarity: -1, // Non-curious
    text: {
      id: 'Saya lebih menyukai hal-hal praktis dan konvensional daripada membicarakan teori abstrak yang melayang-layang.',
      en: 'I prefer concrete, conventional matters over speculating about abstract or eccentric concepts.',
    },
  },
  {
    id: 'b5_o_3',
    testType: 'big5',
    dimension: 'openness',
    polarity: 1, // Inquisitive
    text: {
      id: 'Imajinasi saya sangat aktif dan saya selalu terbuka mengeksplorasi cara pandang baru yang tidak lazim.',
      en: 'I enjoy an active imagination and continually welcome novel, unconventional paradigms.',
    },
  },
];
