import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({
  content,
  children,
  position = 'top',
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: '-translate-x-1/2 -translate-y-full left-1/2 bottom-[calc(100%+5px)]',
    bottom: '-translate-x-1/2 translate-y-1 left-1/2 top-full',
    left: '-translate-x-full -translate-y-1/2 top-1/2 right-[calc(100%+5px)]',
    right: 'translate-x-1 -translate-y-1/2 top-1/2 left-full',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`
            absolute z-50
            px-2 py-1
            text-sm
            bg-background-secondary
            text-text-primary
            rounded
            shadow-lg
            whitespace-nowrap
            ${positions[position]}
            animate-fade-in
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
}