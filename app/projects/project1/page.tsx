'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Database, Monitor, AlertTriangle, Globe, BookOpen } from 'lucide-react';

export default function DSS() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/project_images/DSS2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block text-cyan-300 text-lg sm:text-xl font-medium tracking-widest uppercase">
              Project : DSS-WRM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
              Decision Support System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            For River Management
          </motion.p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About DSS Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About DSS WRM</h2>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The first major project of SLCR is the development of a comprehensive <strong className="text-primary">Decision Support System (DSS)</strong> for river management. This system is designed to provide a holistic framework for monitoring, analyzing, and managing river water quality. The DSS integrates data from various sources, including real-time water quality sensors, hydrological measurements, and environmental monitoring systems.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  It employs advanced data analytics and modeling techniques to predict water quality trends, identify pollution sources, and evaluate the effectiveness of various remediation strategies.
                </p>
              </div>
              {/* Learn More Link */}
              <div className="mt-8">
                <a
                  href="https://slcrdss.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 group"
                >
                  Visit Official website
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right - DSS Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full bg-white relative">
                <Image
                  src="/project_images/DSS1.jpeg"
                  alt="Decision Support System Visualization"
                  fill
                  quality={100}
                  className="object-cover p-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DSS Framework Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">DSS Framework</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Robust Data Infrastructure</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The DSS framework is built on a robust data infrastructure that collects and processes information from multiple monitoring stations along the Varuna River. These stations are equipped with sensors that measure key water quality parameters such as dissolved oxygen, pH, temperature, turbidity, and the presence of various pollutants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Real-time Analysis</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The data is transmitted in real-time to a central database, where it is analyzed using machine learning algorithms and hydrological models. This allows for the early detection of pollution events and the identification of their sources, enabling timely intervention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Alerts & Recommendations</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The DSS provides visualizations such as maps, graphs, and dashboards that display the current status of the river and historical trends. It also generates alerts and recommendations for action based on predefined thresholds and predictive models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Scalable & Adaptable</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The DSS framework is designed to be scalable and adaptable to other rivers in India and beyond. It can be customized to suit the specific needs and conditions of different river basins. The system also incorporates a knowledge management component for sharing best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scientific Foundation Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Scientific Foundation for SLCR</h3>
                  <p className="text-gray-600">Critical component enabling evidence-based decision making</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed">
                  The DSS project is a critical component of the SLCR initiative. It provides the scientific foundation for the other projects and ensures that the solutions developed are based on a deep understanding of the river system. The knowledge generated by this project can be used to inform policy decisions, guide the implementation of interventions, and monitor the long-term effectiveness of river rejuvenation efforts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}