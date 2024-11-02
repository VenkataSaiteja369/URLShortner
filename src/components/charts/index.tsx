import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

export function LineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Clicks',
        data: [1200, 1900, 3000, 5000, 6000, 7000],
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.5)',
      },
    ],
  };

  return (
    <div className="h-64">
      <Line options={commonOptions} data={data} />
    </div>
  );
}

export function BarChart() {
  const data = {
    labels: ['USA', 'UK', 'Germany', 'France', 'Japan'],
    datasets: [
      {
        label: 'Clicks by Country',
        data: [2500, 1800, 1200, 900, 600],
        backgroundColor: 'rgba(79, 70, 229, 0.5)',
      },
    ],
  };

  return (
    <div className="h-64">
      <Bar options={commonOptions} data={data} />
    </div>
  );
}