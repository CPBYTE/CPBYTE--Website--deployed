'use client';

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import Image from 'next/image';

const validationSchema = Yup.object({
  name: Yup.string().required('Full name is required'),
  branch: Yup.string().required('Branch is required'),
  section: Yup.string().required('Section is required'),
  collegeEmail: Yup.string()
    .email('Invalid email address')
    .required('College email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  dsaLanguage: Yup.string().required('DSA Language preference is required'),
  firstDomain: Yup.string().required('First domain preference is required'),
  secondDomain: Yup.string()
    .required('Second domain preference is required')
    .notOneOf([Yup.ref('firstDomain')], 'Second domain must be different from the first domain'),
  year: Yup.string().required('Year of study is required'),
  referredBy: Yup.string(),
});

const dsaOptions = ['Java', 'CPP'];
const domainOptions = [
  'Web Development',
  'Android Development',
  'AI/ML',
  'UI/UX Designing',
  'Graphics Designing',
  'Video Editing',
  'Content Creation',
];
const yearOptions = ['1st Year', '2nd Year'];

const initialValues = {
  name: '',
  branch: '',
  section: '',
  collegeEmail: '',
  phone: '',
  dsaLanguage: '',
  firstDomain: '',
  secondDomain: '',
  year: '',
  referredBy: '',
};

export default function RecruitmentForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onSubmit = async (values, { resetForm }) => {
    setStatus({ state: 'loading', message: '' });

    try {
      const response = await fetch('/api/recruitment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ state: 'success', message: data.message });
        resetForm();
      } else {
        setStatus({ state: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ state: 'error', message: 'Failed to submit the form. Please try again later.' });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Background abstract elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="w-full max-w-3xl z-10"
      >
        <div className="text-center mb-12">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Kickstart your journey with us! Fill out the recruitment form below to apply for the upcoming session.
          </motion.p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, errors, touched, values }) => (
              <Form className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <Field 
                      type="text" 
                      id="name" 
                      name="name" 
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.name && touched.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500`}
                      placeholder="John Doe"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* College Email */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-300 mb-2">College Email <span className="text-red-500">*</span></label>
                    <Field 
                      type="email" 
                      id="collegeEmail" 
                      name="collegeEmail" 
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.collegeEmail && touched.collegeEmail ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500`}
                      placeholder="john.doe@kiet.edu"
                    />
                    <ErrorMessage name="collegeEmail" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <Field 
                      type="text" 
                      id="phone" 
                      name="phone" 
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.phone && touched.phone ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500`}
                      placeholder="9876543210"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* Year */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2">Year of Study <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Field 
                        as="select"
                        id="year" 
                        name="year" 
                        className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.year && touched.year ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white appearance-none`}
                      >
                        <option value="" disabled className="text-gray-500">Select Year</option>
                        {yearOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    <ErrorMessage name="year" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* Branch */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-300 mb-2">Branch <span className="text-red-500">*</span></label>
                    <Field 
                      type="text" 
                      id="branch" 
                      name="branch" 
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.branch && touched.branch ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500`}
                      placeholder="Computer Science"
                    />
                    <ErrorMessage name="branch" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* Section */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="section" className="block text-sm font-medium text-gray-300 mb-2">Section <span className="text-red-500">*</span></label>
                    <Field 
                      type="text" 
                      id="section" 
                      name="section" 
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.section && touched.section ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500`}
                      placeholder="A"
                    />
                    <ErrorMessage name="section" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* DSA Language */}
                  <motion.div variants={itemVariants} className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      DSA Language <span className="text-red-500">*</span>
                      <span className="text-xs text-gray-500 font-normal ml-2">(DSA is a compulsory domain)</span>
                    </label>
                    <div className="flex space-x-4">
                      {dsaOptions.map((lang) => (
                        <label key={lang} className="flex-1 cursor-pointer">
                          <Field type="radio" name="dsaLanguage" value={lang} className="sr-only peer" />
                          <div className="w-full text-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-blue-400 hover:bg-white/10 transition-all duration-200">
                            {lang}
                          </div>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage name="dsaLanguage" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* First Domain */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="firstDomain" className="block text-sm font-medium text-gray-300 mb-2">First Domain Preference <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Field 
                        as="select"
                        id="firstDomain" 
                        name="firstDomain" 
                        className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.firstDomain && touched.firstDomain ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white appearance-none`}
                      >
                        <option value="" disabled className="text-gray-500">Select Domain</option>
                        {domainOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    <ErrorMessage name="firstDomain" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* Second Domain */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="secondDomain" className="block text-sm font-medium text-gray-300 mb-2">Second Domain Preference <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Field 
                        as="select"
                        id="secondDomain" 
                        name="secondDomain" 
                        className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.secondDomain && touched.secondDomain ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white appearance-none`}
                      >
                        <option value="" disabled className="text-gray-500">Select Domain</option>
                        {domainOptions.map(option => (
                          <option key={option} value={option} disabled={option === values.firstDomain}>{option}</option>
                        ))}
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    <ErrorMessage name="secondDomain" component="div" className="text-red-400 text-xs mt-1 font-medium" />
                  </motion.div>

                  {/* Referred By */}
                  <motion.div variants={itemVariants} className="md:col-span-2">
                    <label htmlFor="referredBy" className="block text-sm font-medium text-gray-300 mb-2">Referred By (Optional)</label>
                    <Field 
                      type="text" 
                      id="referredBy" 
                      name="referredBy" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                      placeholder="Name of the person who referred you"
                    />
                  </motion.div>

                </div>

                <AnimatePresence mode="wait">
                  {status.state !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                        status.state === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 
                        status.state === 'error' ? 'bg-red-500/10 border border-red-500/20 text-red-400' : ''
                      }`}>
                        {status.state === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                        {status.state === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                        <p className="text-sm font-medium">{status.message}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div variants={itemVariants} className="pt-6">
                  <button
                    type="submit"
                    disabled={status.state === 'loading'}
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl flex justify-center items-center gap-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      {status.state === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Form
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>

              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
}
