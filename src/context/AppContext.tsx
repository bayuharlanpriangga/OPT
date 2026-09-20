import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type {
  TestType,
  Language,
  ThemePalette,
  UserAllResults,
  TestHistoryItem,
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

export type AppTab = 'dashboard' | 'test' | 'result' | 'passport' | 'library' | 'match';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
  themePalette: ThemePalette;
  setThemePalette: (palette: ThemePalette) => void;

  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;

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

  history: TestHistoryItem[];
  restoreHistorySnapshot: (historyItem: TestHistoryItem) => void;
  deleteHistoryItem: (id: string) => void;
  importAllData: (jsonData: string) => { success: boolean; message: string };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const ANSWERS_STORAGE_KEY = 'omnipersona_answers_v1';
const RESULTS_STORAGE_KEY = 'omnipersona_results_v1';
const HISTORY_STORAGE_KEY = 'omnipersona_history_v1';
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

  const [activeTab, setActiveTabState] = useState<AppTab>('dashboard');
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

  const [history, setHistory] = useState<TestHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem(HISTORY_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const isHashNavigating = useRef(false);

  // Hash-based routing synchronization
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setActiveTabState('dashboard');
        return;
      }

      isHashNavigating.current = true;
      const parts = hash.split('/');
      const section = parts[0];
      const param = parts[1] as TestType | 'grand_assessment' | undefined;

      if (section === 'test' && param) {
        setActiveTabState('test');
        setActiveTestType(param);
      } else if (section === 'result' && param) {
        setActiveTabState('result');
        setViewResultTestType(param as TestType);
      } else if (['dashboard', 'passport', 'library', 'match'].includes(section)) {
        setActiveTabState(section as AppTab);
      } else {
        setActiveTabState('dashboard');
      }

      setTimeout(() => {
        isHashNavigating.current = false;
      }, 50);
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const updateHash = useCallback((tab: AppTab, testParam?: string | null) => {
    if (isHashNavigating.current) return;
    let targetHash = `#${tab}`;
    if (tab === 'test' && testParam) {
      targetHash = `#test/${testParam}`;
    } else if (tab === 'result' && testParam) {
      targetHash = `#result/${testParam}`;
    }
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
  }, []);

  const setActiveTab = useCallback((tab: AppTab) => {
    setActiveTabState(tab);
    if (tab === 'test') {
      updateHash(tab, activeTestType);
    } else if (tab === 'result') {
      updateHash(tab, viewResultTestType);
    } else {
      updateHash(tab);
    }
  }, [activeTestType, viewResultTestType, updateHash]);

  const startTest = useCallback((testType: TestType | 'grand_assessment') => {
    setActiveTestType(testType);
    setActiveTabState('test');
    updateHash('test', testType);
  }, [updateHash]);

  const setViewResult = useCallback((testType: TestType | null) => {
    setViewResultTestType(testType);
    if (testType) {
      setActiveTabState('result');
      updateHash('result', testType);
    }
  }, [updateHash]);

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

  const recordHistory = (updatedResults: UserAllResults, type: TestType | 'grand_assessment') => {
    let summaryText = 'Hasil Tes';
    if (type === 'mbti' && updatedResults.mbti) {
      summaryText = `MBTI: ${updatedResults.mbti.type}`;
    } else if (type === 'enneagram' && updatedResults.enneagram) {
      summaryText = `Enneagram: ${updatedResults.enneagram.notation}`;
    } else if (type === 'grand_assessment') {
      summaryText = `Dossier Lengkap (${updatedResults.mbti?.type || ''} • ${updatedResults.enneagram?.notation || ''})`;
    } else {
      summaryText = `Modul: ${type}`;
    }

    const newEntry: TestHistoryItem = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString(),
      testType: type,
      summary: summaryText,
      snapshot: JSON.parse(JSON.stringify(updatedResults)),
    };

    setHistory((prev) => {
      const updated = [newEntry, ...prev.filter((item) => item.summary !== summaryText || Date.now() - new Date(item.timestamp).getTime() > 10000)].slice(0, 30);
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const submitTestAnswers = (testType: TestType) => {
    const currentAnswers = userAnswers;
    const now = new Date().toISOString();

    setAllResults((prev) => {
      const updated: UserAllResults = { ...prev };
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
      recordHistory(updated, testType);
      return updated;
    });
  };

  const clearAllData = () => {
    localStorage.removeItem(ANSWERS_STORAGE_KEY);
    localStorage.removeItem(RESULTS_STORAGE_KEY);
    localStorage.removeItem(HISTORY_STORAGE_KEY);
    setUserAnswers({});
    setAllResults({});
    setHistory([]);
    setActiveTab('dashboard');
    setActiveTestType(null);
    setViewResultTestType(null);
  };

  const restoreHistorySnapshot = (historyItem: TestHistoryItem) => {
    setAllResults(historyItem.snapshot);
    localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(historyItem.snapshot));
    setActiveTab('passport');
  };

  const deleteHistoryItem = (id: string) => {
    setHistory((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const importAllData = (jsonData: string): { success: boolean; message: string } => {
    try {
      const parsed = JSON.parse(jsonData);
      if (!parsed || typeof parsed !== 'object') {
        return { success: false, message: 'Format file JSON tidak valid.' };
      }

      let targetResults: UserAllResults = {};
      let targetAnswers: Record<string, number> = {};

      if (parsed.results || parsed.allResults) {
        targetResults = parsed.results || parsed.allResults;
        targetAnswers = parsed.answers || parsed.userAnswers || {};
      } else {
        targetResults = parsed;
      }

      setAllResults(targetResults);
      localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(targetResults));

      if (Object.keys(targetAnswers).length > 0) {
        setUserAnswers(targetAnswers);
        localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(targetAnswers));
      }

      const newEntry: TestHistoryItem = {
        id: `${Date.now()}_import`,
        timestamp: new Date().toISOString(),
        testType: 'grand_assessment',
        summary: language === 'id' ? 'Impor Berkas JSON' : 'Imported JSON File',
        snapshot: targetResults,
      };

      setHistory((prev) => {
        const updated = [newEntry, ...prev].slice(0, 30);
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });

      return {
        success: true,
        message: language === 'id' ? 'Data berhasil dipulihkan dari berkas JSON!' : 'Data successfully imported from JSON file!',
      };
    } catch (err: any) {
      return { success: false, message: `Gagal membaca JSON: ${err?.message || 'Error'}` };
    }
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
        setViewResultTestType: setViewResult,
        userAnswers,
        saveAnswer,
        allResults,
        submitTestAnswers,
        clearAllData,
        isCompleted,
        completedCount,
        history,
        restoreHistorySnapshot,
        deleteHistoryItem,
        importAllData,
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
