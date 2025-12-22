'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate
} from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Users,
  Globe,
  Target,
  Building2,
  Play
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import for VideoPlayer (client-side only)
const VideoPlayer = dynamic(() => import('@/components/ui/VideoPlayer'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-gray-200 rounded-xl animate-pulse flex items-center justify-center">
      <Play className="w-12 h-12 text-gray-400" />
    </div>
  )
});

// ===== ANIMATED COUNTER COMPONENT =====
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}

// ===== AIM SPOTLIGHT COMPONENT (ENHANCED) =====
function AimSpotlightCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="mt-12 group relative rounded-3xl overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 opacity-[0.03]" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
          />
        ))}
      </div>

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Dynamic Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 rounded-3xl"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 60%
            )
          `,
        }}
      />

      {/* Main Card */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Content Container */}
        <div className="p-8 sm:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">

            {/* Left Side: Title & Badge */}
            <div className="md:w-1/3 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 border border-blue-200/50 shadow-sm cursor-pointer"
              >
                ✨ Vision & Mission
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-slate-800 mb-2 tracking-tight"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 animate-pulse">Aim</span>
              </motion.h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-full mx-auto md:mx-0 mt-2"
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-blue-50/80 to-cyan-50/80 rounded-2xl p-6 border border-blue-100/50 shadow-inner mb-6"
              >
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed italic">
                  "To bring global knowledge and solutions on holistic and sustainable rejuvenation of small rivers that are economically, environmentally and socially sustainable in the local context."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm md:text-base leading-relaxed space-y-4"
              >
                <p className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  The government of India is dedicated towards clean and sustainable rivers.
                  Hon'ble Prime Minister <strong className="text-slate-800">Shri Narendra Modi</strong> conceptualised the visionary
                  Smart Laboratory for Clean Rivers (SLCR) initiative with his Danish counterpart.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">●</span>
                  The Smart Laboratory in Varanasi serves as a platform for <span className="font-semibold text-blue-600">knowledge creation, transfer, and co-creation</span>;
                  It provides global and local sustainable solutions for the rejuvenation of streams/rivers, jointly managed by Indian and Danish partners.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== OBJECTIVES DATA =====
const objectives = [
  {
    icon: Users,
    title: 'Knowledge Platform',
    description: 'Create a platform between Government authorities, Knowledge institutions, technology providers and citizens for knowledge sharing and co-creation toachieve clean river water.'
  },
  {
    icon: Globe,
    title: 'Global Solutions',
    description: 'To bring the global solutions on current challenges in the field of clean river water and conduct research and development to fit in real environment through Living lab approach to make them scalable and economically attractive.'
  },
  {
    icon: Target,
    title: 'Support NMCG',
    description: 'Support National Mission for Clean Ganga in achieving its vision by focusing on small rivers.'
  },
  {
    icon: Building2,
    title: 'Technology Repository',
    description: 'Develop the repository of all collected knowledge and technologies, which can be shared through various initiatives like River Cities Alliance/Global River Cities Alliance to perform rejuvenation work on other small rivers or tributaries in India and in GRCA member countries.'
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image - River */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/main_page_gif_old.gif"
            alt="Ganga River - Clean Rivers Initiative"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Smart Laboratory on{' '}
                <span className="text-gradient">Clean Rivers</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/85 mb-6 sm:mb-8 leading-relaxed">
                Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the joint initiative by the Hon'ble Prime Minister of India, H.E. Shri. Narendra Modi and the
                Prime Minister of Denmark, H.E. Ms Mette Frederiksen. A Memorandum of Understanding (MoU) was signed between the Ministry of Jal Shakti and the Danish
                Environment Ministry as a broad-based framework in the field of Water Resources Development and Management including the SLCR initiative.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/about/slcr" className="btn-accent inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight size={20} />
                </Link>
                <Link href="/projects" className="btn-outline">
                  View Projects
                </Link>
              </div>
            </motion.div>

            {/* Right - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:gap-5"
            >
              <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white">
                <div className="text-2xl sm:text-4xl font-bold mb-1"><AnimatedCounter target={4} /></div>
                <div className="text-xs sm:text-sm text-white/70">Major Projects</div>
              </div>
              <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white">
                <div className="text-2xl sm:text-4xl font-bold mb-1"><AnimatedCounter target={10} suffix="+" /></div>
                <div className="text-xs sm:text-sm text-white/70">Partner Institutes</div>
              </div>
              <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white">
                <div className="text-2xl sm:text-4xl font-bold mb-1"><AnimatedCounter target={2} /></div>
                <div className="text-xs sm:text-sm text-white/70">Countries</div>
              </div>
              <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white">
                <div className="text-2xl sm:text-4xl font-bold mb-1">2024</div>
                <div className="text-xs sm:text-sm text-white/70">Established</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SLCR - MAIN SECTION ===== */}
      <section className="py-10 sm:py-16 px-3 sm:px-4 bg-white">
        <div className="w-full max-w-[1640px] mx-auto">
          <div className="text-center mb-6 sm:mb-10">
            {/* <h2 className="section-title">About SLCR</h2> */}
            <p className="section-subtitle mx-auto">
              Smart Laboratory on Clean Rivers in Varanasi
            </p>
          </div>

          {/* Photos and Highlights Section - 4 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

            {/* LEFT - 8 Dignitaries in 4x2 Grid (Takes 4 columns on large screens) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Card 1 - Shri C R Patil */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/CR_patil.jpg"
                      alt="Shri C R Patil"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Shri C R Patil</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">Hon'ble Union Minister, Ministry of Jal Shakti</p>
                  </div>
                </div>

                {/* Card 2 - Shri Rajeev Mittal */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/Rajeev_Mital1.jpg"
                      alt="Shri Rajeev Mittal"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Shri Rajeev Mittal</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">DG, National Mission For Clean Ganga</p>
                  </div>
                </div>

                {/* Card 3 - Shri Nalin Kumar Srivastava */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/nalin_sir.png"
                      alt="Shri Nalin Kumar Srivastava"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Shri Nalin Kumar Srivastava</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">DDG, National Mission For Clean Ganga</p>
                  </div>
                </div>

                {/* Card 4 - Shri Dheeraj Joshi */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/dheeraj_joshi.jpeg"
                      alt="Shri Dheeraj Joshi"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Shri Dheeraj Joshi</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">Director(Urban), National Mission For Clean Ganga</p>
                  </div>
                </div>

                {/* Card 5 - Prof. Amit Patra */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/director_itbhu.jpg"
                      alt="Prof. Amit Patra"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Prof. Amit Patra</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">Director, IIT BHU Varanasi</p>
                  </div>
                </div>

                {/* Card 6 - Prof. Anurag Ohri */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/Anurag_Ohri_Sir.jpg"
                      alt="Prof. Anurag Ohri"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Prof. Anurag Ohri</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">Principal Investigator, IIT BHU Varanasi</p>
                  </div>
                </div>

                {/* Card 7 - Prof. Pramod Soni */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/Pramod_Sir.jpg"
                      alt="Prof. Pramod Soni"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Prof. Pramod Soni</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">Co-Principal Investigator, IIT BHU Varanasi</p>
                  </div>
                </div>

                {/* Card 8 - Prof. Shishir Gaur */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
                  <div className="h-40 sm:h-56 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/persons/sgsir.png"
                      alt="Prof. Shishir Gaur"
                      width={250}
                      height={320}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Prof. Shishir Gaur</h3>
                    <p className="text-sm text-blue-600 font-medium leading-tight">Coordinator, IIT BHU Varanasi</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT - Highlights Section (Full Height with Scroll) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 h-full flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-3 flex items-center gap-2 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <h3 className="text-lg font-bold text-white">Highlights</h3>
              </div>

              {/* Scrolling Highlights List */}
              <div className="flex-grow relative overflow-hidden">
                <div className="absolute w-full animate-scroll-vertical">
                  {/* First set of items */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-600">
                      <span className="text-blue-600 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Training on New Modules including Water Data Online</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-400">
                      <span className="text-blue-400 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Interaction with State Nodal Officers</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-600">
                      <span className="text-blue-600 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Training on SLCR</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-400">
                      <span className="text-blue-400 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">RHAR Conference</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-600">
                      <span className="text-blue-600 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Varuna Report</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-400">
                      <span className="text-blue-400 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Framework Document of DSS</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-600">
                      <span className="text-blue-600 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Training on New Modules including Water Data Online</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-400">
                      <span className="text-blue-400 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Interaction with State Nodal Officers</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-600">
                      <span className="text-blue-600 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Training on SLCR</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-400">
                      <span className="text-blue-400 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">RHAR Conference</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-600">
                      <span className="text-blue-600 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Varuna Report</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-blue-400">
                      <span className="text-blue-400 font-bold mt-0.5 text-sm">•</span>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Framework Document of DSS</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          2023-2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ===== OUR AIM SECTION - INTERACTIVE UPGRADE ===== */}
          <AimSpotlightCard />
        </div>
      </section>

      {/* ===== VIDEO & OBJECTIVES - Side by Side ===== */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid lg:grid-cols-10 gap-8 items-start">
            {/* Video Section - 70% */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">SLCR Initiative</h2>
                <p className="text-gray-600">Watch our journey towards clean rivers</p>
              </div>
              <VideoPlayer
                src="/Videos/master.m3u8"
              // title="Smart Laboratory on Clean Rivers - Varanasi"
              />
            </motion.div>

            {/* Major Objectives - 30% */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 relative"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-green-400/10 rounded-full blur-2xl" />
              </div>

              {/* Header with Gradient */}
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-2xl p-5 text-white">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"
                  >
                    <Target className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-bold">Major Objectives</h2>
                    <p className="text-xs text-white/80">The broad objectives of SLCR initiative</p>
                  </div>
                </div>
              </div>

              {/* Objectives Cards */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-b-2xl p-4 space-y-3 border border-t-0 border-gray-200 shadow-lg">
                {objectives.map((obj, index) => (
                  <motion.div
                    key={obj.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 8 }}
                    className="group relative bg-gradient-to-r from-white to-blue-50/50 rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md"
                      >
                        <obj.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{obj.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{obj.description}</p>
                      </div>
                    </div>

                    {/* Arrow indicator on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Footer Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100"
                >
                  <p className="text-xs text-gray-600 leading-relaxed flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">💡</span>
                    The main outcomes will be successful demonstration of global solutions in the local context with sound business models.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}