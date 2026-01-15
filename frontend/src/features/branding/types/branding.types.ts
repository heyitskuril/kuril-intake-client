export interface BrandingSetting {
  id: string;
  key: string;
  value: string;
  category: 'visual' | 'content' | 'seo';
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateBrandingPayload {
  key: string;
  value: string;
  category: 'visual' | 'content' | 'seo';
  description?: string;
}

export interface BrandingSettings {
  logo_url?: string;
  favicon_url?: string;
  background_image?: string;
  primary_color?: string;
  secondary_color?: string;
  text_color?: string;
  site_title?: string;
  site_description?: string;
  welcome_message?: string;
  tagline?: string;
  footer_text?: string;
  meta_description?: string;
  meta_keywords?: string;
  og_image?: string;
}