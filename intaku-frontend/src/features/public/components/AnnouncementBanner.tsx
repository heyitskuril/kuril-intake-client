import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle, XCircle, X } from 'lucide-react';
import { useLocalStorage } from '../../../shared/hooks/useLocalStorage';
type BannerType = 'info' | 'warning' | 'success' | 'error';
interface AnnouncementBannerProps {
  type?: BannerType;
  message: string;
  id: string; // Unique ID to track dismissal
}
export function AnnouncementBanner({
  type = 'info',
  message,
  id
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [dismissedIds, setDismissedIds] = useLocalStorage<string[]>('dismissed_announcements', []);
  useEffect(() => {
    if (dismissedIds.includes(id)) {
      setIsVisible(false);
    }
  }, [id, dismissedIds]);
  const handleDismiss = () => {
    setIsVisible(false);
    setDismissedIds([...dismissedIds, id]);
  };
  if (!isVisible) return null;
  const styles = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200'
  };
  const icons = {
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />
  };
  return <AnimatePresence>
      <motion.div initial={{
      height: 0,
      opacity: 0
    }} animate={{
      height: 'auto',
      opacity: 1
    }} exit={{
      height: 0,
      opacity: 0
    }} transition={{
      duration: 0.3
    }} className={`border-b ${styles[type]} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center flex-1 min-w-0">
              <span className="flex-shrink-0 mr-3">{icons[type]}</span>
              <p className="text-sm font-medium truncate">{message}</p>
            </div>
            <button onClick={handleDismiss} className="flex-shrink-0 p-1 rounded-full hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-500" aria-label="Dismiss announcement">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>;
}