import { Question } from '../../types';

export const MBTI_QUESTIONS: Question[] = [
  // Extraversion vs Introversion (EI)
  {
    id: 'mbti_ei_1',
    testType: 'mbti',
    dimension: 'EI',
    polarity: 1, // E
    text: {
      id: 'Saya merasa lebih bersemangat dan bertenaga setelah menghabiskan waktu di tengah banyak orang.',
      en: 'I feel energized and recharged after spending time in a lively group of people.',
    },
  },
  {
    id: 'mbti_ei_2',
    testType: 'mbti',
    dimension: 'EI',
    polarity: -1, // I
    text: {
      id: 'Setelah seharian beraktivitas sosial, saya butuh waktu sendiri dalam keheningan untuk memulihkan energi.',
      en: 'After a long day of social interactions, I require quiet solitary time to recharge my batteries.',
    },
  },
  {
    id: 'mbti_ei_3',
    testType: 'mbti',
    dimension: 'EI',
    polarity: 1, // E
    text: {
      id: 'Saya sering memulai obrolan dengan orang baru di tempat umum atau acara perkumpulan.',
      en: 'I frequently initiate conversations with strangers at gatherings or public spaces.',
    },
  },
  {
    id: 'mbti_ei_4',
    testType: 'mbti',
    dimension: 'EI',
    polarity: -1, // I
    text: {
      id: 'Saya lebih suka memiliki lingkaran pertemanan yang kecil namun sangat mendalam dibanding lingkaran luas yang santai.',
      en: 'I prefer a small, intimate circle of close friends over a broad network of casual acquaintances.',
    },
  },

  // Sensing vs Intuition (SN)
  {
    id: 'mbti_sn_1',
    testType: 'mbti',
    dimension: 'SN',
    polarity: 1, // S
    text: {
      id: 'Saya lebih mempercayai fakta nyata, pengalaman praktis, dan data konkret daripada teori spekulatif.',
      en: 'I trust observable facts, direct experience, and tangible evidence over speculative theories.',
    },
  },
  {
    id: 'mbti_sn_2',
    testType: 'mbti',
    dimension: 'SN',
    polarity: -1, // N
    text: {
      id: 'Pikiran saya sering melayang memikirkan masa depan, filosofi mendalam, dan makna tersembunyi di balik peristiwa.',
      en: 'My mind frequently drifts into pondering future possibilities, underlying patterns, and hidden meanings.',
    },
  },
  {
    id: 'mbti_sn_3',
    testType: 'mbti',
    dimension: 'SN',
    polarity: 1, // S
    text: {
      id: 'Ketika mempelajari sesuatu, saya lebih suka panduan langkah-demi-langkah yang jelas dan terbukti efektif.',
      en: 'When learning, I prefer step-by-step sequential instructions that are practical and proven.',
    },
  },
  {
    id: 'mbti_sn_4',
    testType: 'mbti',
    dimension: 'SN',
    polarity: -1, // N
    text: {
      id: 'Saya lebih bersemangat menghasilkan ide-ide baru yang orisinal daripada sekadar menjalankan rutinitas yang sudah ada.',
      en: 'I am far more thrilled by brainstorming unconventional novel concepts than executing routine tasks.',
    },
  },

  // Thinking vs Feeling (TF)
  {
    id: 'mbti_tf_1',
    testType: 'mbti',
    dimension: 'TF',
    polarity: 1, // T
    text: {
      id: 'Dalam mengambil keputusan penting, saya mengutamakan logika objektif dan keadilan tanpa membiarkan emosi ikut campur.',
      en: 'When making critical decisions, I prioritize objective logic and fairness above emotional sentiment.',
    },
  },
  {
    id: 'mbti_tf_2',
    testType: 'mbti',
    dimension: 'TF',
    polarity: -1, // F
    text: {
      id: 'Saya sangat mempertimbangkan perasaan orang lain dan berusaha menjaga keharmonisan hubungan di atas segalanya.',
      en: 'I deeply consider how decisions impact others and prioritize relational harmony and empathy.',
    },
  },
  {
    id: 'mbti_tf_3',
    testType: 'mbti',
    dimension: 'TF',
    polarity: 1, // T
    text: {
      id: 'Saya tidak ragu mengkritik solusi yang cacat demi mencapai hasil yang paling efektif dan efisien.',
      en: 'I do not hesitate to point out logical flaws in plans if it leads to the most effective solution.',
    },
  },
  {
    id: 'mbti_tf_4',
    testType: 'mbti',
    dimension: 'TF',
    polarity: -1, // F
    text: {
      id: 'Saya mudah merasakan emosi dan suasana hati orang-orang di sekitar saya seolah itu perasaan saya sendiri.',
      en: 'I instinctively absorb and feel the emotional atmosphere and moods of the people around me.',
    },
  },

  // Judging vs Perceiving (JP)
  {
    id: 'mbti_jp_1',
    testType: 'mbti',
    dimension: 'JP',
    polarity: 1, // J
    text: {
      id: 'Saya menyukai jadwal terstruktur, daftar tugas terperinci, dan rencana hidup yang telah ditetapkan sebelumnya.',
      en: 'I thrive with structured daily schedules, organized to-do lists, and clear predetermined plans.',
    },
  },
  {
    id: 'mbti_jp_2',
    testType: 'mbti',
    dimension: 'JP',
    polarity: -1, // P
    text: {
      id: 'Saya lebih menikmati spontanitas dan membiarkan pilihan tetap fleksibel dan terbuka hingga menit terakhir.',
      en: 'I prefer spontaneity and keeping options open and adaptable rather than locked in.',
    },
  },
  {
    id: 'mbti_jp_3',
    testType: 'mbti',
    dimension: 'JP',
    polarity: 1, // J
    text: {
      id: 'Saya merasa tidak tenang jika ada pekerjaan yang tertunda atau tugas yang belum diselesaikan tepat waktu.',
      en: 'I feel uncomfortable when tasks are left lingering or deadlines are handled loosely.',
    },
  },
  {
    id: 'mbti_jp_4',
    testType: 'mbti',
    dimension: 'JP',
    polarity: -1, // P
    text: {
      id: 'Saya sering kali bekerja lebih kreatif dan produktif di bawah dorongan batas waktu (deadline) yang mendesak.',
      en: 'I often produce my most creative work in spontaneous bursts of inspiration under pressure.',
    },
  },
];
