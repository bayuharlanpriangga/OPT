import { UserAllResults, LocalizedString } from '../../types';

export interface SynergyAnalysis {
  compositeTitle: LocalizedString;
  primaryArchetype: LocalizedString;
  coreMindset: LocalizedString;
  synergyNarrative: LocalizedString;
  cognitiveProfileSummary: LocalizedString;
  strengths: LocalizedString[];
  growthChallenges: LocalizedString[];
  idealEnvironment: LocalizedString;
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
  };
}
