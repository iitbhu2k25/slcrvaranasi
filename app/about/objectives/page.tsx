'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle, Users, Globe, Database, FlaskConical, GraduationCap, Lightbulb, Sparkles, Waves } from 'lucide-react';

export default function ObjectivesPage() {
    const objectives = [
        {
            icon: FlaskConical,
            title: 'Smart Living Laboratory',
            description: 'SLCR aims to function as a Smart Living Laboratory that integrates scientific research, policy evaluation, technological innovation, and field-level implementation within actual river systems. By combining virtual platforms with on-field experimentation, SLCR seeks to bridge the gap between theory and practice in river basin management.',
            gradient: 'from-violet-500 to-purple-600'
        },
        {
            icon: Users,
            title: 'Multi-stakeholder Engagement',
            description: 'A key objective of SLCR is to facilitate multi-stakeholder engagement by bringing together central and state government agencies, urban local bodies, academic institutions, research organizations, industries, and local communities. This collaborative ecosystem enables collective problem identification, solution co-creation, and coordinated action for clean river initiatives.',
            gradient: 'from-blue-500 to-cyan-600'
        },
        {
            icon: Globe,
            title: 'Global Best Practices',
            description: 'SLCR also focuses on the evaluation and localization of global best practices, including advanced technologies, governance frameworks, and sustainable policies in water resources management. These solutions are assessed for their applicability in Indian conditions, particularly for small and medium river systems.',
            gradient: 'from-teal-500 to-emerald-600'
        },
        {
            icon: Database,
            title: 'Data-driven Decision Making',
            description: 'Another major objective is to promote data-driven and evidence-based decision-making by developing hydrological models, analytical tools, and decision support systems that support river health assessment, planning, and management.',
            gradient: 'from-indigo-500 to-blue-600'
        },
        {
            icon: Lightbulb,
            title: 'Pilot-scale Solutions',
            description: 'SLCR aims to demonstrate pilot-scale solutions through its on-field Living Lab component, using selected river stretches as experimental sites. Successful interventions are further refined and prepared for upscaling at basin and national levels.',
            gradient: 'from-amber-500 to-orange-600'
        },
        {
            icon: GraduationCap,
            title: 'Capacity Building',
            description: 'In addition, SLCR is committed to capacity building and knowledge dissemination, supporting learning, training, and exchange of expertise among practitioners, policymakers, and researchers engaged in river rejuvenation and water management.',
            gradient: 'from-rose-500 to-pink-600'
        }
    ];

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
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ 
                        y: [0, 30, 0],
                        x: [0, -20, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-32 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" 
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
                            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl">
                                Objectives
                            </span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                            The Smart Laboratory on Clean Rivers (SLCR) has been established as a pioneering initiative under the India–Denmark partnership to support sustainable river rejuvenation through innovation, collaboration, and real-world experimentation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Objectives Grid */}
            <section className="relative py-12 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {objectives.map((objective, index) => {
                            const IconComponent = objective.icon;
                            return (
                                <motion.div
                                    key={objective.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                                        {/* Card Header with Icon */}
                                        <div className={`bg-gradient-to-br ${objective.gradient} p-6 relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                                            
                                            <div className="relative flex items-center gap-4">
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
                                                        <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Objective {index + 1}</span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white">{objective.title}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-8">
                                            <p className="text-slate-700 leading-relaxed text-lg">
                                                {objective.description}
                                            </p>
                                        </div>

                                        {/* Decorative Bottom Border */}
                                        <div className={`h-1.5 bg-gradient-to-r ${objective.gradient}`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom spacing */}
            <div className="h-12" />
        </div>
    );
}