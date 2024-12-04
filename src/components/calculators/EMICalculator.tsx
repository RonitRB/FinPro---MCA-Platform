import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatIndianCurrency } from '../../utils/indianCurrency';

interface EMIResult {
  emi: number;
  totalInterest: number;
  totalAmount: number;
}

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [tenure, setTenure] = useState<number>(12);
  const [result, setResult] = useState<EMIResult | null>(null);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const numberOfPayments = tenure;

    const emi =
      (principal *
        ratePerMonth *
        Math.pow(1 + ratePerMonth, numberOfPayments)) /
      (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - principal;

    setResult({
      emi,
      totalInterest,
      totalAmount,
    });
  };

  return (
    <Card
      title="EMI Calculator"
      subtitle="Calculate your monthly EMI payments"
      className="max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full px-4 py-2 bg-background-primary text-text-primary rounded border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Interest Rate (% per annum)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-4 py-2 bg-background-primary text-text-primary rounded border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Tenure (months)
          </label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full px-4 py-2 bg-background-primary text-text-primary rounded border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
          />
        </div>

        <Button
          variant="primary"
          icon={Calculator}
          fullWidth
          onClick={calculateEMI}
        >
          Calculate EMI
        </Button>

        {result && (
          <div className="mt-6 space-y-4 p-4 bg-background-primary rounded">
            <div>
              <p className="text-sm text-text-secondary">Monthly EMI</p>
              <p className="text-2xl font-semibold text-accent-primary">
                {formatIndianCurrency(result.emi)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-secondary">Total Interest</p>
                <p className="text-lg font-medium text-text-primary">
                  {formatIndianCurrency(result.totalInterest)}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Total Amount</p>
                <p className="text-lg font-medium text-text-primary">
                  {formatIndianCurrency(result.totalAmount)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}