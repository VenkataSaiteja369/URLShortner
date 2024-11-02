import React from 'react';
import { BarChart, LineChart, PieChart } from './charts';
import { Globe, Smartphone, Monitor, ExternalLink } from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Clicks"
          value="12,345"
          change="+12.3%"
          positive={true}
        />
        <StatCard
          title="QR Scans"
          value="4,567"
          change="+8.7%"
          positive={true}
        />
        <StatCard
          title="Unique Visitors"
          value="8,901"
          change="-2.4%"
          positive={false}
        />
        <StatCard
          title="Avg. Click Duration"
          value="2.3m"
          change="+5.6%"
          positive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Clicks Over Time</h3>
          <LineChart />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Locations</h3>
          <BarChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Device Distribution</h3>
          <div className="flex items-center justify-around">
            <div className="text-center">
              <Monitor className="h-8 w-8 mx-auto text-indigo-600" />
              <div className="mt-2 text-sm font-medium text-gray-900">Desktop</div>
              <div className="text-gray-500">45%</div>
            </div>
            <div className="text-center">
              <Smartphone className="h-8 w-8 mx-auto text-indigo-600" />
              <div className="mt-2 text-sm font-medium text-gray-900">Mobile</div>
              <div className="text-gray-500">55%</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Referrers</h3>
          <div className="space-y-4">
            <ReferrerItem source="Google" percentage={35} visits={4325} />
            <ReferrerItem source="Direct" percentage={25} visits={3089} />
            <ReferrerItem source="Twitter" percentage={20} visits={2471} />
            <ReferrerItem source="LinkedIn" percentage={15} visits={1853} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, positive }: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`ml-2 text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </p>
      </div>
    </div>
  );
}

function ReferrerItem({ source, percentage, visits }: {
  source: string;
  percentage: number;
  visits: number;
}) {
  return (
    <div className="flex items-center">
      <ExternalLink className="h-5 w-5 text-gray-400" />
      <div className="ml-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">{source}</span>
          <span className="text-sm text-gray-500">{visits} visits</span>
        </div>
        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}