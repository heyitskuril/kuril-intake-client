import React, { useRef } from 'react';
import { AnnouncementBanner } from '../features/public/components/AnnouncementBanner';
import { LandingHero } from '../features/public/components/LandingHero';
import { PublicIntakeForm } from '../features/public/components/PublicIntakeForm';
import { Header } from '../shared/components/Layout/Header';
export function PublicIntakePage() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Public Header - simplified version of main header could go here,
            but for now we'll just use the main one or a custom one.
            Using a simplified nav for public view would be ideal,
            but reusing Header is fine if we hide auth elements or show login.
            For this task, I'll just put the Banner and Hero.
        */}

      <AnnouncementBanner id="q1-booking-full" type="info" message="Booking full for Q1 2024 - Currently accepting Q2 projects" />

      <main className="flex-grow">
        <LandingHero onStart={scrollToForm} />

        <div ref={formRef} id="intake-form" className="scroll-mt-10">
          <PublicIntakeForm />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Intaku. All rights reserved.</p>
        </div>
      </footer>
    </div>;
}