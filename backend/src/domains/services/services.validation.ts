import { z } from 'zod';

export const createServiceSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(255),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    slug: z
      .string()
      .min(2)
      .max(100)
      .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    min_price: z.number().positive('Minimum price must be positive'),
    max_price: z.number().positive('Maximum price must be positive'),
    estimated_days: z.number().int().positive('Estimated days must be a positive integer'),
    features: z.array(z.string()).min(1, 'At least one feature is required'),
    is_active: z.boolean().optional(),
    display_order: z.number().int().optional(),
  }),
});

export const updateServiceSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(255).optional(),
    description: z.string().min(10).optional(),
    slug: z
      .string()
      .min(2)
      .max(100)
      .regex(/^[a-z0-9-]+$/)
      .optional(),
    min_price: z.number().positive().optional(),
    max_price: z.number().positive().optional(),
    estimated_days: z.number().int().positive().optional(),
    features: z.array(z.string()).min(1).optional(),
    is_active: z.boolean().optional(),
    display_order: z.number().int().optional(),
  }),
  params: z.object({
    id: z.string().uuid('Invalid service ID'),
  }),
});

export const getServiceSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid service ID'),
  }),
});