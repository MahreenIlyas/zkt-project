import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: LucideIcon;
  iconColor?: 'success' | 'warning' | 'primary' | 'muted';
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  trend = 'neutral',
  icon: Icon,
  iconColor = 'primary',
  className
}) => {
  return (
    <div className={cn("card-elegant p-6 transition-smooth hover:scale-[1.02]", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
        </div>
        
        {Icon && (
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            iconColor === 'success' && "bg-success/10 text-success",
            iconColor === 'warning' && "bg-warning/10 text-warning", 
            iconColor === 'primary' && "bg-primary/10 text-primary",
            iconColor === 'muted' && "bg-muted text-muted-foreground"
          )}>
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;