import React, { useState } from 'react';
import { Link2, BarChart3, Settings as SettingsIcon } from 'lucide-react';
import { PricingModal } from './PricingModal';

export function Layout({ children }: { children: React.ReactNode }) {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LinkMetrics</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => {
                  const analyticsSection = document.getElementById('section-analytics');
                  analyticsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <BarChart3 className="h-5 w-5" />
              </button>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => {
                  const settingsSection = document.getElementById('section-settings');
                  settingsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <SettingsIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setShowPricing(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Upgrade Pro
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <PricingModal isOpen={showPricing} onClose={() => setShowPricing(false)} />
    </div>
  );
}