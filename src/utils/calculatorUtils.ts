import type { LoanParameters, CalculationResult } from '../types/calculator';
import { CALCULATOR_CONSTRAINTS, FEES } from '../components/Calculator/constants';

export function validateLoanParameters(parameters: LoanParameters): string | null {
  const { amount, term, factorRate } = CALCULATOR_CONSTRAINTS;

  if (parameters.requestedAmount < amount.min) {
    return `Minimum amount is ${amount.label.split('-')[0].trim()}`;
  }
  if (parameters.requestedAmount > amount.max) {
    return `Maximum amount is ${amount.label.split('-')[1].trim()}`;
  }
  if (parameters.termLength < term.min) {
    return `Minimum term length is ${term.min} months`;
  }
  if (parameters.termLength > term.max) {
    return `Maximum term length is ${term.max} months`;
  }
  if (parameters.factorRate < factorRate.min) {
    return `Minimum factor rate is ${factorRate.min}`;
  }
  if (parameters.factorRate > factorRate.max) {
    return `Maximum factor rate is ${factorRate.max}`;
  }
  return null;
}

export function calculateMCAResults(parameters: LoanParameters): CalculationResult {
  const totalRepayment = Math.round(parameters.requestedAmount * parameters.factorRate);

  const numberOfPayments = parameters.paymentFrequency === 'daily' 
    ? parameters.termLength * FEES.businessDaysPerMonth
    : parameters.paymentFrequency === 'weekly'
    ? parameters.termLength * FEES.weeksPerMonth
    : parameters.termLength;
  
  const paymentAmount = Math.round(totalRepayment / numberOfPayments);
  const effectiveAPR = ((parameters.factorRate - 1) / (parameters.termLength / 12)) * 100;
  const processingFee = Math.round(parameters.requestedAmount * FEES.processingFeePercentage);
  const gstOnProcessingFee = Math.round(processingFee * FEES.gstPercentage);
  const netDisbursement = parameters.requestedAmount - processingFee - gstOnProcessingFee;

  return {
    totalRepayment,
    paymentAmount,
    numberOfPayments,
    effectiveAPR,
    processingFee,
    gstOnProcessingFee,
    netDisbursement,
  };
}