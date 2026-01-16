import React, { useState } from 'react';
import { MainLayout } from '../shared/components/Layout/MainLayout';
import { Tabs } from '../shared/components/UI/Tabs';
import { Input } from '../shared/components/UI/Input';
import { Button } from '../shared/components/UI/Button';
import { useToast } from '../shared/hooks/useToast';
export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const {
    showToast
  } = useToast();
  const handleSave = () => {
    showToast('Settings saved successfully', 'success');
  };
  const tabs = [{
    id: 'general',
    label: 'General'
  }, {
    id: 'notifications',
    label: 'Notifications'
  }, {
    id: 'security',
    label: 'Security'
  }];
  return <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500">Manage application configuration</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
          </div>

          <div className="p-6 max-w-2xl">
            {activeTab === 'general' && <div className="space-y-4">
                <Input label="Site Name" defaultValue="Intaku" />
                <Input label="Admin Email" defaultValue="admin@kuril.dev" type="email" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Timezone
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    <option>UTC</option>
                    <option>America/New_York</option>
                    <option>Europe/London</option>
                  </select>
                </div>
              </div>}

            {activeTab === 'notifications' && <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Email Notifications
                    </h4>
                    <p className="text-xs text-gray-500">
                      Receive emails for new submissions
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded" />
                </div>
                <Input label="Notification Email" defaultValue="admin@kuril.dev" />
                <div className="p-4 bg-blue-50 text-blue-700 rounded-md text-sm">
                  Email integration is coming soon. Currently notifications are
                  simulated.
                </div>
              </div>}

            {activeTab === 'security' && <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Session Timeout
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    <option>15 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option selected>1 day</option>
                  </select>
                </div>
                <div className="p-4 bg-yellow-50 text-yellow-700 rounded-md text-sm">
                  Two-factor authentication is planned for a future update.
                </div>
              </div>}

            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>;
};