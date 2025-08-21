import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Heart, 
  Trophy, 
  Settings, 
  Bell,
  Target
} from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Heart, label: 'Donations', path: '/donations' },
  { icon: Trophy, label: 'Rewards', path: '/rewards' },
  { icon: Target, label: 'DAO', path: '/dao' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-border">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth text-muted-foreground hover:text-foreground hover:bg-muted group",
                    isActive && "bg-primary text-primary-foreground hover:bg-primary-hover"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-smooth text-muted-foreground hover:text-foreground hover:bg-muted">
          <Bell className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-smooth text-muted-foreground hover:text-foreground hover:bg-muted">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;