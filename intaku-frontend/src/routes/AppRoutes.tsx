import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ClientsPage } from '../pages/ClientsPage';
import { ClientDetailPage } from '../pages/ClientDetailPage';
import { ServicesPage } from '../pages/ServicesPage';
import { FormBuilderPage } from '../pages/FormBuilderPage';
import { BrandingPage } from '../pages/BrandingPage';
import { UsersPage } from '../pages/UsersPage';
import { AnnouncementsPage } from '../pages/AnnouncementsPage';
import { SettingsPage } from '../pages/SettingsPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PublicIntakePage } from '../pages/PublicIntakePage';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
export const AppRoutes: React.FC = () => {
  return <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/intake" replace />} />
      <Route path="/intake" element={<PublicIntakePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/:id" element={<ClientDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/form-builder" element={<FormBuilderPage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>


      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>;
};