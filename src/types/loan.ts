export interface LoanApplication {
  id: string;
  businessId: string;
  requestedAmount: number;
  purpose: string;
  termLength: number;
  paymentFrequency: 'daily' | 'weekly';
  status: 'draft' | 'submitted' | 'underReview' | 'approved' | 'rejected';
  documents: {
    gstReturns: boolean;
    bankStatements: boolean;
    panCard: boolean;
    addressProof: boolean;
    businessRegistration: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface LoanOffer {
  id: string;
  applicationId: string;
  approvedAmount: number;
  factorRate: number;
  termLength: number;
  paymentFrequency: 'daily' | 'weekly';
  totalRepayment: number;
  paymentAmount: number;
  processingFee: number;
  gst: number;
  netDisbursement: number;
  expiresAt: string;
}