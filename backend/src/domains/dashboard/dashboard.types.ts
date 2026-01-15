export interface DashboardStats {
  totalClients: number;
  newClients: number;
  inProgressClients: number;
  completedClients: number;
  clientsByStatus: Record<string, number>;
  recentClients: any[];
  recentActivities: any[];
}