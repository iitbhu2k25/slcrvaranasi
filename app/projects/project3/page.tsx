'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { FlaskConical, Search, AlertTriangle, FileText, Target, Microscope } from 'lucide-react';

export default function EPFAProject() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/project_images/assi3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block text-purple-300 text-lg sm:text-xl font-medium tracking-widest uppercase">
              Project : EPFA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
              Characterization of Emerging Pollutants
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            in the Varuna River
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
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About EPFA</h2>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The third major project of SLCR is the characterization of <strong className="text-primary">emerging pollutants</strong> in the Varuna River. This project focuses on identifying and quantifying the presence of new and potentially harmful substances in the river water. These emerging pollutants include pharmaceuticals, personal care products, microplastics, and other contaminants that are not typically monitored in conventional water quality assessments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The characterization process involves collecting water samples from various locations along the Varuna River. These samples are analyzed using advanced laboratory techniques, such as gas chromatography-mass spectrometry (GC-MS) and liquid chromatography-tandem mass spectrometry (LC-MS/MS). These techniques allow for the detection and identification of a wide range of chemical compounds, even at very low concentrations.
                </p>
              </div>
            </motion.div>

            {/* Right - EPFA Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full bg-white relative">
                <Image
                  src="/project_images/Chaukaghat.jpg"
                  alt="Emerging Pollutants Analysis"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Characterization Process Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Research Approach</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Sample Analysis</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The analysis of the water samples provides a detailed picture of the types and levels of emerging pollutants present in the river. This information is used to assess the potential risks to human health and the environment, and to identify the sources of these pollutants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Source Identification</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The project helps to identify the sources of these pollutants, such as industrial discharges, agricultural runoff, or untreated sewage. This is critical for developing targeted strategies to reduce the levels of these contaminants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Targeted Strategies</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The characterization of emerging pollutants is a critical step in the river rejuvenation process. It allows for the development of targeted strategies to reduce the levels of these contaminants. For example, if a particular pharmaceutical is found to be present at high levels, the project can recommend the implementation of advanced treatment technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Monitoring Program</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      The project also involves the development of a monitoring program to track changes in the levels of emerging pollutants over time. This program will allow for the evaluation of the effectiveness of various interventions and the identification of any new or emerging threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Generation Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Policy & Regulatory Impact</h3>
                  <p className="text-gray-600">Informing standards for emerging pollutant management</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed">
                  The knowledge generated by this project can be used to inform the development of regulations and standards for the management of emerging pollutants. This is essential for protecting public health and the environment from the potential harmful effects of these contaminants.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}