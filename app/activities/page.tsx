'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Sparkles, Activity, Zap, Droplets, Leaf, Users, GitBranch, GraduationCap } from 'lucide-react';

// Activities data with icons
const activities = [
  {
    id: 'A1',
    icon: GitBranch,
    title: 'Holistic River Plan',
    gradient: 'from-blue-500 to-blue-600',
    items: [
      'River Rejuvenation Plan including Revenue Generation model',
      'Storm & wastewater management plan',
      'Integration of Cultural heritage and Recreational sites'
    ]
  },
  {
    id: 'A2',
    icon: Target,
    title: 'Decision Support System',
    gradient: 'from-cyan-500 to-cyan-600',
    items: [
      'Development of a Hydrological and Hydrodynamic Model-based system',
      'Decision-making and planning support tools',
      'Basin-wide water dynamics analysis'
    ]
  },
  {
    id: 'A3',
    icon: Activity,
    title: 'Smart Monitoring',
    gradient: 'from-teal-500 to-teal-600',
    items: [
      'Data collection using emerging technologies',
      'Fingerprint analysis for characterization of non-targeted chemical and microbial/emerging pollutants',
      'Real-time monitoring systems'
    ]
  },
  {
    id: 'A4',
    icon: Zap,
    title: 'Innovative Technologies',
    gradient: 'from-green-500 to-green-600',
    items: [
      'Refurbishing of existing STPs to increase hydraulic and pollutant removal capacity',
      'Reuse of STP treated wastewater/Sludge',
      'Wastewater as a resource for revenue generation'
    ]
  },
  {
    id: 'A5',
    icon: Droplets,
    title: 'Sustainable Groundwater Management',
    gradient: 'from-sky-500 to-sky-600',
    items: [
      'River-Aquifer (RA) exchanges study',
      'Interaction of small rivers with groundwater',
      'Role in overall water budgeting of the basin'
    ]
  },
  {
    id: 'A6',
    icon: Leaf,
    title: 'Carbon-Neutral & Water-Positive Principles',
    gradient: 'from-emerald-500 to-emerald-600',
    items: [
      'Carbon and Water footprint evaluation for all SLCR interventions',
      'Contribution to carbon sequestration and water budget',
      'Achieving carbon neutrality and water positive environment'
    ]
  },
  {
    id: 'A7',
    icon: GraduationCap,
    title: 'Capacity Building & Outreach',
    gradient: 'from-indigo-500 to-indigo-600',
    items: [
      'Development of courses with focus on global sustainable solutions',
      'International exposure programs',
      'Knowledge sharing and training initiatives'
    ]
  }
];

export default function ActivitiesPage() {
  const topRow = activities.slice(0, 4);
  const bottomRow = activities.slice(4);

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
      </div>

      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Our Activities
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive activities driving the holistic rejuvenation of rivers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Row - 4 blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {topRow.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col min-h-[380px]">
                    {/* Header */}
                    <div className={`p-6 bg-gradient-to-br ${activity.gradient} relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                      
                      <div className="relative flex items-center gap-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full" />
                            <span className="text-xs font-medium text-white/80 uppercase tracking-widest">{activity.id}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white leading-tight relative">
                        {activity.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-start">
                      <ul className="space-y-3">
                        {activity.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${activity.gradient} rounded-full mt-2 flex-shrink-0`} />
                            <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`h-1.5 bg-gradient-to-r ${activity.gradient}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row - 3 blocks centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:max-w-5xl">
              {bottomRow.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                    className="group"
                  >
                    <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col min-h-[380px]">
                      {/* Header */}
                      <div className={`p-6 bg-gradient-to-br ${activity.gradient} relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                        
                        <div className="relative flex items-center gap-3 mb-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                          >
                            <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 bg-white/60 rounded-full" />
                              <span className="text-xs font-medium text-white/80 uppercase tracking-widest">{activity.id}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white leading-tight relative">
                          {activity.title}
                        </h3>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-start">
                        <ul className="space-y-3">
                          {activity.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-2 h-2 bg-gradient-to-r ${activity.gradient} rounded-full mt-2 flex-shrink-0`} />
                              <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Accent */}
                      <div className={`h-1.5 bg-gradient-to-r ${activity.gradient}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Target className="w-6 h-6 text-cyan-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Implementation</h2>
            </div>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Our phased approach to river rejuvenation from project outcomes to nationwide implementation
            </p>
          </motion.div>

          {/* Implementation Stages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 mb-12 border border-white/20 shadow-2xl"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stage: 'Stage 1', title: 'Project Outcomes/Results', desc: 'Initial research findings and pilot implementations' },
                { stage: 'Stage 2', title: 'Field Demonstration', desc: 'On-ground testing and validation of solutions' },
                { stage: 'Stage 3', title: 'Scaleup: Basin Level', desc: 'Expansion to entire river stretch and basin' },
                { stage: 'Stage 4', title: 'Secretariat Expansion', desc: 'Technology transfer and implementation on other rivers' }
              ].map((item, index) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-md hover:shadow-xl transition-all border border-teal-100"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-12" />
    </div>
  );
}