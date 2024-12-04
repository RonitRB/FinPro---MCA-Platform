import React from 'react';
import { Settings, Globe, Bell, Lock, IndianRupee } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function PlatformSettings() {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center gap-3">
        <Settings className="w-6 h-6 text-accent-primary" />
        <h2 className="text-2xl font-bold text-text-primary">Platform Settings</h2>
      </div>

      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-background-secondary to-background-primary border border-accent-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-accent-primary" />
            <h3 className="text-lg font-medium text-text-primary">Language & Region</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Display Language
              </label>
              <select
                className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                onChange={(e) => handleLanguageChange(e.target.value)}
                value={i18n.language}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Time Zone
              </label>
              <select
                className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                defaultValue="Asia/Kolkata"
              >
                <option value="Asia/Kolkata">(GMT+5:30) India Standard Time</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-background-secondary to-background-primary border border-accent-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <IndianRupee className="w-5 h-5 text-accent-primary" />
            <h3 className="text-lg font-medium text-text-primary">Currency Settings</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Display Format
              </label>
              <select
                className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                defaultValue="indian"
              >
                <option value="indian">₹ 1,00,000 (Indian Format)</option>
                <option value="international">₹ 100,000 (International Format)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Investment Thresholds
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    type="number"
                    placeholder="Minimum (₹)"
                    className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                    defaultValue={100000}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Maximum (₹)"
                    className="w-full px-4 py-3 bg-background-primary text-text-primary rounded-lg border border-accent-primary/20 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                    defaultValue={10000000}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-background-secondary to-background-primary border border-accent-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-accent-primary" />
            <h3 className="text-lg font-medium text-text-primary">Notifications</h3>
          </div>
          <div className="space-y-4">
            {['Email', 'SMS', 'In-App'].map((type) => (
              <div key={type} className="flex items-center justify-between p-4 rounded-lg bg-background-primary border border-background-secondary">
                <span className="text-sm font-medium text-text-primary">{type} Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-background-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-text-primary after:border-background-secondary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-background-secondary to-background-primary border border-accent-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-accent-primary" />
            <h3 className="text-lg font-medium text-text-primary">Security</h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg bg-background-primary border border-background-secondary">
              <span className="text-sm font-medium text-text-primary">Two-Factor Authentication</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-background-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-text-primary after:border-background-secondary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary"></div>
              </label>
            </div>
            <Button variant="outline" fullWidth>
              Change Password
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}