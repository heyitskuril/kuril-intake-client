import React from 'react';
import { LoginForm } from '../features/auth/components/LoginForm';
import { APP_NAME } from '../shared/utils/constants';
import { Layers } from 'lucide-react';
export function LoginPage() {
  return <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-100 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute top-48 -left-24 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <Layers className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Intaku
            </span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600 max-w-xs">
            Sign in to manage your client intake and project workflows
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-xl sm:px-10 border border-slate-100">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Intaku. All rights reserved.
        </p>
      </div>
    </div>;
}