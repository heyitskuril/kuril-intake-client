import { BrandingSettings } from '../types/branding.types';

// Mock data
let MOCK_BRANDING: BrandingSettings = {
  visual: {
    logoUrl: null,
    faviconUrl: null,
    backgroundImageUrl: null,
    primaryColor: '#3B82F6',
    secondaryColor: '#8B5CF6',
    textColor: '#1F2937',
    backgroundColor: '#FFFFFF'
  },
  content: {
    siteTitle: 'Intaku',
    tagline: 'Transform Your Client Intake Process',
    welcomeMessage: 'Welcome! Tell us about your project.',
    heroDescription: 'Professional intake forms that convert inquiries into structured workflows',
    successMessage: "Thank you! We'll review your submission and get back to you soon.",
    footerText: '© 2024 Intaku. All rights reserved.'
  },
  seo: {
    metaTitle: 'Intaku - Client Intake Platform',
    metaDescription: 'Transform client inquiries into structured workflows with professional intake forms',
    ogTitle: 'Intaku - Client Intake Platform',
    ogDescription: 'Professional intake forms for freelancers and agencies',
    ogImageUrl: null
  }
};
export const brandingService = {
  getSettings: async (): Promise<BrandingSettings> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return {
      ...MOCK_BRANDING
    };
  },
  updateSettings: async (settings: Partial<BrandingSettings>): Promise<BrandingSettings> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    MOCK_BRANDING = {
      ...MOCK_BRANDING,
      ...settings
    };
    return {
      ...MOCK_BRANDING
    };
  },
  uploadImage: async (file: File): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Mock upload - return a fake URL or base64
    return URL.createObjectURL(file);
  }
};