import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  ChevronLeft,
  Users,
  TrendingUp,
  Package
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Users, label: 'Users', id: 'users' },
  { icon: TrendingUp, label: 'Reports', id: 'reports' },
  { icon: Package, label: 'Products', id: 'products' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export function Sidebar({ currentView, onViewChange }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-40',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">AnalyticsPro</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            'p-2 rounded-lg hover:bg-accent transition-colors',
            collapsed && 'mx-auto'
          )}
        >
          <ChevronLeft
            className={cn(
              'w-5 h-5 transition-transform',
              collapsed && 'rotate-180'
            )}
          />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'hover:bg-accent text-muted-foreground hover:text-foreground',
                collapsed && 'justify-center'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="font-medium text-sm">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
