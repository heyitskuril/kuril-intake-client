import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/components/UI/Button';
import { Home } from 'lucide-react';
export function NotFoundPage() {
  return <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Page not found
      </h2>
      <p className="mt-4 text-lg text-gray-500">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button leftIcon={<Home className="h-4 w-4" />}>
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>;
}