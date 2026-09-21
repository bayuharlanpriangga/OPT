import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { M3TopAppBar } from './components/m3/M3TopAppBar';
import { M3NavigationRail } from './components/m3/M3NavigationRail';
import { DashboardView } from './components/views/DashboardView';
import { TestRunnerView } from './components/views/TestRunnerView';
import { TestResultView } from './components/views/TestResultView';
import { ComprehensivePassportView } from './components/views/ComprehensivePassportView';
import { ReferenceLibraryView } from './components/views/ReferenceLibraryView';
import { TypeCompatibilityView } from './components/views/TypeCompatibilityView';
import './App.css';

const MainLayout: React.FC = () => {
  const { activeTab, language } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface transition-colors duration-200">
      <M3TopAppBar />
      <div className="flex flex-1 relative">
        <M3NavigationRail />
        <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'test' && <TestRunnerView />}
            {activeTab === 'result' && <TestResultView />}
            {activeTab === 'passport' && <ComprehensivePassportView />}
            {activeTab === 'library' && <ReferenceLibraryView />}
            {activeTab === 'match' && <TypeCompatibilityView />}
          </div>

          {/* Scientific Disclaimer & Global Footer */}
          <footer className="mt-16 pt-8 pb-16 md:pb-4 border-t border-outline-variant/60 text-center text-xs text-on-surface-variant space-y-2 select-none">
            <div className="flex items-center justify-center gap-1.5 font-semibold text-outline">
              <span className="material-symbols-outlined text-[16px]">info</span>
              <span>{language === 'id' ? 'Catatan Ilmiah & Etika Penggunaan' : 'Scientific & Ethical Disclaimer'}</span>
            </div>
            <p className="max-w-3xl mx-auto text-[11px] leading-relaxed text-on-surface-variant/80">
              {language === 'id'
                ? 'Instrumen tipologi ini (MBTI, Enneagram, Socionics, AP, Big 5, Alignment) dikembangkan sebagai kerangka refleksi diri, pemahaman dinamika kepribadian, dan pengembangan potensi pribadi. Hasil penilaian ini tidak ditujukan sebagai pengganti diagnosis psikologis, psikiatri klinis, atau evaluasi medis resmi.'
                : 'These typology frameworks (MBTI, Enneagram, Socionics, AP, Big 5, Alignment) are intended solely for self-reflection, cognitive exploration, and personal growth. They do not constitute formal psychiatric, clinical, or medical psychological diagnoses.'}
            </p>
            <div className="text-[11px] text-outline pt-2">
              Orias Personality Test (OPT) &copy; 2026
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;

