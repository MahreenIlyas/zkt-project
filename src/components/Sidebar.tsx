import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Heart, 
  Trophy, 
  Settings, 
  Bell,
  Target,
  QrCode,
  Calculator,
  Flame
} from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const sidebarItems: any[] = [];

const Sidebar: React.FC = () => {
  return (
    <div className="w-16 h-screen bg-card/90 backdrop-blur-sm border-r border-border flex flex-col shadow-2xl relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      {/* Logo Section */}
      <div className="p-4 border-b border-border/50 relative z-10 flex justify-center">
        <Logo />
      </div>

      {/* NGO Dashboard Navigation */}
      <nav className="flex-1 px-2 py-6 relative z-10">
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/ngo-dashboard"
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground group relative overflow-hidden",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-primary-glow/5 before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100",
                  isActive && "bg-gradient-to-r from-primary/15 to-primary-glow/10 text-primary-foreground shadow-lg before:opacity-100"
                )
              }
            >
              <Home className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Enhanced Bottom Section */}
      <div className="p-2 border-t border-border/50 relative z-10 space-y-2">
        <button className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground group relative overflow-hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5">
          <Bell className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground group relative overflow-hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5">
          <Settings className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;