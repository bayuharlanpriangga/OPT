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
  const hasAnyTest = Boolean(
    results.mbti ||
    results.enneagram ||
    results.instinct ||
    results.jungian ||
    results.socionics ||
    results.attitudinal_psyche ||
    results.big5 ||
    results.alignment
  );

  if (!hasAnyTest) {
    return null;
  }

  const mbti = results.mbti?.type;
  const enn = results.enneagram?.notation;
  const tritype = results.enneagram?.tritype;
  const iv = results.instinct?.stacking;
  const soc = results.socionics?.code;
  const quadra = results.socionics?.quadra;
  const ap = results.attitudinal_psyche?.type;
  const sloan = results.big5?.sloanCode;
  const align = results.alignment?.alignment;

  // Build primary archetype from only completed tests
  const archetypeParts: string[] = [];
  if (mbti) archetypeParts.push(mbti);
  if (enn) archetypeParts.push(tritype ? `${enn} (${tritype})` : enn);
  if (iv) archetypeParts.push(iv);
  if (results.jungian) archetypeParts.push(`Dom ${results.jungian.dominantFunction}`);
  if (soc) archetypeParts.push(soc);
  if (ap) archetypeParts.push(ap);
  if (sloan) archetypeParts.push(sloan);
  if (align) archetypeParts.push(align);

  const primaryArchetypeStr = archetypeParts.join(' • ');

  // Determine an evocative composite title based on real data
  let titleId = 'Sintesis Tipologi Personal';
  let titleEn = 'Personal Typology Synthesis';

  if (mbti) {
    if (mbti.includes('NT')) {
      titleId = `Sang Arsitek Pemikir Visioner [${mbti}${enn ? ` • ${enn}` : ''}]`;
      titleEn = `The Visionary Mastermind [${mbti}${enn ? ` • ${enn}` : ''}]`;
    } else if (mbti.includes('NF')) {
      titleId = `Sang Katalisator Jiwa & Empati [${mbti}${enn ? ` • ${enn}` : ''}]`;
      titleEn = `The Soul Catalyst & Idealist [${mbti}${enn ? ` • ${enn}` : ''}]`;
    } else if (mbti.includes('ST')) {
      titleId = `Sang Penegak Keteraturan Praktis [${mbti}${enn ? ` • ${enn}` : ''}]`;
      titleEn = `The Tactical Grounded Pillar [${mbti}${enn ? ` • ${enn}` : ''}]`;
    } else if (mbti.includes('SF')) {
      titleId = `Sang Pengayom Kehidupan Harmonis [${mbti}${enn ? ` • ${enn}` : ''}]`;
      titleEn = `The Harmonious Living Guardian [${mbti}${enn ? ` • ${enn}` : ''}]`;
    }
  } else if (enn) {
    titleId = `Arketipe Eksistensial [Enneagram ${enn}]`;
    titleEn = `Existential Archetype [Enneagram ${enn}]`;
  } else if (sloan) {
    titleId = `Profil Spektrum Perilaku [SLOAN ${sloan}]`;
    titleEn = `Behavioral Trait Signature [SLOAN ${sloan}]`;
  } else if (results.jungian) {
    titleId = `Orientasi Kognitif [Dominan ${results.jungian.dominantFunction}]`;
    titleEn = `Cognitive Orientation [Dominant ${results.jungian.dominantFunction}]`;
  }

  // Build dynamic narrative sentence by sentence based on completed modules
  const narrativeSentencesId: string[] = [];
  const narrativeSentencesEn: string[] = [];

  if (mbti) {
    narrativeSentencesId.push(`Konfigurasi psikologis Anda berakar pada kerangka kognitif ${mbti} (${results.mbti?.title.id || ''}).`);
    narrativeSentencesEn.push(`Your psychological architecture is rooted in the ${mbti} cognitive blueprint.`);
  }

  if (enn) {
    narrativeSentencesId.push(`Dorongan batin Anda dipandu oleh motivasi eksistensial Enneagram ${enn}${tritype ? ` (Tritype ${tritype})` : ''}.`);
    narrativeSentencesEn.push(`Your inner drive is propelled by Enneagram ${enn}${tritype ? ` (Tritype ${tritype})` : ''} existential patterns.`);
  }

  if (iv) {
    narrativeSentencesId.push(`Secara biologis, energi naluri Anda diprioritaskan melalui varian ${iv}.`);
    narrativeSentencesEn.push(`Primal biological energy is prioritized through your ${iv} instinctual variant.`);
  }

  if (soc && quadra) {
    narrativeSentencesId.push(`Dalam sirkuit komunikasi dan metabolisme informasi, Anda beresonansi dengan tipe Socionics ${soc} (Quadra ${quadra}).`);
    narrativeSentencesEn.push(`In information metabolism and social dynamics, you align with Socionics ${soc} (${quadra} Quadra).`);
  }

  if (ap) {
    narrativeSentencesId.push(`Sikap mental dan hierarki kehendak Anda tercermin dalam Attitudinal Psyche ${ap}.`);
    narrativeSentencesEn.push(`Your mental attitudes and volition hierarchy are structured by Attitudinal Psyche ${ap}.`);
  }

  if (sloan) {
    narrativeSentencesId.push(`Profil sifat empiris Big Five Anda terpetakan dalam pola ${sloan}.`);
    narrativeSentencesEn.push(`Your empirical Big Five personality profile is captured by the ${sloan} trait signature.`);
  }

  if (align) {
    narrativeSentencesId.push(`Kompas moral dan arah tindakan Anda dipandu oleh orientasi etika ${align}.`);
    narrativeSentencesEn.push(`Your ethical compass is guided by a ${align} moral axis.`);
  }

  if (archetypeParts.length < 8) {
    narrativeSentencesId.push(`Lengkapi modul tes lainnya untuk menghasilkan sintesis kognitif 8 dimensi yang semakin utuh dan mendalam.`);
    narrativeSentencesEn.push(`Complete the remaining modules to unlock a fully synthesized 8-dimensional cognitive dossier.`);
  }

  const narrativeId = narrativeSentencesId.join(' ');
  const narrativeEn = narrativeSentencesEn.join(' ');

  // Cross-system anomaly & nuance detection (only evaluate when both relevant systems exist)
  const detectedParadoxes: CognitiveParadox[] = [];

  // 1. Social Chameleon (MBTI Extravert with Reserved Big 5 or sp dominant)
  if (mbti && mbti.startsWith('E') && ((sloan && sloan.startsWith('R')) || (iv && iv.startsWith('sp')))) {
    detectedParadoxes.push({
      title: { id: 'The Reflective Extravert (Sosial Selektif)', en: 'The Reflective Extravert (Socially Selective)' },
      type: 'Ekstroversi Kognitif vs Energi Cadangan',
      description: {
        id: `Meskipun tipe kognitif Anda berorientasi eksternal (${mbti}), skor Big Five/Insting Anda condong mandiri (SLOAN: R / ${iv || 'sp'}). Anda terampil menavigasi interaksi sosial luar namun memiliki batas baterai sosial yang tegas dan membutuhkan ruang hening untuk memulihkan energi.`,
        en: `While your cognitive type directs outward energy (${mbti}), your Big Five or instinctual stacking leans reserved (SLOAN: R / ${iv || 'sp'}). You navigate external circles deftly but maintain clear personal boundaries and cherish solitary decompression.`,
      },
      insight: {
        id: 'Gunakan orientasi eksternal Anda untuk mengeksekusi proyek luar tanpa merasa wajib menghadiri semua interaksi sosial yang tidak penting.',
        en: 'Harness your outward cognitive drive for purposeful impact without exhausting yourself on superficial social engagements.',
      },
    });
  }

  // 2. Engaging Solitary (MBTI Introvert with High Social Big 5)
  if (mbti && mbti.startsWith('I') && ((sloan && sloan.startsWith('S')) || (iv && iv.startsWith('so')))) {
    detectedParadoxes.push({
      title: { id: 'The Engaging Solitary (Introver Komunikatif)', en: 'The Engaging Solitary (Warm Introvert)' },
      type: 'Kognisi Internal vs Kehangatan Hubungan',
      description: {
        id: `Struktur pikiran Anda memproses data secara internal (${mbti}), namun keterhubungan sosial Anda tercatat tinggi (SLOAN: S / ${iv || 'so'}). Anda ramah dan mudah didekati, tetapi kesimpulan serta prinsip hidup Anda tetap dirumuskan dalam keheningan batin.`,
        en: `Your baseline cognition evaluates reality privately (${mbti}), yet your social engagement is strong (SLOAN: S / ${iv || 'so'}). You connect warmly with others while your convictions remain firmly anchored in internal solitude.`,
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
  if (mbti && mbti.includes('T') && (coreEnn === 2 || coreEnn === 4 || tritypeStr.includes('2') || tritypeStr.includes('4'))) {
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
  if (mbti && mbti.includes('P') && (sloan && (sloan.includes('O') || (results.big5?.scores.conscientiousness || 0) >= 55))) {
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

  // Harmonic entry if multiple tests taken and no stark paradox detected
  if (detectedParadoxes.length === 0 && archetypeParts.length >= 2) {
    detectedParadoxes.push({
      title: { id: 'Harmonic Coherence (Integrasi Selaras)', en: 'Harmonic Coherence (Aligned Synergy)' },
      type: 'Keselarasan Tipologi Lintas Sistem',
      description: {
        id: `Modul psikometri Anda yang telah selesai saling mengonfirmasi preferensi yang koheren tanpa friksi kepribadian internal yang tajam.`,
        en: `Your completed psychometric modules uniformly confirm a coherent disposition with minimal cross-system friction.`,
      },
      insight: {
        id: 'Kepribadian Anda memiliki arah fokus yang sangat terpusat; salurkan kepastian identitas ini pada karya-karya bermakna jangka panjang.',
        en: 'Your identity exhibits centered focus; direct this self-clarity toward substantive long-term creative and intellectual endeavors.',
      },
    });
  }

  const coreMindsetId = mbti && enn
    ? `Sinergi antara nalar ${mbti} dan motivasi inti ${enn} mendorong Anda untuk mencari keaslian dan presisi dalam tindakan nyata.`
    : mbti
    ? `Preferensi kognitif ${mbti} mengarahkan cara Anda memproses persepsi dan mengambil keputusan sehari-hari.`
    : enn
    ? `Dorongan inti Enneagram ${enn} memusatkan energi hidup Anda pada pencarian makna dan integritas diri.`
    : `Pola kognitif Anda merefleksikan kombinasi modul tipologi yang telah Anda selesaikan.`;

  const coreMindsetEn = mbti && enn
    ? `The synergy between your ${mbti} cognition and ${enn} drive propels you to demand authentic truth and purposeful execution.`
    : mbti
    ? `Your ${mbti} cognitive preference guides how you perceive information and make daily decisions.`
    : enn
    ? `Your core Enneagram ${enn} motivation centers your life energy toward purpose and authentic identity.`
    : `Your cognitive signature reflects the synthesis of your completed typology modules.`;

  return {
    compositeTitle: { id: titleId, en: titleEn },
    primaryArchetype: {
      id: primaryArchetypeStr || 'Sintesis Tipologi Personal',
      en: primaryArchetypeStr || 'Personal Typology Synthesis',
    },
    coreMindset: {
      id: coreMindsetId,
      en: coreMindsetEn,
    },
    synergyNarrative: {
      id: narrativeId,
      en: narrativeEn,
    },
    cognitiveProfileSummary: {
      id: align
        ? `Dominan pada fungsi kognitif yang dipandu oleh kompas etika ${align}.`
        : `Dinamika kognitif terpadu dari modul yang telah diselesaikan.`,
      en: align
        ? `Cognitive functions guided by an authentic ${align} moral compass.`
        : `Integrated cognitive dynamics from completed modules.`,
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
