// import React, { useEffect, useState } from 'react';
// import { useDashboard } from '../hooks/useDashboard';
// import { MetricsCards } from './MetricsCards';
// import { StatsChart } from './StatsChart';
// import { RecentClients } from './RecentClients';
// import { ActivityFeed } from './ActivityFeed';
// import { Loading } from '../../../shared/components/UI/Loading';
// import { Alert } from '../../../shared/components/UI/Alert';
// import { clientsService } from '../../clients/services/clientsService'; // Import to fetch recent clients
// export const Dashboard: React.FC = () => {
//   const {
//     data,
//     isLoading,
//     error
//   } = useDashboard();
//   const [recentClients, setRecentClients] = useState<any[]>([]);
//   useEffect(() => {
//     // Fetch recent clients separately or include in dashboard data
//     // For now, let's just fetch them
//     const fetchRecent = async () => {
//       const res = await clientsService.getClients(1, 10);
//       setRecentClients(res.data);
//     };
//     fetchRecent();
//   }, []);
//   if (isLoading) return <div className="flex justify-center py-20">
//         <Loading size="lg" />
//       </div>;
//   if (error) return <Alert type="error" message={error} />;
//   if (!data) return null;
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
//         <div className="text-sm text-gray-500">
//           Last updated: {new Date().toLocaleTimeString()}
//         </div>
//       </div>

//       <MetricsCards stats={data.stats} />

//       <StatsChart data={data.submissionTrend} />

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <RecentClients clients={recentClients} />
//         </div>
//         <div>
//           <ActivityFeed activities={data.recentActivities} />
//         </div>
//       </div>
//     </div>;
// };


import React, { useEffect, useState } from 'react';
import { useDashboard } from '../hooks/useDashboard';
import { MetricsCards } from './MetricsCards';
import { StatsChart } from './StatsChart';
import { RecentClients } from './RecentClients';
import { ActivityFeed } from './ActivityFeed';
import { Loading } from '../../../shared/components/UI/Loading';
import { Alert } from '../../../shared/components/UI/Alert';
import { clientsService } from '../../clients/services/clientsService';

export const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useDashboard();

  const [recentClients, setRecentClients] = useState<any[]>([]);
  const [recentLoading, setRecentLoading] = useState(false);
  const [recentError, setRecentError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRecent = async () => {
      try {
        setRecentLoading(true);
        const res = await clientsService.getClients(1, 10);

        if (isMounted) {
          setRecentClients(res.data);
        }
      } catch (err: any) {
        if (isMounted) {
          setRecentError(
            err?.message || 'Failed to load recent clients'
          );
        }
      } finally {
        if (isMounted) {
          setRecentLoading(false);
        }
      }
    };

    fetchRecent();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Loading size="lg" />
      </div>
    );
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <MetricsCards stats={data.stats} />

      <StatsChart data={data.submissionTrend} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentClients
            clients={recentClients}
            isLoading={recentLoading}
            error={recentError}
          />
        </div>

        <div>
          <ActivityFeed
            activities={data.recentActivities}
          />
        </div>
      </div>
    </div>
  );
};
