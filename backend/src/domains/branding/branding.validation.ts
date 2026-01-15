import { z } from 'zod';

export const brandingSettingSchema = z.object({
  body: z.object({
    key: z.string().min(2).max(100),
    value: z.string().min(1),
    category: z.enum(['visual', 'content', 'seo']),
    description: z.string().optional(),
  }),
});