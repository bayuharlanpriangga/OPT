import { TestType, Question } from '../../types';
import { MBTI_QUESTIONS } from './mbti';
import { ENNEAGRAM_QUESTIONS } from './enneagram';
import { INSTINCT_QUESTIONS } from './instinct';
import { JUNGIAN_QUESTIONS } from './jungian';
import { SOCIONICS_QUESTIONS } from './socionics';
import { ATTITUDINAL_PSYCHE_QUESTIONS } from './attitudinalPsyche';
import { BIG5_QUESTIONS } from './big5';
import { ALIGNMENT_QUESTIONS } from './alignment';

export const ALL_QUESTIONS_MAP: Record<TestType, Question[]> = {
  mbti: MBTI_QUESTIONS,
  enneagram: ENNEAGRAM_QUESTIONS,
  instinct: INSTINCT_QUESTIONS,
  jungian: JUNGIAN_QUESTIONS,
  socionics: SOCIONICS_QUESTIONS,
  attitudinal_psyche: ATTITUDINAL_PSYCHE_QUESTIONS,
  big5: BIG5_QUESTIONS,
  alignment: ALIGNMENT_QUESTIONS,
};

export function getQuestionsForTest(testType: TestType): Question[] {
  return ALL_QUESTIONS_MAP[testType] || [];
}

export function getAllQuestionsSequential(): { question: Question; testType: TestType }[] {
  const tests: TestType[] = [
    'mbti',
    'enneagram',
    'instinct',
    'jungian',
    'socionics',
    'attitudinal_psyche',
    'big5',
    'alignment',
  ];
  const list: { question: Question; testType: TestType }[] = [];
  for (const t of tests) {
    for (const q of ALL_QUESTIONS_MAP[t]) {
      list.push({ question: q, testType: t });
    }
  }
  return list;
}
