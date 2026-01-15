export interface BrandingSettingPayload {
  key: string;
  value: string;
  category: string;
  description?: string;
}

export interface BrandingFilters {
  category?: string;
}