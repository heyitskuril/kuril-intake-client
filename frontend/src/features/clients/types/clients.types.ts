import { ClientStatus } from '@shared/types/common.types';

export interface Client {
  id: string;
  name: string;
  email: string;
  business_type?: string;
  service_type?: string;
  budget?: number;
  notes?: string;
  attachment_url?: string;
  form_data?: Record<string, any>;
  status: ClientStatus;
  created_at: string;
  updated_at: string;
  internal_notes?: InternalNote[];
}

export interface InternalNote {
  id: string;
  client_id: string;
  user_id: string;
  note: string;
  created_at: string;
  updated_at: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

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
}

export interface ClientFilters {
  status?: ClientStatus;
  search?: string;
  limit?: number;
  offset?: number;
}