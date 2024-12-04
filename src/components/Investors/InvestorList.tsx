import React from 'react';
import { Users } from 'lucide-react';
import InvestorCard from './InvestorCard';
import { mockInvestors } from '../../data/mockInvestors';

export default function InvestorList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Investors</h2>
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            <option value="">All Sectors</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="technology">Technology</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            <option value="">All Risk Levels</option>
            <option value="Conservative">Conservative</option>
            <option value="Moderate">Moderate</option>
            <option value="Aggressive">Aggressive</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInvestors.map((investor) => (
          <InvestorCard
            key={investor.id}
            investor={investor}
            onClick={() => console.log('Investor clicked:', investor.id)}
          />
        ))}
      </div>
    </div>
  );
}