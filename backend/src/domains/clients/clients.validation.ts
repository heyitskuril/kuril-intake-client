import { z } from 'zod';

export const createClientSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(255),
    email: z.string().email('Invalid email format'),
    business_type: z.string().optional(),
    service_type: z.string().optional(),
    budget: z.number().positive().optional(),
    notes: z.string().optional(),
    attachment_url: z.string().url().optional(),
    form_data: z.record(z.any()).optional(),
  }),
});

export const updateClientSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(255).optional(),
    email: z.string().email().optional(),
    business_type: z.string().optional(),
    service_type: z.string().optional(),
    budget: z.number().positive().optional(),
    notes: z.string().optional(),
    status: z.enum(['new', 'in_progress', 'completed', 'rejected', 'archived']).optional(),
    form_data: z.record(z.any()).optional(),
  }),
  params: z.object({
    id: z.string().uuid('Invalid client ID'),
  }),
});

export const getClientSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid client ID'),
  }),
});

export const listClientsSchema = z.object({
  query: z.object({
    status: z.enum(['new', 'in_progress', 'completed', 'rejected', 'archived']).optional(),
    search: z.string().optional(),
    service_type: z.string().optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    limit: z.string().transform(Number).optional(),
    offset: z.string().transform(Number).optional(),
  }),
});