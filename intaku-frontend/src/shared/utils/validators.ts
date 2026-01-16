export const validators = {
  required: (value: unknown) => {
    if (typeof value === 'string') return !!value.trim() || 'This field is required';
    return !!value || 'This field is required';
  },
  email: (value: string) => {
    if (!value) return true; // Let required handle empty
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || 'Please enter a valid email address';
  },
  minLength: (min: number) => (value: string) => {
    if (!value) return true;
    return value.length >= min || `Must be at least ${min} characters`;
  },
  maxLength: (max: number) => (value: string) => {
    if (!value) return true;
    return value.length <= max || `Must be no more than ${max} characters`;
  },
  password: (value: string) => {
    if (!value) return true;
    // At least 8 chars, 1 uppercase, 1 number
    const hasLength = value.length >= 8;
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    if (!hasLength) return 'Password must be at least 8 characters';
    if (!hasUpper) return 'Password must contain at least one uppercase letter';
    if (!hasNumber) return 'Password must contain at least one number';
    return true;
  }
};