'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Globe2, Sparkles, Award, ExternalLink, Users } from 'lucide-react';

// Partner Institute data
const indianInstitutes = [
  {
    name: 'IIT (BHU) Varanasi',
    description: 'IIT (BHU) Varanasi serves as the host institution for SLCR, providing academic leadership, technical expertise, and coordination support for research, innovation, and implementation in river rejuvenation.',
    logo: '/about/Picture1.png',
    link: 'https://www.iitbhu.ac.in'
  },
  {
    name: 'IIT Delhi',
    description: 'IIT Delhi contributes advanced research expertise in water resources engineering, environmental systems, and sustainable infrastructure to support evidence-based river management.',
    logo: '/about/Picture2.png',
    link: 'https://home.iitd.ac.in'
  },
  {
    name: 'IIT Bombay',
    description: 'IIT Bombay supports SLCR through interdisciplinary research in hydrology, data analytics, and environmental modeling for smart and scalable river solutions.',
    logo: '/about/Picture7.png',
    link: 'https://www.iitb.ac.in/'
  },
  {
    name: 'IIT Madras',
    description: 'IIT Madras brings strong capabilities in water systems modeling, urban water management, and technological innovation for sustainable river basin planning.',
    logo: '/about/Picture8.png',
    link: 'https://www.iitm.ac.in'
  },
  {
    name: 'IIT Guwahati',
    description: 'IIT Guwahati contributes expertise in river hydraulics, geomorphology, and environmental monitoring, particularly relevant for river systems in diverse climatic regions.',
    logo: '/about/Picture3.png',
    link: 'https://www.iitg.ac.in'
  },
  {
    name: 'Banaras Hindu University',
    description: 'Banaras Hindu University provides multidisciplinary academic support and regional knowledge to strengthen research, outreach, and capacity-building initiatives under SLCR.',
    logo: '/about/Picture4.png',
    link: 'https://www.bhu.ac.in'
  },
  {
    name: 'Central Ground Water Board',
    description: 'CGWB supports SLCR by providing groundwater data, technical guidance, and regulatory insights essential for integrated surface water–groundwater management.',
    logo: '/about/Picture9.jpg',
    link: 'https://cgwb.gov.in'
  }
];

const internationalInstitutes = [
  {
    name: 'Aarhus University',
    description: 'Aarhus University contributes international expertise in water governance, environmental science, and sustainability, strengthening the India–Denmark knowledge partnership.',
    logo: '/about/Picture10.png',
    link: 'https://www.au.dk'
  },
  {
    name: 'Université de Lyon',
    description: 'Université de Lyon supports SLCR through collaborative research in environmental sciences, urban ecology, and sustainable water management practices.',
    logo: '/about/Picture11.png',
    link: 'https://www.universite-lyon.fr'
  },
  {
    name: 'University of Copenhagen',
    description: 'The University of Copenhagen brings strong research capabilities in hydrology, climate science, and ecosystem-based water management to SLCR initiatives.',
    logo: '/about/Picture5.png',
    link: 'https://www.ku.dk'
  },
  {
    name: 'VetAgro Sup',
    description: 'VetAgro Sup contributes expertise in environmental health, water quality, and ecosystem interactions relevant to riverine and watershed sustainability.',
    logo: '/about/Picture6.svg',
    link: 'https://www.vetagro-sup.fr'
  },
  {
    name: 'Hokkaido University',
    description: 'Hokkaido University supports SLCR with advanced research in cold-region hydrology, river processes, and climate-resilient water systems.',
    logo: '/about/Picture12.png',
    link: 'https://www.hokudai.ac.jp'
  }
];

// Institute Card Component
function InstituteCard({ institute, index }: { institute: typeof indianInstitutes[0], index: number }) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col group"
    >
      {/* Gradient Top Border */}
      <div className="h-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400" />
      
      {/* Logo Section */}
      <div className="p-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/30 to-blue-100/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
        <div className="h-32 flex items-center justify-center relative z-10">
          <Image
            src={institute.logo}
            alt={institute.name}
            width={120}
            height={120}
            className="object-contain max-h-28 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 text-center mb-3 leading-tight group-hover:text-teal-700 transition-colors">
          {institute.name}
        </h3>
        <p className="text-sm text-slate-600 text-center leading-relaxed flex-grow">
          {institute.description}
        </p>
        
        {institute.link && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-5 flex items-center justify-center gap-2 text-teal-600 font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visit Website</span>
          </motion.div>
        )}
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  if (institute.link) {
    return (
      <a href={institute.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

export default function PartnerInstitutesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-28 right-20 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-400/10 rounded-full blur-3xl" 
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Partner Institutes
              </span>
            </h1>
            
            {/* <p className="text-lg sm:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              SLCR collaborates with leading academic institutions and research organizations across India and internationally, bringing together expertise in water management, environmental science, and sustainable development.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Indian Institutions */}
      <section className="relative py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-orange-400 via-white to-green-400 rounded-full"
              />
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Building2 className="w-5 h-5 text-orange-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Indian Institutions</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {indianInstitutes.map((institute, index) => (
              <InstituteCard key={institute.name} institute={institute} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* International Institutions */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"
              />
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Globe2 className="w-5 h-5 text-blue-300" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">International Institutions</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalInstitutes.map((institute, index) => (
              <InstituteCard key={institute.name} institute={institute} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-white to-green-400 rounded-2xl flex items-center justify-center shadow-xl mb-4">
                  <Building2 className="w-8 h-8 text-slate-800" strokeWidth={2.5} />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">{indianInstitutes.length}</h4>
                <p className="text-slate-200 text-sm uppercase tracking-wide">Indian Partners</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl mb-4">
                  <Globe2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">{internationalInstitutes.length}</h4>
                <p className="text-slate-200 text-sm uppercase tracking-wide">International Partners</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl mb-4">
                  <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">{indianInstitutes.length + internationalInstitutes.length}</h4>
                <p className="text-slate-200 text-sm uppercase tracking-wide">Total Collaborations</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-12" />
    </div>
  );
}