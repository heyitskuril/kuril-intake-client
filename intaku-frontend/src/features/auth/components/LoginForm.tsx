import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { LoginCredentials } from '../types/auth.types';
import { Button } from '../../../shared/components/UI/Button';
import { Input } from '../../../shared/components/UI/Input';
import { Alert } from '../../../shared/components/UI/Alert';
import { validators } from '../../../shared/utils/validators';
export function LoginForm() {
  const {
    login
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Get return url from location state or default to dashboard
  const from = (location.state as any)?.from?.pathname || '/dashboard';
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<LoginCredentials>();
  const onSubmit = async (data: LoginCredentials) => {
    setError(null);
    try {
      await login(data);
      navigate(from, {
        replace: true
      });
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
    }
  };
  return <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Sign in to your Intaku dashboard
        </p>
      </div>

      <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
        {error && <Alert type="error" className="mb-6" onDismiss={() => setError(null)}>
            {error}
          </Alert>}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email address" type="email" placeholder="admin@kuril.dev" autoComplete="email" error={errors.email?.message} {...register('email', {
          validate: validators.required
        })} />

          <div className="relative">
            <Input label="Password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" autoComplete="current-password" error={errors.password?.message} rightIcon={<button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>} {...register('password', {
            validate: validators.required
          })} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <Button type="submit" fullWidth isLoading={isSubmitting} leftIcon={<LogIn className="h-4 w-4" />}>
            Sign in
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Demo Credentials
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <div className="rounded-md bg-blue-50 p-3 text-sm text-blue-700">
              <p>
                <strong>Email:</strong> admin@kuril.dev
              </p>
              <p>
                <strong>Password:</strong> Admin123!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}