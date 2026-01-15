export interface DashboardMetrics {
  total_clients: number;
  new_clients: number;
  in_progress: number;
  completed: number;
  rejected: number;
}

export interface ClientTrend {
  date: string;
  count: number;
}

export interface ServicePopularity {
  service_type: string;
  count: number;
}

export interface BudgetDistribution {
  range: string;
  count: number;
}

export interface RecentActivity {
  id: string;
  action: string;
  user_name: string;
  timestamp: string;
  details?: string;
}

export interface DashboardData {
  metrics: DashboardMetrics;
  trends: ClientTrend[];
  service_popularity: ServicePopularity[];
  budget_distribution: BudgetDistribution[];
  recent_activity: RecentActivity[];
}