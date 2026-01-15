import { useState, useEffect, useCallback } from 'react';
import { brandingService } from '../services/brandingService';
import { BrandingSetting, BrandingSettings } from '../types/branding.types';

export const useBranding = (publicOnly: boolean = false) => {
  const [settings, setSettings] = useState<BrandingSettings>({});
  const [rawSettings, setRawSettings] = useState<BrandingSetting[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = publicOnly
        ? await brandingService.getPublic()
        : await brandingService.getAll();
      
      const settingsArray = response.data.data?.settings || [];
      setRawSettings(settingsArray);

      // Convert array to object for easier access
      const settingsObject: any = {};
      settingsArray.forEach((setting) => {
        settingsObject[setting.key] = setting.value;
      });
      setSettings(settingsObject);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch branding settings');
    } finally {
      setLoading(false);
    }
  }, [publicOnly]);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return {
    settings,
    rawSettings,
    loading,
    error,
    refetch: fetchSettings,
  };
};