import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Enhanced Geometric Logo with glow effects */}
      <div className="relative group">
        <div className="w-16 h-12 relative transition-all duration-300 hover:scale-110">
          {/* Glowing background */}
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
          
          {/* Primary diamond with gradient */}
          <div className="absolute top-1 left-1 w-8 h-8 bg-gradient-to-br from-primary to-primary-glow transform rotate-45 rounded-lg shadow-lg glow-primary transition-all duration-300 group-hover:rotate-[50deg] group-hover:scale-110"></div>
          
          {/* Secondary geometric shape */}
          <div className="absolute bottom-1 right-1 w-10 h-6 bg-gradient-to-r from-foreground to-muted-foreground rounded-lg shadow-md transition-all duration-300 group-hover:scale-105"></div>
          
          {/* Accent dot */}
          <div className="absolute top-3 right-2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          
          {/* Floating particles */}
          <div className="absolute -top-1 -right-1 w-1 h-1 bg-primary-glow rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-primary-glow rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col group">
          {/* Enhanced Arabic text with glow */}
          <span className="text-3xl font-bold arabic-text text-foreground transition-all duration-300 group-hover:text-primary-glow drop-shadow-lg">
            زكوة
          </span>
          <div className="h-0.5 w-0 bg-gradient-primary transition-all duration-500 group-hover:w-full rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Logo;