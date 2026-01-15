import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@shared/components/UI/Input';
import { Textarea } from '@shared/components/UI/Textarea';
import { Select } from '@shared/components/UI/Select';
import { Button } from '@shared/components/UI/Button';
import { Card } from '@shared/components/UI/Card';
import { Alert } from '@shared/components/UI/Alert';
import { LandingHero } from './LandingHero';
import { SuccessMessage } from './SuccessMessage';
import { AnnouncementBanner } from '@features/announcements/components/AnnouncementBanner';
import { useServices } from '@features/services/hooks/useService';
import { useFormBuilder } from '@features/formBuilder/hooks/useFormBuilder';
import { useBranding } from '@features/branding/hooks/useBranding';
import { useAnnouncements } from '@features/announcements/hooks/useAnnouncements';
import { publicIntakeService } from '@features/public/services/publicIntakeService';
import { emailSchema, nameSchema } from '@shared/utils/validators';
import { FieldPreview } from '@features/formBuilder/components/FieldPreview';

const baseSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  business_type: z.string().optional(),
  service_type: z.string().optional(),
  budget: z.number().optional(),
  notes: z.string().optional(),
});

export const PublicIntakeForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { services } = useServices(true);
  const { fields } = useFormBuilder(true);
  const { settings } = useBranding(true);
  const { announcements } = useAnnouncements(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(baseSchema),
  });

  const onSubmit = async (data: any) => {
    setError(null);

    try {
      // Collect dynamic form field data
      const formData: any = {};
      fields.forEach((field) => {
        const value = (data as any)[field.field_name];
        if (value !== undefined && value !== '') {
          formData[field.field_name] = value;
        }
      });

      const payload = {
        ...data,
        form_data: formData,
      };

      await publicIntakeService.submitIntake(payload);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to submit form. Please try again.');
    }
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  const serviceOptions = services.map((service) => ({
    value: service.slug,
    label: service.name,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingHero
        title={settings.site_title}
        tagline={settings.tagline}
        welcomeMessage={settings.welcome_message}
        logoUrl={settings.logo_url}
        backgroundColor={settings.primary_color}
        textColor={settings.text_color}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {announcements.length > 0 && (
          <div className="mb-6">
            <AnnouncementBanner announcements={announcements} />
          </div>
        )}

        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Project Request</h2>

          {error && (
            <Alert type="error" message={error} className="mb-6" />
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                {...register('name')}
                error={errors.name?.message as string}
                required
              />

              <Input
                label="Email Address"
                type="email"
                {...register('email')}
                error={errors.email?.message as string}
                required
              />
            </div>

            <Input
              label="Business Type"
              {...register('business_type')}
              error={errors.business_type?.message as string}
              placeholder="e.g., E-commerce, SaaS, Agency"
            />

            {serviceOptions.length > 0 && (
              <Select
                label="Service Interested In"
                options={serviceOptions}
                {...register('service_type')}
                error={errors.service_type?.message as string}
              />
            )}

            <Input
              label="Budget (USD)"
              type="number"
              {...register('budget', { valueAsNumber: true })}
              error={errors.budget?.message as string}
              placeholder="5000"
            />

            <Textarea
              label="Project Details"
              {...register('notes')}
              error={errors.notes?.message as string}
              rows={6}
              placeholder="Tell us about your project requirements, timeline, and any specific needs..."
            />

            {/* Dynamic Form Fields */}
            {fields.length > 0 && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
                <div className="space-y-4">
                  {fields.map((field) => (
                    <FieldPreview key={field.id} field={field} />
                  ))}
                </div>
              </div>
            )}

            <Button type="submit" isLoading={isSubmitting} fullWidth>
              Submit Request
            </Button>
          </form>
        </Card>

        {settings.footer_text && (
          <p className="text-center text-gray-600 mt-8">{settings.footer_text}</p>
        )}
      </div>
    </div>
  );
};