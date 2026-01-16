import { FormField, FormFieldData } from '../types/formBuilder.types';

// Mock data
let MOCK_FIELDS: FormField[] = [{
  id: '1',
  fieldName: 'name',
  fieldLabel: 'Full Name',
  fieldType: 'text',
  placeholder: 'John Smith',
  helpText: 'Please enter your full legal name',
  isRequired: true,
  validationRules: {
    minLength: 2,
    maxLength: 100
  },
  displayOrder: 1,
  isActive: true
}, {
  id: '2',
  fieldName: 'email',
  fieldLabel: 'Email Address',
  fieldType: 'email',
  placeholder: 'john@example.com',
  isRequired: true,
  displayOrder: 2,
  isActive: true
}, {
  id: '3',
  fieldName: 'projectType',
  fieldLabel: 'Project Type',
  fieldType: 'select',
  options: [{
    label: 'Web Development',
    value: 'web'
  }, {
    label: 'Mobile App',
    value: 'mobile'
  }, {
    label: 'Design',
    value: 'design'
  }],
  isRequired: true,
  displayOrder: 3,
  isActive: true
}, {
  id: '4',
  fieldName: 'description',
  fieldLabel: 'Project Description',
  fieldType: 'textarea',
  placeholder: 'Tell us about your project...',
  isRequired: true,
  validationRules: {
    minLength: 20
  },
  displayOrder: 4,
  isActive: true
}];
export const formBuilderService = {
  getFields: async (): Promise<FormField[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return [...MOCK_FIELDS].sort((a, b) => a.displayOrder - b.displayOrder);
  },
  saveField: async (field: FormFieldData): Promise<FormField> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (field.id) {
      // Update
      const index = MOCK_FIELDS.findIndex(f => f.id === field.id);
      if (index === -1) throw new Error('Field not found');
      const updated = {
        ...MOCK_FIELDS[index],
        ...field
      };
      MOCK_FIELDS[index] = updated;
      return updated;
    } else {
      // Create
      const newField: FormField = {
        ...field,
        id: Math.random().toString(36).substr(2, 9),
        displayOrder: MOCK_FIELDS.length + 1
      };
      MOCK_FIELDS.push(newField);
      return newField;
    }
  },
  deleteField: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    MOCK_FIELDS = MOCK_FIELDS.filter(f => f.id !== id);
  },
  reorderFields: async (orderedIds: string[]): Promise<FormField[]> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const reordered = orderedIds.map((id, index) => {
      const field = MOCK_FIELDS.find(f => f.id === id);
      if (field) {
        field.displayOrder = index + 1;
        return field;
      }
      return null;
    }).filter(Boolean) as FormField[];
    MOCK_FIELDS.sort((a, b) => a.displayOrder - b.displayOrder);
    return reordered;
  }
};