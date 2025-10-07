import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Users } from './pages/Users';
import { Reports } from './pages/Reports';
import { Products } from './pages/Products';
import { Settings } from './pages/Settings';
import { cn } from './lib/utils';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'users':
        return <Users />;
      case 'reports':
        return <Reports />;
      case 'products':
        return <Products />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content */}
      <div
        className={cn(
          'transition-all duration-300 min-h-screen',
          'ml-64'
        )}
      >
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="p-6">{renderView()}</main>
      </div>
    </div>
  );
}

export default App;
