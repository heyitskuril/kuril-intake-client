export type FieldType = 'text' | 'textarea' | 'email' | 'number' | 'select' | 'radio' | 'checkbox' | 'date' | 'file';
export interface FormFieldOption {
  label: string;
  value: string;
}
export interface ValidationRules {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  acceptedFileTypes?: string[];
  maxFileSize?: number; // in MB
}
export interface FormField {
  id: string;
  fieldName: string; // internal name, e.g., 'firstName'
  fieldLabel: string; // display label, e.g., 'First Name'
  fieldType: FieldType;
  placeholder?: string;
  helpText?: string;
  isRequired: boolean;
  options?: FormFieldOption[]; // for select, radio, checkbox
  validationRules?: ValidationRules;
  displayOrder: number;
  isActive: boolean;
}
export interface FormFieldData extends Omit<FormField, 'id' | 'displayOrder'> {
  id?: string;
}