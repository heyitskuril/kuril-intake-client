import React from 'react';
import { VisualSettings as VisualSettingsType } from '../types/branding.types';
import { ColorPicker } from './ColorPicker';
import { ImageUploader } from './ImageUploader';
interface VisualSettingsProps {
  settings: VisualSettingsType;
  onChange: (settings: VisualSettingsType) => void;
  onUpload: (file: File) => Promise<string>;
}
export const VisualSettings: React.FC<VisualSettingsProps> = ({
  settings,
  onChange,
  onUpload
}) => {
  const handleChange = (key: keyof VisualSettingsType, value: any) => {
    onChange({
      ...settings,
      [key]: value
    });
  };
  return <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Logo & Images
        </h3>
        <div className="space-y-6">
          <ImageUploader label="Logo" value={settings.logoUrl} onChange={url => handleChange('logoUrl', url)} onUpload={onUpload} helperText="Recommended size: 200x50px. PNG or SVG." />

          <ImageUploader label="Favicon" value={settings.faviconUrl} onChange={url => handleChange('faviconUrl', url)} onUpload={onUpload} helperText="Recommended size: 32x32px. ICO or PNG." />

          <ImageUploader label="Background Image" value={settings.backgroundImageUrl} onChange={url => handleChange('backgroundImageUrl', url)} onUpload={onUpload} helperText="Optional background image for the intake page." />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Theme Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorPicker label="Primary Color" value={settings.primaryColor} onChange={val => handleChange('primaryColor', val)} />
          <ColorPicker label="Secondary Color" value={settings.secondaryColor} onChange={val => handleChange('secondaryColor', val)} />
          <ColorPicker label="Text Color" value={settings.textColor} onChange={val => handleChange('textColor', val)} />
          <ColorPicker label="Background Color" value={settings.backgroundColor} onChange={val => handleChange('backgroundColor', val)} />
        </div>
      </div>
    </div>;
};