import { z } from 'zod';

export interface InvestorProfile {
  id: string;
  name: string;
  age: number;
  location: {
    city: string;
    state: string;
  };
  portfolioSize: number;
  riskAppetite: 'Conservative' | 'Moderate' | 'Aggressive';
  preferredSectors: string[];
  contact: {
    email: string;
    phone: string;
  };
  photoUrl: string;
  background: string;
  activeInvestments: number;
  historicalReturns: {
    year: number;
    returns: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

export const investorProfileSchema = z.object({
  name: z.string().min(3),
  age: z.number().min(21).max(100),
  location: z.object({
    city: z.string(),
    state: z.string(),
  }),
  portfolioSize: z.number().min(1000000), // Minimum 10 Lakhs
  riskAppetite: z.enum(['Conservative', 'Moderate', 'Aggressive']),
  preferredSectors: z.array(z.string()).min(1),
  contact: z.object({
    email: z.string().email(),
    phone: z.string().regex(/^[6-9]\d{9}$/), // Indian mobile number format
  }),
  background: z.string().min(50),
});