import { Client, ClientsResponse, ClientStatus, ClientFilters } from '../types/clients.types';

// Mock data generator
const generateMockClients = (count: number): Client[] => {
  const statuses: ClientStatus[] = ['new', 'in_progress', 'completed', 'rejected', 'archived'];
  const services = [{
    id: '1',
    name: 'Web Application Development'
  }, {
    id: '2',
    name: 'Mobile App Development'
  }, {
    id: '3',
    name: 'API Development'
  }];
  return Array.from({
    length: count
  }, (_, i) => ({
    id: (i + 1).toString(),
    name: `Client ${i + 1}`,
    email: `client${i + 1}@example.com`,
    companyName: i % 3 === 0 ? `Company ${i + 1}` : undefined,
    serviceId: services[i % 3].id,
    serviceName: services[i % 3].name,
    projectDescription: 'This is a sample project description that outlines the requirements and goals of the engagement. It includes details about the scope, timeline, and expected deliverables.',
    budgetRange: i % 2 === 0 ? '$10,000 - $25,000' : '$5,000 - $10,000',
    timeline: 'Flexible (1-2 months)',
    status: statuses[i % 5],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * i).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * i).toISOString(),
    attachments: i % 4 === 0 ? [{
      name: 'project-brief.pdf',
      size: 1024 * 500,
      url: '#',
      type: 'application/pdf'
    }] : []
  }));
};
const MOCK_CLIENTS = generateMockClients(50);
export const clientsService = {
  getClients: async (page: number = 1, limit: number = 20, filters?: ClientFilters): Promise<ClientsResponse> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    let filtered = [...MOCK_CLIENTS];
    if (filters) {
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filtered = filtered.filter(c => c.name.toLowerCase().includes(searchLower) || c.email.toLowerCase().includes(searchLower) || c.companyName?.toLowerCase().includes(searchLower));
      }
      if (filters.status && filters.status !== 'all') {
        filtered = filtered.filter(c => c.status === filters.status);
      }

      // Date range logic could go here
    }
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      data: filtered.slice(start, end),
      total: filtered.length,
      page,
      limit
    };
  },
  getClientById: async (id: string): Promise<Client | null> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_CLIENTS.find(c => c.id === id) || null;
  },
  updateClientStatus: async (id: string, status: ClientStatus): Promise<Client> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    const clientIndex = MOCK_CLIENTS.findIndex(c => c.id === id);
    if (clientIndex === -1) throw new Error('Client not found');
    MOCK_CLIENTS[clientIndex] = {
      ...MOCK_CLIENTS[clientIndex],
      status,
      updatedAt: new Date().toISOString()
    };
    return MOCK_CLIENTS[clientIndex];
  }
};