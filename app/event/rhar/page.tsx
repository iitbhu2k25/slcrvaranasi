'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RHAR2025Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary-light to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            RHAR 2025
          </motion.h1>
          <p className="text-lg text-white/80">River Health Assessment and Rejuvenation</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              RHAR 2025 - River Health Assessment and Rejuvenation initiative under SLCR focuses on
              comprehensive assessment and restoration of river ecosystems in the Varuna basin.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="card p-6 border border-gray-100 text-left">
                <h3 className="text-xl font-bold text-primary mb-3">Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive health assessment of river systems using modern techniques and technologies.
                </p>
              </div>
              <div className="card p-6 border border-gray-100 text-left">
                <h3 className="text-xl font-bold text-primary mb-3">Rejuvenation</h3>
                <p className="text-gray-600">
                  Implementation of sustainable solutions for river restoration and rejuvenation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
