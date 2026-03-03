'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { Droplets, MapPin, Layers, BarChart3, Target, Lightbulb } from 'lucide-react';

export default function HMVBProject() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/project_images/varuna1.png')",
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
              Project : HMVB
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
              Hydrogeological Modeling
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            of the Varuna River Basin
          </motion.p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Section */}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About HMVB</h2>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The second major project focuses on the <strong className="text-primary">hydrogeological modeling</strong> of the Varuna River Basin. This project aims to understand the complex interactions between surface water and groundwater in the basin. The modeling work is essential for developing effective strategies for river rejuvenation, as it provides insights into the flow of water, the movement of pollutants, and the impact of various interventions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The hydrogeological modeling process involves collecting and analyzing data on the geology, topography, and hydrology of the Varuna River Basin. This includes information on the type and distribution of rocks and soils, the elevation and slope of the land, and the patterns of surface water flow. The data is used to create a detailed digital representation of the basin, which is then used to simulate the movement of water and pollutants.
                </p>
              </div>
            </motion.div>

            {/* Right - HMVB Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full bg-white relative">
                <Image
                  src="/project_images/varuna7.png"
                  alt="Hydrogeological Models of Varuna Basin"
                  fill
                  quality={100}
                  className="object-cover p-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modeling Approach Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Modeling Approach</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Software Tools</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The modeling work is conducted using advanced software tools that can simulate the behavior of groundwater systems. These tools take into account factors such as rainfall, evaporation, and the recharge of aquifers. The models are calibrated and validated using field data collected from monitoring wells and other sources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Impact Assessment</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The hydrogeological models developed by SLCR are used to assess the impact of various interventions on the river and its surrounding environment. For example, the models can be used to predict the effect of a new wastewater treatment plant on the water quality of the river.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">River Restoration Planning</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The models help predict the impact of a proposed river restoration project on the groundwater table. They also help identify areas that are particularly vulnerable to pollution and require targeted intervention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Real-world Conditions</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      This ensures that the models accurately reflect the real-world conditions of the basin. The models help in understanding the interaction between groundwater and surface water in the basin.
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
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Critical Foundation for SLCR</h3>
                  <p className="text-gray-600">Supporting informed decision-making for river rejuvenation</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed">
                  The hydrogeological modeling project is a critical component of the SLCR initiative. It provides the scientific foundation for the other projects and ensures that the solutions developed are based on a deep understanding of the river system. The knowledge generated by this project can be used to inform policy decisions, guide the implementation of interventions, and monitor the long-term effectiveness of river rejuvenation efforts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}