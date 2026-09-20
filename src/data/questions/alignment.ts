import { Question } from '../../types';

export const ALIGNMENT_QUESTIONS: Question[] = [
  // Order vs Chaos (dimension: 'order')
  {
    id: 'align_ord_1',
    testType: 'alignment',
    dimension: 'order',
    polarity: 1, // Lawful
    text: {
      id: 'Hukum dan peraturan masyarakat harus ditegakkan demi mencegah kekacauan, bahkan ketika peraturan tersebut terasa membatasi.',
      en: 'Societal laws and codified rules must be upheld to prevent anarchy, even when they feel restrictive.',
    },
  },
  {
    id: 'align_ord_2',
    testType: 'alignment',
    dimension: 'order',
    polarity: -1, // Chaotic
    text: {
      id: 'Kebebasan individu dan integritas nurani pribadi jauh lebih suci daripada kepatuhan buta terhadap institusi atau aturan formal.',
      en: 'Individual freedom and personal conscience are far more sacred than blind compliance with institutions or formal rules.',
    },
  },
  {
    id: 'align_ord_3',
    testType: 'alignment',
    dimension: 'order',
    polarity: 1, // Lawful
    text: {
      id: 'Saya memegang teguh janji, hierarki kehormatan, dan kontrak yang telah disepakati bersama.',
      en: 'I strictly abide by oaths, codes of honor, and mutually pledged contractual duties.',
    },
  },
  {
    id: 'align_ord_4',
    testType: 'alignment',
    dimension: 'order',
    polarity: -1, // Chaotic
    text: {
      id: 'Aturan diciptakan untuk dilanggar jika aturan tersebut menghalangi tindakan yang benar atau mengekang kebebasan.',
      en: 'Rules are meant to be broken whenever they stifle freedom or obstruct direct justice.',
    },
  },
  {
    id: 'align_ord_5',
    testType: 'alignment',
    dimension: 'order',
    polarity: 1, // Lawful
    text: {
      id: 'Saya percaya bahwa masyarakat berkembang paling adil melalui tata tertib institusional yang tertata rapi.',
      en: 'I believe society thrives most fairly through disciplined, institutional order and steady governance.',
    },
  },
  {
    id: 'align_ord_6',
    testType: 'alignment',
    dimension: 'order',
    polarity: -1, // Chaotic
    text: {
      id: 'Jiwa saya tidak bisa diikat oleh birokrasi; saya lebih suka mengikuti naluri liar dan spontanitas sesuka hati.',
      en: 'My spirit refuses to be domesticated by bureaucracy; I follow wild intuition and spontaneous whim.',
    },
  },

  // Good vs Evil (dimension: 'morality')
  {
    id: 'align_mor_1',
    testType: 'alignment',
    dimension: 'morality',
    polarity: 1, // Good
    text: {
      id: 'Saya rela berkorban waktu, tenaga, atau materi demi melindungi orang yang lemah tanpa mengharapkan balasan apa pun.',
      en: 'I am willing to sacrifice my comfort or resources to safeguard the vulnerable without expecting any reward.',
    },
  },
  {
    id: 'align_mor_2',
    testType: 'alignment',
    dimension: 'morality',
    polarity: -1, // Evil (Self-interest/Machiavellian)
    text: {
      id: 'Dunia ini keras dan kejam; mereka yang terlalu naif dan berbelas kasih hanya akan dimanfaatkan oleh orang lain.',
      en: 'The world is ruthless; those who are excessively naive and merciful are bound to be exploited.',
    },
  },
  {
    id: 'align_mor_3',
    testType: 'alignment',
    dimension: 'morality',
    polarity: 1, // Good
    text: {
      id: 'Setiap jiwa manusia memiliki martabat yang tak ternilai harganya dan pantas diperlakukan dengan welas asih.',
      en: 'Every human life holds inviolable dignity and deserves compassion, forgiveness, and grace.',
    },
  },
  {
    id: 'align_mor_4',
    testType: 'alignment',
    dimension: 'morality',
    polarity: -1, // Evil
    text: {
      id: 'Jika perlu mengorbankan orang lain demi mencapai tujuan besar atau kekuasaan pribadi, saya siap melakukannya.',
      en: 'If collaterally harming others is required to achieve ultimate supremacy or ambition, I am willing to do so.',
    },
  },
  {
    id: 'align_mor_5',
    testType: 'alignment',
    dimension: 'morality',
    polarity: 1, // Good
    text: {
      id: 'Meringankan beban penderitaan orang lain memberikan kepuasan batin yang sejati bagi saya.',
      en: 'Alleviating suffering and healing others provides the deepest sense of fulfillment in my existence.',
    },
  },
  {
    id: 'align_mor_6',
    testType: 'alignment',
    dimension: 'morality',
    polarity: -1, // Evil
    text: {
      id: 'Hanya yang terkuat yang berhak memerintah; rasa kasihan hanyalah kelemahan yang menahan langkah kita.',
      en: 'Only the strong deserve dominion; pity is merely a biological liability that holds us back.',
    },
  },
];
