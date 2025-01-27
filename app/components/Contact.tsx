'use client';

import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/info@the-connections.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 animate-float-slow">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-center mb-8 animate-pulse-gentle">
            Ready to build and automate your dream sales team? Contact us today for a free consultation!
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <form action="https://formsubmit.co/info@the-connections.com" method="POST" onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Success page */}
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

              <div className="mb-4 group">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div className="mb-4 group">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div className="mb-4 group">
                <label htmlFor="company" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div className="mb-4 group">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'animate-pulse-gentle'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center mt-4">
                  Thank you! We'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
          
          <div className="mt-8 text-center space-y-2 animate-float-slow">
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
              <span className="block text-lg mb-1">The-Connections ITES Business Services Private Limited</span>
              Vega Center, Swargate, Pune - 411037
            </p>
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
              Email: info@the-connections.com
            </p>
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
              Phone: (+91) 788 789 8196
            </p>
          </div>
          <p className="text-center mt-8 text-xl font-semibold animate-float">Let's Build Your Dream Sales Team!</p>
        </div>
      </div>
    </section>
  );
}

