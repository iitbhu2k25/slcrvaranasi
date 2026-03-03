'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, Target, Building2, ChevronRight, ChevronDown, Lightbulb, Eye, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// Accordion Section Component
function AccordionSection({
  title,
  icon: Icon,
  children,
  isOpen,
  onToggle,
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-teal-500'
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  gradientFrom?: string;
  gradientTo?: string;
}) {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-5 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold text-lg hover:opacity-95 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6" />
          <span>{title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutSLCRPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    objectives: false,
    vision: false,
    coreValues: false,
    partners: false,
    coordinator: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="w-[95%] max-w-[1700px] mx-auto">
          {/* Fabulous Header */}
          <div className="text-center mb-16 pt-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 drop-shadow-sm tracking-tight"
            >
              SLCR at a Glance
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Intro Section - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
              <div className="text-gray-700 leading-relaxed text-lg text-justify">
                <h2 className="text-3xl font-bold text-primary mb-6">Indo - Denmark Partnership</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    <span className="float-left text-7xl font-bold text-primary mr-3 leading-none mt-[-8px]">E</span>
                    stablishment of Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the initiative discussed between the Hon&apos;ble Prime Minister of India,
                    H.E. Shri. Narendra Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen, on 09th October 2021 during the latter&apos;s visit to India.
                    SLCR was also mention in the India–Denmark Joint Statement released on 3rd May 2021 during the Visit of Hon&apos;ble Prime Minister of India, H.E. Shri.
                    Narendra Modi On 03rd May 2022 as one the initiatives both the countries looked forward eagerly to be launched. On 12th September 2022 during the
                    Hon&apos;ble Minister of Jal Sakti&apos;s visit to Denmark, a Memorandum of Understanding was signed between the Ministry of Jal Shakti and the Danish
                    Environment Ministry as a broad-based framework in the field of Water Resources Development and Management including the SLCR initiative.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] w-full rounded-xl overflow-hidden shadow-md bg-white p-2 border border-gray-100 flex flex-col">
                <div className="relative flex-grow w-full">
                  <Image
                    src="/about/pm.jpg"
                    alt="Prime Ministers of India and Denmark"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2 italic flex-shrink-0">
                  Hon&apos;ble Prime Minister of India and Prime Minister of Denmark
                </p>
              </div>
            </div>

            {/* Concept Section - Image */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Concept of Smart Living Lab on Clean River (SLCR) <br className="hidden md:block" />
                Small River Rejuvenation
              </h2>
              <div className="flex justify-center mb-16">
                <Image
                  src="/about/lab_component2.png"
                  alt="Concept of SLCR Components"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-sm"
                />
              </div>

              {/* Hybrid Lab Detail Section - ENHANCED WITH LARGER TEXT */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className="text-gray-700 leading-relaxed text-justify space-y-6">
                  <p className="text-xl">
                    SLCR is more than a laboratory; it is an ecosystem of learning, engagement, co-creation, and experimentation in the real environment. SLCR consists of two major components:
                  </p>
                  <p className="text-xl">
                    <strong className="text-blue-700 text-2xl">Hybrid Lab (Virtual + Secretariat):</strong> Provides the platform to bring all Govt. Dept., Stakeholders, Academician, Industries and Community to engage to evaluate the Global sustainable solutions (technologies, Policies, frameworks) and enable their implementation in local context through Engagement, Learning and Co-creation. The Hybrid lab will also enable the upscaling of the solutions to the basin level and other rivers.
                  </p>
                  <p className="text-xl">
                    The second component consists of the <strong className="text-teal-700 text-2xl">On-field Living Lab</strong> having the real field area as an experimental site and is used to demonstrate the co-creation on the field.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/about/flowchart2.avif"
                    alt="Hybrid Lab Flowchart"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>

              {/* Structure Section - REDESIGNED */}
              <h2 className="flex justify-center text-2xl md:text-3xl font-bold text-primary mb-8">Structure of SLCR</h2>

              {/* Partnership Image on Left + Committees on Right */}
              <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                {/* Left: Partnership Image */}
                <div className="relative h-full min-h-[600px] w-full rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100">
                  <Image
                    src="/about/partnership2.jpg"
                    alt="Indo-Denmark Partnership"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Right: Committees in Beautiful Cards */}
                <div className="space-y-6">
                  {/* Joint Steering Committee */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">Joint Steering Committee</h3>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">
                          National level committee with high-level representatives from both Denmark and India. To provide strategic guidance and review the progress activities which are identified by the Multi Stake Holder Working Group. To explore and secure funding for new projects, if necessary.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Review Committee */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-400">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">Project Review Committee</h3>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">
                          To review the progress of the ongoing projects to assist the JSC. Quality control of the proposed new projects by the Multistakeholder Working group and share recommendation with the JSC. The PRC can request for a JSC meeting if new projects are to be reapproved or if they need strategic direction.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Multi Stakeholder Working Group */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-400">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Globe className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">Multi Stakeholder Working Group</h3>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">
                          It is the platform to bring the different Central and State Government agencies, Urban Local Bodies (ULBs), District Administrations and state and central missions that are relevant for the Varuna. Share the challenges in their respective areas to SLCR. Inform the ongoing activities in their respective areas to SLCR. Establish synergy and convergence with the other schemes/initiatives. Give strategic inputs if any during framing of the individual projects to SLCR.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}