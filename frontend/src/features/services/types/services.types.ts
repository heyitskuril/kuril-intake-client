export interface Service {
  id: string;
  name: string;
  description: string;
  slug: string;
  min_price: number;
  max_price: number;
  estimated_days: number;
  features: string[];
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface CreateServicePayload {
  name: string;
  description: string;
  slug: string;
  min_price: number;
  max_price: number;
  estimated_days: number;
  features: string[];
  is_active?: boolean;
  display_order?: number;
}

export interface UpdateServicePayload {
  name?: string;
  description?: string;
  slug?: string;
  min_price?: number;
  max_price?: number;
  estimated_days?: number;
  features?: string[];
  is_active?: boolean;
  display_order?: number;
}