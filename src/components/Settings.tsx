import React, { useState } from 'react';
import { Globe, Shield, Bell, Key } from 'lucide-react';

export function Settings() {
  const [defaultExpiration, setDefaultExpiration] = useState('never');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Custom Domain</h3>
          <p className="mt-1 text-sm text-gray-500">
            Connect your own domain to create branded short links
          </p>
          <div className="mt-4">
            <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
              Domain
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                https://
              </span>
              <input
                type="text"
                id="domain"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                placeholder="links.yourdomain.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Connect Domain
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Link Settings</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Default Link Expiration</label>
                <p className="text-sm text-gray-500">Set a default expiration time for new links</p>
              </div>
              <select 
                value={defaultExpiration}
                onChange={(e) => setDefaultExpiration(e.target.value)}
                className="mt-1 block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="never" className="font-medium">Never</option>
                <option value="24h">24 hours</option>
                <option value="7d">7 days</option>
                <option value="30d">30 days</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Password Protection</label>
                <p className="text-sm text-gray-500">Require a password to access links</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Email Reports</label>
                <p className="text-sm text-gray-500">Receive weekly analytics reports</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Link Alerts</label>
                <p className="text-sm text-gray-500">Get notified when links reach certain milestones</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}