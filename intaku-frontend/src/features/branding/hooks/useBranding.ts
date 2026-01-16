import { useState, useEffect, useCallback } from 'react';
import { BrandingSettings } from '../types/branding.types';
import { brandingService } from '../services/brandingService';
import { useToast } from '../../../shared/hooks/useToast';
export const useBranding = () => {
  const [settings, setSettings] = useState<BrandingSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const {
    showToast
  } = useToast();
  const fetchSettings = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await brandingService.getSettings();
      setSettings(data);
    } catch (err) {
      showToast('Failed to load branding settings', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);
  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);
  const updateSettings = async (newSettings: Partial<BrandingSettings>) => {
    if (!settings) return;

    // Optimistic update
    const previousSettings = {
      ...settings
    };
    setSettings({
      ...settings,
      ...newSettings
    });
    try {
      setIsSaving(true);
      await brandingService.updateSettings(newSettings);
      showToast('Settings saved successfully', 'success');
    } catch (err) {
      setSettings(previousSettings);
      showToast('Failed to save settings', 'error');
    } finally {
      setIsSaving(false);
    }
  };
  const uploadImage = async (file: File) => {
    try {
      return await brandingService.uploadImage(file);
    } catch (err) {
      showToast('Failed to upload image', 'error');
      throw err;
    }
  };
  return {
    settings,
    isLoading,
    isSaving,
    updateSettings,
    uploadImage
  };
};