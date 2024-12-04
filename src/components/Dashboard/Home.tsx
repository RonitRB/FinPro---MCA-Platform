import React from 'react';
import { DollarSign, Users, FileText, TrendingUp, IndianRupee } from 'lucide-react';
import StatCard from './StatCard';
import RecentActivity from './RecentActivity';
import { useAuthStore } from '../../store/authStore';
import { formatIndianCurrency } from '../../utils/indianCurrency';

export default function Home() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">
          Welcome back, {user?.name}
        </h1>
        <p className="mt-2 text-text-secondary">
          Here's an overview of your merchant cash advances
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Funding"
          value={formatIndianCurrency(12000000)}
          icon={IndianRupee}
          trend={{ value: 12, isPositive: true }}
          className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20"
        />
        <StatCard
          title="Active Advances"
          value="24"
          icon={TrendingUp}
          trend={{ value: 4, isPositive: true }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
        />
        <StatCard
          title="Total Investors"
          value="156"
          icon={Users}
          trend={{ value: 2.5, isPositive: true }}
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
        />
        <StatCard
          title="Pending Documents"
          value="3"
          icon={FileText}
          trend={{ value: 1, isPositive: false }}
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
      </div>
    </div>
  );
}