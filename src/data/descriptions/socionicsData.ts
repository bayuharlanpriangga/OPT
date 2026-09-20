import { LocalizedString } from '../../types';

export interface SociotypeInfo {
  code: string;
  mbtiEquivalent: string;
  name: LocalizedString;
  historicalName: string;
  quadra: 'Alpha' | 'Beta' | 'Gamma' | 'Delta';
  club: LocalizedString;
  leadFunction: string;
  creativeFunction: string;
  description: LocalizedString;
}

export const QUADRA_DETAILS: Record<string, { title: LocalizedString; values: LocalizedString; ethos: LocalizedString }> = {
  Alpha: {
    title: { id: 'Quadra Alpha (Pencari & Pemikir Bebas)', en: 'Alpha Quadra (The Seekers)' },
    values: { id: 'Kenyamanan ramah, rasa ingin tahu intelektual, kegembiraan spontan, dan keterbukaan tanpa batas.', en: 'Gentle comfort, intellectual curiosity, joyful warmth, and lighthearted discussion.' },
    ethos: { id: 'Menghargai diskusi ide-ide murni yang santai dan makanan enak tanpa persaingan kekuasaan.', en: 'Fosters open-ended theorizing and cozy camaraderie devoid of power struggles.' },
  },
  Beta: {
    title: { id: 'Quadra Beta (Pejuang & Pembaharu)', en: 'Beta Quadra (The Crusaders)' },
    values: { id: 'Visi ideologis masa depan, kekuatan tekad, intensitas drama emosional, dan hierarki teratur.', en: 'Ideological destiny, willpower, theatrical passion, and disciplined hierarchy.' },
    ethos: { id: 'Menghargai keberanian pengorbanan demi misi luhur kolektif dan dinamika perjuangan bersejarah.', en: 'Celebrates dramatic purpose, collective struggle, and unshakeable group solidarity.' },
  },
  Gamma: {
    title: { id: 'Quadra Gamma (Reformis Praktis)', en: 'Gamma Quadra (The Reformers)' },
    values: { id: 'Pragmatisme ekonomi, kesetiaan individu, efisiensi waktu jangka panjang, dan kemandirian tangguh.', en: 'Empirical productivity, individual loyalty, strategic foresight, and self-reliant grit.' },
    ethos: { id: 'Menghargai kerja keras nyata, pencapaian kompetitif tanpa basa-basi, dan integritas pribadi.', en: 'Values honest commerce, real-world utility, and steadfast personal loyalties.' },
  },
  Delta: {
    title: { id: 'Quadra Delta (Penyempurna Kemanusiaan)', en: 'Delta Quadra (The Completers)' },
    values: { id: 'Pengembangan potensi diri yang tenang, kenyamanan alami, keahlian berkarya, dan toleransi tulus.', en: 'Human potential, gentle craftsmanship, quiet comfort, and authentic personal ethics.' },
    ethos: { id: 'Menghargai kehidupan damai, perbaikan bertahap yang berkelanjutan, dan hubungan saling percaya.', en: 'Nurtures steady self-improvement, peaceful livelihood, and quiet dignity.' },
  },
};

export const SOCIOTYPES: Record<string, SociotypeInfo> = {
  ILE: {
    code: 'ILE',
    mbtiEquivalent: 'ENTp',
    name: { id: 'Sang Pencari (Seeker)', en: 'The Seeker' },
    historicalName: 'Don Quixote',
    quadra: 'Alpha',
    club: { id: 'Peneliti (Researchers)', en: 'Researchers' },
    leadFunction: 'Ne (I+)',
    creativeFunction: 'Ti (L-)',
    description: {
      id: 'Penuh dengan gagasan revolusioner, antusias meneliti teka-teki alam semesta, dan tidak terikat oleh aturan konvensional.',
      en: 'Fascinated by uncharted frontiers, weaving theoretical frameworks around innovative conceptual possibilities.',
    },
  },
  SEI: {
    code: 'SEI',
    mbtiEquivalent: 'ISFp',
    name: { id: 'Sang Mediator (Mediator)', en: 'The Mediator' },
    historicalName: 'Dumas',
    quadra: 'Alpha',
    club: { id: 'Sosialis (Socials)', en: 'Socials' },
    leadFunction: 'Si (S+)',
    creativeFunction: 'Fe (E-)',
    description: {
      id: 'Ahli dalam menciptakan suasana nyaman, memanjakan indra dengan kehangatan kuliner dan estetika santai penuh tawa.',
      en: 'Master of physical comfort and emotional soothing, cultivating a cozy and joyous ambiance.',
    },
  },
  ESE: {
    code: 'ESE',
    mbtiEquivalent: 'ESFj',
    name: { id: 'Sang Pembangkit Semangat (Enthusiast)', en: 'The Enthusiast' },
    historicalName: 'Hugo',
    quadra: 'Alpha',
    club: { id: 'Sosialis (Socials)', en: 'Socials' },
    leadFunction: 'Fe (E+)',
    creativeFunction: 'Si (S-)',
    description: {
      id: 'Limpahan energi positif yang mengalir deras, menyatukan orang-orang dalam perayaan hangat dan keramahan melimpah.',
      en: 'Radiant fountain of emotional vitality and hospitality, organizing joyful festive community gatherings.',
    },
  },
  LII: {
    code: 'LII',
    mbtiEquivalent: 'INTj',
    name: { id: 'Sang Analis (Analyst)', en: 'The Analyst' },
    historicalName: 'Robespierre',
    quadra: 'Alpha',
    club: { id: 'Peneliti (Researchers)', en: 'Researchers' },
    leadFunction: 'Ti (L+)',
    creativeFunction: 'Ne (I-)',
    description: {
      id: 'Membangun sistem logika universal yang elegan, adil, dan tanpa cela. Berpikir tenang demi kebenaran murni.',
      en: 'Constructs immaculate structural laws and principled universal systems with quiet philosophical rigor.',
    },
  },
  EIE: {
    code: 'EIE',
    mbtiEquivalent: 'ENFj',
    name: { id: 'Sang Mentor / Penasihat (Mentor)', en: 'The Mentor' },
    historicalName: 'Hamlet',
    quadra: 'Beta',
    club: { id: 'Humaniter (Humanitarians)', en: 'Humanitarians' },
    leadFunction: 'Fe (E+)',
    creativeFunction: 'Ni (T-)',
    description: {
      id: 'Orator dramatis yang mampu menggerakkan kalbu massa, membangkitkan kesadaran ideologis, dan meramalkan takdir bangsa.',
      en: 'Visionary emotional orator capable of swaying the masses and shaping historical destiny.',
    },
  },
  LSI: {
    code: 'LSI',
    mbtiEquivalent: 'ISTj',
    name: { id: 'Sang Inspektur (Inspector)', en: 'The Inspector' },
    historicalName: 'Maxim Gorky',
    quadra: 'Beta',
    club: { id: 'Pragmatis (Pragmatists)', en: 'Pragmatists' },
    leadFunction: 'Ti (L+)',
    creativeFunction: 'Se (F-)',
    description: {
      id: 'Baja ketertiban yang kokoh. Menegakkan disiplin organisasi, kepatuhan hierarkis, dan penjaga aturan dengan dedikasi mutlak.',
      en: 'Steely backbone of organizational order, enforcing systematic discipline and steadfast hierarchy.',
    },
  },
  SLE: {
    code: 'SLE',
    mbtiEquivalent: 'ESTp',
    name: { id: 'Sang Penakluk (Marshal)', en: 'The Marshal' },
    historicalName: 'Zhukov',
    quadra: 'Beta',
    club: { id: 'Pragmatis (Pragmatists)', en: 'Pragmatists' },
    leadFunction: 'Se (F+)',
    creativeFunction: 'Ti (L-)',
    description: {
      id: 'Panglima perang yang tangguh, menguasai medan pertempuran dengan keberanian tanpa gentar dan strategi taktis yang ampuh.',
      en: 'Commanding tactical powerhouse, conquering physical obstacles through willpower and decisive strategy.',
    },
  },
  IEI: {
    code: 'IEI',
    mbtiEquivalent: 'INFp',
    name: { id: 'Sang Romantis (Romantic)', en: 'The Romantic' },
    historicalName: 'Esenin',
    quadra: 'Beta',
    club: { id: 'Humaniter (Humanitarians)', en: 'Humanitarians' },
    leadFunction: 'Ni (T+)',
    creativeFunction: 'Fe (E-)',
    description: {
      id: 'Penyair lembut yang peka terhadap gelombang waktu, membawa keanggunan mistis dan melunakkan ketegangan mereka yang kuat.',
      en: 'Ethereal, lyrical visionary who reads the temporal tides and inspires heroic strength with gentle mystery.',
    },
  },
  SEE: {
    code: 'SEE',
    mbtiEquivalent: 'ESFp',
    name: { id: 'Sang Pemimpin Kharismatik (Ambassador)', en: 'The Ambassador' },
    historicalName: 'Napoleon',
    quadra: 'Gamma',
    club: { id: 'Sosialis (Socials)', en: 'Socials' },
    leadFunction: 'Se (F+)',
    creativeFunction: 'Fi (R-)',
    description: {
      id: 'Sosok karismatik yang menguasai panggung pengaruh pribadi, pandai berdiplomasi, dan memimpin dengan daya pikat magnetis.',
      en: 'Politically astute powerhouse who weaves interpersonal alliances and commands influence through personal magnetism.',
    },
  },
  ILI: {
    code: 'ILI',
    mbtiEquivalent: 'INTp',
    name: { id: 'Sang Kritikus (Critic)', en: 'The Critic' },
    historicalName: 'Balzac',
    quadra: 'Gamma',
    club: { id: 'Peneliti (Researchers)', en: 'Researchers' },
    leadFunction: 'Ni (T+)',
    creativeFunction: 'Te (P-)',
    description: {
      id: 'Pengamat bijak yang skeptis, memprediksi kejatuhan rencana yang tergesa-gesa dan mengoptimalkan efisiensi langkah secara dingin.',
      en: 'Stoic, perceptive philosopher who sees through hollow illusions and calculates long-term viability.',
    },
  },
  LIE: {
    code: 'LIE',
    mbtiEquivalent: 'ENTj',
    name: { id: 'Sang Perintis Usaha (Pioneer)', en: 'The Pioneer' },
    historicalName: 'Jack London',
    quadra: 'Gamma',
    club: { id: 'Peneliti (Researchers)', en: 'Researchers' },
    leadFunction: 'Te (P+)',
    creativeFunction: 'Ni (T-)',
    description: {
      id: 'Pengusaha petualang yang cepat menangkap tren masa depan, berani mengambil risiko produktif, dan membangun usaha raksasa.',
      en: 'Enterprising visionary dynamic who converts emergent technological and market trends into prosperous reality.',
    },
  },
  ESI: {
    code: 'ESI',
    mbtiEquivalent: 'ISFj',
    name: { id: 'Sang Penjaga Etika (Guardian)', en: 'The Guardian' },
    historicalName: 'Dreiser',
    quadra: 'Gamma',
    club: { id: 'Humaniter (Humanitarians)', en: 'Humanitarians' },
    leadFunction: 'Fi (R+)',
    creativeFunction: 'Se (F-)',
    description: {
      id: 'Pelindung moral yang tangguh, membedakan kawan sejati dari musuh, dan membela batas kehormatan keluarga dengan ketegasan.',
      en: 'Unflinching moral protector who fiercely defends inner values, loved ones, and personal dignity.',
    },
  },
  LSE: {
    code: 'LSE',
    mbtiEquivalent: 'ESTj',
    name: { id: 'Sang Administrator Ulung (Director)', en: 'The Director' },
    historicalName: 'Stierlitz',
    quadra: 'Delta',
    club: { id: 'Pragmatis (Pragmatists)', en: 'Pragmatists' },
    leadFunction: 'Te (P+)',
    creativeFunction: 'Si (S-)',
    description: {
      id: 'Pakar efisiensi berkualitas tinggi, bekerja tanpa lelah dengan standar kenyamanan dan ketepatan proses terbaik.',
      en: 'Exemplary steward of productivity, combining supreme work ethic with ergonomic and material mastery.',
    },
  },
  EII: {
    code: 'EII',
    mbtiEquivalent: 'INFj',
    name: { id: 'Sang Humanis Suci (Humanist)', en: 'The Humanist' },
    historicalName: 'Dostoevsky',
    quadra: 'Delta',
    club: { id: 'Humaniter (Humanitarians)', en: 'Humanitarians' },
    leadFunction: 'Fi (R+)',
    creativeFunction: 'Ne (I-)',
    description: {
      id: 'Penyembuh jiwa yang penuh welas asih mendalam, melihat benih kebaikan dalam setiap insan, dan memelihara kedamaian suci.',
      en: 'Compassionate soul healer who perceives the divine potential in every human heart and models moral grace.',
    },
  },
  IEE: {
    code: 'IEE',
    mbtiEquivalent: 'ENFp',
    name: { id: 'Sang Penasihat Psikologis (Advisor)', en: 'The Advisor' },
    historicalName: 'Huxley',
    quadra: 'Delta',
    club: { id: 'Humaniter (Humanitarians)', en: 'Humanitarians' },
    leadFunction: 'Ne (I+)',
    creativeFunction: 'Fi (R-)',
    description: {
      id: 'Penuh pesona ingin tahu, mampu mengungkap bakat tersembunyi seseorang, dan menghubungkan individu dalam persahabatan tulus.',
      en: 'Inquisitive people-whisperer who unlocks latent human talents and bridges hearts with whimsical curiosity.',
    },
  },
  SLI: {
    code: 'SLI',
    mbtiEquivalent: 'ISTp',
    name: { id: 'Sang Pengrajin Hebat (Craftsman)', en: 'The Craftsman' },
    historicalName: 'Gabin',
    quadra: 'Delta',
    club: { id: 'Pragmatis (Pragmatists)', en: 'Pragmatists' },
    leadFunction: 'Si (S+)',
    creativeFunction: 'Te (P-)',
    description: {
      id: 'Ahli kenyamanan dan kepraktisan tanpa repot. Bekerja dengan gerakan minimal untuk hasil maksimal dan menikmati ketenangan hidup.',
      en: 'Low-key master of ergonomic calm and practical craftsmanship, maximizing economy of effort.',
    },
  },
};
