export type ClientStatus = 'new' | 'in_progress' | 'completed' | 'rejected' | 'archived';
export interface ClientAttachment {
  name: string;
  size: number;
  url: string;
  type: string;
}
export interface Client {
  id: string;
  name: string;
  email: string;
  companyName?: string;
  serviceId: string;
  serviceName: string;
  projectDescription: string;
  budgetRange: string;
  timeline: string;
  referralSource?: string;
  status: ClientStatus;
  createdAt: string;
  updatedAt: string;
  attachments?: ClientAttachment[];
}
export interface ClientFilters {
  search: string;
  status: ClientStatus | 'all';
  dateRange: 'all' | '7days' | '30days' | '90days';
}
export interface ClientsResponse {
  data: Client[];
  total: number;
  page: number;
  limit: number;
}