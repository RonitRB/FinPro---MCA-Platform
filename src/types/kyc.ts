import { z } from 'zod';

export interface KYCDetails {
  aadhaarNumber: string;
  pan: string;
  documentType: 'aadhaar' | 'pan' | 'gst' | 'bankStatement';
  verificationStatus: 'pending' | 'verified' | 'failed';
  verifiedAt?: string;
}

export interface DocumentMetadata {
  id: string;
  type: 'aadhaar' | 'pan' | 'gst' | 'bankStatement';
  fileName: string;
  fileSize: number;
  uploadedAt: string;
  status: 'pending' | 'verified' | 'rejected';
  mimeType: string;
}

export const kycSchema = z.object({
  aadhaarNumber: z.string().length(12).regex(/^\d{12}$/),
  pan: z.string().length(10).regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
});