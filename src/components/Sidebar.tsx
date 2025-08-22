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

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { 
    icon: Heart, 
    label: 'Donations', 
    path: '/donations',
    subItems: [
      { label: 'HTG', path: '/donations' },
      { label: 'STG', path: '/scan-to-give' }, 
      { label: 'UTG', path: '/user-triggered-giving' },
      { label: 'BTG', path: '/burn-to-give' },
    ]
  },
  { icon: Trophy, label: 'Rewards', path: '/rewards' },
  { icon: Target, label: 'DAO', path: '/dao' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-card/90 backdrop-blur-sm border-r border-border flex flex-col shadow-2xl relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      {/* Logo Section */}
      <div className="p-6 border-b border-border/50 relative z-10">
        <Logo />
      </div>

      {/* Enhanced Navigation */}
      <nav className="flex-1 px-4 py-6 relative z-10">
        <ul className="space-y-3">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground group relative overflow-hidden",
                    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-primary-glow/5 before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100",
                    "after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-0 after:bg-primary after:rounded-r-full after:transition-all after:duration-300 hover:after:h-8",
                    isActive && "bg-gradient-to-r from-primary/15 to-primary-glow/10 text-primary-foreground font-semibold shadow-lg before:opacity-100 after:h-8"
                  )
                }
              >
                <item.icon className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                <span className="font-medium relative z-10 transition-all duration-300 group-hover:translate-x-1">{item.label}</span>
                
                {/* Hover effect particles */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
              </NavLink>
              
              {/* Enhanced Sub-items for Donations */}
              {item.subItems && (
                <ul className="ml-8 mt-2 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) =>
                          cn(
                            "block px-4 py-2 text-sm transition-all duration-300 text-muted-foreground hover:text-foreground rounded-lg relative overflow-hidden group",
                            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-accent/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
                            "after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-0 after:bg-primary after:rounded-r-full after:transition-all after:duration-300 hover:after:h-4",
                            isActive && "text-primary font-semibold bg-primary/10 before:opacity-100 after:h-4"
                          )
                        }
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">{subItem.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Enhanced Bottom Section */}
      <div className="p-4 border-t border-border/50 relative z-10">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground group relative overflow-hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5">
          <Bell className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground group relative overflow-hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5">
          <Settings className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;