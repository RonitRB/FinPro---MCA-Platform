export const CALCULATOR_CONSTRAINTS = {
  amount: {
    min: 100000,
    max: 10000000,
    label: '₹1,00,000 - ₹1,00,00,000'
  },
  term: {
    min: 3,
    max: 24,
    label: '3-24 months'
  },
  factorRate: {
    min: 1.1,
    max: 1.5,
    label: '1.1 - 1.5'
  }
} as const;

export const FEES = {
  processingFeePercentage: 0.02, // 2%
  gstPercentage: 0.18, // 18%
  businessDaysPerMonth: 22,
  weeksPerMonth: 4
} as const;