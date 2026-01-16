export interface Service {
  id: string;
  name: string;
  description: string;
  slug: string;
  minPrice: number;
  maxPrice: number;
  estimatedDays: number;
  features: string[];
  isActive: boolean;
  displayOrder: number;
}
export interface ServiceFormData extends Omit<Service, 'id' | 'slug' | 'displayOrder'> {
  id?: string;
  slug?: string;
}