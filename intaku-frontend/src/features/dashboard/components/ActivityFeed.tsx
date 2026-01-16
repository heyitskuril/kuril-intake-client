import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, FileText, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { Card } from '../../../shared/components/UI/Card';
import { ActivityItem } from '../types/dashboard.types';
import { formatDistanceToNow } from 'date-fns';
interface ActivityFeedProps {
  activities: ActivityItem[];
}
const getActivityIcon = (action: string) => {
  switch (action) {
    case 'client_created':
      return <UserPlus className="w-4 h-4 text-blue-600" />;
    case 'status_changed':
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case 'note_added':
      return <MessageSquare className="w-4 h-4 text-purple-600" />;
    default:
      return <FileText className="w-4 h-4 text-gray-600" />;
  }
};
const getActivityColor = (action: string) => {
  switch (action) {
    case 'client_created':
      return 'bg-blue-100';
    case 'status_changed':
      return 'bg-green-100';
    case 'note_added':
      return 'bg-purple-100';
    default:
      return 'bg-gray-100';
  }
};
export const ActivityFeed: React.FC<ActivityFeedProps> = ({
  activities
}) => {
  return <Card className="h-full">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, idx) => <motion.li key={activity.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: idx * 0.1
          }}>
                <div className="relative pb-8">
                  {idx !== activities.length - 1 && <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />}
                  <div className="relative flex space-x-3">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${getActivityColor(activity.action)}`}>
                      {getActivityIcon(activity.action)}
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {activity.description}{' '}
                          <span className="font-medium text-gray-900">
                            by {activity.userName}
                          </span>
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        {formatDistanceToNow(new Date(activity.timestamp), {
                      addSuffix: true
                    })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>)}
          </ul>
        </div>
      </div>
    </Card>;
};