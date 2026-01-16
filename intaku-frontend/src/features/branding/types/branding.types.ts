export interface VisualSettings {
  logoUrl: string | null;
  faviconUrl: string | null;
  backgroundImageUrl: string | null;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  backgroundColor: string;
}
export interface ContentSettings {
  siteTitle: string;
  tagline: string;
  welcomeMessage: string;
  heroDescription: string;
  successMessage: string;
  footerText: string;
}
export interface SEOSettings {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImageUrl: string | null;
}
export interface BrandingSettings {
  visual: VisualSettings;
  content: ContentSettings;
  seo: SEOSettings;
}