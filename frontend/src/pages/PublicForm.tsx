// Public Intake Form Page
// Form untuk client submit intake (NO AUTH)

import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useSubmitIntake } from '../hooks/useIntakes';

const PublicForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutate: submitIntake, isLoading } = useSubmitIntake();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    submitIntake(data, {
      onSuccess: () => {
        setIsSubmitted(true);
        reset();
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      },
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            Your inquiry has been submitted successfully. We'll get back to you soon!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn btn-primary w-full"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">K</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              className="input"
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="john@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className="input"
              placeholder="+628123456789"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Service Inquiry */}
          <div>
            <label htmlFor="serviceInquiry" className="block text-sm font-medium text-gray-700 mb-2">
              Service Inquiry <span className="text-red-500">*</span>
            </label>
            <select
              id="serviceInquiry"
              className="input"
              {...register('serviceInquiry', { required: 'Please select a service' })}
            >
              <option value="">Select a service...</option>
              <option value="Website Development">Website Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Consulting">Consulting</option>
              <option value="Other">Other</option>
            </select>
            {errors.serviceInquiry && (
              <p className="mt-1 text-sm text-red-600">{errors.serviceInquiry.message}</p>
            )}
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range (Optional)
            </label>
            <select id="budgetRange" className="input" {...register('budgetRange')}>
              <option value="">Select budget range...</option>
              <option value="<$5,000">Less than $5,000</option>
              <option value="$5,000-$10,000">$5,000 - $10,000</option>
              <option value="$10,000-$25,000">$10,000 - $25,000</option>
              <option value="$25,000-$50,000">$25,000 - $50,000</option>
              <option value=">$50,000">More than $50,000</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className="input resize-none"
              placeholder="Tell us about your project requirements..."
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          {/* Attachment URL */}
          <div>
            <label htmlFor="attachmentUrl" className="block text-sm font-medium text-gray-700 mb-2">
              Attachment URL (Optional)
            </label>
            <input
              id="attachmentUrl"
              type="url"
              className="input"
              placeholder="https://example.com/project-brief.pdf"
              {...register('attachmentUrl')}
            />
            <p className="mt-1 text-xs text-gray-500">
              Share a link to your project brief, design mockups, or any relevant documents
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-full flex items-center justify-center space-x-2 text-lg py-3"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Inquiry</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          By submitting this form, you agree to our{' '}
          <a href="#" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-primary-600 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
};

export default PublicForm;