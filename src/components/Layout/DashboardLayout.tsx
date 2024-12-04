import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDashboard, Calculator, FileText, Users, Settings, IndianRupee } from 'lucide-react';
import Sidebar from './Sidebar';

const navigationItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'MCA Calculator', icon: Calculator, href: '/calculator' },
  { name: 'Documents', icon: FileText, href: '/documents' },
  { name: 'Investors', icon: Users, href: '/investors' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Sidebar navigationItems={navigationItems} />
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-background-secondary bg-background-primary/95 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 backdrop-blur">
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <IndianRupee className="h-6 w-6 text-accent-primary" />
              <span className="text-lg font-semibold text-text-primary">MCA Platform</span>
            </div>
          </div>
        </div>
        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}