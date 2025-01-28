'use client';

import { useState } from 'react';

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      form.submit();
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 animate-float-slow">Work with Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Job Info */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Why Join Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dynamic Work Environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Career Growth Opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Competitive Benefits
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Learning & Development
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Current Openings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Sales Representatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Team Leaders
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Quality Analysts
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Training Specialists
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-center">Apply Now</h3>
              <form
                action="https://formsubmit.co/e2a814c94f5b9c7c6f1b6c2f0c5c0c0c"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success page */}
                <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?success=true`} />
                {/* Subject */}
                <input type="hidden" name="_subject" value="New Job Application" />
                {/* Template */}
                <input type="hidden" name="_template" value="table" />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-2">
                      Position
                    </label>
                    <select
                      id="position"
                      name="position"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                      required
                    >
                      <option value="">Select a position</option>
                      <option value="Sales Representative">Sales Representative</option>
                      <option value="Team Leader">Team Leader</option>
                      <option value="Quality Analyst">Quality Analyst</option>
                      <option value="Training Specialist">Training Specialist</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2">
                      Years of Experience
                    </label>
                    <input
                      id="experience"
                      type="number"
                      name="experience"
                      min="0"
                      max="50"
                      placeholder="Years of experience"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Why do you want to join us?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about yourself and why you'd be a great fit..."
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/50"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-md transition-all duration-300 hover:from-purple-600 hover:to-cyan-600 transform hover:scale-[1.02] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center mt-4">
                    Thank you for your application! We'll be in touch soon.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center mt-4">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 