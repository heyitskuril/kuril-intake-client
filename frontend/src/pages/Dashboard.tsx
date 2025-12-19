// Admin Dashboard Page
// Statistics & overview

import { FileText, Eye, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntakes } from '../hooks/useIntakes';

/* =======================
   Types
======================= */

type IntakeStatus = 'new' | 'reviewed' | 'closed';

type Intake = {
  id: string;
  name: string;
  status: IntakeStatus;
  email?: string;
  serviceInquiry?: string;
  createdAt: string;
};

type StatItem = {
  name: string;
  value: number;
  icon: React.ElementType;
  color: string;
  change: string;
  changeType: 'increase' | 'decrease';
};

/* =======================
   Component
======================= */

const Dashboard = () => {
  const allQuery = useIntakes({});
  const newQuery = useIntakes({ status: 'new' });
  const reviewedQuery = useIntakes({ status: 'reviewed' });
  const closedQuery = useIntakes({ status: 'closed' });

  type PaginatedResponse<T> = {
    data?: T[];
    pagination?: {
      total: number;
      [key: string]: any;
    };
  };

  const allData = allQuery.data as PaginatedResponse<Intake> | undefined;
  const newData = newQuery.data as PaginatedResponse<Intake> | undefined;
  const reviewedData = reviewedQuery.data as PaginatedResponse<Intake> | undefined;
  const closedData = closedQuery.data as PaginatedResponse<Intake> | undefined;

  const stats: StatItem[] = [
    {
      name: 'Total Submissions',
      value: allData?.pagination?.total ?? 0,
      icon: FileText,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'increase',
    },
    {
      name: 'New Intakes',
      value: newData?.pagination?.total ?? 0,
      icon: Eye,
      color: 'bg-yellow-500',
      change: '+5',
      changeType: 'increase',
    },
    {
      name: 'Reviewed',
      value: reviewedData?.pagination?.total ?? 0,
      icon: CheckCircle,
      color: 'bg-green-500',
      change: '+8',
      changeType: 'increase',
    },
    {
      name: 'Closed',
      value: closedData?.pagination?.total ?? 0,
      icon: XCircle,
      color: 'bg-gray-500',
      change: '+3',
      changeType: 'increase',
    },
  ];

  const recentIntakes: Intake[] = allData?.data?.slice(0, 5) ?? [];

  const total = allData?.pagination?.total ?? 0;
  const closed = closedData?.pagination?.total ?? 0;
  const completionRate = total ? Math.round((closed / total) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's what's happening.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.name} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-2">
                    <span className="font-medium">{stat.change}</span> from last
                    month
                  </p>
                </div>

                <div
                  className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Submissions */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Recent Submissions
          </h2>
          <Link
            to="/admin/intakes"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            View all →
          </Link>
        </div>

        {recentIntakes.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No submissions yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentIntakes.map((intake) => (
              <Link
                key={intake.id}
                to={`/admin/intakes/${intake.id}`}
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-gray-900">
                        {intake.name}
                      </h3>
                      <span
                        className={`badge ${
                          intake.status === 'new'
                            ? 'badge-new'
                            : intake.status === 'reviewed'
                            ? 'badge-reviewed'
                            : 'badge-closed'
                        }`}
                      >
                        {intake.status.toUpperCase()}
                      </span>
                    </div>

                    {intake.email && (
                      <p className="text-sm text-gray-600 mt-1">
                        {intake.email}
                      </p>
                    )}

                    {intake.serviceInquiry && (
                      <p className="text-sm text-gray-500 mt-1">
                        Service:{' '}
                        <span className="font-medium">
                          {intake.serviceInquiry}
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      {new Date(intake.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-gradient-to-br from-primary-600 to-blue-700 text-white">
          <h3 className="text-lg font-bold mb-2">Quick Stats</h3>
          <p className="text-primary-100 mb-4">
            You have{' '}
            <span className="font-bold">
              {newData?.pagination?.total ?? 0}
            </span>{' '}
            new submissions waiting for review.
          </p>
          <Link
            to="/admin/intakes?status=new"
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            Review now →
          </Link>
        </div>

        <div className="card bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <h3 className="text-lg font-bold mb-2">Completion Rate</h3>
          <p className="text-green-100 mb-4">
            <span className="font-bold">{completionRate}%</span> of submissions
            have been closed.
          </p>
          <Link
            to="/admin/intakes?status=closed"
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            View closed →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
