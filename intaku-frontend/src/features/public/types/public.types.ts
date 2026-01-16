export interface Service {
  id: string;
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  estimatedDays: number;
  features: string[];
}
export interface IntakeFormData {
  // Client Type Selection (NEW - FIRST FIELD)
  clientType: 'personal' | 'business' | '';

  // Section 1: Contact Information
  name: string;
  email: string;
  phone: string;
  company: string; // Only for business
  website?: string; // Only for business
  industry?: string; // Only for business
  companySize?: string; // Only for business
  role?: string; // Only for business

  // Section 2: Service Selection
  serviceId: string;

  // Section 3: Project Overview
  projectTitle: string;
  currentSituation: string;
  projectGoals: string;
  targetAudience?: string;

  // Section 4: Project Requirements
  keyFeatures: string[];
  otherFeatures?: string;
  technicalRequirements?: string;
  integrationNeeds?: string;
  existingSystems?: string;

  // Section 5: Design Preferences
  designStyle?: string;
  brandColors?: string;
  referenceWebsites?: string;
  designRequirements?: string;
  hasBrandGuidelines?: string;

  // Section 6: Timeline & Budget
  budget: string;
  timeline: string;
  preferredStartDate?: string;
  decisionTimeline?: string;

  // Section 7: Project Description
  description: string;

  // Section 8: Additional Information
  teamSize?: string; // Only for business
  stakeholders?: string; // Only for business
  previousDeveloperExperience?: string;
  biggestConcern?: string;
  whyNow?: string;
  source?: string;
  additionalNotes?: string;
  file?: File | null;
}
export interface IntakeFormErrors {
  [key: string]: string | undefined;
}
export type IntakeStatus = 'idle' | 'submitting' | 'success' | 'error';
export const BUDGET_RANGES = ['Under $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', '$100,000+'];
export const TIMELINE_OPTIONS = ['ASAP (1-2 weeks)', 'Flexible (1-2 months)', 'Standard (2-3 months)', 'Long-term (3+ months)'];
export const SOURCE_OPTIONS = ['Google Search', 'Social Media', 'Referral', 'Blog / Article', 'Conference / Event', 'Other'];
export const INDUSTRY_OPTIONS = ['Technology / SaaS', 'Healthcare / Medical', 'Finance / Fintech', 'E-commerce / Retail', 'Education / EdTech', 'Real Estate', 'Manufacturing', 'Professional Services', 'Non-profit', 'Other'];
export const COMPANY_SIZE_OPTIONS = ['1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees'];
export const DECISION_TIMELINE_OPTIONS = ['Within 1 week', '1-2 weeks', '2-4 weeks', '1-2 months', 'Just exploring / No fixed timeline'];
export const KEY_FEATURES_OPTIONS = ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'API Integration', 'Real-time Features', 'Analytics / Reporting', 'Content Management', 'Search Functionality', 'Email Notifications', 'File Upload / Storage', 'Multi-language Support', 'Role-Based Permissions'];
export const DESIGN_STYLE_OPTIONS = ['Modern & Clean', 'Minimal & Simple', 'Bold & Colorful', 'Corporate & Professional', 'Playful & Creative', 'Dark Mode / Tech-focused', 'Elegant & Sophisticated', 'I need help deciding'];
export const MOCK_SERVICES: Service[] = [{
  id: '1',
  name: 'Full-Stack Web Application',
  description: 'Complete web applications with PostgreSQL, Express, React, and Node.js',
  minPrice: 5000,
  maxPrice: 20000,
  estimatedDays: 30,
  features: ['React + TypeScript Frontend', 'Node.js + Express Backend', 'PostgreSQL Database', 'RESTful API', 'Authentication & Authorization', 'Responsive Design', 'Deployment & Hosting']
}, {
  id: '2',
  name: 'Custom Dashboard / Admin Panel',
  description: 'Data-driven dashboards and admin interfaces for managing your business',
  minPrice: 4000,
  maxPrice: 12000,
  estimatedDays: 20,
  features: ['Interactive Data Visualization', 'CRUD Operations', 'User Management', 'Role-Based Access Control', 'Real-time Updates', 'Export & Reporting']
}, {
  id: '3',
  name: 'Landing Page / Marketing Website',
  description: 'High-converting landing pages and marketing websites',
  minPrice: 2000,
  maxPrice: 6000,
  estimatedDays: 10,
  features: ['Modern Responsive Design', 'SEO Optimized', 'Contact Forms', 'CMS Integration (optional)', 'Analytics Setup', 'Fast Loading Speed']
}, {
  id: '4',
  name: 'E-commerce Platform',
  description: 'Online stores with product management, cart, and payment processing',
  minPrice: 8000,
  maxPrice: 25000,
  estimatedDays: 45,
  features: ['Product Catalog', 'Shopping Cart', 'Payment Integration (Stripe)', 'Order Management', 'Inventory Tracking', 'Customer Accounts', 'Admin Dashboard']
}, {
  id: '5',
  name: 'API Development & Integration',
  description: 'RESTful APIs and third-party service integrations',
  minPrice: 3000,
  maxPrice: 10000,
  estimatedDays: 15,
  features: ['RESTful API Design', 'PostgreSQL Database Schema', 'Authentication (JWT)', 'API Documentation', 'Third-party Integrations', 'Testing & Validation']
}];