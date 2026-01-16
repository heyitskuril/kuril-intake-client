export interface DashboardStats {
  totalClients: number;
  newThisWeek: number;
  inProgress: number;
  completed: number;
  trends: {
    totalChange: number;
    newChange: number;
    inProgressChange: number;
    completedChange: number;
  };
}
export interface ChartDataPoint {
  date: string;
  count: number;
}
export interface ActivityItem {
  id: string;
  action: 'client_created' | 'status_changed' | 'note_added' | 'client_archived';
  description: string;
  timestamp: string;
  userId: string;
  userName: string;
  targetId?: string;
  targetType?: 'client' | 'note';
}
export interface DashboardData {
  stats: DashboardStats;
  submissionTrend: ChartDataPoint[];
  recentActivities: ActivityItem[];
}