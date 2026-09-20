import { Question } from '../../types';

export const INSTINCT_QUESTIONS: Question[] = [
  // Self-Preservation (sp)
  {
    id: 'iv_sp_1',
    testType: 'instinct',
    dimension: 'sp',
    polarity: 1,
    text: {
      id: 'Saya sangat memperhatikan stabilitas keuangan, kenyamanan rumah, pola makan, dan cadangan kebutuhan hidup.',
      en: 'I am constantly mindful of financial security, domestic comfort, nutrition, and personal resource buffers.',
    },
  },
  {
    id: 'iv_sp_2',
    testType: 'instinct',
    dimension: 'sp',
    polarity: 1,
    text: {
      id: 'Ketika merasa lelah atau stres, prioritas utama saya adalah mengamankan ruang privat dan beristirahat tanpa gangguan.',
      en: 'When depleted or stressed, my default reflex is to retreat to my personal sanctuary and recharge in quiet comfort.',
    },
  },
  {
    id: 'iv_sp_3',
    testType: 'instinct',
    dimension: 'sp',
    polarity: 1,
    text: {
      id: 'Saya cenderung berhati-hati terhadap risiko fisik atau situasi yang dapat mengancam rasa aman dan kesejahteraan saya.',
      en: 'I am naturally cautious about physical vulnerabilities or circumstances that could jeopardize my stability.',
    },
  },
  {
    id: 'iv_sp_4',
    testType: 'instinct',
    dimension: 'sp',
    polarity: 1,
    text: {
      id: 'Menjaga rutinitas fisik yang sehat dan lingkungan tempat tinggal yang teratur memberi saya kepuasan batin terbesar.',
      en: 'Maintaining healthy body habits and a well-regulated living environment brings me immense grounded peace.',
    },
  },

  // Social (so)
  {
    id: 'iv_so_1',
    testType: 'instinct',
    dimension: 'so',
    polarity: 1,
    text: {
      id: 'Saya sangat sadar akan dinamika kelompok, peran sosial saya, dan bagaimana orang-orang berinteraksi dalam komunitas.',
      en: 'I am acutely attuned to group politics, community belonging, and my standing within the collective hierarchy.',
    },
  },
  {
    id: 'iv_so_2',
    testType: 'instinct',
    dimension: 'so',
    polarity: 1,
    text: {
      id: 'Saya merasa bersemangat ketika terlibat dalam gerakan bersama atau tujuan mulia yang lebih besar dari diri sendiri.',
      en: 'I feel deeply energized when contributing to shared causes, collective missions, or communal welfare.',
    },
  },
  {
    id: 'iv_so_3',
    testType: 'instinct',
    dimension: 'so',
    polarity: 1,
    text: {
      id: 'Saya memperhatikan norma-norma sosial dan berusaha agar keberadaan saya diterima secara positif dalam lingkaran sosial.',
      en: 'I track subtle social etiquette and care deeply about contributing value and being accepted by the group.',
    },
  },
  {
    id: 'iv_so_4',
    testType: 'instinct',
    dimension: 'so',
    polarity: 1,
    text: {
      id: 'Membangun jaringan relasi dan mengetahui "siapa mengenal siapa" terasa sangat alami dan penting bagi hidup saya.',
      en: 'Navigating networks, forging alliances, and knowing relational connections comes naturally and feels essential.',
    },
  },

  // Sexual / One-to-One (sx)
  {
    id: 'iv_sx_1',
    testType: 'instinct',
    dimension: 'sx',
    polarity: 1,
    text: {
      id: 'Saya mendambakan percikan intensitas, daya tarik magnetis, dan koneksi tatap muka yang membakar gairah.',
      en: 'I crave electric intensity, profound chemistry, and magnetic one-on-one energetic resonance.',
    },
  },
  {
    id: 'iv_sx_2',
    testType: 'instinct',
    dimension: 'sx',
    polarity: 1,
    text: {
      id: 'Saya cepat bosan dengan hubungan yang dangkal atau rutinitas yang datar; saya butuh kedalaman dan transformasi.',
      en: 'I quickly wither under superficial banter or lukewarm routines; I need passion that stirs my soul.',
    },
  },
  {
    id: 'iv_sx_3',
    testType: 'instinct',
    dimension: 'sx',
    polarity: 1,
    text: {
      id: 'Ketika menyukai seseorang atau sebuah proyek, saya memusatkan perhatian total seperti laser hingga melupakan hal lain.',
      en: 'When fascinated by a person or obsession, I develop laser-focused immersion, losing track of everything else.',
    },
  },
  {
    id: 'iv_sx_4',
    testType: 'instinct',
    dimension: 'sx',
    polarity: 1,
    text: {
      id: 'Saya tidak takut mempertaruhkan kenyamanan demi mengejar daya tarik atau rasa hidup yang menyala-nyala.',
      en: 'I am willing to bypass comfort or stability if it promises visceral vitality, thrill, and creative passion.',
    },
  },
];
