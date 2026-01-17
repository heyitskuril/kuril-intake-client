// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { Loading } from '../../../shared/components/UI/Loading';
// export function ProtectedRoute({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const {
//     isAuthenticated,
//     isLoading
//   } = useAuth();
//   const location = useLocation();
//   if (isLoading) {
//     return <Loading fullScreen text="Authenticating..." />;
//   }
//   if (!isAuthenticated) {
//     // Redirect to login page but save the attempted location
//     return <Navigate to="/login" state={{
//       from: location
//     }} replace />;
//   }
//   return <>{children}</>;
// }

import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Loading } from '../../../shared/components/UI/Loading';

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Loading fullScreen text="Authenticating..." />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
