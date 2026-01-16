import { IntakeFormData } from '../types/public.types';
import { apiClient } from '../../../shared/utils/apiClient';

// Mock service for now, will connect to backend later
export const publicIntakeService = {
  submitIntakeForm: async (data: IntakeFormData): Promise<{
    success: boolean;
    message: string;
  }> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate validation or processing
    if (data.description.includes('error')) {
      throw new Error('Something went wrong processing your request.');
    }

    // In a real app, we would use apiClient.post('/clients/intake', data)
    // For now, just return success
    console.log('Form submitted:', data);
    return {
      success: true,
      message: 'Intake form submitted successfully'
    };
  }
};