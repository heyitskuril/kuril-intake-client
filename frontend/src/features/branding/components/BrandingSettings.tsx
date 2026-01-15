import React, { useState, useEffect } from 'react';
import { Card } from '@shared/components/UI/Card';
import { Input } from '@shared/components/UI/Input';
import { Textarea } from '@shared/components/UI/Textarea';
import { Button } from '@shared/components/UI/Button';
import { Tabs } from '@shared/components/UI/Tabs';
import { ColorPicker } from './ColorPicker';
import { ImageUploader } from './ImageUploader';
import { Alert } from '@shared/components/UI/Alert';
import { useBranding } from '../hooks/useBranding';
import { brandingService } from '../services/brandingService';

export const BrandingSettings: React.FC = () => {
  const { settings, loading, refetch } = useBranding();
  const [formData, setFormData] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setFormData(settings);
  }, [settings]);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = async () => {
    setSaving(true);
    setSuccess(false);

    try {
      const updates = Object.entries(formData).map(([key, value]) => ({
        key,
        value: value as string,
        category: getCategoryForKey(key),
      }));

      await brandingService.bulkUpdate(updates);
      setSuccess(true);
      refetch();

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to save branding settings:', error);
    } finally {
      setSaving(false);
    }
  };

  const getCategoryForKey = (key: string): 'visual' | 'content' | 'seo' => {
const visualKeys = ['logo_url', 'favicon_url', 'background_image', 'primary_color', 'secondary_color', 'text_color'];
const seoKeys = ['meta_description', 'meta_keywords', 'og_image'];
if (visualKeys.includes(key)) return 'visual';
if (seoKeys.includes(key)) return 'seo';
return 'content';
};
const tabs = [
{
id: 'visual',
label: 'Visual',
content: (
<div className="space-y-6">
<ImageUploader
label="Logo"
value={formData.logo_url}
onChange={(url) => handleChange('logo_url', url)}
helperText="Your brand logo (recommended: 200x50px)"
/>
      <ImageUploader
        label="Favicon"
        value={formData.favicon_url}
        onChange={(url) => handleChange('favicon_url', url)}
        helperText="Browser tab icon (recommended: 32x32px)"
      />

      <ImageUploader
        label="Background Image"
        value={formData.background_image}
        onChange={(url) => handleChange('background_image', url)}
        helperText="Public page background image"
      />

      <ColorPicker
        label="Primary Color"
        value={formData.primary_color || '#3B82F6'}
        onChange={(color) => handleChange('primary_color', color)}
        helperText="Main brand color for buttons and accents"
      />

      <ColorPicker
        label="Secondary Color"
        value={formData.secondary_color || '#8B5CF6'}
        onChange={(color) => handleChange('secondary_color', color)}
        helperText="Secondary brand color"
      />

      <ColorPicker
        label="Text Color"
        value={formData.text_color || '#1F2937'}
        onChange={(color) => handleChange('text_color', color)}
        helperText="Main text color"
      />
    </div>
  ),
},
{
  id: 'content',
  label: 'Content',
  content: (
    <div className="space-y-6">
      <Input
        label="Site Title"
        value={formData.site_title || ''}
        onChange={(e) => handleChange('site_title', e.target.value)}
        helperText="Main site title"
      />

      <Input
        label="Tagline"
        value={formData.tagline || ''}
        onChange={(e) => handleChange('tagline', e.target.value)}
        helperText="Short tagline or slogan"
      />

      <Textarea
        label="Welcome Message"
        value={formData.welcome_message || ''}
        onChange={(e) => handleChange('welcome_message', e.target.value)}
        rows={4}
        helperText="Message shown on the public intake page"
      />

      <Textarea
        label="Site Description"
        value={formData.site_description || ''}
        onChange={(e) => handleChange('site_description', e.target.value)}
        rows={3}
        helperText="Brief description of your service"
      />

      <Input
        label="Footer Text"
        value={formData.footer_text || ''}
        onChange={(e) => handleChange('footer_text', e.target.value)}
        helperText="Text shown in the footer"
      />
    </div>
  ),
},
{
  id: 'seo',
  label: 'SEO',
  content: (
    <div className="space-y-6">
      <Textarea
        label="Meta Description"
        value={formData.meta_description || ''}
        onChange={(e) => handleChange('meta_description', e.target.value)}
        rows={3}
        helperText="Description for search engines (150-160 characters)"
      />

      <Input
        label="Meta Keywords"
        value={formData.meta_keywords || ''}
        onChange={(e) => handleChange('meta_keywords', e.target.value)}
        helperText="Comma-separated keywords"
      />

      <ImageUploader
        label="Open Graph Image"
        value={formData.og_image}
        onChange={(url) => handleChange('og_image', url)}
        helperText="Image shown when sharing on social media (1200x630px)"
      />
    </div>
  ),
},
];
if (loading) {
return <div>Loading...</div>;
}
return (
<div className="max-w-4xl mx-auto">
<div className="flex justify-between items-center mb-6">
<h1 className="text-2xl font-bold text-gray-900">Branding Settings</h1>
<Button onClick={handleSave} isLoading={saving}>
Save Changes
</Button>
</div>
  {success && (
    <Alert
      type="success"
      message="Branding settings saved successfully!"
      className="mb-6"
    />
  )}

  <Card>
    <Tabs tabs={tabs} />
  </Card>
</div>
);
};