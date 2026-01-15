import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '@features/auth/components/ProtectedRoute';

// 🌍 PUBLIC PAGES
import { PublicIntakePage } from '@features/public/pages/PublicIntakePage';
import { LoginPage } from '@pages/LoginPage';

// 🔐 SHARED PROTECTED
import { DashboardPage } from '@pages/DashboardPage';
import { ClientsPage } from '@pages/ClientsPage';
import { ClientDetailPage } from '@pages/ClientDetailPage';

// 🔐 ADMIN ONLY
import { ServicesPage } from '@pages/ServicesPage';
import { FormBuilderPage } from '@pages/FormBuilderPage';
import { BrandingPage } from '@pages/BrandingPage';
import { AnnouncementsPage } from '@pages/AnnouncementsPage';
import { UsersPage } from '@pages/UsersPage';
import { SettingsPage } from '@pages/SettingsPage';

// ❌ FALLBACK
import { NotFoundPage } from '@pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* 🌍 PUBLIC */}
      <Route path="/intake" element={<PublicIntakePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* 🔐 PROTECTED (ANY AUTH USER) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/clients"
        element={
          <ProtectedRoute>
            <ClientsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/clients/:id"
        element={
          <ProtectedRoute>
            <ClientDetailPage />
          </ProtectedRoute>
        }
      />

      {/* 🔐 ADMIN ONLY */}
      <Route
        path="/services"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <ServicesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/form-builder"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <FormBuilderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/branding"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <BrandingPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/announcements"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AnnouncementsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <UsersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

      {/* 🔁 DEFAULT */}
      <Route path="/" element={<Navigate to="/intake" replace />} />

      {/* ❌ 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
