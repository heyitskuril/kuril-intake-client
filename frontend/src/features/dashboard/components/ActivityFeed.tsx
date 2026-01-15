import React from 'react';
import { Card } from '@shared/components/UI/Card';
import { RecentActivity } from '../types/dashboard.types';
import { formatRelativeTime } from '@shared/utils/formatters';

interface ActivityFeedProps {
  activities: RecentActivity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <Card>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No recent activity</p>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b border-gray-200 last:border-0">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.user_name}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.action}
                  {activity.details && (
                    <span className="text-gray-500"> • {activity.details}</span>
                  )}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatRelativeTime(activity.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};