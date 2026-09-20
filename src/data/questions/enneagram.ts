import { Question } from '../../types';

export const ENNEAGRAM_QUESTIONS: Question[] = [
  // Type 1 - Reformer / Perfectionist (Gut)
  {
    id: 'enn_1_1',
    testType: 'enneagram',
    dimension: 'type1',
    category: 'gut',
    polarity: 1,
    text: {
      id: 'Saya memiliki dorongan kuat dari dalam diri untuk selalu melakukan hal yang benar, adil, dan tanpa cacat.',
      en: 'I hold an intense internal standard to always do what is right, ethical, and faultless.',
    },
  },
  {
    id: 'enn_1_2',
    testType: 'enneagram',
    dimension: 'type1',
    category: 'gut',
    polarity: 1,
    text: {
      id: 'Saya sering merasa jengkel ketika melihat orang lain mengabaikan aturan atau bekerja setengah-setengah.',
      en: 'I am easily irked when witnessing laziness, carelessness, or blatant disregard for standards.',
    },
  },

  // Type 2 - Helper / Giver (Heart)
  {
    id: 'enn_2_1',
    testType: 'enneagram',
    dimension: 'type2',
    category: 'heart',
    polarity: 1,
    text: {
      id: 'Saya secara naluriah peka terhadap apa yang dibutuhkan orang lain dan senang menawarkan bantuan sebelum diminta.',
      en: 'I naturally anticipate what others need and love extending warm support before they even ask.',
    },
  },
  {
    id: 'enn_2_2',
    testType: 'enneagram',
    dimension: 'type2',
    category: 'heart',
    polarity: 1,
    text: {
      id: 'Sangat penting bagi saya untuk dicintai, dihargai, dan merasa dibutuhkan oleh orang-orang terdekat.',
      en: 'It is deeply important for me to feel loved, cherished, and indispensable to those I care about.',
    },
  },

  // Type 3 - Achiever / Performer (Heart)
  {
    id: 'enn_3_1',
    testType: 'enneagram',
    dimension: 'type3',
    category: 'heart',
    polarity: 1,
    text: {
      id: 'Saya sangat terdorong oleh target, pencapaian prestasi, dan pengakuan atas keberhasilan saya.',
      en: 'I am intensely driven by ambitious goals, tangible milestones, and public recognition for my success.',
    },
  },
  {
    id: 'enn_3_2',
    testType: 'enneagram',
    dimension: 'type3',
    category: 'heart',
    polarity: 1,
    text: {
      id: 'Saya sangat memperhatikan citra profesional dan bagaimana orang lain memandang kompetensi saya.',
      en: 'I place great emphasis on projecting a polished, capable, and admirable image to the world.',
    },
  },

  // Type 4 - Individualist / Romantic (Heart)
  {
    id: 'enn_4_1',
    testType: 'enneagram',
    dimension: 'type4',
    category: 'heart',
    polarity: 1,
    text: {
      id: 'Saya sering merasa ada yang hilang dalam diri saya dan merasa berbeda atau terasing dari kebanyakan orang.',
      en: 'I often feel fundamentally distinct, misunderstood, or that something essential is missing from my life.',
    },
  },
  {
    id: 'enn_4_2',
    testType: 'enneagram',
    dimension: 'type4',
    category: 'heart',
    polarity: 1,
    text: {
      id: 'Keaslian diri (autentisitas) dan kedalaman ekspresi emosional jauh lebih berharga bagi saya daripada kepatuhan norma sosial.',
      en: 'Authentic self-expression and emotional depth matter far more to me than fitting into mundane social norms.',
    },
  },

  // Type 5 - Investigator / Observer (Head)
  {
    id: 'enn_5_1',
    testType: 'enneagram',
    dimension: 'type5',
    category: 'head',
    polarity: 1,
    text: {
      id: 'Saya sangat menjaga privasi energi mental saya dan lebih suka mengamati dari kejauhan sebelum terlibat.',
      en: 'I jealously guard my personal time and mental energy, preferring detached observation over direct immersion.',
    },
  },
  {
    id: 'enn_5_2',
    testType: 'enneagram',
    dimension: 'type5',
    category: 'head',
    polarity: 1,
    text: {
      id: 'Saya merasa harus menguasai pengetahuan dan keahlian mendalam agar merasa aman menghadapi tantangan dunia.',
      en: 'I feel a strong imperative to master specialized knowledge and systems before feeling competent to act.',
    },
  },

  // Type 6 - Loyalist / Skeptic (Head)
  {
    id: 'enn_6_1',
    testType: 'enneagram',
    dimension: 'type6',
    category: 'head',
    polarity: 1,
    text: {
      id: 'Pikiran saya otomatis memprediksi skenario terburuk dan kemungkinan bahaya demi mempersiapkan diri.',
      en: 'My mind automatically anticipates worst-case scenarios and potential vulnerabilities to prepare ahead.',
    },
  },
  {
    id: 'enn_6_2',
    testType: 'enneagram',
    dimension: 'type6',
    category: 'head',
    polarity: 1,
    text: {
      id: 'Kesetiaan, kepercayaan timbal balik, dan komitmen bersama adalah pilar paling utama dalam hubungan saya.',
      en: 'Loyalty, mutual trustworthiness, and steadfast commitment are the core bedrock of my alliances.',
    },
  },

  // Type 7 - Enthusiast / Epicure (Head)
  {
    id: 'enn_7_1',
    testType: 'enneagram',
    dimension: 'type7',
    category: 'head',
    polarity: 1,
    text: {
      id: 'Saya selalu mencari pengalaman baru yang seru, ide-ide menyenangkan, dan menghindari rasa bosan atau terkekang.',
      en: 'I crave thrilling experiences, novel adventures, and abhor feelings of confinement, pain, or boredom.',
    },
  },
  {
    id: 'enn_7_2',
    testType: 'enneagram',
    dimension: 'type7',
    category: 'head',
    polarity: 1,
    text: {
      id: 'Saya cenderung menyukai banyak minat sekaligus dan cepat beralih ke hal menarik berikutnya.',
      en: 'I balance numerous simultaneous passions and quickly pivot to the next exciting endeavor.',
    },
  },

  // Type 8 - Challenger / Protector (Gut)
  {
    id: 'enn_8_1',
    testType: 'enneagram',
    dimension: 'type8',
    category: 'gut',
    polarity: 1,
    text: {
      id: 'Saya tidak takut pada konfrontasi langsung dan selalu siap membela diri maupun orang yang tertindas.',
      en: 'I do not back down from confrontation and readily step forward to protect the vulnerable against injustice.',
    },
  },
  {
    id: 'enn_8_2',
    testType: 'enneagram',
    dimension: 'type8',
    category: 'gut',
    polarity: 1,
    text: {
      id: 'Saya benci dikontrol atau didikte oleh orang lain; saya harus memegang kendali penuh atas nasib saya sendiri.',
      en: 'I despise being controlled or manipulated; I insist on maintaining total autonomy over my decisions.',
    },
  },

  // Type 9 - Peacemaker / Mediator (Gut)
  {
    id: 'enn_9_1',
    testType: 'enneagram',
    dimension: 'type9',
    category: 'gut',
    polarity: 1,
    text: {
      id: 'Kedamaian batin dan keharmonisan lingkungan adalah hal terpenting; saya berusaha keras menghindari perselisihan.',
      en: 'Inner serenity and tranquil surroundings are vital to me; I go to great lengths to preserve peace and avoid conflict.',
    },
  },
  {
    id: 'enn_9_2',
    testType: 'enneagram',
    dimension: 'type9',
    category: 'gut',
    polarity: 1,
    text: {
      id: 'Saya mudah memahami berbagai sudut pandang orang lain yang berlawanan hingga terkadang lupa akan keinginan saya sendiri.',
      en: 'I naturally empathize with opposing viewpoints so easily that I sometimes lose sight of my own desires.',
    },
  },
];
