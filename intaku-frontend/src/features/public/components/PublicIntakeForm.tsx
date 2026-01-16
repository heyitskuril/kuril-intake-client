import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, AlertCircle, CheckCircle2, Building2, User, Briefcase, Calendar, FileText, Settings, Layers, Palette, UserCircle2 } from 'lucide-react';
import { usePublicIntake } from '../hooks/usePublicIntake';
import { ServiceShowcase } from './ServiceShowcase';
import { SuccessMessage } from './SuccessMessage';
import { Input } from '../../../shared/components/UI/Input';
import { Button } from '../../../shared/components/UI/Button';
import { Alert } from '../../../shared/components/UI/Alert';
import { BUDGET_RANGES, TIMELINE_OPTIONS, SOURCE_OPTIONS, INDUSTRY_OPTIONS, COMPANY_SIZE_OPTIONS, DECISION_TIMELINE_OPTIONS, KEY_FEATURES_OPTIONS, DESIGN_STYLE_OPTIONS } from '../types/public.types';
export function PublicIntakeForm() {
  const {
    formData,
    errors,
    status,
    isBusinessClient,
    handleChange,
    handleFeatureToggle,
    submitForm,
    resetForm
  } = usePublicIntake();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleChange('file', e.target.files[0]);
    }
  };
  if (status === 'success') {
    return <SuccessMessage email={formData.email} onReset={resetForm} />;
  }
  const SectionHeader = ({
    number,
    title,
    description,
    icon: Icon
  }: {
    number: number;
    title: string;
    description: string;
    icon: any;
  }) => <div className="mb-8 border-b border-slate-200 pb-6">
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg shadow-sm">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            <Icon className="w-5 h-5 text-slate-400" />
          </div>
          <p className="text-slate-500 mt-1">{description}</p>
        </div>
      </div>
    </div>;
  return <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Error Alert */}
      {status === 'error' && <div className="mb-8">
          <Alert type="error" message="There was a problem submitting your request. Please try again." dismissible />
        </div>}

      <form onSubmit={e => {
      e.preventDefault();
      submitForm();
    }} className="space-y-12">
        {/* Client Type Selection - FIRST STEP */}
        <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10" id="field-clientType">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700">
                <UserCircle2 className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Who is this project for?
            </h2>
            <p className="text-slate-500">
              This helps us tailor the form to your needs
            </p>
            {errors.clientType && <p className="text-red-500 text-sm mt-3 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.clientType}
              </p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={() => handleChange('clientType', 'personal')} className={`relative p-8 border-2 rounded-xl cursor-pointer transition-all ${formData.clientType === 'personal' ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100' : 'border-slate-200 hover:border-blue-300 hover:shadow-md'}`}>
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${formData.clientType === 'personal' ? 'bg-blue-600' : 'bg-slate-100'}`}>
                  <User className={`w-8 h-8 ${formData.clientType === 'personal' ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Personal Project
                </h3>
                <p className="text-sm text-slate-600">
                  I'm an individual or freelancer working on my own project
                </p>
              </div>
              {formData.clientType === 'personal' && <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>}
            </motion.div>

            <motion.div whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={() => handleChange('clientType', 'business')} className={`relative p-8 border-2 rounded-xl cursor-pointer transition-all ${formData.clientType === 'business' ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100' : 'border-slate-200 hover:border-blue-300 hover:shadow-md'}`}>
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${formData.clientType === 'business' ? 'bg-blue-600' : 'bg-slate-100'}`}>
                  <Building2 className={`w-8 h-8 ${formData.clientType === 'business' ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Business Project
                </h3>
                <p className="text-sm text-slate-600">
                  I represent a company, startup, or organization
                </p>
              </div>
              {formData.clientType === 'business' && <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>}
            </motion.div>
          </div>
        </section>

        {/* Show rest of form only after client type is selected */}
        <AnimatePresence>
          {formData.clientType && <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="space-y-12">
              {/* Section 1: Contact Information */}
              <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                <SectionHeader number={1} title="Contact Information" description={isBusinessClient ? 'Tell us about yourself and your company.' : 'Tell us about yourself.'} icon={User} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div id="field-name">
                    <Input label="Full Name" value={formData.name} onChange={e => handleChange('name', e.target.value)} error={errors.name} placeholder="John Doe" required />
                  </div>
                  <div id="field-email">
                    <Input label="Email Address" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} error={errors.email} placeholder="john@company.com" required />
                  </div>
                  <div id="field-phone">
                    <Input label="Phone Number" type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} error={errors.phone} placeholder="+1 (555) 000-0000" required />
                  </div>

                  {/* Show role only for business clients */}
                  {isBusinessClient && <div id="field-role">
                      <Input label="Your Role / Title" value={formData.role || ''} onChange={e => handleChange('role', e.target.value)} placeholder="e.g. CTO, Product Manager" />
                    </div>}

                  {/* Company Details - Only for business clients */}
                  {isBusinessClient && <div className="md:col-span-2 border-t border-slate-100 pt-6 mt-2">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        Company Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div id="field-company">
                          <Input label="Company Name" value={formData.company} onChange={e => handleChange('company', e.target.value)} error={errors.company} placeholder="Acme Inc." required />
                        </div>
                        <div id="field-website">
                          <Input label="Company Website" value={formData.website || ''} onChange={e => handleChange('website', e.target.value)} placeholder="https://example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Industry
                          </label>
                          <select value={formData.industry || ''} onChange={e => handleChange('industry', e.target.value)} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow">
                            <option value="">Select industry...</option>
                            {INDUSTRY_OPTIONS.map(opt => <option key={opt} value={opt}>
                                {opt}
                              </option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Company Size
                          </label>
                          <select value={formData.companySize || ''} onChange={e => handleChange('companySize', e.target.value)} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow">
                            <option value="">Select size...</option>
                            {COMPANY_SIZE_OPTIONS.map(opt => <option key={opt} value={opt}>
                                {opt}
                              </option>)}
                          </select>
                        </div>
                      </div>
                    </div>}
                </div>
              </section>

              {/* Section 2: Service Selection */}
              <section>
                <div className="mb-8 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg shadow-sm">
                      2
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Select a Service
                    </h2>
                  </div>
                  <p className="text-slate-500 ml-14">
                    Choose the service that best matches your needs.
                  </p>
                  {errors.serviceId && <p className="text-red-500 text-sm mt-2 flex items-center ml-14">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.serviceId}
                    </p>}
                </div>
                <div id="field-serviceId">
                  <ServiceShowcase selectedServiceId={formData.serviceId} onSelect={id => handleChange('serviceId', id)} />
                </div>
              </section>

              {/* Section 3: Project Overview */}
              <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                <SectionHeader number={3} title="Project Overview" description="Help us understand the core of your project." icon={Briefcase} />

                <div className="space-y-8">
                  <div id="field-projectTitle">
                    <Input label="Project Title / Name" value={formData.projectTitle} onChange={e => handleChange('projectTitle', e.target.value)} error={errors.projectTitle} placeholder="e.g. Customer Portal Redesign" required />
                  </div>

                  <div id="field-currentSituation">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Current Situation <span className="text-red-500">*</span>
                    </label>
                    <textarea value={formData.currentSituation} onChange={e => handleChange('currentSituation', e.target.value)} rows={3} className={`w-full px-3 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow ${errors.currentSituation ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'}`} placeholder="What problem are you trying to solve? Why now?" />
                    {errors.currentSituation && <p className="mt-1.5 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.currentSituation}
                      </p>}
                  </div>

                  <div id="field-projectGoals">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea value={formData.projectGoals} onChange={e => handleChange('projectGoals', e.target.value)} rows={3} className={`w-full px-3 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow ${errors.projectGoals ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'}`} placeholder="What does success look like? What are your key metrics?" />
                    {errors.projectGoals && <p className="mt-1.5 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.projectGoals}
                      </p>}
                  </div>

                  <div id="field-targetAudience">
                    <Input label="Target Audience" value={formData.targetAudience || ''} onChange={e => handleChange('targetAudience', e.target.value)} placeholder="Who will use this product? (e.g. Internal staff, B2B customers)" />
                  </div>
                </div>
              </section>

              {/* Section 4: Project Requirements */}
              <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                <SectionHeader number={4} title="Requirements" description="Define the scope and technical needs." icon={Settings} />

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Key Features Needed
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {KEY_FEATURES_OPTIONS.map(feature => <label key={feature} className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                          <input type="checkbox" checked={formData.keyFeatures.includes(feature)} onChange={() => handleFeatureToggle(feature)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <span className="ml-3 text-sm text-slate-700">
                            {feature}
                          </span>
                        </label>)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Technical Requirements
                      </label>
                      <textarea value={formData.technicalRequirements || ''} onChange={e => handleChange('technicalRequirements', e.target.value)} rows={3} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Specific technologies, platforms, or constraints?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Integration Needs
                      </label>
                      <textarea value={formData.integrationNeeds || ''} onChange={e => handleChange('integrationNeeds', e.target.value)} rows={3} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Systems to integrate with? (e.g. Salesforce, Stripe)" />
                    </div>
                  </div>

                  <div>
                    <Input label="Existing Systems / Tech Stack" value={formData.existingSystems || ''} onChange={e => handleChange('existingSystems', e.target.value)} placeholder="What tools are you currently using?" />
                  </div>
                </div>
              </section>

              {/* Section 5: Design Preferences */}
              <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                <SectionHeader number={5} title="Design Preferences" description="Share your vision for the look and feel." icon={Palette} />

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Preferred Design Style
                    </label>
                    <select value={formData.designStyle || ''} onChange={e => handleChange('designStyle', e.target.value)} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow">
                      <option value="">Select a style...</option>
                      {DESIGN_STYLE_OPTIONS.map(opt => <option key={opt} value={opt}>
                          {opt}
                        </option>)}
                    </select>
                  </div>

                  <div>
                    <Input label="Brand Colors" value={formData.brandColors || ''} onChange={e => handleChange('brandColors', e.target.value)} placeholder="e.g. Blue (#2563EB), Orange (#F97316) or describe your color preferences" helpText="Provide hex codes or describe your preferred color scheme" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Reference Websites
                    </label>
                    <textarea value={formData.referenceWebsites || ''} onChange={e => handleChange('referenceWebsites', e.target.value)} rows={3} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Share URLs of websites you like (design, layout, interactions, etc.)" />
                    <p className="mt-1.5 text-xs text-slate-500">
                      One URL per line or separated by commas
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Specific Design Requirements
                    </label>
                    <textarea value={formData.designRequirements || ''} onChange={e => handleChange('designRequirements', e.target.value)} rows={3} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Any must-have design elements? (animations, specific interactions, accessibility needs, etc.)" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Do you have existing brand guidelines?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="hasBrandGuidelines" value="yes" checked={formData.hasBrandGuidelines === 'yes'} onChange={e => handleChange('hasBrandGuidelines', e.target.value)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-2 text-sm text-slate-700">
                          Yes, I can provide them
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="hasBrandGuidelines" value="no" checked={formData.hasBrandGuidelines === 'no'} onChange={e => handleChange('hasBrandGuidelines', e.target.value)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-2 text-sm text-slate-700">
                          No, need help creating one
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Timeline & Budget */}
              <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                <SectionHeader number={6} title="Timeline & Budget" description="Help us understand your constraints." icon={Calendar} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div id="field-budget">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Budget Range <span className="text-red-500">*</span>
                    </label>
                    <select value={formData.budget} onChange={e => handleChange('budget', e.target.value)} className={`w-full px-3 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow ${errors.budget ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'}`}>
                      <option value="">Select a budget...</option>
                      {BUDGET_RANGES.map(range => <option key={range} value={range}>
                          {range}
                        </option>)}
                    </select>
                    {errors.budget && <p className="mt-1.5 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.budget}
                      </p>}
                  </div>

                  <div id="field-timeline">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Target Timeline <span className="text-red-500">*</span>
                    </label>
                    <select value={formData.timeline} onChange={e => handleChange('timeline', e.target.value)} className={`w-full px-3 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow ${errors.timeline ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'}`}>
                      <option value="">Select a timeline...</option>
                      {TIMELINE_OPTIONS.map(opt => <option key={opt} value={opt}>
                          {opt}
                        </option>)}
                    </select>
                    {errors.timeline && <p className="mt-1.5 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.timeline}
                      </p>}
                  </div>

                  <div>
                    <Input label="Preferred Start Date" type="date" value={formData.preferredStartDate || ''} onChange={e => handleChange('preferredStartDate', e.target.value)} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Decision Timeline
                    </label>
                    <select value={formData.decisionTimeline || ''} onChange={e => handleChange('decisionTimeline', e.target.value)} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow">
                      <option value="">Select timeline...</option>
                      {DECISION_TIMELINE_OPTIONS.map(opt => <option key={opt} value={opt}>
                          {opt}
                        </option>)}
                    </select>
                  </div>
                </div>
              </section>

              {/* Section 7: Detailed Description */}
              <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                <SectionHeader number={7} title="Detailed Description" description="Provide any additional context or details." icon={FileText} />

                <div id="field-description">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea value={formData.description} onChange={e => handleChange('description', e.target.value)} rows={6} className={`w-full px-3 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow ${errors.description ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'}`} placeholder="Please provide a detailed description of your project. Include any specific requirements, user flows, or design preferences..." />
                  <div className="flex justify-between mt-1.5">
                    {errors.description ? <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.description}
                      </p> : <span />}
                    <span className="text-xs text-slate-400">
                      {formData.description.length}/1000
                    </span>
                  </div>
                </div>
              </section>

              {/* Section 8: Additional Info */}
              <section className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
                <SectionHeader number={8} title="Additional Information" description="Help me evaluate if this is a good fit." icon={Layers} />

                <div className="space-y-8">
                  {/* Only show Team Size and Stakeholders for business clients */}
                  {isBusinessClient && <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <Input label="Team Size" value={formData.teamSize || ''} onChange={e => handleChange('teamSize', e.target.value)} placeholder="How many people involved?" />
                      </div>
                      <div>
                        <Input label="Key Stakeholders" value={formData.stakeholders || ''} onChange={e => handleChange('stakeholders', e.target.value)} placeholder="Who are the decision makers?" />
                      </div>
                    </div>}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Why is this project important right now?
                    </label>
                    <textarea value={formData.whyNow || ''} onChange={e => handleChange('whyNow', e.target.value)} rows={2} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="What's driving the urgency or timing for this project?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Have you worked with developers before?
                    </label>
                    <textarea value={formData.previousDeveloperExperience || ''} onChange={e => handleChange('previousDeveloperExperience', e.target.value)} rows={2} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Share your experience working with developers or agencies" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      What's your biggest concern about this project?
                    </label>
                    <textarea value={formData.biggestConcern || ''} onChange={e => handleChange('biggestConcern', e.target.value)} rows={2} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Budget? Timeline? Technical complexity? Communication?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      How did you hear about us?
                    </label>
                    <select value={formData.source || ''} onChange={e => handleChange('source', e.target.value)} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow">
                      <option value="">Select an option...</option>
                      {SOURCE_OPTIONS.map(opt => <option key={opt} value={opt}>
                          {opt}
                        </option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea value={formData.additionalNotes || ''} onChange={e => handleChange('additionalNotes', e.target.value)} rows={3} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Anything else that would help me evaluate this project?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Attachments (Optional)
                    </label>
                    <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-xl transition-all cursor-pointer group ${formData.file ? 'border-blue-400 bg-blue-50/30' : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'}`} onClick={() => fileInputRef.current?.click()}>
                      <div className="space-y-2 text-center">
                        {formData.file ? <CheckCircle2 className="mx-auto h-12 w-12 text-blue-500" /> : <Upload className="mx-auto h-12 w-12 text-slate-400 group-hover:text-blue-500 transition-colors" />}

                        <div className="flex text-sm text-slate-600 justify-center">
                          <span className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                            {formData.file ? 'Change file' : 'Upload a file'}
                          </span>
                          {!formData.file && <p className="pl-1">or drag and drop</p>}
                        </div>

                        {formData.file ? <p className="text-sm text-blue-700 font-medium truncate max-w-xs mx-auto">
                            {formData.file.name}
                          </p> : <p className="text-xs text-slate-500">
                            Brand guidelines, mockups, requirements doc (PDF,
                            DOC, PNG, JPG up to 10MB)
                          </p>}
                      </div>
                      <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Submit Action */}
              <div className="flex justify-end pt-4 pb-12">
                <Button type="submit" size="lg" isLoading={status === 'submitting'} className="w-full sm:w-auto min-w-[240px] shadow-lg shadow-blue-600/20 text-lg py-6">
                  Submit Project Request
                </Button>
              </div>
            </motion.div>}
        </AnimatePresence>
      </form>
    </div>;
}