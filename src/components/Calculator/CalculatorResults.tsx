import React from 'react';
import type { CalculationResult } from '../../types/calculator';
import { formatIndianCurrency } from '../../utils/indianCurrency';

interface CalculatorResultsProps {
  result: CalculationResult;
  requestedAmount: number;
}

export default function CalculatorResults({ result, requestedAmount }: CalculatorResultsProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
          <p className="text-sm font-medium text-text-secondary">Total Repayment</p>
          <p className="text-3xl font-bold text-accent-primary mt-2">
            {formatIndianCurrency(result.totalRepayment)}
          </p>
        </div>

        <div className="p-6 rounded-lg bg-background-primary border border-background-secondary">
          <p className="text-sm font-medium text-text-secondary">Payment Amount</p>
          <p className="text-3xl font-bold text-text-primary mt-2">
            {formatIndianCurrency(result.paymentAmount)}
          </p>
          <p className="text-sm text-text-secondary mt-2">
            {result.numberOfPayments} payments
          </p>
        </div>

        <div className="p-6 rounded-lg bg-background-primary border border-background-secondary">
          <p className="text-sm font-medium text-text-secondary">Effective APR</p>
          <p className="text-3xl font-bold text-text-primary mt-2">
            {result.effectiveAPR.toFixed(2)}%
          </p>
        </div>

        <div className="p-6 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
          <p className="text-sm font-medium text-text-secondary">Total Cost of Funding</p>
          <p className="text-3xl font-bold text-accent-primary mt-2">
            {formatIndianCurrency(result.totalRepayment - requestedAmount)}
          </p>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-background-secondary border border-background-primary">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Disbursement Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-text-secondary">Processing Fee (2%)</span>
            <span className="text-text-primary">{formatIndianCurrency(result.processingFee)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">GST on Processing Fee (18%)</span>
            <span className="text-text-primary">{formatIndianCurrency(result.gstOnProcessingFee)}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-background-primary">
            <span className="font-medium text-text-primary">Net Disbursement Amount</span>
            <span className="font-bold text-accent-primary">{formatIndianCurrency(result.netDisbursement)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}