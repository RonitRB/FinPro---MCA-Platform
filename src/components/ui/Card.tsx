import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, subtitle, children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-background-secondary
      rounded-lg
      shadow-lg
      overflow-hidden
      animate-fade-in
      ${className}
    `}>
      {(title || subtitle) && (
        <div className="p-4 border-b border-background-primary">
          {title && <h3 className="text-lg font-semibold text-text-primary">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}