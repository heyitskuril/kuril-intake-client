import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@features/auth/components/AuthProvider';
import { AppRoutes } from '@/routes/AppRoutes';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
