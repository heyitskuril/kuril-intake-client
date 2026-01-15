import React from 'react';
import { MetricsCards } from './MetricsCard';
import { RecentClients } from './RecentClients';
import { ActivityFeed } from './ActivityFeed';
import { StatsChart } from './StatsChart';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { useDashboard } from '../hooks/useDashboard';
import { useClients } from '@features/clients/hooks/useClients';

export const Dashboard: React.FC = () => {
  const { data, loading, error } = useDashboard();
  const { clients } = useClients({ limit: 5 });

  if (loading) {
    return <Loading fullScreen message="Loading dashboard..." />;
  }

  if (error || !data) {
    return <Alert type="error" message={error || 'Failed to load dashboard'} />;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      <MetricsCards metrics={data.metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatsChart data={data.trends} />
        <ActivityFeed activities={data.recent_activity} />
      </div>

      <RecentClients clients={clients} />
    </div>
  );
};