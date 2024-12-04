import { useState } from 'react';
import type { LoanParameters, CalculationResult } from '../../../types/calculator';
import { calculateMCAResults, validateLoanParameters } from '../../../utils/calculatorUtils';

export function useCalculator() {
  const [parameters, setParameters] = useState<LoanParameters>({
    requestedAmount: 1000000,
    termLength: 12,
    factorRate: 1.2,
    paymentFrequency: 'daily',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    const validationError = validateLoanParameters(parameters);
    if (validationError) {
      setError(validationError);
      setResult(null);
      return;
    }

    setError(null);
    const calculationResult = calculateMCAResults(parameters);
    setResult(calculationResult);
  };

  return {
    parameters,
    setParameters,
    result,
    error,
    handleCalculate,
  };
}