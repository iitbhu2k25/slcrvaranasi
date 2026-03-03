'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Lightbulb, Shield, Scale, Sparkles, Award } from 'lucide-react';

const coreValues = [
    {
        icon: Leaf,
        title: 'Sustainability',
        description: 'Sustainability lies at the core of SLCR\'s approach, emphasizing environmentally sound, socially inclusive, and economically viable solutions for river and water resource management.',
        gradient: 'from-emerald-500 to-teal-600',
        glowColor: 'emerald'
    },
    {
        icon: Users,
        title: 'Collaboration and Partnership',
        description: 'Collaboration and Partnership are central to SLCR\'s functioning. The laboratory promotes active cooperation among government bodies, academic institutions, industries, and communities, recognizing that complex river challenges require collective action.',
        gradient: 'from-blue-500 to-cyan-600',
        glowColor: 'blue'
    },
    {
        icon: Lightbulb,
        title: 'Innovation and Experimentation',
        description: 'Innovation and Experimentation drive SLCR\'s work culture. The laboratory encourages testing, learning, and refinement of innovative ideas through real-time field experimentation and adaptive management practices.',
        gradient: 'from-amber-500 to-orange-600',
        glowColor: 'amber'
    },
    {
        icon: Shield,
        title: 'Scientific Integrity and Excellence',
        description: 'Scientific Integrity and Excellence guide all research and analytical activities at SLCR. Decisions and recommendations are grounded in robust data, rigorous analysis, and transparent methodologies.',
        gradient: 'from-violet-500 to-purple-600',
        glowColor: 'violet'
    },
    {
        icon: Heart,
        title: 'Inclusivity and Community Engagement',
        description: 'Inclusivity and Community Engagement ensure that local knowledge, stakeholder perspectives, and societal needs are integrated into solution design and implementation.',
        gradient: 'from-rose-500 to-pink-600',
        glowColor: 'rose'
    },
    {
        icon: Scale,
        title: 'Transparency and Accountability',
        description: 'Transparency and Accountability underpin governance and project implementation, fostering trust, responsible decision-making, and measurable outcomes.',
        gradient: 'from-cyan-500 to-teal-600',
        glowColor: 'cyan'
    }
];

export default function CoreValuesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-900 to-cyan-900 relative overflow-hidden">
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
                        y: [0, -25, 0],
                        x: [0, 15, 0],
                        rotate: [0, 8, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-24 left-16 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ 
                        y: [0, 25, 0],
                        x: [0, -15, 0],
                        rotate: [0, -8, 0]
                    }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-24 right-16 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.15, 1],
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-pink-400/10 rounded-full blur-3xl" 
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
                            <span className="bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                                Core Values
                            </span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                            The Smart Laboratory on Clean Rivers (SLCR) operates on a strong foundation of values that guide its activities, partnerships, and long-term impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="relative py-12 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                                        {/* Gradient Top Border */}
                                        <div className={`h-2 bg-gradient-to-r ${value.gradient}`} />
                                        
                                        {/* Card Content */}
                                        <div className="p-8">
                                            {/* Icon */}
                                            <motion.div
                                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                                className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                            >
                                                <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                                            </motion.div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                                                {value.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-600 leading-relaxed text-base">
                                                {value.description}
                                            </p>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className="relative h-1">
                                            <motion.div
                                                initial={{ width: '0%' }}
                                                whileInView={{ width: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                                                className={`h-full bg-gradient-to-r ${value.gradient} opacity-50`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom Impact Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
                    >
                        <div className="text-center">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-2xl mb-6"
                            >
                                <Sparkles className="w-10 h-10 text-white" strokeWidth={2} />
                            </motion.div>
                            
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Values-Driven Impact
                            </h3>
                            <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
                                These core values collectively define SLCR's identity and ensure that its work contributes to meaningful, lasting, and equitable outcomes for river ecosystems and the communities that depend on them.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom spacing */}
            <div className="h-12" />
        </div>
    );
}