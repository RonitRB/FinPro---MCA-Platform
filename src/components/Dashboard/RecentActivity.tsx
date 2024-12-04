import React from 'react';
import { Clock } from 'lucide-react';
import Card from '../ui/Card';
import { formatIndianCurrency } from '../../utils/indianCurrency';

interface Activity {
  id: string;
  type: string;
  description: string;
  amount?: number;
  date: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'Application',
    description: 'New funding application submitted',
    amount: 500000,
    date: '1 hour ago',
  },
  {
    id: '2',
    type: 'Payment',
    description: 'Payment received from ABC Corp',
    amount: 25000,
    date: '3 hours ago',
  },
  {
    id: '3',
    type: 'Document',
    description: 'Bank statements uploaded',
    date: '5 hours ago',
  },
];

export default function RecentActivity() {
  return (
    <Card title="Recent Activity" className="h-full">
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-accent-primary/10">
              <Clock className="h-5 w-5 text-accent-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary">{activity.type}</p>
              <p className="text-sm text-text-secondary">{activity.description}</p>
              {activity.amount && (
                <p className="text-sm font-medium text-accent-primary mt-1">
                  {formatIndianCurrency(activity.amount)}
                </p>
              )}
              <p className="text-xs text-text-secondary mt-1">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}