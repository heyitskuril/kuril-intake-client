import { FieldType } from '@shared/types/common.types';

export interface FormField {
  id: string;
  field_name: string;
  field_label: string;
  field_type: FieldType;
  placeholder?: string;
  help_text?: string;
  is_required: boolean;
  options?: string[];
  validation_rules?: Record<string, any>;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateFormFieldPayload {
  field_name: string;
  field_label: string;
  field_type: FieldType;
  placeholder?: string;
  help_text?: string;
  is_required?: boolean;
  options?: string[];
  validation_rules?: Record<string, any>;
  display_order?: number;
  is_active?: boolean;
}

export interface UpdateFormFieldPayload {
  field_name?: string;
  field_label?: string;
  field_type?: FieldType;
  placeholder?: string;
  help_text?: string;
  is_required?: boolean;
  options?: string[];
  validation_rules?: Record<string, any>;
  display_order?: number;
  is_active?: boolean;
}