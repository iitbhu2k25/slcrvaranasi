'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence
} from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Globe,
  Target,
  Building2,
  Newspaper,
  Megaphone,
  MessageSquareQuote,
  Sparkles
} from 'lucide-react';

// Dynamically import HLS VideoSection component (client-side only)
const VideoSection = dynamic(() => import('@/utils/HlsPlayer'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-gray-900 flex items-center justify-center">
      <p className="text-white">Loading video...</p>
    </div>
  ),
});

// ===== SLIDER IMAGES =====
const sliderImages = [
  { src: '/home/pm.jpg', alt: 'Prime Minister Visit' },
  { src: '/home/front3.jpeg', alt: 'Prime Minister Visit' },
  { src: '/home/2.png', alt: 'Namami Gange Initiative' },
  { src: '/home/front1.jpg', alt: 'Prime Minister Visit' },
  { src: '/home/front4.jpeg', alt: 'Prime Minister Visit' },
  { src: '/home/front2.jpeg', alt: 'Prime Minister Visit' },
  { src: '/home/pic2.jpg', alt: 'Prime Minister Visit' },
 
   { src: '/home/varuna3.png', alt: 'Namami Gange Initiative' },
   { src: '/home/varuna7_new.png', alt: 'Namami Gange Initiative' },
   { src: '/home/5.jpg', alt: 'Namami Gange Initiative' },
    { src: '/home/6.png', alt: 'Namami Gange Initiative' },
  
];

// ===== NEWS TICKER DATA =====
const newsItems = [
  { date: "21 | Jan 2026", title: "Meeting with CDO Bhadohi for Administrative Support toward Varuna River Pilot Technology Demonstrations" },
  { date: "20 | Jan 2026", title: "Strategic Consultation with Prayagraj Officials for Scientific Rejuvenation of Varuna River Stretch" },
  { date: "17 | Jan 2026", title: "Interactive Session with VECC–DAE under \"Namami Gange\" for Holistic River Rejuvenation" },
  { date: "15 | Dec 2025", title: "Participation in NMCG Workshop on Real-Time Water Quality Monitoring Stations, New Delhi" },
  { date: "11 | Dec 2025", title: "SLCR Participates in IWT-RRR National Symposium on Innovations in Water Treatment & Resource Recovery" },
  { date: "30 | Oct 2025", title: "4th International Conference on River Health (RHAR 2025) Organized at IIT (BHU), Varanasi" },
  { date: "15 | Oct 2025", title: "Meeting with CDO Varanasi on Managed Aquifer Recharge (MAR) Structures along Varuna River" },
  { date: "26 | Aug 2025", title: "Participation in Stockholm World Water Week 2025 – \"River Cities Reimagined\" Session" },
  { date: "21 | Aug 2025", title: "Two-Day Expert Workshop on Nature-Based Solutions for Varuna & Assi River Rejuvenation" },
  { date: "29 | Jul 2025", title: "Visit of H.E. Shri Manish Prabhat, Ambassador of India to Denmark at SLCR" },
  { date: "21 | Jul 2025", title: "Expert Meeting on Decision Support System (DSS) for Water Resource Management" },
  { date: "17 | Jul 2025", title: "Visit of Shri Dheeraj Joshi to Review SLCR Research Activities" },
  { date: "16 | Jul 2025", title: "Workshop on Characterization of Emerging Pollutants & Fingerprint Analysis" },
  { date: "04 | Jul 2025", title: "Expert Workshop on Hydrogeological Modeling of Varuna Basin for Recharge Planning" },
  { date: "27 | Jun 2025", title: "Technical Visit to 30 MLD Advanced Oxidation Wastewater Treatment Plant near Assi Ghat" },
  { date: "23 | Jun 2025", title: "Stakeholder Interaction with SMCG-UP & GIZ Team at Lucknow" },
  { date: "26 | May 2025", title: "Capacity Building Programme on TEM Data Processing & Interpretation" },
  { date: "30 | Mar 2025", title: "Training on Thermal Drone Imaging for Environmental Monitoring" },
];

// ===== MAJOR OBJECTIVES DATA =====
const objectives = [
  {
    icon: Users,
    title: 'Knowledge Platform',
    description: 'Create a platform between Government authorities, Knowledge institutions, technology providers and citizens for knowledge sharing and co-creation to achieve clean river water.'
  },
  {
    icon: Globe,
    title: 'Innovative Solutions',
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

// ===== NEWS SECTION (ORIGINAL MARQUEE ANIMATION) =====
function NewsSection() {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-4 flex items-center justify-center gap-2">
        <Megaphone className="w-5 h-5 text-white animate-pulse" />
        <h3 className="text-lg font-bold text-white tracking-wide">News</h3>
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 p-3 relative overflow-hidden bg-slate-50/50 min-h-[300px]">
        <style>{`
          @keyframes marquee-vertical {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          .animate-marquee-vertical {
            animation: marquee-vertical 40s linear infinite;
          }
          .animate-marquee-vertical:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="absolute inset-0 overflow-hidden py-4">
          {/* Marquee Animation */}
          <div className="animate-marquee-vertical space-y-3 px-1">
            {/* Duplicate list for seamless loop */}
            {[...newsItems, ...newsItems].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-start gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-semibold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full w-fit">{item.date}</span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed group-hover:text-teal-700 transition-colors">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== HERO IMAGE SLIDER COMPONENT =====
function HeroImageSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const imageIndex = Math.abs(page % sliderImages.length);
  const prevImageIndex = (imageIndex - 1 + sliderImages.length) % sliderImages.length;
  const nextImageIndex = (imageIndex + 1) % sliderImages.length;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      zIndex: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="relative group">
      <section
        className="relative w-full h-[550px] sm:h-[700px] md:h-[800px] overflow-hidden bg-slate-900"
        onMouseEnter={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* LEFT PREVIEW */}
          <div className="relative h-full w-[15%] z-10 overflow-hidden hidden md:block">
            <div className="relative w-full h-full">
              <Image
                src={sliderImages[prevImageIndex].src}
                alt="Previous"
                fill
                className="object-cover blur-[2px] brightness-[0.4]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => paginate(-1)}
                  // className="z-20 p-4 rounded-full bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:scale-110 focus:outline-none cursor-pointer group/arrow"
                >
                  <ChevronLeft className="w-20 h-20 text-white/50 group-hover/arrow:text-white drop-shadow-lg blur-[2px]" />
                </button>
              </div>
            </div>
          </div>

          {/* CENTER MAIN IMAGE */}
          <div className="relative w-full md:w-[70%] h-full mx-auto z-20 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={sliderImages[imageIndex].src}
                  alt={sliderImages[imageIndex].alt}
                  fill
                  className="object-cover shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PREVIEW */}
          <div className="relative h-full w-[15%] z-10 overflow-hidden hidden md:block">
            <div className="relative w-full h-full">
              <Image
                src={sliderImages[nextImageIndex].src}
                alt="Next"
                fill
                className="object-cover blur-[2px] brightness-[0.4]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => paginate(1)}
                  // className="z-20 p-4 rounded-full bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:scale-110 focus:outline-none cursor-pointer group/arrow"
                >
                  <ChevronRight className="w-20 h-20 text-white/50 group-hover/arrow:text-white drop-shadow-lg blur-[2px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between md:hidden z-30 pointer-events-none">
            <button onClick={() => paginate(-1)} className="pointer-events-auto p-2 rounded-full bg-black/20 backdrop-blur-sm text-white">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={() => paginate(1)} className="pointer-events-auto p-2 rounded-full bg-black/20 backdrop-blur-sm text-white">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {sliderImages.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                className={`transition-all rounded-full ${
                  i === imageIndex
                    ? 'bg-white w-8 h-2'
                    : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== MAIN HOME PAGE COMPONENT =====
export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* ===== HERO IMAGE SLIDER ===== */}
      <HeroImageSlider />

      {/* ===== MAIN CONTENT AREA ===== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="relative z-10 w-[98%] max-w-[1900px] mx-auto space-y-12">

          {/* === ROW 1: VISION (70%) & COORDINATOR MESSAGE (30%) === */}
          <div className="grid lg:grid-cols-10 gap-8 items-stretch">

            {/* LEFT: VISION (70% WIDTH) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-[100px] -z-0 opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
                      Vision of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">SLCR</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full mt-2" />
                  </div>
                </div>

                <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
                  <p>
                    The <strong>Smart Laboratory on Clean Rivers (SLCR)</strong> in Varanasi is a flagship Indo-Danish initiative advancing sustainable rejuvenation of small rivers and tributaries through integrated scientific and institutional collaboration. Conceptualized under the joint leadership of the Prime Ministers of India and Denmark, the initiative was formalized through a Memorandum of Understanding (MoU) in September 2022.
                  </p>
                  <p>
                    SLCR aims to mobilize global expertise, advanced technologies, and best practices to support holistic river rejuvenation aligned with environmental sustainability, economic viability, and social relevance. The laboratory functions as a collaborative platform for <strong>knowledge creation, transfer, and co-creation</strong>, linking government authorities, research institutions, technology providers, and citizens within an operational governance framework.
                  </p>
                  <p>
                    SLCR adopts a <strong>Living Lab approach</strong> to enable real-world testing and validation of innovative river rejuvenation solutions. The initiative directly supports the National Mission for Clean Ganga (NMCG) by focusing on small rivers and tributaries that critically influence basin-scale water quality outcomes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: COORDINATOR'S MESSAGE (30% WIDTH) - SQUARE PHOTO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-full flex flex-col">
                <div className="bg-gradient-to-r from-[#0a3d62] to-[#0e5c91] p-6 text-white relative">
                  <MessageSquareQuote className="absolute top-4 right-4 w-12 h-12 text-white/10" />
                  <h3 className="text-xl font-bold relative z-10">Coordinator's Desk</h3>
                  <p className="text-blue-200 text-sm relative z-10">Leadership Insight</p>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow relative overflow-y-auto">
                  <div className="relative z-10 space-y-4 text-sm text-slate-700 leading-relaxed text-justify">
                  
                    <p>
                      SLCR operates as a <strong className="text-slate-900">living laboratory</strong> for testing and validating innovative management and intervention approaches for small rivers and tributaries, which play a critical role in basin-scale river health. The <span className="font-semibold text-cyan-600 bg-cyan-50 px-1 rounded">Varuna River Basin</span> is the pilot site, enabling real-world application of integrated planning, monitoring, and management approaches.
                    </p>
                    <p>
                      The initiative brings together government agencies, academic institutions, technology providers, and citizens through a collaborative knowledge, ensuring solutions are practical, scalable, and sustainable.
                    </p>
                    <p>
                      Through collaboration with Danish partners, SLCR is developing decision-support systems, hydrogeological assessment tools, and pollutant monitoring frameworks with potential for replication across Indian river systems and international river networks.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                    <p className="text-lg font-bold text-[#0a3d62] font-serif">
                      " आपो हि ष्ठा मयोभुवः  "
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      (Waters are indeed the source of well-being)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* === ROW 2: OUR AIM (70%) & NEWS (30%) === */}
          <div className="grid lg:grid-cols-10 gap-8">

            {/* LEFT: OUR AIM (70% WIDTH) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-bl-[100px] -z-0 opacity-40" />

              <div className="relative z-10">

                {/* Title */}
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Aim</span>
                  </h2>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                </div>

                {/* Vision Statement */}
                <div className="mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 italic text-lg text-slate-700 leading-relaxed">
                  "To bring global knowledge and solutions on holistic and sustainable rejuvenation of small rivers that are economically, environmentally and socially sustainable in the local context."
                </div>

                {/* Content Points */}
                <div className="space-y-4">
                  {/* Point 1 */}
                  <div className="flex gap-4">
                    <div className="min-w-fit">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        ✓
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-700 leading-relaxed text-justify">
                        The government of India is dedicated towards clean and sustainable rivers. Hon'ble Prime Minister <span className="font-bold text-slate-900">Shri Narendra Modi</span> conceptualised the visionary Smart Laboratory for Clean Rivers (SLCR) initiative with his Danish counterpart.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex gap-4">
                    <div className="min-w-fit">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        ✓
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-700 leading-relaxed text-justify">
                        The Smart Laboratory in Varanasi serves as a platform for <span className="font-bold text-slate-900">knowledge creation, transfer, and co-creation</span>; it provides global and local sustainable solutions for the rejuvenation of streams/rivers, jointly managed by Indian and Danish partners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: NEWS (30% WIDTH) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <NewsSection />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== MAJOR OBJECTIVES SECTION ===== */}
      <section className="py-4 sm:py-6 px-4 bg-white overflow-hidden relative">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[800px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1700px] mx-auto relative">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Core</span> Intent.
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl shadow-slate-100/80 bg-white">
            {objectives.slice(0, 4).map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`
                  group relative flex flex-col p-10 xl:p-12 cursor-default
                  transition-all duration-500 ease-out
                  hover:bg-gradient-to-b hover:from-blue-600 hover:to-blue-700
                  ${index < 3 ? 'border-b lg:border-b-0 lg:border-r border-slate-100' : ''}
                `}
              >
                {/* Number */}
                <div className="mb-10">
                  <span className="text-[72px] font-black leading-none text-slate-100 group-hover:text-blue-500/30 transition-all duration-500 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl xl:text-2xl font-bold leading-tight text-slate-900 group-hover:text-white transition-colors duration-500">
                    {obj.title}
                  </h3>
                  <p className="text-sm xl:text-base font-normal leading-relaxed text-slate-500 group-hover:text-blue-100 transition-colors duration-500">
                    {obj.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-[2px] bg-slate-200 group-hover:bg-white/40 group-hover:w-10 transition-all duration-500 rounded-full" />
                    <div className="w-2 h-[2px] bg-slate-200 group-hover:bg-white/40 transition-colors duration-500 rounded-full" />
                  </div>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500">
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>

                {/* Subtle shine on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* ===== VIDEO SECTION ===== */}
      {/* <VideoSection src="/Videos/master.m3u8" /> */}
    </div>
  );
}