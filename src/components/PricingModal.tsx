import React from 'react';
import { X } from 'lucide-react';
import { createSubscription } from '../lib/stripe';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  const handleUpgrade = async (priceId: string) => {
    try {
      await createSubscription(priceId);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-4xl w-full mx-4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Upgrade to Pro</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard
            title="Starter"
            price="$9"
            features={[
              '1,000 links/month',
              'Basic analytics',
              'Email support',
              '24-hour link expiry',
            ]}
            priceId="price_starter"
            onUpgrade={handleUpgrade}
          />
          <PricingCard
            title="Pro"
            price="$29"
            features={[
              '10,000 links/month',
              'Advanced analytics',
              'Priority support',
              'Custom domains',
              'Team collaboration',
            ]}
            priceId="price_pro"
            onUpgrade={handleUpgrade}
            highlighted
          />
          <PricingCard
            title="Enterprise"
            price="$99"
            features={[
              'Unlimited links',
              'Custom solutions',
              'Dedicated support',
              'SLA guarantee',
              'API access',
            ]}
            priceId="price_enterprise"
            onUpgrade={handleUpgrade}
          />
        </div>
      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  priceId: string;
  onUpgrade: (priceId: string) => void;
  highlighted?: boolean;
}

function PricingCard({ title, price, features, priceId, onUpgrade, highlighted = false }: PricingCardProps) {
  return (
    <div className={`rounded-lg p-6 ${
      highlighted 
        ? 'ring-2 ring-indigo-600 bg-white shadow-lg' 
        : 'bg-gray-50'
    }`}>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500">/month</span>
      </p>
      <ul className="mt-6 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-3 text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onUpgrade(priceId)}
        className={`mt-8 w-full py-2 px-4 rounded-lg font-medium ${
          highlighted
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-white text-indigo-600 hover:bg-gray-50 border border-indigo-600'
        }`}
      >
        Upgrade to {title}
      </button>
    </div>
  );
}