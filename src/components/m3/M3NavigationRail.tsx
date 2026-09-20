import React from 'react';
import { useApp } from '../../context/AppContext';

export const M3NavigationRail: React.FC = () => {
  const { activeTab, setActiveTab, language, completedCount } = useApp();

  const navItems = [
    {
      id: 'dashboard',
      label: { id: 'Beranda', en: 'Home' },
      icon: 'grid_view',
      activeIcon: 'grid_view',
    },
    {
      id: 'passport',
      label: { id: 'Dossier', en: 'Dossier' },
      icon: 'badge',
      activeIcon: 'badge',
      badge: completedCount > 0 ? completedCount : undefined,
    },
    {
      id: 'library',
      label: { id: 'Pustaka', en: 'Library' },
      icon: 'local_library',
      activeIcon: 'local_library',
    },
    {
      id: 'match',
      label: { id: 'Relasi', en: 'Match' },
      icon: 'diversity_3',
      activeIcon: 'diversity_3',
    },
  ];

  return (
    <>
      {/* Desktop Navigation Rail (Left side on md+) */}
      <aside className="hidden md:flex flex-col items-center py-6 w-20 bg-surface-container-low border-r border-outline-variant shrink-0 min-h-[calc(100vh-64px)] z-30">
        <div className="flex flex-col items-center gap-6 w-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className="group flex flex-col items-center gap-1 w-full text-center focus:outline-none"
              >
                <div
                  className={`relative flex items-center justify-center w-14 h-8 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-secondary-container text-on-secondary-container'
                      : 'text-on-surface-variant hover:bg-surface-container-highest'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[22px] ${isActive ? 'fill' : ''}`}>
                    {isActive ? item.activeIcon : item.icon}
                  </span>
                  {item.badge !== undefined && (
                    <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-surface">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span
                  className={`text-[11px] font-medium transition-colors ${
                    isActive ? 'text-on-surface font-semibold' : 'text-on-surface-variant'
                  }`}
                >
                  {item.label[language]}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container border-t border-outline-variant z-40 flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className="flex flex-col items-center justify-center flex-1 h-full py-1"
            >
              <div
                className={`relative flex items-center justify-center w-16 h-8 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'text-on-surface-variant'
                }`}
              >
                <span className={`material-symbols-outlined text-[22px] ${isActive ? 'fill' : ''}`}>
                  {isActive ? item.activeIcon : item.icon}
                </span>
                {item.badge !== undefined && (
                  <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-surface">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] mt-0.5 ${
                  isActive ? 'font-bold text-on-surface' : 'text-on-surface-variant'
                }`}
              >
                {item.label[language]}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
