import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, Layers } from 'lucide-react';
import { Button } from '../../../shared/components/UI/Button';
interface LandingHeroProps {
  onStart: () => void;
}
export function LandingHero({
  onStart
}: LandingHeroProps) {
  return <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-50 opacity-50" />
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-40" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-40 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Streamline your client intake process
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
            Professional Intake <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Made Simple
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            Transform chaotic email threads into structured project workflows.
            Capture requirements, manage expectations, and start projects on the
            right foot.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button size="lg" onClick={onStart} className="px-8 py-4 text-lg shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1">
              Start Your Request
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50">
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>Structured Data</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>Instant Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>Secure Uploads</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center text-slate-400 text-sm">
            <span className="mb-2">Scroll to begin</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-blue-500" />
          </div>
        </motion.div>
      </div>
    </div>;
}