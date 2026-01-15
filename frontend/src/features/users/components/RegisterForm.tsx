import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@shared/components/UI/Input';
import { Select } from '@shared/components/UI/Select';
import { Button } from '@shared/components/UI/Button';
import { emailSchema, passwordSchema, nameSchema } from '@shared/utils/validators';
import { USER_ROLE_LABELS } from '@shared/utils/constants';

const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  role: z.enum(['admin', 'assistant', 'viewer']),
});

type RegisterFormData = z.infer<typeof registerSchema>;

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => Promise<void>;
  defaultValues?: Partial<RegisterFormData>;
  submitLabel?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  defaultValues,
  submitLabel = 'Create User',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      ...defaultValues,
      role: defaultValues?.role || 'viewer',
    },
  });

  const roleOptions = Object.entries(USER_ROLE_LABELS).map(([value, label]) => ({
    value,
    label,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Full Name"
        {...register('name')}
        error={errors.name?.message}
        required
      />

      <Input
        label="Email Address"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        required
      />

      <Input
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
        helperText="Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character"
        required
      />

      <Select
        label="Role"
        options={roleOptions}
        {...register('role')}
        error={errors.role?.message}
        required
      />

      <Button type="submit" isLoading={isSubmitting} fullWidth>
        {submitLabel}
      </Button>
    </form>
  );
};