import React from 'react';
import { TrendingUp, MapPin, Mail, Phone } from 'lucide-react';
import type { InvestorProfile } from '../../types/investor';
import { formatIndianCurrency } from '../../utils/indianCurrency';

interface InvestorCardProps {
  investor: InvestorProfile;
  onClick?: () => void;
}

export default function InvestorCard({ investor, onClick }: InvestorCardProps) {
  const latestReturn = investor.historicalReturns[0]?.returns || 0;

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={investor.photoUrl}
          alt={investor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-xl font-semibold text-white">{investor.name}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {investor.location.city}, {investor.location.state}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Portfolio Size</p>
            <p className="text-lg font-semibold">{formatIndianCurrency(investor.portfolioSize)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Latest Return</p>
            <p className="text-lg font-semibold text-green-600">
              {latestReturn}%
              <TrendingUp className="w-4 h-4 inline ml-1" />
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600">Risk Appetite</p>
          <span className={`
            inline-block px-2 py-1 rounded-full text-xs font-medium mt-1
            ${investor.riskAppetite === 'Conservative' ? 'bg-blue-100 text-blue-800' :
              investor.riskAppetite === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}
          `}>
            {investor.riskAppetite}
          </span>
        </div>

        <div>
          <p className="text-sm text-gray-600">Preferred Sectors</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {investor.preferredSectors.map((sector) => (
              <span
                key={sector}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-4 mt-4 grid grid-cols-2 gap-2 text-sm">
          <a
            href={`mailto:${investor.contact.email}`}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Mail className="w-4 h-4 mr-1" />
            Email
          </a>
          <a
            href={`tel:${investor.contact.phone}`}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}