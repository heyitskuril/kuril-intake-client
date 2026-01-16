import { useState } from 'react';
import { IntakeFormData, IntakeFormErrors, IntakeStatus } from '../types/public.types';
import { publicIntakeService } from '../services/publicIntakeService';
import { validators } from '../../../shared/utils/validators';
import { useToast } from '../../../shared/hooks/useToast';
const INITIAL_DATA: IntakeFormData = {
  // Client Type
  clientType: '',
  // Section 1
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  industry: '',
  companySize: '',
  role: '',
  // Section 2
  serviceId: '',
  // Section 3
  projectTitle: '',
  currentSituation: '',
  projectGoals: '',
  targetAudience: '',
  // Section 4
  keyFeatures: [],
  otherFeatures: '',
  technicalRequirements: '',
  integrationNeeds: '',
  existingSystems: '',
  // Section 5 - Design Preferences
  designStyle: '',
  brandColors: '',
  referenceWebsites: '',
  designRequirements: '',
  hasBrandGuidelines: '',
  // Section 6
  budget: '',
  timeline: '',
  preferredStartDate: '',
  decisionTimeline: '',
  // Section 7
  description: '',
  // Section 8
  teamSize: '',
  stakeholders: '',
  previousDeveloperExperience: '',
  biggestConcern: '',
  whyNow: '',
  source: '',
  additionalNotes: '',
  file: null
};
export function usePublicIntake() {
  const [formData, setFormData] = useState<IntakeFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<IntakeFormErrors>({});
  const [status, setStatus] = useState<IntakeStatus>('idle');
  const {
    showToast
  } = useToast();
  const isBusinessClient = formData.clientType === 'business';
  const validateField = (name: keyof IntakeFormData, value: any): string | undefined => {
    switch (name) {
      // Client Type
      case 'clientType':
        return validators.required(value) === true ? undefined : 'Please select a client type';

      // Section 1
      case 'name':
        return validators.required(value) === true ? undefined : 'Name is required';
      case 'email':
        const emailRequired = validators.required(value);
        if (emailRequired !== true) return 'Email is required';
        return validators.email(value) === true ? undefined : 'Invalid email address';
      case 'phone':
        return validators.required(value) === true ? undefined : 'Phone number is required';
      case 'company':
        // Only required for business clients
        if (isBusinessClient) {
          return validators.required(value) === true ? undefined : 'Company name is required';
        }
        return undefined;

      // Section 2
      case 'serviceId':
        return validators.required(value) === true ? undefined : 'Please select a service';

      // Section 3
      case 'projectTitle':
        return validators.required(value) === true ? undefined : 'Project title is required';
      case 'currentSituation':
        return validators.required(value) === true ? undefined : 'Please describe your current situation';
      case 'projectGoals':
        return validators.required(value) === true ? undefined : 'Please describe your project goals';

      // Section 6
      case 'budget':
        return validators.required(value) === true ? undefined : 'Please select a budget range';
      case 'timeline':
        return validators.required(value) === true ? undefined : 'Please select a timeline';

      // Section 7
      case 'description':
        const descRequired = validators.required(value);
        if (descRequired !== true) return 'Project description is required';
        return value.length > 1000 ? 'Description must be under 1000 characters' : undefined;
      default:
        return undefined;
    }
  };
  const handleChange = (name: keyof IntakeFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation for touched fields
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };
  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => {
      const features = prev.keyFeatures.includes(feature) ? prev.keyFeatures.filter(f => f !== feature) : [...prev.keyFeatures, feature];
      return {
        ...prev,
        keyFeatures: features
      };
    });
  };
  const validateForm = (): boolean => {
    const newErrors: IntakeFormErrors = {};
    let isValid = true;

    // Base required fields for all clients
    const baseRequiredFields: (keyof IntakeFormData)[] = ['clientType', 'name', 'email', 'phone', 'serviceId', 'projectTitle', 'currentSituation', 'projectGoals', 'budget', 'timeline', 'description'];

    // Additional required fields for business clients
    const businessRequiredFields: (keyof IntakeFormData)[] = ['company'];
    const requiredFields = isBusinessClient ? [...baseRequiredFields, ...businessRequiredFields] : baseRequiredFields;
    requiredFields.forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    setErrors(newErrors);
    if (!isValid) {
      // Scroll to first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
    return isValid;
  };
  const submitForm = async () => {
    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }
    setStatus('submitting');
    try {
      await publicIntakeService.submitIntakeForm(formData);
      setStatus('success');
      showToast('Request submitted successfully!', 'success');
    } catch (error) {
      setStatus('error');
      showToast('Failed to submit request. Please try again.', 'error');
    }
  };
  const resetForm = () => {
    setFormData(INITIAL_DATA);
    setErrors({});
    setStatus('idle');
  };
  return {
    formData,
    errors,
    status,
    isBusinessClient,
    handleChange,
    handleFeatureToggle,
    submitForm,
    resetForm
  };
}