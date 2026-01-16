import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useToast } from '../../hooks/useToast';
import { Alert } from '../UI/Alert';
import { AnimatePresence, motion } from 'framer-motion';
export function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    toasts,
    toast
  } = useToast();
  return <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => <motion.div key={t.id} initial={{
          opacity: 0,
          y: 20,
          scale: 0.9
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.9,
          transition: {
            duration: 0.2
          }
        }} className="pointer-events-auto">
              <Alert type={t.type} onDismiss={() => toast.dismiss(t.id)} className="shadow-lg min-w-[300px]">
                {t.message}
              </Alert>
            </motion.div>)}
        </AnimatePresence>
      </div>
    </div>;
}