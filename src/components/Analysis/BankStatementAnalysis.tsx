import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import type { BankStatement } from '../../types/business';

const mockData: BankStatement[] = [
  {
    month: 'Jan 2024',
    openingBalance: 100000,
    closingBalance: 120000,
    totalCredits: 250000,
    totalDebits: 230000,
    averageBalance: 110000,
    bounceCount: 0
  },
  // Add more mock data as needed
];

export default function BankStatementAnalysis() {
  const calculateHealthScore = (statement: BankStatement) => {
    const metrics = {
      balanceGrowth: (statement.closingBalance - statement.openingBalance) / statement.openingBalance,
      transactionVolume: statement.totalCredits + statement.totalDebits,
      bounceRatio: statement.bounceCount / (statement.totalCredits + statement.totalDebits),
      averageBalanceMaintenance: statement.averageBalance / statement.openingBalance
    };

    // Simple scoring algorithm (0-100)
    let score = 100;
    if (metrics.balanceGrowth < 0) score -= 20;
    if (metrics.bounceRatio > 0) score -= (metrics.bounceRatio * 100);
    if (metrics.averageBalanceMaintenance < 1) score -= 10;

    return Math.max(0, Math.min(100, score));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Bank Statement Analysis</h2>
      </div>

      <div className="space-y-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalCredits" fill="#4F46E5" name="Total Credits" />
              <Bar dataKey="totalDebits" fill="#EF4444" name="Total Debits" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockData.map((statement) => (
            <div key={statement.month} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">{statement.month}</h3>
              <div className="mt-2 space-y-2">
                <p className="text-sm text-gray-600">
                  Health Score: {calculateHealthScore(statement)}%
                </p>
                <p className="text-sm text-gray-600">
                  Average Balance: ₹{statement.averageBalance.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  Bounce Count: {statement.bounceCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}