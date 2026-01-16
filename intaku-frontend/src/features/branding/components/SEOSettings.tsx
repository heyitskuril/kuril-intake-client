import React from 'react';
import { SEOSettings as SEOSettingsType } from '../types/branding.types';
import { Input } from '../../../shared/components/UI/Input';
import { ImageUploader } from './ImageUploader';
interface SEOSettingsProps {
  settings: SEOSettingsType;
  onChange: (settings: SEOSettingsType) => void;
  onUpload: (file: File) => Promise<string>;
}
export const SEOSettings: React.FC<SEOSettingsProps> = ({
  settings,
  onChange,
  onUpload
}) => {
  const handleChange = (key: keyof SEOSettingsType, value: any) => {
    onChange({
      ...settings,
      [key]: value
    });
  };
  return <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Meta Tags</h3>
        <div className="space-y-4">
          <Input label="Meta Title" value={settings.metaTitle} onChange={e => handleChange('metaTitle', e.target.value)} maxLength={60} helperText={`${settings.metaTitle.length}/60 characters`} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meta Description
            </label>
            <textarea value={settings.metaDescription} onChange={e => handleChange('metaDescription', e.target.value)} rows={3} maxLength={160} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            <p className="mt-1 text-xs text-gray-500">
              {settings.metaDescription.length}/160 characters
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Social Sharing (Open Graph)
        </h3>
        <div className="space-y-4">
          <Input label="OG Title" value={settings.ogTitle} onChange={e => handleChange('ogTitle', e.target.value)} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              OG Description
            </label>
            <textarea value={settings.ogDescription} onChange={e => handleChange('ogDescription', e.target.value)} rows={3} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
          </div>

          <ImageUploader label="OG Image" value={settings.ogImageUrl} onChange={url => handleChange('ogImageUrl', url)} onUpload={onUpload} helperText="Image displayed when sharing on social media. Recommended: 1200x630px." />
        </div>
      </div>
    </div>;
};