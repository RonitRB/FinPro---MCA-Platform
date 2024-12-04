export interface LoanParameters {
  requestedAmount: number;
  termLength: number;
  factorRate: number;
  paymentFrequency: 'daily' | 'weekly' | 'monthly';
}

export interface CalculationResult {
  totalRepayment: number;
  paymentAmount: number;
  numberOfPayments: number;
  effectiveAPR: number;
  processingFee: number;
  gstOnProcessingFee: number;
  netDisbursement: number;
}