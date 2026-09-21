import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { ThemePalette } from '../../types';

export const M3TopAppBar: React.FC = () => {
  const {
    language,
    setLanguage,
    themeMode,
    toggleThemeMode,
    themePalette,
    setThemePalette,
    activeTab,
    setActiveTab,
    completedCount,
  } = useApp();

  const [paletteMenuOpen, setPaletteMenuOpen] = useState(false);

  const palettes: { key: ThemePalette; name: string; color: string }[] = [
    { key: 'purple', name: 'Deep Violet', color: '#6750A4' },
    { key: 'ocean', name: 'Ocean Cyan', color: '#006590' },
    { key: 'forest', name: 'Forest Emerald', color: '#006D44' },
    { key: 'amber', name: 'Sunset Amber', color: '#8B5000' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div
          onClick={() => setActiveTab('dashboard')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-m3-md bg-primary flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform duration-200">
            <span className="material-symbols-outlined text-[24px]">psychology</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg md:text-xl tracking-tight text-on-surface">OPT</span>
            </div>
            <p className="text-xs text-on-surface-variant hidden sm:block">
              {language === 'id' ? 'Pusat Tes Kepribadian Komprehensif' : 'Unified Personality Diagnostics'}
            </p>
          </div>
        </div>

        {/* Right Controls: Theme Palette, Dark Mode, Language, Dossier Link */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Quick Passport button if tests completed */}
          {completedCount > 0 && (
            <button
              onClick={() => setActiveTab('passport')}
              className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === 'passport'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-primary-container text-on-primary-container hover:shadow-xs'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">badge</span>
              <span>{language === 'id' ? 'Dossier Pribadi' : 'Personal Dossier'}</span>
              <span className="ml-1 w-4 h-4 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center">
                {completedCount}
              </span>
            </button>
          )}

          {/* Theme Palette Picker Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPaletteMenuOpen(!paletteMenuOpen)}
              title="Material 3 Dynamic Palette"
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface transition-colors duration-150"
            >
              <span className="material-symbols-outlined text-[20px]">palette</span>
            </button>

            {paletteMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setPaletteMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-44 rounded-m3-lg bg-surface-container-high border border-outline-variant shadow-lg py-2 z-50 animate-fade-in">
                  <div className="px-3 py-1 text-[11px] font-semibold text-outline uppercase tracking-wider">
                    M3 Color Palette
                  </div>
                  {palettes.map((p) => (
                    <button
                      key={p.key}
                      onClick={() => {
                        setThemePalette(p.key);
                        setPaletteMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 text-xs flex items-center gap-2.5 hover:bg-surface-container-highest text-on-surface text-left transition-colors"
                    >
                      <span
                        className="w-4 h-4 rounded-full shadow-xs border border-white/20"
                        style={{ backgroundColor: p.color }}
                      />
                      <span className="flex-1">{p.name}</span>
                      {themePalette === p.key && (
                        <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleThemeMode}
            title={themeMode === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">
              {themeMode === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
            title="Ganti Bahasa / Switch Language"
            className="px-2.5 py-1 rounded-full text-xs font-bold bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">translate</span>
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
