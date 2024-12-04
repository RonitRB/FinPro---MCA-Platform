export interface BusinessProfile {
  gstin: string;
  pan: string;
  businessName: string;
  businessType: 'proprietorship' | 'partnership' | 'pvtLtd' | 'llp';
  yearEstablished: number;
  annualRevenue: number;
  industryType: string;
  registeredAddress: string;
  state: string;
  pincode: string;
}

export interface GSTReturn {
  period: string;
  gstr1Filed: boolean;
  gstr3bFiled: boolean;
  totalTurnover: number;
  taxLiability: number;
  itcClaimed: number;
}

export interface BankStatement {
  month: string;
  openingBalance: number;
  closingBalance: number;
  totalCredits: number;
  totalDebits: number;
  averageBalance: number;
  bounceCount: number;
}