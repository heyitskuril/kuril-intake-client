import { apiClient } from '../../../shared/utils/apiClient';
import { Service, ServiceFormData } from '../types/services.types';

// Mock data
let MOCK_SERVICES: Service[] = [{
  id: '1',
  name: 'Web Application Development',
  description: 'Custom web applications built with modern technologies like React, Node.js, and TypeScript.',
  slug: 'web-app-development',
  minPrice: 5000,
  maxPrice: 15000,
  estimatedDays: 30,
  features: ['React + TypeScript', 'Responsive Design', 'API Integration', 'Database Setup', 'Deployment'],
  isActive: true,
  displayOrder: 1
}, {
  id: '2',
  name: 'Mobile App Development',
  description: 'Native or cross-platform mobile applications for iOS and Android.',
  slug: 'mobile-app-development',
  minPrice: 8000,
  maxPrice: 20000,
  estimatedDays: 45,
  features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Submission'],
  isActive: true,
  displayOrder: 2
}, {
  id: '3',
  name: 'API Development',
  description: 'Robust and scalable RESTful APIs and backend services.',
  slug: 'api-development',
  minPrice: 3000,
  maxPrice: 8000,
  estimatedDays: 20,
  features: ['REST API', 'Authentication', 'Database Design', 'Documentation', 'Testing'],
  isActive: true,
  displayOrder: 3
}];
export const servicesService = {
  getServices: async (): Promise<Service[]> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return [...MOCK_SERVICES].sort((a, b) => a.displayOrder - b.displayOrder);
  },
  getService: async (id: string): Promise<Service> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const service = MOCK_SERVICES.find(s => s.id === id);
    if (!service) throw new Error('Service not found');
    return service;
  },
  createService: async (data: ServiceFormData): Promise<Service> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newService: Service = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      slug: data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      displayOrder: MOCK_SERVICES.length + 1
    };
    MOCK_SERVICES.push(newService);
    return newService;
  },
  updateService: async (id: string, data: Partial<ServiceFormData>): Promise<Service> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const index = MOCK_SERVICES.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Service not found');
    const updatedService = {
      ...MOCK_SERVICES[index],
      ...data,
      slug: data.name ? data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : MOCK_SERVICES[index].slug
    };
    MOCK_SERVICES[index] = updatedService;
    return updatedService;
  },
  deleteService: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    MOCK_SERVICES = MOCK_SERVICES.filter(s => s.id !== id);
  },
  reorderServices: async (orderedIds: string[]): Promise<Service[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const reordered = orderedIds.map((id, index) => {
      const service = MOCK_SERVICES.find(s => s.id === id);
      if (service) {
        service.displayOrder = index + 1;
        return service;
      }
      return null;
    }).filter(Boolean) as Service[];
    MOCK_SERVICES.sort((a, b) => a.displayOrder - b.displayOrder);
    return reordered;
  }
};