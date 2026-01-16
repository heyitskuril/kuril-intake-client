import { useState, useCallback, useEffect } from 'react';

// Simple event bus for toasts to avoid complex context setup for this specific requirement
// In a real app, I'd use a library like sonner or react-hot-toast

type ToastType = 'success' | 'error' | 'info' | 'warning';
export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

// Global state for toasts
let listeners: ((toasts: Toast[]) => void)[] = [];
let toasts: Toast[] = [];
const notifyListeners = () => {
  listeners.forEach(listener => listener([...toasts]));
};
export const toast = {
  show: (message: string, type: ToastType = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = {
      id,
      message,
      type,
      duration
    };
    toasts = [...toasts, newToast];
    notifyListeners();
    if (duration > 0) {
      setTimeout(() => {
        toast.dismiss(id);
      }, duration);
    }
  },
  success: (message: string, duration?: number) => toast.show(message, 'success', duration),
  error: (message: string, duration?: number) => toast.show(message, 'error', duration),
  info: (message: string, duration?: number) => toast.show(message, 'info', duration),
  warning: (message: string, duration?: number) => toast.show(message, 'warning', duration),
  dismiss: (id: string) => {
    toasts = toasts.filter(t => t.id !== id);
    notifyListeners();
  }
};
export function useToast() {
  const [activeToasts, setActiveToasts] = useState<Toast[]>(toasts);
  useEffect(() => {
    listeners.push(setActiveToasts);
    return () => {
      listeners = listeners.filter(l => l !== setActiveToasts);
    };
  }, []);
  return {
    toasts: activeToasts,
    toast
  };
}