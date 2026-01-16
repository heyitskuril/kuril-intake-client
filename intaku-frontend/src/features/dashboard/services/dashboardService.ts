import { DashboardData } from '../types/dashboard.types';
import { apiClient } from '../../../shared/utils/apiClient';

// Mock data for development
const MOCK_DASHBOARD_DATA: DashboardData = {
  stats: {
    totalClients: 47,
    newThisWeek: 8,
    inProgress: 12,
    completed: 23,
    trends: {
      totalChange: 12,
      newChange: 25,
      inProgressChange: -8,
      completedChange: 15
    }
  },
  submissionTrend: Array.from({
    length: 30
  }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return {
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 5)
    };
  }),
  recentActivities: [{
    id: '1',
    action: 'client_created',
    description: 'John Smith submitted new request',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    userId: 'system',
    userName: 'System'
  }, {
    id: '2',
    action: 'status_changed',
    description: 'Status changed to In Progress for Jane Doe',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    userId: 'admin',
    userName: 'Admin User'
  }, {
    id: '3',
    action: 'note_added',
    description: 'Note added to Project Alpha',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    userId: 'admin',
    userName: 'Admin User'
  }, {
    id: '4',
    action: 'client_created',
    description: 'Sarah Wilson submitted new request',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    userId: 'system',
    userName: 'System'
  }, {
    id: '5',
    action: 'status_changed',
    description: 'Status changed to Completed for TechCorp',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    userId: 'admin',
    userName: 'Admin User'
  }]
};
export const dashboardService = {
  getDashboardData: async (): Promise<DashboardData> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return MOCK_DASHBOARD_DATA;
  }
};