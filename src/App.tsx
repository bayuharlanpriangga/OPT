import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { M3TopAppBar } from './components/m3/M3TopAppBar';
import { M3NavigationRail } from './components/m3/M3NavigationRail';
import { DashboardView } from './components/views/DashboardView';
import { TestRunnerView } from './components/views/TestRunnerView';
import { TestResultView } from './components/views/TestResultView';
import { ComprehensivePassportView } from './components/views/ComprehensivePassportView';
import { ReferenceLibraryView } from './components/views/ReferenceLibraryView';
import './App.css';

const MainLayout: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface transition-colors duration-200">
      <M3TopAppBar />
      <div className="flex flex-1 relative">
        <M3NavigationRail />
        <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'test' && <TestRunnerView />}
          {activeTab === 'result' && <TestResultView />}
          {activeTab === 'passport' && <ComprehensivePassportView />}
          {activeTab === 'library' && <ReferenceLibraryView />}
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

