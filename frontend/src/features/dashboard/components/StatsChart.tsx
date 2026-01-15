import React from 'react';
import { Card } from '@shared/components/UI/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ClientTrend } from '../types/dashboard.types';

interface StatsChartProps {
  data: ClientTrend[];
}

export const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  return (
    <Card>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Submission Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};