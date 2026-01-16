import React from 'react';
import { BrandingSettings } from '../types/branding.types';
import { Button } from '../../../shared/components/UI/Button';
interface BrandingPreviewProps {
  settings: BrandingSettings;
}
export const BrandingPreview: React.FC<BrandingPreviewProps> = ({
  settings
}) => {
  const {
    visual,
    content
  } = settings;
  return <div className="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden shadow-sm h-full flex flex-col">
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-grow text-center text-xs text-gray-500 font-mono bg-gray-50 rounded py-1">
          yourdomain.com/intake
        </div>
      </div>

      <div className="flex-grow overflow-y-auto relative" style={{
      backgroundColor: visual.backgroundColor
    }}>
        {/* Background Image Overlay */}
        {visual.backgroundImageUrl && <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url(${visual.backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />}

        <div className="relative z-10 p-8 max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            {visual.logoUrl ? <img src={visual.logoUrl} alt="Logo" className="h-12 mx-auto mb-4" /> : <h1 className="text-2xl font-bold mb-2" style={{
            color: visual.primaryColor
          }}>
                {content.siteTitle}
              </h1>}
            <p className="text-lg font-medium mb-4" style={{
            color: visual.textColor
          }}>
              {content.tagline}
            </p>
            <p className="text-sm text-gray-500">{content.heroDescription}</p>
          </div>

          {/* Mock Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {content.welcomeMessage}
            </h2>

            <div className="space-y-1">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-10 w-full bg-gray-50 border border-gray-200 rounded"></div>
            </div>

            <div className="space-y-1">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-10 w-full bg-gray-50 border border-gray-200 rounded"></div>
            </div>

            <div className="pt-4">
              <button className="w-full py-2 px-4 rounded-md font-medium text-white shadow-sm" style={{
              backgroundColor: visual.primaryColor
            }}>
                Submit Request
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-xs text-gray-400">
            {content.footerText}
          </div>
        </div>
      </div>
    </div>;
};