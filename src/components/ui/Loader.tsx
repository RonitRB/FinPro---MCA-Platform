import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Loader({ size = 'md', className = '' }: LoaderProps) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full border-2 border-accent-primary/20" />
      <div className="absolute inset-0 rounded-full border-2 border-accent-primary border-t-transparent animate-spin" />
    </div>
  );
}