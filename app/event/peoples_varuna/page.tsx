'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PeoplesVarunaPage() {
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
            People's Varuna
          </motion.h1>
          <p className="text-lg text-white/80">Community-driven River Conservation</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-center mb-8">
              <Image
                src="/People's_Varuna.png"
                alt="People's Varuna"
                width={400}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              People's Varuna is a community engagement initiative that brings together local
              communities, stakeholders, and experts to work towards the rejuvenation of the
              Varuna River.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="card p-6 border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">Community Engagement</h3>
                <p className="text-gray-600 text-sm">
                  Involving local communities in river conservation efforts.
                </p>
              </div>
              <div className="card p-6 border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">Awareness Programs</h3>
                <p className="text-gray-600 text-sm">
                  Educational initiatives for river health and conservation.
                </p>
              </div>
              <div className="card p-6 border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">Collaborative Action</h3>
                <p className="text-gray-600 text-sm">
                  Joint efforts for sustainable river management.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
