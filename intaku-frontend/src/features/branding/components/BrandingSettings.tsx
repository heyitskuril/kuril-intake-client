import React, { useState } from 'react';
import { useBranding } from '../hooks/useBranding';
import { VisualSettings } from './VisualSettings';
import { ContentSettings } from './ContentSettings';
import { SEOSettings } from './SEOSettings';
import { BrandingPreview } from './BrandingPreview';
import { Tabs } from '../../../shared/components/UI/Tabs';
import { Button } from '../../../shared/components/UI/Button';
import { Loader2, Save } from 'lucide-react';
export const BrandingSettings: React.FC = () => {
  const {
    settings,
    isLoading,
    isSaving,
    updateSettings,
    uploadImage
  } = useBranding();
  const [activeTab, setActiveTab] = useState('visual');
  if (isLoading || !settings) {
    return <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>;
  }
  const tabs = [{
    id: 'visual',
    label: 'Visual Design'
  }, {
    id: 'content',
    label: 'Content'
  }, {
    id: 'seo',
    label: 'SEO & Social'
  }];
  return <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-12rem)]">
      {/* Left: Settings Panel */}
      <div className="flex-grow lg:w-1/2 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="w-full" />
        </div>

        <div className="flex-grow overflow-y-auto p-6">
          {activeTab === 'visual' && <VisualSettings settings={settings.visual} onChange={visual => updateSettings({
          visual
        })} onUpload={uploadImage} />}
          {activeTab === 'content' && <ContentSettings settings={settings.content} onChange={content => updateSettings({
          content
        })} />}
          {activeTab === 'seo' && <SEOSettings settings={settings.seo} onChange={seo => updateSettings({
          seo
        })} onUpload={uploadImage} />}
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
          <Button isLoading={isSaving} leftIcon={<Save className="w-4 h-4" />}>
            Save Changes
          </Button>
        </div>
      </div>

      {/* Right: Live Preview */}
      <div className="hidden lg:block lg:w-1/2 h-full">
        <div className="h-full flex flex-col">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Live Preview
          </h3>
          <BrandingPreview settings={settings} />
        </div>
      </div>
    </div>;
};