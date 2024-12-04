import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Shield, Upload } from 'lucide-react';
import { kycSchema } from '../../types/kyc';

export default function KYCVerification() {
  const [isVerifying, setIsVerifying] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(kycSchema)
  });

  const onSubmit = async (data: any) => {
    setIsVerifying(true);
    try {
      // Simulate API call to verify KYC
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('KYC Data:', data);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">KYC Verification</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Aadhaar Number
          </label>
          <input
            type="text"
            {...register('aadhaarNumber')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter 12-digit Aadhaar number"
          />
          {errors.aadhaarNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.aadhaarNumber.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PAN Number
          </label>
          <input
            type="text"
            {...register('pan')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter 10-digit PAN number"
          />
          {errors.pan && (
            <p className="mt-1 text-sm text-red-600">{errors.pan.message as string}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isVerifying}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {isVerifying ? 'Verifying...' : 'Verify KYC'}
        </button>
      </form>
    </div>
  );
}