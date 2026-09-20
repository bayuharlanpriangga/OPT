import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  TestType,
  Language,
  ThemePalette,
  UserAllResults,
} from '../types';
import {
  calculateMBTI,
  calculateEnneagram,
  calculateInstinct,
  calculateJungian,
  calculateSocionics,
  calculateAttitudinalPsyche,
  calculateBig5,
  calculateAlignment,
} from '../utils/scoring';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
  themePalette: ThemePalette;
  setThemePalette: (palette: ThemePalette) => void;

  activeTab: 'dashboard' | 'test' | 'result' | 'passport' | 'library';
  setActiveTab: (tab: 'dashboard' | 'test' | 'result' | 'passport' | 'library') => void;

  activeTestType: TestType | 'grand_assessment' | null;
  startTest: (testType: TestType | 'grand_assessment') => void;

  viewResultTestType: TestType | null;
  setViewResultTestType: (testType: TestType | null) => void;

  userAnswers: Record<string, number>;
  saveAnswer: (questionId: string, value: number) => void;

  allResults: UserAllResults;
  submitTestAnswers: (testType: TestType) => void;
  clearAllData: () => void;

  isCompleted: (testType: TestType) => boolean;
  completedCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const ANSWERS_STORAGE_KEY = 'omnipersona_answers_v1';
const RESULTS_STORAGE_KEY = 'omnipersona_results_v1';
const THEME_MODE_KEY = 'omnipersona_theme_mode';
const THEME_PALETTE_KEY = 'omnipersona_theme_palette';
const LANG_STORAGE_KEY = 'omnipersona_lang';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem(LANG_STORAGE_KEY) as Language) || 'id';
  });

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem(THEME_MODE_KEY) as 'light' | 'dark') || 'light';
  });

  const [themePalette, setThemePaletteState] = useState<ThemePalette>(() => {
    return (localStorage.getItem(THEME_PALETTE_KEY) as ThemePalette) || 'purple';
  });

  const [activeTab, setActiveTab] = useState<'dashboard' | 'test' | 'result' | 'passport' | 'library'>('dashboard');
  const [activeTestType, setActiveTestType] = useState<TestType | 'grand_assessment' | null>(null);
  const [viewResultTestType, setViewResultTestType] = useState<TestType | null>(null);

  const [userAnswers, setUserAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(ANSWERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [allResults, setAllResults] = useState<UserAllResults>(() => {
    try {
      const saved = localStorage.getItem(RESULTS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Apply theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_MODE_KEY, themeMode);
  }, [themeMode]);

  // Apply theme palette attribute
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme-palette', themePalette);
    localStorage.setItem(THEME_PALETTE_KEY, themePalette);
  }, [themePalette]);

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  };

  const setThemePalette = (palette: ThemePalette) => {
    setThemePaletteState(palette);
  };

  const saveAnswer = (questionId: string, value: number) => {
    setUserAnswers((prev) => {
      const updated = { ...prev, [questionId]: value };
      localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const startTest = (testType: TestType | 'grand_assessment') => {
    setActiveTestType(testType);
    setActiveTab('test');
  };

  const submitTestAnswers = (testType: TestType) => {
    const currentAnswers = userAnswers;
    const now = new Date().toISOString();

    setAllResults((prev) => {
      let updated: UserAllResults = { ...prev };
      const completedAt = { ...(prev.completedAt || {}), [testType]: now };

      if (testType === 'mbti') {
        updated.mbti = calculateMBTI(currentAnswers);
      } else if (testType === 'enneagram') {
        updated.enneagram = calculateEnneagram(currentAnswers);
      } else if (testType === 'instinct') {
        updated.instinct = calculateInstinct(currentAnswers);
      } else if (testType === 'jungian') {
        updated.jungian = calculateJungian(currentAnswers);
      } else if (testType === 'socionics') {
        updated.socionics = calculateSocionics(currentAnswers);
      } else if (testType === 'attitudinal_psyche') {
        updated.attitudinal_psyche = calculateAttitudinalPsyche(currentAnswers);
      } else if (testType === 'big5') {
        updated.big5 = calculateBig5(currentAnswers);
      } else if (testType === 'alignment') {
        updated.alignment = calculateAlignment(currentAnswers);
      }

      updated.completedAt = completedAt;
      localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearAllData = () => {
    localStorage.removeItem(ANSWERS_STORAGE_KEY);
    localStorage.removeItem(RESULTS_STORAGE_KEY);
    setUserAnswers({});
    setAllResults({});
    setActiveTab('dashboard');
    setActiveTestType(null);
    setViewResultTestType(null);
  };

  const isCompleted = (testType: TestType): boolean => {
    return !!allResults[testType];
  };

  const completedCount = ['mbti', 'enneagram', 'instinct', 'jungian', 'socionics', 'attitudinal_psyche', 'big5', 'alignment']
    .filter((t) => !!allResults[t as TestType]).length;

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        themeMode,
        toggleThemeMode,
        themePalette,
        setThemePalette,
        activeTab,
        setActiveTab,
        activeTestType,
        startTest,
        viewResultTestType,
        setViewResultTestType,
        userAnswers,
        saveAnswer,
        allResults,
        submitTestAnswers,
        clearAllData,
        isCompleted,
        completedCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
