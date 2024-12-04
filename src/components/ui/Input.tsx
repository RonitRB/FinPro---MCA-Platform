import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  error?: string;
  helper?: string;
}

export default function Input({
  label,
  icon: Icon,
  error,
  helper,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-text-secondary" />
          </div>
        )}
        <input
          className={`
            w-full px-4 py-2 
            ${Icon ? 'pl-10' : ''}
            bg-background-primary/50
            text-text-primary
            rounded-lg
            border border-background-secondary
            focus:border-accent-primary
            focus:ring-1 focus:ring-accent-primary
            placeholder:text-text-secondary/50
            transition-all duration-200
            backdrop-blur-sm
            ${error ? 'border-error' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {(error || helper) && (
        <p className={`text-sm ${error ? 'text-error' : 'text-text-secondary'}`}>
          {error || helper}
        </p>
      )}
    </div>
  );
}