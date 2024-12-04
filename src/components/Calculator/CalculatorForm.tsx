import React from 'react';
import { IndianRupee } from 'lucide-react';
import type { LoanParameters } from '../../types/calculator';

interface CalculatorFormProps {
  parameters: LoanParameters;
  onParametersChange: (parameters: LoanParameters) => void;
  error?: string | null;
}

export default function CalculatorForm({ parameters, onParametersChange, error }: CalculatorFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Requested Amount (₹)
          </label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent-primary" />
            <input
              type="number"
              min="100000"
              max="10000000"
              value={parameters.requestedAmount}
              onChange={(e) => onParametersChange({
                ...parameters,
                requestedAmount: Number(e.target.value)
              })}
              className="w-full pl-10 pr-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary placeholder-text-secondary/50"
              placeholder="Enter amount (1L - 1Cr)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Term Length (months)
          </label>
          <input
            type="number"
            min="3"
            max="24"
            value={parameters.termLength}
            onChange={(e) => onParametersChange({
              ...parameters,
              termLength: Number(e.target.value)
            })}
            className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary placeholder-text-secondary/50"
            placeholder="3-24 months"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Factor Rate
          </label>
          <input
            type="number"
            step="0.01"
            min="1.1"
            max="1.5"
            value={parameters.factorRate}
            onChange={(e) => onParametersChange({
              ...parameters,
              factorRate: Number(e.target.value)
            })}
            className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary placeholder-text-secondary/50"
            placeholder="1.1 - 1.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Payment Frequency
          </label>
          <select
            value={parameters.paymentFrequency}
            onChange={(e) => onParametersChange({
              ...parameters,
              paymentFrequency: e.target.value as LoanParameters['paymentFrequency']
            })}
            className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm">
          {error}
        </div>
      )}
    </div>
  );
}