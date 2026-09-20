export type TestType = 
  | 'mbti'
  | 'enneagram'
  | 'instinct'
  | 'jungian'
  | 'socionics'
  | 'attitudinal_psyche'
  | 'big5'
  | 'alignment';

export type Language = 'id' | 'en';
export type ThemePalette = 'purple' | 'ocean' | 'forest' | 'amber';

export interface LocalizedString {
  id: string;
  en: string;
}

export interface Question {
  id: string;
  testType: TestType;
  text: LocalizedString;
  dimension: string;
  polarity: 1 | -1;
  category?: string;
}

export interface MBTIResult {
  type: string; // e.g. 'INTJ'
  percentages: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
  title: LocalizedString;
  description: LocalizedString;
  cognitiveStack: string[]; // e.g. ['Ni', 'Te', 'Fi', 'Se']
  strengths: LocalizedString[];
  growth: LocalizedString[];
}

export interface EnneagramResult {
  coreType: number;
  wing: number;
  notation: string; // e.g. '5w4'
  tritype: string; // e.g. '548'
  tritypeArchetype: LocalizedString;
  gutType: number;
  heartType: number;
  headType: number;
  scores: Record<number, number>;
  title: LocalizedString;
  description: LocalizedString;
}

export interface InstinctResult {
  dominant: 'sp' | 'so' | 'sx';
  secondary: 'sp' | 'so' | 'sx';
  blindspot: 'sp' | 'so' | 'sx';
  stacking: string; // e.g. 'sp/sx'
  scores: Record<'sp' | 'so' | 'sx', number>;
  title: LocalizedString;
  description: LocalizedString;
}

export interface JungianResult {
  dominantFunction: string; // e.g. 'Ni'
  auxiliaryFunction: string; // e.g. 'Te'
  tertiaryFunction: string; // e.g. 'Fi'
  inferiorFunction: string; // e.g. 'Se'
  scores: Record<string, number>; // Ne, Ni, Se, Si, Te, Ti, Fe, Fi
  title: LocalizedString;
  description: LocalizedString;
}

export interface SocionicsResult {
  code: string; // e.g. 'ILI'
  mbtiEquivalent: string; // e.g. 'INTp'
  name: LocalizedString; // 'The Critic' / 'Kritikus'
  quadra: 'Alpha' | 'Beta' | 'Gamma' | 'Delta';
  quadraDescription: LocalizedString;
  club: LocalizedString;
  description: LocalizedString;
  scores: Record<string, number>;
}

export interface AttitudinalPsycheResult {
  type: string; // e.g. 'VLEF'
  aspects: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  archetype: LocalizedString;
  scores: {
    Volition: number;
    Logic: number;
    Emotion: number;
    Physics: number;
  };
  description: LocalizedString;
}

export interface Big5Result {
  sloanCode: string; // e.g. 'RCOAI'
  scores: {
    extraversion: number; // 0-100
    neuroticism: number; // 0-100
    conscientiousness: number; // 0-100
    agreeableness: number; // 0-100
    openness: number; // 0-100
  };
  sloanLetters: {
    socialOrReserved: 'S' | 'R' | 'x';
    limbicOrCalm: 'L' | 'C' | 'x';
    organizedOrUnstructured: 'O' | 'U' | 'x';
    accommodatingOrEgocentric: 'A' | 'E' | 'x';
    noncuriousOrInquisitive: 'N' | 'I' | 'x';
  };
  title: LocalizedString;
  description: LocalizedString;
}

export interface AlignmentResult {
  alignment: string; // e.g. 'Lawful Good', 'True Neutral', etc.
  orderScore: number; // -100 to +100 (Chaotic to Lawful)
  moralityScore: number; // -100 to +100 (Evil to Good)
  orderLabel: LocalizedString;
  moralityLabel: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
}

export interface TestMetadata {
  id: TestType;
  title: LocalizedString;
  subtitle: LocalizedString;
  icon: string;
  badge: string;
  estMinutes: number;
  questionCount: number;
  colorScheme: string; // primary / secondary / tertiary
  summary: LocalizedString;
}

export interface UserAllResults {
  mbti?: MBTIResult;
  enneagram?: EnneagramResult;
  instinct?: InstinctResult;
  jungian?: JungianResult;
  socionics?: SocionicsResult;
  attitudinal_psyche?: AttitudinalPsycheResult;
  big5?: Big5Result;
  alignment?: AlignmentResult;
  completedAt?: Record<string, string>;
}
