import React from 'react';
import { Link2, Calendar, Trash2, Edit2, ExternalLink } from 'lucide-react';

export function LinkManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">My Links</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search links..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
            <option>All Time</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Short Link
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Original URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expires
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <LinkRow
                shortLink="linkmetrics.io/summer-sale"
                originalUrl="https://example.com/very-long-summer-sale-2024"
                clicks={1234}
                created="2024-03-10"
                expires="2024-06-10"
              />
              <LinkRow
                shortLink="linkmetrics.io/webinar"
                originalUrl="https://example.com/spring-webinar-registration"
                clicks={567}
                created="2024-03-08"
                expires="2024-05-08"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function LinkRow({ shortLink, originalUrl, clicks, created, expires }: {
  shortLink: string;
  originalUrl: string;
  clicks: number;
  created: string;
  expires: string;
}) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <Link2 className="h-5 w-5 text-indigo-600 mr-2" />
          <span className="text-sm text-gray-900">{shortLink}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-500 truncate max-w-xs">{originalUrl}</span>
          <ExternalLink className="h-4 w-4 text-gray-400 ml-2 cursor-pointer" />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{clicks.toLocaleString()}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-500">{created}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-500">{expires}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex items-center justify-end space-x-2">
          <button className="text-gray-400 hover:text-gray-500">
            <Calendar className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-500">
            <Edit2 className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-red-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}