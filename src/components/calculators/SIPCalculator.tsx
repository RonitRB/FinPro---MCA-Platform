import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatIndianCurrency } from '../../utils/indianCurrency';

interface SIPResult {
  totalInvestment: number;
  expectedReturns: number;
  maturityValue: number;
}

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(5);
  const [result, setResult] = useState<SIPResult | null>(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / (12 * 100);
    const months = timePeriod * 12;
    
    const maturityValue =
      monthlyInvestment *
      (Math.pow(1 + monthlyRate, months) - 1) *
      (1 + monthlyRate) /
      monthlyRate;

    const totalInvestment = monthlyInvestment * months;
    const expectedReturns = maturityValue - totalInvestment;

    setResult({
      totalInvestment,
      expectedReturns,
      maturityValue,
    });
  };

  return (
    <Card
      title="SIP Calculator"
      subtitle="Plan your systematic investments"
      className="max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Monthly Investment (₹)
          </label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full px-4 py-2 bg-background-primary text-text-primary rounded border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Expected Return (% per annum)
          </label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="w-full px-4 py-2 bg-background-primary text-text-primary rounded border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Time Period (years)
          </label>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="w-full px-4 py-2 bg-background-primary text-text-primary rounded border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
          />
        </div>

        <Button
          variant="primary"
          icon={TrendingUp}
          fullWidth
          onClick={calculateSIP}
        >
          Calculate Returns
        </Button>

        {result && (
          <div className="mt-6 space-y-4 p-4 bg-background-primary rounded">
            <div>
              <p className="text-sm text-text-secondary">Maturity Value</p>
              <p className="text-2xl font-semibold text-accent-primary">
                {formatIndianCurrency(result.maturityValue)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-secondary">Total Investment</p>
                <p className="text-lg font-medium text-text-primary">
                  {formatIndianCurrency(result.totalInvestment)}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Expected Returns</p>
                <p className="text-lg font-medium text-text-primary">
                  {formatIndianCurrency(result.expectedReturns)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}