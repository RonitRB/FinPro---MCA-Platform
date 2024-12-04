import { z } from 'zod';

export const gstinValidator = z
  .string()
  .length(15)
  .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/);

export const panValidator = z
  .string()
  .length(10)
  .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);

export const businessProfileSchema = z.object({
  gstin: gstinValidator,
  pan: panValidator,
  businessName: z.string().min(3).max(100),
  businessType: z.enum(['proprietorship', 'partnership', 'pvtLtd', 'llp']),
  yearEstablished: z.number().min(1900).max(new Date().getFullYear()),
  annualRevenue: z.number().min(0),
  industryType: z.string(),
  registeredAddress: z.string().min(10),
  state: z.string(),
  pincode: z.string().length(6).regex(/^[1-9][0-9]{5}$/),
});

export const loanApplicationSchema = z.object({
  requestedAmount: z.number().min(100000).max(10000000),
  purpose: z.string().min(10),
  termLength: z.number().min(3).max(24),
  paymentFrequency: z.enum(['daily', 'weekly']),
});