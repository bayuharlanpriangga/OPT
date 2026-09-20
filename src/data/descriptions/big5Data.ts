import { LocalizedString } from '../../types';

export interface Big5DimensionInfo {
  code: string;
  name: LocalizedString;
  highPole: { letter: string; label: LocalizedString; trait: LocalizedString };
  lowPole: { letter: string; label: LocalizedString; trait: LocalizedString };
  description: LocalizedString;
}

export const BIG5_DIMENSIONS: Record<string, Big5DimensionInfo> = {
  extraversion: {
    code: 'E',
    name: { id: 'Extraversion (S vs R)', en: 'Extraversion (S vs R)' },
    highPole: {
      letter: 'S',
      label: { id: 'Social (S)', en: 'Social (S)' },
      trait: { id: 'Sosial, ramah, suka keramaian, bertenaga ekspresif', en: 'Outgoing, gregarious, enthusiastic, assertive' },
    },
    lowPole: {
      letter: 'R',
      label: { id: 'Reserved (R)', en: 'Reserved (R)' },
      trait: { id: 'Pendiam, mandiri, menikmati keheningan, selektif', en: 'Introverted, quiet, reflective, independent' },
    },
    description: {
      id: 'Mengukur antusiasme sosial dan keterlibatan aktif dengan dunia luar.',
      en: 'Measures sociability, assertiveness, and outward enthusiasm.',
    },
  },
  neuroticism: {
    code: 'N',
    name: { id: 'Emotional Stability (C vs L)', en: 'Emotional Stability (C vs L)' },
    highPole: {
      letter: 'L',
      label: { id: 'Limbic (L)', en: 'Limbic (L)' },
      trait: { id: 'Sensitif, mudah cemas, reaktif, rentan terhadap stres', en: 'Emotionally reactive, prone to anxiety and mood shifts' },
    },
    lowPole: {
      letter: 'C',
      label: { id: 'Calm (C)', en: 'Calm (C)' },
      trait: { id: 'Tenang, stabil, tahan tekanan krisis, tidak mudah panik', en: 'Unflappable, emotionally stable, resilient under pressure' },
    },
    description: {
      id: 'Mengukur reaktivitas sistem saraf terhadap stres, kecemasan, dan ancaman.',
      en: 'Measures nervous system reactivity to threat, stress, and negative affect.',
    },
  },
  conscientiousness: {
    code: 'C',
    name: { id: 'Orderliness & Drive (O vs U)', en: 'Orderliness & Drive (O vs U)' },
    highPole: {
      letter: 'O',
      label: { id: 'Organized (O)', en: 'Organized (O)' },
      trait: { id: 'Sangat disiplin, teratur, metodis, berorientasi target', en: 'Methodical, disciplined, goal-driven, thorough' },
    },
    lowPole: {
      letter: 'U',
      label: { id: 'Unstructured (U)', en: 'Unstructured (U)' },
      trait: { id: 'Spontan, fleksibel, santai, menolak jadwal kaku', en: 'Spontaneous, adaptable, relaxed, unconventional' },
    },
    description: {
      id: 'Mengukur kendali impuls, keteraturan, dan ketekunan dalam mengejar tujuan.',
      en: 'Measures impulse control, systematic planning, and persistence toward goals.',
    },
  },
  agreeableness: {
    code: 'A',
    name: { id: 'Interpersonal Warmth (A vs E)', en: 'Interpersonal Warmth (A vs E)' },
    highPole: {
      letter: 'A',
      label: { id: 'Accommodating (A)', en: 'Accommodating (A)' },
      trait: { id: 'Empatik, kooperatif, hangat, mengutamakan orang lain', en: 'Empathetic, trusting, prosocial, cooperative' },
    },
    lowPole: {
      letter: 'E',
      label: { id: 'Egocentric (E)', en: 'Egocentric (E)' },
      trait: { id: 'Kompetitif, skeptis, membela kepentingan diri, asertif', en: 'Tough-minded, skeptical, competitive, self-interested' },
    },
    description: {
      id: 'Mengukur motivasi untuk memelihara hubungan sosial yang harmonis dan kooperatif.',
      en: 'Measures altruism, compassion, and cooperative social disposition.',
    },
  },
  openness: {
    code: 'O',
    name: { id: 'Intellect & Imagination (I vs N)', en: 'Intellect & Imagination (I vs N)' },
    highPole: {
      letter: 'I',
      label: { id: 'Inquisitive (I)', en: 'Inquisitive (I)' },
      trait: { id: 'Sangat ingin tahu, imajinatif, menyukai seni dan filosofi', en: 'Intellectually curious, creative, imaginative, open-minded' },
    },
    lowPole: {
      letter: 'N',
      label: { id: 'Non-curious (N)', en: 'Non-curious (N)' },
      trait: { id: 'Praktis, konvensional, menyukai hal konkret dan terbukti', en: 'Conventional, practical, down-to-earth, routine-oriented' },
    },
    description: {
      id: 'Mengukur keterbukaan kognitif terhadap gagasan baru, seni, dan pengalaman batin.',
      en: 'Measures breadth, depth, and curiosity in mental and experiential realms.',
    },
  },
};

export const SLOAN_ARCHETYPES: Record<string, { title: LocalizedString; description: LocalizedString }> = {
  RCOAI: {
    title: { id: 'Sang Filsuf Stoik (The Stoic Sage)', en: 'The Stoic Sage' },
    description: {
      id: 'Tenang, sangat disiplin, berempati tulus, dan memiliki wawasan intelektual yang kaya. Bekerja mandiri dalam harmoni.',
      en: 'Calm, highly organized, empathetic, and intellectually expansive. Works steadily with quiet integrity.',
    },
  },
  RLOAI: {
    title: { id: 'Sang Seniman Introspektif (The Sensitive Artist)', en: 'The Sensitive Artist' },
    description: {
      id: 'Sangat peka, kreatif, teratur, dan penuh empati. Merasakan emosi mendalam dan berdedikasi tinggi pada karya seni/batin.',
      en: 'Deeply conscientious and creative yet prone to inner turmoil. Channels soul depth into meaningful endeavors.',
    },
  },
  RCOEI: {
    title: { id: 'Sang Pemikir Mandiri (The Mastermind)', en: 'The Mastermind' },
    description: {
      id: 'Logis tanpa kompromi, tenang di bawah tekanan, metodis, dan tidak terikat oleh basa-basi emosional.',
      en: 'Highly autonomous, rigorously analytical, unshakeable under stress, and relentless in achieving objectives.',
    },
  },
  RLOEI: {
    title: { id: 'Sang Peneliti Perfeksionis (The Driven Scholar)', en: 'The Driven Scholar' },
    description: {
      id: 'Berstandar sangat tinggi, analitis, waspada, dan bekerja keras membongkar kerumitan sistematis.',
      en: 'Hyper-vigilant, intellectually fierce, and meticulous. Demands absolute flawlessness from their craft.',
    },
  },
  SCOAI: {
    title: { id: 'Sang Pemimpin Humanis (The Compassionate Leader)', en: 'The Compassionate Leader' },
    description: {
      id: 'Karisma hangat, tenang, terstruktur, dan disukai banyak orang karena ketulusan serta visi terbukanya.',
      en: 'Inspiring, composed, orderly, and broadly curious. Fosters collaborative team success with warmth.',
    },
  },
  SLOAI: {
    title: { id: 'Sang Advokat Penuh Gairah (The Passionate Advocate)', en: 'The Passionate Advocate' },
    description: {
      id: 'Energik dan ekspresif, berdedikasi membela orang lain dengan api emosional dan kreativitas tinggi.',
      en: 'Energetic, deeply feeling, organized champion of collective ideals and creative movements.',
    },
  },
  SCOEI: {
    title: { id: 'Sang Pengarah Eksekutif (The Captain)', en: 'The Captain' },
    description: {
      id: 'Asertif, percaya diri, tenang menghadapi badai, teratur, dan fokus menaklukkan target besar.',
      en: 'Assertive, unflappable commander focused on tactical supremacy and strategic enterprise.',
    },
  },
  SLOEI: {
    title: { id: 'Sang Penakluk Ambisius (The Overachiever)', en: 'The Overachiever' },
    description: {
      id: 'Digerakkan oleh ambisi membara, kompetitif, terorganisir rapi, dan menolak kepuasan sesaat.',
      en: 'Fiercely ambitious, structured, and high-intensity. Pushes limits relentlessly to dominate the arena.',
    },
  },
  RCUAI: {
    title: { id: 'Sang Bohemian Tenang (The Free Spirit)', en: 'The Free Spirit' },
    description: {
      id: 'Santai, berhati lembut, berpikiran luas, dan menikmati kebebasan hidup tanpa beban aturan kaku.',
      en: 'Gentle, philosophically curious, tranquil, and resistant to mundane bureaucratic cages.',
    },
  },
  SCUAI: {
    title: { id: 'Sang Pengelana Ceria (The Adventurer)', en: 'The Adventurer' },
    description: {
      id: 'Spontan, sangat ramah, optimis, dan selalu siap mencoba hal-hal baru yang mengejutkan.',
      en: 'Spontaneous, loving, buoyant, and endlessly curious about diverse people and adventures.',
    },
  },
  RCUEI: {
    title: { id: 'Sang Individualis Santai (The Lone Wolf)', en: 'The Lone Wolf' },
    description: {
      id: 'Mandiri, tenang, skeptis, dan menikmati kebebasan intelektual tanpa terikat oleh konvensi masyarakat.',
      en: 'Autonomous, calm, skeptical, and fiercely unconventional. Follows their own eccentric path.',
    },
  },
  SCUEI: {
    title: { id: 'Sang Pemberontak Karismatik (The Maverick)', en: 'The Maverick' },
    description: {
      id: 'Berani mendobrak tradisi, ramah, menikmati sensasi berisiko, dan memiliki pemikiran orisinal.',
      en: 'Magnetic nonconformist who loves the thrill of the novel and boldly disrupts conventional wisdom.',
    },
  },
};

export function getSloanProfile(sloanCode: string) {
  return SLOAN_ARCHETYPES[sloanCode] || {
    title: { id: `Tipe SLOAN ${sloanCode}`, en: `SLOAN Type ${sloanCode}` },
    description: {
      id: `Profil kepribadian lima faktor dengan kode ${sloanCode}.`,
      en: `A multifaceted Big Five personality profile characterized by the SLOAN code ${sloanCode}.`,
    },
  };
}
