import {
  MBTIResult,
  MBTIClarityItem,
  EnneagramResult,
  InstinctResult,
  JungianResult,
  SocionicsResult,
  AttitudinalPsycheResult,
  Big5Result,
  AlignmentResult,
  LocalizedString,
} from '../types';
import { MBTI_PROFILES } from '../data/descriptions/mbtiData';
import { ENNEAGRAM_CORE_PROFILES, getTritypeProfile } from '../data/descriptions/enneagramData';
import { INSTINCT_PROFILES } from '../data/descriptions/instinctData';
import { JUNGIAN_FUNCTIONS_INFO } from '../data/descriptions/jungianData';
import { SOCIOTYPES, QUADRA_DETAILS } from '../data/descriptions/socionicsData';
import { AP_TYPE_ARCHETYPES } from '../data/descriptions/apData';
import { getSloanProfile } from '../data/descriptions/big5Data';
import { ALIGNMENT_DETAILS } from '../data/descriptions/alignmentData';
import { MBTI_QUESTIONS } from '../data/questions/mbti';
import { ENNEAGRAM_QUESTIONS } from '../data/questions/enneagram';
import { INSTINCT_QUESTIONS } from '../data/questions/instinct';
import { JUNGIAN_QUESTIONS } from '../data/questions/jungian';
import { SOCIONICS_QUESTIONS } from '../data/questions/socionics';
import { ATTITUDINAL_PSYCHE_QUESTIONS } from '../data/questions/attitudinalPsyche';
import { BIG5_QUESTIONS } from '../data/questions/big5';
import { ALIGNMENT_QUESTIONS } from '../data/questions/alignment';

// Convert 1-5 scale answer to standard -2 to +2 value
export function answerToValue(val: number): number {
  return val - 3; // 1 -> -2, 2 -> -1, 3 -> 0, 4 -> +1, 5 -> +2
}

// Helper to compute clarity for MBTI dimensions
function getMBTIClarity(lead: string, pctLead: number, dim: 'EI' | 'SN' | 'TF' | 'JP'): MBTIClarityItem {
  const diff = Math.abs(pctLead - (100 - pctLead));
  let level: 'strong' | 'moderate' | 'slight' = 'moderate';
  let labelId = 'Moderat';
  let labelEn = 'Moderate';

  if (diff >= 35) {
    level = 'strong';
    labelId = 'Sangat Jelas';
    labelEn = 'Clear Preference';
  } else if (diff < 15) {
    level = 'slight';
    labelId = 'Borderline (Seimbang)';
    labelEn = 'Borderline (Balanced)';
  }

  return {
    dimension: dim,
    leadPole: lead,
    diff,
    level,
    label: { id: labelId, en: labelEn },
  };
}

// 1. MBTI Calculation
export function calculateMBTI(answers: Record<string, number>): MBTIResult {
  let scoreEI = 0;
  let scoreSN = 0;
  let scoreTF = 0;
  let scoreJP = 0;

  for (const q of MBTI_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    const val = answerToValue(rawVal) * q.polarity;

    if (q.dimension === 'EI') scoreEI += val;
    else if (q.dimension === 'SN') scoreSN += val;
    else if (q.dimension === 'TF') scoreTF += val;
    else if (q.dimension === 'JP') scoreJP += val;
  }

  const letterE_or_I = scoreEI >= 0 ? 'E' : 'I';
  const letterS_or_N = scoreSN >= 0 ? 'S' : 'N';
  const letterT_or_F = scoreTF >= 0 ? 'T' : 'F';
  const letterJ_or_P = scoreJP >= 0 ? 'J' : 'P';

  const type = `${letterE_or_I}${letterS_or_N}${letterT_or_F}${letterJ_or_P}`;
  const profile = MBTI_PROFILES[type] || MBTI_PROFILES['INTJ'];

  // Percentages (scale -8 to +8 -> 0 to 100)
  const maxScore = 8;
  const pctE = Math.round(((scoreEI + maxScore) / (maxScore * 2)) * 100);
  const pctS = Math.round(((scoreSN + maxScore) / (maxScore * 2)) * 100);
  const pctT = Math.round(((scoreTF + maxScore) / (maxScore * 2)) * 100);
  const pctJ = Math.round(((scoreJP + maxScore) / (maxScore * 2)) * 100);

  const boundedE = Math.min(Math.max(pctE, 5), 95);
  const boundedS = Math.min(Math.max(pctS, 5), 95);
  const boundedT = Math.min(Math.max(pctT, 5), 95);
  const boundedJ = Math.min(Math.max(pctJ, 5), 95);

  return {
    type,
    title: profile.title,
    description: profile.description,
    cognitiveStack: profile.cognitiveStack,
    strengths: profile.strengths,
    growth: profile.growth,
    percentages: {
      E: boundedE,
      I: 100 - boundedE,
      S: boundedS,
      N: 100 - boundedS,
      T: boundedT,
      F: 100 - boundedT,
      J: boundedJ,
      P: 100 - boundedJ,
    },
    clarity: {
      EI: getMBTIClarity(letterE_or_I, letterE_or_I === 'E' ? boundedE : 100 - boundedE, 'EI'),
      SN: getMBTIClarity(letterS_or_N, letterS_or_N === 'S' ? boundedS : 100 - boundedS, 'SN'),
      TF: getMBTIClarity(letterT_or_F, letterT_or_F === 'T' ? boundedT : 100 - boundedT, 'TF'),
      JP: getMBTIClarity(letterJ_or_P, letterJ_or_P === 'J' ? boundedJ : 100 - boundedJ, 'JP'),
    },
  };
}

// 2. Enneagram & Tritype Calculation
export function calculateEnneagram(answers: Record<string, number>): EnneagramResult {
  const scores: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  for (const q of ENNEAGRAM_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    const val = rawVal; // 1 to 5
    const typeNum = parseInt(q.dimension.replace('type', ''), 10);
    if (scores[typeNum] !== undefined) {
      scores[typeNum] += val;
    }
  }

  // Find core type (highest score)
  let coreType = 1;
  let maxScore = -1;
  for (let t = 1; t <= 9; t++) {
    if (scores[t] > maxScore) {
      maxScore = scores[t];
      coreType = t;
    }
  }

  // Find wing (adjacent numbers: e.g. 5 has 4 and 6, 1 has 9 and 2, 9 has 8 and 1)
  const leftWing = coreType === 1 ? 9 : coreType - 1;
  const rightWing = coreType === 9 ? 1 : coreType + 1;
  const wing = scores[leftWing] >= scores[rightWing] ? leftWing : rightWing;
  const notation = `${coreType}w${wing}`;

  // Tritype: highest from Gut (8, 9, 1), Heart (2, 3, 4), Head (5, 6, 7)
  const gutCandidates = [8, 9, 1].sort((a, b) => scores[b] - scores[a]);
  const heartCandidates = [2, 3, 4].sort((a, b) => scores[b] - scores[a]);
  const headCandidates = [5, 6, 7].sort((a, b) => scores[b] - scores[a]);

  const topGut = gutCandidates[0];
  const topHeart = heartCandidates[0];
  const topHead = headCandidates[0];

  // Order tritype by core type first, then 2nd highest, then 3rd
  const centers = [
    { type: topGut, score: scores[topGut] },
    { type: topHeart, score: scores[topHeart] },
    { type: topHead, score: scores[topHead] },
  ];

  // Put core center first
  const ordered = centers.sort((a, b) => {
    if (a.type === coreType) return -1;
    if (b.type === coreType) return 1;
    return b.score - a.score;
  });

  const tritype = `${ordered[0].type}${ordered[1].type}${ordered[2].type}`;
  const tritypeProfile = getTritypeProfile(ordered[0].type, ordered[1].type, ordered[2].type);
  const coreProfile = ENNEAGRAM_CORE_PROFILES[coreType];

  return {
    coreType,
    wing,
    notation,
    tritype,
    tritypeArchetype: tritypeProfile.title,
    gutType: topGut,
    heartType: topHeart,
    headType: topHead,
    scores,
    title: coreProfile.title,
    description: coreProfile.description,
  };
}

// 3. Instinctual Variant Calculation
export function calculateInstinct(answers: Record<string, number>): InstinctResult {
  const scores: Record<'sp' | 'so' | 'sx', number> = { sp: 0, so: 0, sx: 0 };

  for (const q of INSTINCT_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    const dim = q.dimension as 'sp' | 'so' | 'sx';
    scores[dim] += rawVal;
  }

  const variants: ('sp' | 'so' | 'sx')[] = ['sp', 'so', 'sx'];
  const sorted = variants.sort((a, b) => scores[b] - scores[a]);
  const dominant = sorted[0];
  const secondary = sorted[1];
  const blindspot = sorted[2];

  const stacking = `${dominant}/${secondary}`;
  const profile = INSTINCT_PROFILES[stacking] || INSTINCT_PROFILES['sp/so'];

  return {
    dominant,
    secondary,
    blindspot,
    stacking,
    scores,
    title: profile.title,
    description: profile.description,
  };
}

// Canonical Jungian functional pairs & auxiliary requirements
const JUNG_OPPOSITES: Record<string, string> = {
  Ni: 'Se',
  Se: 'Ni',
  Ne: 'Si',
  Si: 'Ne',
  Ti: 'Fe',
  Fe: 'Ti',
  Te: 'Fi',
  Fi: 'Te',
};

// Valid auxiliary functions that complement the dominant function:
// - If dominant is irrational (perceiving: Ni, Ne, Si, Se), auxiliary must be rational (judging: Te, Fe, Ti, Fi) with opposite attitude.
// - If dominant is rational (judging: Ti, Te, Fi, Fe), auxiliary must be irrational (perceiving: Ne, Se, Ni, Si) with opposite attitude.
const JUNG_VALID_AUXILIARIES: Record<string, string[]> = {
  Ni: ['Te', 'Fe'],
  Si: ['Te', 'Fe'],
  Ne: ['Ti', 'Fi'],
  Se: ['Ti', 'Fi'],
  Ti: ['Ne', 'Se'],
  Fi: ['Ne', 'Se'],
  Te: ['Ni', 'Si'],
  Fe: ['Ni', 'Si'],
};

// 4. Classic Jungian Calculation
export function calculateJungian(answers: Record<string, number>): JungianResult {
  const scores: Record<string, number> = {
    Ne: 0, Ni: 0, Se: 0, Si: 0, Te: 0, Ti: 0, Fe: 0, Fi: 0,
  };

  for (const q of JUNGIAN_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    scores[q.dimension] += rawVal * 10; // scaled 10-50
  }

  // Find dominant function (highest score)
  const sortedFunctions = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const dominantFunction = sortedFunctions[0];

  // Pick auxiliary from valid complementary functions according to Jungian typology
  const validAuxList = JUNG_VALID_AUXILIARIES[dominantFunction] || ['Te', 'Fe'];
  const auxiliaryFunction = validAuxList.reduce((best, cur) => (scores[cur] > scores[best] ? cur : best), validAuxList[0]);

  // Tertiary is the functional reflection of the auxiliary
  const tertiaryFunction = JUNG_OPPOSITES[auxiliaryFunction] || 'Fi';

  // Inferior is the strict functional opposite of the dominant function
  const inferiorFunction = JUNG_OPPOSITES[dominantFunction] || 'Se';

  // Identify elevated shadow function: highest scoring function outside conscious ego stack
  const egoStack = [dominantFunction, auxiliaryFunction, tertiaryFunction, inferiorFunction];
  const shadowCandidates = sortedFunctions.filter((f) => !egoStack.includes(f));
  const topShadow = shadowCandidates[0];
  const shadowElevated = topShadow && scores[topShadow] >= 30 ? {
    func: topShadow,
    score: scores[topShadow],
    label: {
      id: `Fungsi Bayangan Tertinggi: ${topShadow} (${scores[topShadow]} poin) — Menunjukkan energi kognitif bawah sadar yang aktif.`,
      en: `Elevated Shadow Function: ${topShadow} (${scores[topShadow]} pts) — Indicates active unconscious cognitive energy.`,
    },
  } : undefined;

  const domInfo = JUNGIAN_FUNCTIONS_INFO[dominantFunction];

  return {
    dominantFunction,
    auxiliaryFunction,
    tertiaryFunction,
    inferiorFunction,
    scores,
    title: {
      id: `Dominan ${domInfo?.name?.id || dominantFunction} — Aux ${auxiliaryFunction}`,
      en: `Dominant ${domInfo?.name?.en || dominantFunction} — Aux ${auxiliaryFunction}`,
    },
    description: domInfo?.description || { id: '', en: '' },
    stackAnalysis: {
      axisBalance: {
        id: `Sumbu kognitif utama: ${dominantFunction} (Dominan) bersanding dengan ${inferiorFunction} (Inferior), didukung penyeimbang sadar ${auxiliaryFunction} (Auxiliary) dan ${tertiaryFunction} (Tersier).`,
        en: `Primary cognitive axis: ${dominantFunction} (Dominant) paired with ${inferiorFunction} (Inferior), supported by conscious balancers ${auxiliaryFunction} (Auxiliary) and ${tertiaryFunction} (Tertiary).`,
      },
      shadowElevated,
    },
  };
}

// 5. Socionics Calculation
export function calculateSocionics(answers: Record<string, number>): SocionicsResult {
  let scoreRat = 0;
  let scoreEI = 0;
  let scoreNS = 0;
  let scoreTF = 0;

  for (const q of SOCIONICS_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    const val = answerToValue(rawVal) * q.polarity;

    if (q.dimension === 'soc_rationality') scoreRat += val;
    else if (q.dimension === 'soc_ei') scoreEI += val;
    else if (q.dimension === 'soc_ns') scoreNS += val;
    else if (q.dimension === 'soc_tf') scoreTF += val;
  }

  const isE = scoreEI >= 0;
  const isN = scoreNS >= 0;
  const isT = scoreTF >= 0;
  const isRat = scoreRat >= 0; // Rational (j) vs Irrational (p)

  let code = 'ILE';
  if (isE) {
    if (isN) {
      if (isT) code = isRat ? 'LIE' : 'ILE';
      else code = isRat ? 'EIE' : 'IEE';
    } else {
      if (isT) code = isRat ? 'LSE' : 'SLE';
      else code = isRat ? 'ESE' : 'SEE';
    }
  } else {
    if (isN) {
      if (isT) code = isRat ? 'LII' : 'ILI';
      else code = isRat ? 'EII' : 'IEI';
    } else {
      if (isT) code = isRat ? 'LSI' : 'SLI';
      else code = isRat ? 'ESI' : 'SEI';
    }
  }

  const sociotype = SOCIOTYPES[code] || SOCIOTYPES['ILE'];
  const quadraInfo = QUADRA_DETAILS[sociotype.quadra];

  return {
    code: sociotype.code,
    mbtiEquivalent: sociotype.mbtiEquivalent,
    name: sociotype.name,
    quadra: sociotype.quadra,
    quadraDescription: quadraInfo.ethos,
    club: sociotype.club,
    description: sociotype.description,
    scores: {
      Rationality: scoreRat,
      Extraversion: scoreEI,
      Intuition: scoreNS,
      Logic: scoreTF,
    },
  };
}

// 6. Attitudinal Psyche Calculation
export function calculateAttitudinalPsyche(answers: Record<string, number>): AttitudinalPsycheResult {
  const scores: Record<string, number> = {
    Volition: 0,
    Logic: 0,
    Emotion: 0,
    Physics: 0,
  };

  for (const q of ATTITUDINAL_PSYCHE_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    scores[q.dimension] += rawVal;
  }

  const aspectLetterMap: Record<string, string> = {
    Volition: 'V',
    Logic: 'L',
    Emotion: 'E',
    Physics: 'F',
  };

  const sortedAspects = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const typeLetters = sortedAspects.map((k) => aspectLetterMap[k]).join('');
  const type = typeLetters;

  const archetype = AP_TYPE_ARCHETYPES[type] || {
    title: { id: `Tipe AP ${type}`, en: `AP Type ${type}` },
    description: { id: 'Hierarki sikap mental unik.', en: 'Unique mental attitude hierarchy.' },
  };

  return {
    type,
    aspects: {
      first: sortedAspects[0],
      second: sortedAspects[1],
      third: sortedAspects[2],
      fourth: sortedAspects[3],
    },
    archetype: archetype.title,
    description: archetype.description,
    scores: {
      Volition: scores.Volition,
      Logic: scores.Logic,
      Emotion: scores.Emotion,
      Physics: scores.Physics,
    },
  };
}

// 7. Big 5 / SLOAN Calculation
export function calculateBig5(answers: Record<string, number>): Big5Result {
  const factorScores: Record<string, number> = {
    extraversion: 0,
    neuroticism: 0,
    conscientiousness: 0,
    agreeableness: 0,
    openness: 0,
  };

  for (const q of BIG5_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    const val = answerToValue(rawVal) * q.polarity; // -2 to +2
    factorScores[q.dimension] += val;
  }

  // Convert each factor (-6 to +6) to percentage 0-100
  const maxScore = 6;
  const pct = (score: number) => Math.min(Math.max(Math.round(((score + maxScore) / (maxScore * 2)) * 100), 5), 95);

  const extraversionPct = pct(factorScores.extraversion);
  const neuroticismPct = pct(factorScores.neuroticism);
  const conscientiousnessPct = pct(factorScores.conscientiousness);
  const agreeablenessPct = pct(factorScores.agreeableness);
  const opennessPct = pct(factorScores.openness);

  const sloanLetters = {
    socialOrReserved: (extraversionPct >= 50 ? 'S' : 'R') as 'S' | 'R',
    limbicOrCalm: (neuroticismPct >= 50 ? 'L' : 'C') as 'L' | 'C',
    organizedOrUnstructured: (conscientiousnessPct >= 50 ? 'O' : 'U') as 'O' | 'U',
    accommodatingOrEgocentric: (agreeablenessPct >= 50 ? 'A' : 'E') as 'A' | 'E',
    noncuriousOrInquisitive: (opennessPct >= 50 ? 'I' : 'N') as 'I' | 'N',
  };

  const sloanCode = `${sloanLetters.socialOrReserved}${sloanLetters.limbicOrCalm}${sloanLetters.organizedOrUnstructured}${sloanLetters.accommodatingOrEgocentric}${sloanLetters.noncuriousOrInquisitive}`;
  const profile = getSloanProfile(sloanCode);

  return {
    sloanCode,
    scores: {
      extraversion: extraversionPct,
      neuroticism: neuroticismPct,
      conscientiousness: conscientiousnessPct,
      agreeableness: agreeablenessPct,
      openness: opennessPct,
    },
    sloanLetters,
    title: profile.title,
    description: profile.description,
  };
}

// 8. Moral Alignment Calculation
export function calculateAlignment(answers: Record<string, number>): AlignmentResult {
  let orderTotal = 0;
  let moralityTotal = 0;

  for (const q of ALIGNMENT_QUESTIONS) {
    const rawVal = answers[q.id] || 3;
    const val = answerToValue(rawVal) * q.polarity; // -2 to +2

    if (q.dimension === 'order') orderTotal += val;
    else if (q.dimension === 'morality') moralityTotal += val;
  }

  // Max score is 6 questions * 2 = 12. Convert to -100 to +100
  const orderScore = Math.round((orderTotal / 12) * 100);
  const moralityScore = Math.round((moralityTotal / 12) * 100);

  let orderLabelStr = 'Neutral';
  if (orderScore > 20) orderLabelStr = 'Lawful';
  else if (orderScore < -20) orderLabelStr = 'Chaotic';

  let moralityLabelStr = 'Neutral';
  if (moralityScore > 20) moralityLabelStr = 'Good';
  else if (moralityScore < -20) moralityLabelStr = 'Evil';

  let alignmentKey = `${orderLabelStr} ${moralityLabelStr}`;
  if (orderLabelStr === 'Neutral' && moralityLabelStr === 'Neutral') {
    alignmentKey = 'True Neutral';
  }

  const detail = ALIGNMENT_DETAILS[alignmentKey] || ALIGNMENT_DETAILS['True Neutral'];

  return {
    alignment: detail.alignment,
    orderScore,
    moralityScore,
    orderLabel: {
      id: orderLabelStr === 'Lawful' ? 'Tertib (Lawful)' : orderLabelStr === 'Chaotic' ? 'Bebas (Chaotic)' : 'Netral (Neutral)',
      en: orderLabelStr,
    },
    moralityLabel: {
      id: moralityLabelStr === 'Good' ? 'Baik (Good)' : moralityLabelStr === 'Evil' ? 'Egois (Evil)' : 'Netral (Neutral)',
      en: moralityLabelStr,
    },
    title: detail.title,
    description: detail.description,
  };
}

export interface ResponseReliability {
  score: number; // 0 - 100
  status: 'high' | 'moderate' | 'low';
  label: LocalizedString;
  note: LocalizedString;
}

// Psychometric check for straight-lining or acquiescence bias
export function evaluateResponseReliability(answers: Record<string, number>): ResponseReliability {
  const values = Object.values(answers);
  if (values.length < 8) {
    return {
      score: 100,
      status: 'high',
      label: { id: 'Reliabilitas Tinggi', en: 'High Reliability' },
      note: { id: 'Variansi respon terdistribusi normal.', en: 'Normal response distribution.' },
    };
  }

  // Count neutral (3) answers
  const neutralCount = values.filter((v) => v === 3).length;
  const neutralRatio = neutralCount / values.length;

  // Check variance
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / values.length;

  if (neutralRatio > 0.65 || variance < 0.25) {
    return {
      score: 45,
      status: 'low',
      label: { id: 'Perhatian: Bias Netral / Seragam', en: 'Low Variance / Neutral Bias' },
      note: {
        id: 'Terdeteksi banyak jawaban netral atau bernilai seragam. Pertimbangkan mengambil tes ulang dengan jawaban yang lebih tegas untuk akurasi maksimal.',
        en: 'A high frequency of neutral or identical responses was detected. Consider retaking with more distinct answers for maximum accuracy.',
      },
    };
  } else if (neutralRatio > 0.4 || variance < 0.55) {
    return {
      score: 75,
      status: 'moderate',
      label: { id: 'Reliabilitas Moderat', en: 'Moderate Reliability' },
      note: {
        id: 'Jawaban cukup bervariasi dengan kecenderungan minor pada pilihan netral.',
        en: 'Responses are sufficiently varied with slight tendency towards neutrality.',
      },
    };
  }

  return {
    score: 95,
    status: 'high',
    label: { id: 'Reliabilitas Psikometri Terverifikasi', en: 'Verified High Psychometric Reliability' },
    note: {
      id: 'Variansi jawaban seimbang dengan diferensiasi preferensi yang tajam dan otentik.',
      en: 'Balanced response variance with authentic, well-differentiated preferences.',
    },
  };
}
