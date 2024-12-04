import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export default function StatCard({ title, value, icon: Icon, trend, className = '' }: StatCardProps) {
  return (
    <div className={`
      rounded-lg p-6
      backdrop-blur-xl
      transition-all duration-300 hover:scale-[1.02]
      ${className}
    `}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-text-secondary">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-text-primary">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-accent-primary/10">
          <Icon className="h-6 w-6 text-accent-primary" />
        </div>
      </div>
      {trend && (
        <div className="mt-4">
          <span
            className={`text-sm font-medium ${
              trend.isPositive ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-sm text-text-secondary ml-2">from last month</span>
        </div>
      )}
    </div>
  );
}