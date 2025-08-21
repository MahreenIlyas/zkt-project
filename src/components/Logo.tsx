import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Geometric Logo inspired by the design */}
      <div className="relative">
        <div className="w-12 h-8 relative">
          {/* Teal diamond shape */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-primary transform rotate-45 rounded-sm"></div>
          {/* White rectangle */}
          <div className="absolute bottom-0 right-0 w-8 h-5 bg-foreground rounded-sm"></div>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          {/* Arabic text for Zakat */}
          <span className="text-2xl font-bold arabic-text text-foreground">زكوة</span>
        </div>
      )}
    </div>
  );
};

export default Logo;