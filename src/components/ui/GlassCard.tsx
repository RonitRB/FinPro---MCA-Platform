import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GlassCardProps {
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function GlassCard({
  title,
  subtitle,
  icon: Icon,
  children,
  className = '',
  gradient = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-xl
        border border-background-secondary/20
        bg-background-secondary/30
        backdrop-blur-xl
        shadow-xl
        ${gradient ? 'bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5' : ''}
        ${className}
      `}
    >
      {(title || subtitle || Icon) && (
        <div className="p-6 flex items-start justify-between border-b border-background-primary/10">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>
            )}
          </div>
          {Icon && (
            <div className="p-2 rounded-lg bg-accent-primary/10">
              <Icon className="h-5 w-5 text-accent-primary" />
            </div>
          )}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}