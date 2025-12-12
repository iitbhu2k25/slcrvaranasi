'use client';

import { motion } from 'framer-motion';

export default function PartnerInstitutesPage() {
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
            Partner Institutes
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our esteemed partner institutes collaborate with us to advance research, innovation,
              and knowledge sharing. Their support strengthens our mission and impact. Explore our
              network of institutions driving progress together.
            </p>

            {/* Partner logos grid - placeholder for partner institute logos */}
            <div className="flex justify-center mt-12">
              <img
                src="/about/combined_logo.png"
                alt="Partner Institutes Combined Logo"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
