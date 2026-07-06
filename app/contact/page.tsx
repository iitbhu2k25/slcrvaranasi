'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Building2, Instagram, Facebook, Twitter, Linkedin, Navigation, Send, User, AtSign } from 'lucide-react';

export default function ContactPage() {
  const [tab, setTab] = useState<'info' | 'message'>('info');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/newbg2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Contact Content in a white card */}
      <section className="py-12 sm:py-26 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Toggle Pills */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-1 shadow-lg">
              <button
                onClick={() => setTab('info')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  tab === 'info'
                    ? 'bg-white text-blue-600 shadow'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Contact Info
              </button>
              <button
                onClick={() => setTab('message')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  tab === 'message'
                    ? 'bg-white text-blue-600 shadow'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Send Message
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
          {tab === 'info' ? (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10"
          >
            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              {/* Left - Contact Info */}
              <div className="flex flex-col justify-center">
                {/* Main Heading with Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Smart Laboratory on Clean Rivers
                  </h1>
                </motion.div>

                {/* Address Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 mb-5 border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                      <p className="text-blue-600 leading-relaxed">
                        Smart Laboratory for Clean Rivers (SLCR)<br />
                        Department of Civil Engineering,<br />
                        Indian Institute of Technology (BHU)<br />
                        Varanasi 221005
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 mb-8 border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">E-mail</h3>
                      <a
                        href="mailto:slcr@iitbhu.ac.in"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-lg font-medium"
                      >
                        slcr@iitbhu.ac.in
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-bold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/slcr.iitbhu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Smart-Lab-On-Clean-Rivers/61577375996615/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://x.com/JalTattva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/slcr-smart-laboratory-on-clean-rivers-b65a4134a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right - Map with Integrated Directions Button */}
              <div className="h-full min-h-[500px] relative">
                
                {/* 1. Directions Button Overlay (Floating on top of map) */}
                <div className="absolute top-4 right-4 z-10">
                  <a 
                    href="https://www.google.com/maps/dir//Department+of+Civil+Engineering,+IIT+(BHU),+Varanasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 px-4 py-2.5 rounded-lg shadow-lg font-medium transition-all transform hover:scale-105 border border-gray-200"
                  >
                    <Navigation className="w-4 h-4 fill-blue-600" />
                    <span className="text-sm">Get Directions</span>
                  </a>
                </div>

                {/* 2. Map Container */}
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-gray-300 relative bg-gray-100">
                  <iframe
                    title="Department of Civil Engineering, IIT BHU Location"
                    // Reliable 'Search Mode' URL that ensures Red Pin appears
                    src="https://maps.google.com/maps?q=Department+of+Civil+Engineering,+IIT+(BHU),+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />
                </div>
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />

              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-y"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="text-center text-sm font-medium text-green-600">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-medium text-red-600">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
          )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}