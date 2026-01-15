import { z } from 'zod';

const fieldTypeEnum = z.enum([
  'text',
  'textarea',
  'email',
  'number',
  'select',
  'radio',
  'checkbox',
  'date',
  'file',
]);

export const createFormFieldSchema = z.object({
  body: z.object({
    field_name: z.string().min(2).max(100),
    field_label: z.string().min(2).max(255),
    field_type: fieldTypeEnum,
    placeholder: z.string().optional(),
    help_text: z.string().optional(),
    is_required: z.boolean().optional(),
    options: z.array(z.string()).optional(),
    validation_rules: z.record(z.any()).optional(),
    display_order: z.number().int().optional(),
    is_active: z.boolean().optional(),
  }),
});

export const updateFormFieldSchema = z.object({
  body: z.object({
    field_name: z.string().min(2).max(100).optional(),
    field_label: z.string().min(2).max(255).optional(),
    field_type: fieldTypeEnum.optional(),
    placeholder: z.string().optional(),
    help_text: z.string().optional(),
    is_required: z.boolean().optional(),
    options: z.array(z.string()).optional(),
    validation_rules: z.record(z.any()).optional(),
    display_order: z.number().int().optional(),
    is_active: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const getFormFieldSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});