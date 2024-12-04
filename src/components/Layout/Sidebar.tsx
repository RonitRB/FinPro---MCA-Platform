import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavigationItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface SidebarProps {
  navigationItems: NavigationItem[];
}

export default function Sidebar({ navigationItems }: SidebarProps) {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background-secondary border-r border-background-primary/10 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center border-b border-background-primary/10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            MCA Platform
          </h1>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`
                          group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium
                          transition-all duration-200
                          ${isActive
                            ? 'bg-accent-primary/10 text-accent-primary'
                            : 'text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5'
                          }
                        `}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${
                            isActive ? 'text-accent-primary' : 'text-text-secondary group-hover:text-accent-primary'
                          }`}
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}