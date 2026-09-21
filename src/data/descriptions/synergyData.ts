import { UserAllResults, LocalizedString } from '../../types';

export interface CognitiveParadox {
  title: LocalizedString;
  type: string;
  description: LocalizedString;
  insight: LocalizedString;
}

export interface SynergyAnalysis {
  compositeTitle: LocalizedString;
  primaryArchetype: LocalizedString;
  coreMindset: LocalizedString;
  synergyNarrative: LocalizedString;
  cognitiveProfileSummary: LocalizedString;
  strengths: LocalizedString[];
  growthChallenges: LocalizedString[];
  idealEnvironment: LocalizedString;
  paradoxes: CognitiveParadox[];
}

export function generateSynergyAnalysis(results: UserAllResults): SynergyAnalysis | null {
  const mbti = results.mbti?.type || 'INTJ';
  const enn = results.enneagram?.notation || '5w4';
  const tritype = results.enneagram?.tritype || '548';
  const iv = results.instinct?.stacking || 'sp/so';
  const soc = results.socionics?.code || 'ILI';
  const quadra = results.socionics?.quadra || 'Gamma';
  const ap = results.attitudinal_psyche?.type || 'VLEF';
  const sloan = results.big5?.sloanCode || 'RCOAI';
  const align = results.alignment?.alignment || 'True Neutral';

  // Determine an evocative composite title
  let titleId = 'Sang Penjelajah Paradigma Holistik';
  let titleEn = 'The Holistic Paradigm Pioneer';

  if (mbti.includes('NT')) {
    titleId = `Sang Arsitek Pemikir Visioner [${mbti} • ${enn}]`;
    titleEn = `The Visionary Mastermind [${mbti} • ${enn}]`;
  } else if (mbti.includes('NF')) {
    titleId = `Sang Katalisator Jiwa & Empati [${mbti} • ${enn}]`;
    titleEn = `The Soul Catalyst & Idealist [${mbti} • ${enn}]`;
  } else if (mbti.includes('ST')) {
    titleId = `Sang Penegak Keteraturan Praktis [${mbti} • ${enn}]`;
    titleEn = `The Tactical Grounded Pillar [${mbti} • ${enn}]`;
  } else if (mbti.includes('SF')) {
    titleId = `Sang Pengayom Kehidupan Harmonis [${mbti} • ${enn}]`;
    titleEn = `The Harmonious Living Guardian [${mbti} • ${enn}]`;
  }

  const narrativeId = `Konfigurasi psikologis Anda memadukan kerangka kognitif ${mbti} dengan dorongan eksistensial Enneagram ${enn} (Tritype ${tritype}). Diperkuat oleh insting biologis ${iv}, Anda memusatkan perhatian pada apa yang hakiki dan menghindari pemborosan energi yang tidak esensial. Dalam sistem Socionics, Anda beresonansi dengan sirkuit ${soc} (Quadra ${quadra}), yang membuktikan preferensi pertukaran informasi yang tajam. Sikap mental Attitudinal Psyche ${ap} berpadu dengan profil Big 5 (${sloan}) dan kompas moral ${align}, membentuk individu dengan kepribadian yang berlapis, kaya akan kedalaman, dan mandiri.`;

  const narrativeEn = `Your psychological synthesis brings together the cognitive blueprint of ${mbti} with the existential fire of Enneagram ${enn} (Tritype ${tritype}). Grounded by your ${iv} instinctual variant, you focus deeply on what is essential while shedding superficial distractions. In Socionics, your ${soc} resonance (Quadra ${quadra}) illuminates your information metabolism, while your Attitudinal Psyche (${ap}), Big Five trait signature (${sloan}), and ${align} moral axis create a multi-dimensional persona of remarkable integrity and internal clarity.`;

  // Cross-system anomaly & nuance detection
  const detectedParadoxes: CognitiveParadox[] = [];

  // 1. Social Chameleon (MBTI Extravert with Reserved Big 5 or sp dominant)
  if (mbti.startsWith('E') && (sloan.startsWith('R') || iv.startsWith('sp'))) {
    detectedParadoxes.push({
      title: { id: 'The Reflective Extravert (Sosial Selektif)', en: 'The Reflective Extravert (Socially Selective)' },
      type: 'Ekstroversi Kognitif vs Energi Cadangan',
      description: {
        id: `Meskipun tipe kognitif Anda berorientasi eksternal (${mbti}), skor Big Five/Insting Anda condong mandiri (SLOAN: R / ${iv}). Anda terampil menavigasi interaksi sosial luar namun memiliki batas baterai sosial yang tegas dan membutuhkan ruang hening untuk memulihkan energi.`,
        en: `While your cognitive type directs outward energy (${mbti}), your Big Five or instinctual stacking leans reserved (SLOAN: R / ${iv}). You navigate external circles deftly but maintain clear personal boundaries and cherish solitary decompression.`,
      },
      insight: {
        id: 'Gunakan orientasi eksternal Anda untuk mengeksekusi proyek luar tanpa merasa wajib menghadiri semua interaksi sosial yang tidak penting.',
        en: 'Harness your outward cognitive drive for purposeful impact without exhausting yourself on superficial social engagements.',
      },
    });
  }

  // 2. Engaging Solitary (MBTI Introvert with High Social Big 5)
  if (mbti.startsWith('I') && (sloan.startsWith('S') || iv.startsWith('so'))) {
    detectedParadoxes.push({
      title: { id: 'The Engaging Solitary (Introver Komunikatif)', en: 'The Engaging Solitary (Warm Introvert)' },
      type: 'Kognisi Internal vs Kehangatan Hubungan',
      description: {
        id: `Struktur pikiran Anda memproses data secara internal (${mbti}), namun keterhubungan sosial Anda tercatat tinggi (SLOAN: S / ${iv}). Anda ramah dan mudah didekati, tetapi kesimpulan serta prinsip hidup Anda tetap dirumuskan dalam keheningan batin.`,
        en: `Your baseline cognition evaluates reality privately (${mbti}), yet your social engagement is strong (SLOAN: S / ${iv}). You connect warmly with others while your convictions remain firmly anchored in internal solitude.`,
      },
      insight: {
        id: 'Padukan kemampuan mendengar mendalam Anda dengan keterbukaan relasional untuk membangun hubungan yang bermakna tinggi.',
        en: 'Fuse your deep listening with natural relational warmth to forge unusually meaningful, trust-rich partnerships.',
      },
    });
  }

  // 3. Analytical Empath (MBTI Thinker with Heart Enneagram or high Feeling)
  const coreEnn = results.enneagram?.coreType;
  const tritypeStr = results.enneagram?.tritype || '';
  if (mbti.includes('T') && (coreEnn === 2 || coreEnn === 4 || tritypeStr.includes('2') || tritypeStr.includes('4'))) {
    detectedParadoxes.push({
      title: { id: 'The Analytical Empath (Logika Berbalut Hati)', en: 'The Analytical Empath (Headed Heart)' },
      type: 'Nalar Objektif vs Resonansi Emosional',
      description: {
        id: `Kerangka rasional ${mbti} Anda dipadukan dengan kesadaran hati mendalam dari Enneagram. Anda mampu menganalisis masalah secara kritis tanpa kehilangan kompas empati kemanusiaan.`,
        en: `Your analytical ${mbti} architecture is paired with profound emotional resonance from the Enneagram Heart center. You parse problems objectively without sacrificing human warmth and empathy.`,
      },
      insight: {
        id: 'Kombinasi ini membuat Anda sangat efektif menjadi konselor strategis atau pemimpin tim yang adil sekaligus humanis.',
        en: 'This unique dynamic positions you as an exceptional strategic mentor or equitable, empathetic team leader.',
      },
    });
  }

  // 4. Adaptive Finisher (MBTI Perceiving with High Conscientiousness)
  if (mbti.includes('P') && (sloan.includes('O') || (results.big5?.scores.conscientiousness || 0) >= 55)) {
    detectedParadoxes.push({
      title: { id: 'The Adaptive Finisher (Eksploratif & Tepat Waktu)', en: 'The Adaptive Finisher (Flexible Discipline)' },
      type: 'Spontanitas Kognitif vs Disiplin Eksekusi',
      description: {
        id: `Sebagai tipe Perceiving (${mbti}), Anda luwes merespons perubahan situasi mendadak, namun profil Keteraturan Big Five Anda (SLOAN: O) membuktikan dedikasi tinggi dalam menepati komitmen.`,
        en: `As a Perceiving type (${mbti}), you adapt effortlessly to sudden shifts, yet your Big Five Conscientiousness (SLOAN: O) demonstrates unwavering discipline in finishing what you start.`,
      },
      insight: {
        id: 'Pertahankan gaya adaptif ini: Anda tidak kaku seperti birokrat, namun tetap memberikan hasil nyata yang dapat diandalkan.',
        en: 'Preserve this hybrid agility: you remain free of rigid dogmatism while consistently delivering reliable, polished outcomes.',
      },
    });
  }

  // Fallback harmonic entry if no paradox was triggered
  if (detectedParadoxes.length === 0) {
    detectedParadoxes.push({
      title: { id: 'Harmonic Coherence (Integrasi Selaras)', en: 'Harmonic Coherence (Aligned Synergy)' },
      type: 'Keselarasan Tipologi Lintas Sistem',
      description: {
        id: `Semua instrumen psikometri Anda (${mbti}, ${enn}, ${iv}, ${sloan}) saling mengonfirmasi preferensi yang koheren tanpa friksi kepribadian internal yang tajam.`,
        en: `Your psychometric indicators (${mbti}, ${enn}, ${iv}, ${sloan}) uniformly confirm a highly coherent disposition with minimal cross-system friction.`,
      },
      insight: {
        id: 'Kepribadian Anda memiliki arah fokus yang sangat terpusat; salurkan kepastian identitas ini pada karya-karya bermakna jangka panjang.',
        en: 'Your identity exhibits centered focus; direct this self-clarity toward substantive long-term creative and intellectual endeavors.',
      },
    });
  }

  return {
    compositeTitle: { id: titleId, en: titleEn },
    primaryArchetype: {
      id: `${mbti} • ${enn} • ${iv} • ${ap} • ${sloan}`,
      en: `${mbti} • ${enn} • ${iv} • ${ap} • ${sloan}`,
    },
    coreMindset: {
      id: `Sinergi antara nalar ${mbti} dan motivasi inti ${enn} mendorong Anda untuk selalu mencari keaslian dan presisi dalam tindakan nyata.`,
      en: `The synergy between your ${mbti} cognition and ${enn} drive propels you to demand authentic truth and purposeful execution.`,
    },
    synergyNarrative: {
      id: narrativeId,
      en: narrativeEn,
    },
    cognitiveProfileSummary: {
      id: `Dominan pada fungsi kognitif yang mendukung visi jangka panjang, dipandu oleh kompas etika ${align}.`,
      en: `Cognitively primed for sustained strategic insight, guided by an authentic ${align} moral compass.`,
    },
    strengths: [
      { id: 'Integrasi unik antara kejernihan analitis dan kepekaan batin', en: 'Unique integration of analytical lucidity and soul depth' },
      { id: 'Kemampuan menjaga fokus mandiri tanpa mudah terdistraksi opini publik', en: 'Unwavering autonomous focus immune to shallow social pressures' },
      { id: 'Ketajaman membaca pola di balik situasi yang kompleks', en: 'Exceptional pattern recognition across labyrinthine situations' },
    ],
    growthChallenges: [
      { id: 'Menjembatani gagasan internal yang tinggi ke dalam bahasa yang mudah dipahami orang awam', en: 'Translating complex internal visions into accessible language for others' },
      { id: 'Menghindari isolasi berlebihan saat mengalami kelelahan mental', en: 'Guarding against hyper-isolation when experiencing cognitive fatigue' },
    ],
    idealEnvironment: {
      id: 'Lingkungan yang menghormati otonomi pribadi, bebas dari birokrasi manipulatif, dan kaya akan stimulasi intelektual serta kreativitas nyata.',
      en: 'An environment honoring personal autonomy, devoid of petty politics, and rich in intellectual challenge and genuine creativity.',
    },
    paradoxes: detectedParadoxes,
  };
}
