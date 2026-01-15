import { ClientStatus } from '@prisma/client';

export interface CreateClientPayload {
  name: string;
  email: string;
  business_type?: string;
  service_type?: string;
  budget?: number;
  notes?: string;
  attachment_url?: string;
  form_data?: Record<string, any>;
}

export interface UpdateClientPayload {
  name?: string;
  email?: string;
  business_type?: string;
  service_type?: string;
  budget?: number;
  notes?: string;
  status?: ClientStatus;
  form_data?: Record<string, any>;
}

export interface ClientFilters {
  status?: ClientStatus;
  search?: string;
  service_type?: string;
  startDate?: Date;
  endDate?: Date;
  limit?: number;
  offset?: number;
}