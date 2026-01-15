import { z } from 'zod';

export const createAnnouncementSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(255),
    message: z.string().min(1),
    type: z.enum(['info', 'warning', 'success', 'error']).optional(),
    is_active: z.boolean().optional(),
    priority: z.number().int().optional(),
    start_date: z.string().datetime().optional(),
    end_date: z.string().datetime().optional(),
  }),
});

export const updateAnnouncementSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(255).optional(),
    message: z.string().min(1).optional(),
    type: z.enum(['info', 'warning', 'success', 'error']).optional(),
    is_active: z.boolean().optional(),
    priority: z.number().int().optional(),
    start_date: z.string().datetime().optional(),
    end_date: z.string().datetime().optional(),
  }),
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const getAnnouncementSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});