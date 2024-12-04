import type { InvestorProfile } from '../types/investor';

export const mockInvestors: InvestorProfile[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    age: 45,
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
    },
    portfolioSize: 50000000, // 5 Crores
    riskAppetite: 'Moderate',
    preferredSectors: ['Retail', 'Manufacturing', 'Technology'],
    contact: {
      email: 'rajesh.kumar@example.com',
      phone: '9876543210',
    },
    photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400',
    background: 'Former VP at HDFC Bank with 20 years of experience in SME lending',
    activeInvestments: 12,
    historicalReturns: [
      { year: 2023, returns: 18.5 },
      { year: 2022, returns: 16.2 },
      { year: 2021, returns: 15.8 },
    ],
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2024-02-28T15:45:00Z',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    age: 38,
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
    },
    portfolioSize: 30000000, // 3 Crores
    riskAppetite: 'Aggressive',
    preferredSectors: ['E-commerce', 'Healthcare', 'SaaS'],
    contact: {
      email: 'priya.sharma@example.com',
      phone: '9876543211',
    },
    photoUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400',
    background: 'Angel investor and founder of two successful startups',
    activeInvestments: 8,
    historicalReturns: [
      { year: 2023, returns: 22.5 },
      { year: 2022, returns: 19.8 },
      { year: 2021, returns: 21.2 },
    ],
    createdAt: '2023-03-20T09:15:00Z',
    updatedAt: '2024-02-27T11:30:00Z',
  },
  {
    id: '3',
    name: 'Amit Patel',
    age: 52,
    location: {
      city: 'Ahmedabad',
      state: 'Gujarat',
    },
    portfolioSize: 80000000, // 8 Crores
    riskAppetite: 'Conservative',
    preferredSectors: ['Manufacturing', 'Textiles', 'FMCG'],
    contact: {
      email: 'amit.patel@example.com',
      phone: '9876543212',
    },
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    background: 'Third-generation business owner with expertise in manufacturing',
    activeInvestments: 15,
    historicalReturns: [
      { year: 2023, returns: 14.2 },
      { year: 2022, returns: 13.8 },
      { year: 2021, returns: 15.1 },
    ],
    createdAt: '2023-02-10T14:20:00Z',
    updatedAt: '2024-02-26T16:45:00Z',
  },
];