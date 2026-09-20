import { Question } from '../../types';

export const JUNGIAN_QUESTIONS: Question[] = [
  // Extraverted Intuition (Ne)
  {
    id: 'jung_ne_1',
    testType: 'jungian',
    dimension: 'Ne',
    polarity: 1,
    text: {
      id: 'Satu ide kecil dapat memicu puluhan kemungkinan bercabang dan skenario kreatif baru dalam sekejap.',
      en: 'A single spark of an idea instantly blossoms into dozens of branching creative concepts and alternate avenues.',
    },
  },
  {
    id: 'jung_ne_2',
    testType: 'jungian',
    dimension: 'Ne',
    polarity: 1,
    text: {
      id: 'Saya suka menghubungkan konsep-konsep dari bidang yang sama sekali tidak berhubungan untuk menemukan ide segar.',
      en: 'I love connecting radically disparate paradigms to uncover surprising cross-pollinated insights.',
    },
  },

  // Introverted Intuition (Ni)
  {
    id: 'jung_ni_1',
    testType: 'jungian',
    dimension: 'Ni',
    polarity: 1,
    text: {
      id: 'Saya sering mengalami kilasan firasat (eureka) yang tiba-tiba mengungkap ke mana arah suatu peristiwa bermuara.',
      en: 'I frequently experience sudden intuitive flashes (epiphanies) revealing precisely where a future trajectory leads.',
    },
  },
  {
    id: 'jung_ni_2',
    testType: 'jungian',
    dimension: 'Ni',
    polarity: 1,
    text: {
      id: 'Pikiran saya bekerja dengan mereduksi kerumitan menjadi satu visi atau pola simbolik mendalam.',
      en: 'My cognition instinctively synthesizes messy complexity down into one cohesive, underlying master pattern.',
    },
  },

  // Extraverted Sensing (Se)
  {
    id: 'jung_se_1',
    testType: 'jungian',
    dimension: 'Se',
    polarity: 1,
    text: {
      id: 'Saya sepenuhnya hadir di momen saat ini, sangat responsif terhadap perubahan fisik di sekitar, dan cepat bertindak.',
      en: 'I am hyper-present in the sensory moment, instantly reading physical reality and reacting without hesitation.',
    },
  },
  {
    id: 'jung_se_2',
    testType: 'jungian',
    dimension: 'Se',
    polarity: 1,
    text: {
      id: 'Saya menikmati tantangan langsung, sensasi kinestetik, dan mengeksplorasi dunia lewat panca indra.',
      en: 'I savor tactile immersion, aesthetic richness, and actively manipulating real-world surroundings.',
    },
  },

  // Introverted Sensing (Si)
  {
    id: 'jung_si_1',
    testType: 'jungian',
    dimension: 'Si',
    polarity: 1,
    text: {
      id: 'Saya secara otomatis membandingkan pengalaman saat ini dengan ingatan detail dan preseden masa lalu.',
      en: 'I automatically catalog and cross-reference present situations against detailed precedents and lived history.',
    },
  },
  {
    id: 'jung_si_2',
    testType: 'jungian',
    dimension: 'Si',
    polarity: 1,
    text: {
      id: 'Saya menghargai kontinuitas, stabilitas metode yang telah teruji, dan ketelitian terhadap detail faktual.',
      en: 'I value proven methodologies, internal bodily rhythms, and meticulous adherence to verified procedures.',
    },
  },

  // Extraverted Thinking (Te)
  {
    id: 'jung_te_1',
    testType: 'jungian',
    dimension: 'Te',
    polarity: 1,
    text: {
      id: 'Saya fokus pada efisiensi kerja, pengorganisasian sumber daya, dan pencapaian hasil terukur secara pragmatis.',
      en: 'I relentlessly optimize empirical workflow, marshal resources, and prioritize tangible, quantifiable output.',
    },
  },
  {
    id: 'jung_te_2',
    testType: 'jungian',
    dimension: 'Te',
    polarity: 1,
    text: {
      id: 'Kebenaran bagi saya diuji dari efektivitas penerapannya di dunia nyata dan bukti nyata yang dapat diverifikasi.',
      en: 'Truth is best validated through measurable utility, objective benchmarks, and pragmatic execution.',
    },
  },

  // Introverted Thinking (Ti)
  {
    id: 'jung_ti_1',
    testType: 'jungian',
    dimension: 'Ti',
    polarity: 1,
    text: {
      id: 'Saya senang membongkar konsep hingga ke prinsip dasarnya untuk membangun kerangka logika internal yang presisi.',
      en: 'I deconstruct ideas down to first principles to engineer an elegant, internally consistent mental framework.',
    },
  },
  {
    id: 'jung_ti_2',
    testType: 'jungian',
    dimension: 'Ti',
    polarity: 1,
    text: {
      id: 'Saya sangat terganggu oleh ketidakkonsistenan argumen, meskipun argumen tersebut tampak populer atau berhasil.',
      en: 'I am instinctively repelled by cognitive incoherence, regardless of how commercially successful or popular it seems.',
    },
  },

  // Extraverted Feeling (Fe)
  {
    id: 'jung_fe_1',
    testType: 'jungian',
    dimension: 'Fe',
    polarity: 1,
    text: {
      id: 'Saya dapat dengan mudah membaca dan membentuk suasana emosional ruangan agar semua orang merasa nyaman dan bersatu.',
      en: 'I instinctively read and modulate the communal emotional climate to foster collective harmony and warmth.',
    },
  },
  {
    id: 'jung_fe_2',
    testType: 'jungian',
    dimension: 'Fe',
    polarity: 1,
    text: {
      id: 'Nilai-nilai etika sosial dan kesepakatan moral bersama terasa sangat krusial bagi kesejahteraan kita semua.',
      en: 'Shared communal values, empathetic social bonds, and relational consideration take top priority for me.',
    },
  },

  // Introverted Feeling (Fi)
  {
    id: 'jung_fi_1',
    testType: 'jungian',
    dimension: 'Fi',
    polarity: 1,
    text: {
      id: 'Saya memiliki kompas moral batin yang sangat kokoh dan tidak akan saya korbankan demi menyenangkan siapapun.',
      en: 'I possess an unshakeable inner moral compass that I refuse to compromise for outside validation.',
    },
  },
  {
    id: 'jung_fi_2',
    testType: 'jungian',
    dimension: 'Fi',
    polarity: 1,
    text: {
      id: 'Saya sangat menghargai kejujuran emosi yang autentik dan merasakan empati mendalam terhadap penderitaan individu.',
      en: 'I honor raw emotional truth, authenticity, and resonate profoundly with individual human suffering.',
    },
  },
];
