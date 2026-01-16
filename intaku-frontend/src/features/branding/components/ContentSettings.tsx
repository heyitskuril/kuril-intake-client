import React from 'react';
import { ContentSettings as ContentSettingsType } from '../types/branding.types';
import { Input } from '../../../shared/components/UI/Input';
interface ContentSettingsProps {
  settings: ContentSettingsType;
  onChange: (settings: ContentSettingsType) => void;
}
export const ContentSettings: React.FC<ContentSettingsProps> = ({
  settings,
  onChange
}) => {
  const handleChange = (key: keyof ContentSettingsType, value: string) => {
    onChange({
      ...settings,
      [key]: value
    });
  };
  return <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          General Content
        </h3>
        <div className="space-y-4">
          <Input label="Site Title" value={settings.siteTitle} onChange={e => handleChange('siteTitle', e.target.value)} placeholder="Intaku" />

          <Input label="Tagline" value={settings.tagline} onChange={e => handleChange('tagline', e.target.value)} placeholder="Transform Your Client Intake Process" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Messages</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hero Description
            </label>
            <textarea value={settings.heroDescription} onChange={e => handleChange('heroDescription', e.target.value)} rows={3} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Welcome Message (Form Header)
            </label>
            <textarea value={settings.welcomeMessage} onChange={e => handleChange('welcomeMessage', e.target.value)} rows={2} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Success Message
            </label>
            <textarea value={settings.successMessage} onChange={e => handleChange('successMessage', e.target.value)} rows={3} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
          </div>

          <Input label="Footer Text" value={settings.footerText} onChange={e => handleChange('footerText', e.target.value)} />
        </div>
      </div>
    </div>;
};