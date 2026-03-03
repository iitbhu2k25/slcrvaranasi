'use client';

import { motion } from 'framer-motion';
import { Eye, Rocket, Droplet, Waves, Sparkles, Target, Heart, Leaf, Users, Lightbulb, Shield, Scale, Award } from 'lucide-react';

const coreValues = [
    {
        icon: Leaf,
        title: 'Sustainability',
        description: 'Sustainability lies at the core of SLCR\'s approach, emphasizing environmentally sound, socially inclusive, and economically viable solutions for river and water resource management.',
        gradient: 'from-emerald-500 to-teal-600',
    },
    {
        icon: Users,
        title: 'Collaboration and Partnership',
        description: 'Collaboration and Partnership are central to SLCR\'s functioning. The laboratory promotes active cooperation among government bodies, academic institutions, industries, and communities, recognizing that complex river challenges require collective action.',
        gradient: 'from-blue-500 to-cyan-600',
    },
    {
        icon: Lightbulb,
        title: 'Innovation and Experimentation',
        description: 'Innovation and Experimentation drive SLCR\'s work culture. The laboratory encourages testing, learning, and refinement of innovative ideas through real-time field experimentation and adaptive management practices.',
        gradient: 'from-amber-500 to-orange-600',
    },
    {
        icon: Shield,
        title: 'Scientific Integrity and Excellence',
        description: 'Scientific Integrity and Excellence guide all research and analytical activities at SLCR. Decisions and recommendations are grounded in robust data, rigorous analysis, and transparent methodologies.',
        gradient: 'from-violet-500 to-purple-600',
    },
    {
        icon: Heart,
        title: 'Inclusivity and Community Engagement',
        description: 'Inclusivity and Community Engagement ensure that local knowledge, stakeholder perspectives, and societal needs are integrated into solution design and implementation.',
        gradient: 'from-rose-500 to-pink-600',
    },
    {
        icon: Scale,
        title: 'Transparency and Accountability',
        description: 'Transparency and Accountability underpin governance and project implementation, fostering trust, responsible decision-making, and measurable outcomes.',
        gradient: 'from-cyan-500 to-teal-600',
    }
];

export default function VisionMissionPage() {
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
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ 
                        y: [0, 20, 0],
                        x: [0, -10, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl" 
                />
            </div>

            {/* Hero Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
                            <span className="bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                                Vision & Mission
                            </span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                            Guiding principles that drive SLCR&apos;s commitment to clean river rejuvenation and sustainable water management.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Cards */}
            <section className="relative py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Vision Card - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="group"
                    >
                        <div className="bg-gradient-to-br from-teal-500/90 to-cyan-600/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]">
                            <div className="grid lg:grid-cols-5 gap-0">
                                {/* Icon Section */}
                                <div className="lg:col-span-1 bg-gradient-to-br from-teal-600 to-cyan-700 p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/5" style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }} />
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative w-24 h-24 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl"
                                    >
                                        <Eye className="w-12 h-12 lg:w-16 lg:h-16 text-white" strokeWidth={2} />
                                    </motion.div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mt-6 tracking-tight">Vision</h2>
                                    <Droplet className="w-8 h-8 text-white/30 mt-4" />
                                </div>

                                {/* Content Section */}
                                <div className="lg:col-span-4 p-8 lg:p-12 bg-white/95 backdrop-blur-sm">
                                    <div className="space-y-6">
                                        <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                                            The vision of the Smart Laboratory on Clean Rivers (SLCR) is to emerge as a <strong className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">globally recognized center of excellence</strong> for clean river rejuvenation and sustainable water resources management, fostering resilient river ecosystems through innovation, collaboration, and science-driven solutions.
                                        </p>
                                        
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full" />
                                            <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                                                SLCR envisions a future where rivers are managed as living systems, supported by adaptive governance, technological innovation, and active participation of all stakeholders, ensuring ecological integrity and societal well-being.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission Card - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="group"
                    >
                        <div className="bg-gradient-to-br from-blue-500/90 to-indigo-600/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]">
                            <div className="grid lg:grid-cols-5 gap-0">
                                {/* Icon Section */}
                                <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/5" style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }} />
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative w-24 h-24 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl"
                                    >
                                        <Rocket className="w-12 h-12 lg:w-16 lg:h-16 text-white" strokeWidth={2} />
                                    </motion.div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mt-6 tracking-tight">Mission</h2>
                                    <Target className="w-8 h-8 text-white/30 mt-4" />
                                </div>

                                {/* Content Section */}
                                <div className="lg:col-span-4 p-8 lg:p-12 bg-white/95 backdrop-blur-sm">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5" />
                                            <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                                                The mission of SLCR is to establish a <strong className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">dynamic and inclusive living laboratory</strong> that enables learning, engagement, co-creation, and experimentation in real river environments.
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5" />
                                            <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                                                SLCR is committed to strengthening the <strong className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">science–policy–practice interface</strong> by integrating research outputs, field observations, and policy frameworks into actionable strategies for river rejuvenation.
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5" />
                                            <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                                                Through the India–Denmark partnership, SLCR seeks to <strong className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">leverage international expertise and shared knowledge</strong> to address complex water challenges, while ensuring solutions are locally relevant and scalable.
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5" />
                                            <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                                                The mission further includes supporting national priorities such as river rejuvenation and sustainable water management by generating <strong className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">replicable models, decision-support tools, and institutional knowledge</strong> that can be adopted across river basins in India.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                     

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                            <span className="bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                                Core Values
                            </span>
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                            The Smart Laboratory on Clean Rivers (SLCR) operates on a strong foundation of values that guide its activities, partnerships, and long-term impact.
                        </p>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

                    {/* Values Impact Statement */}
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

            {/* Bottom CTA Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
                    >
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                                    <Waves className="w-8 h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                        Committed to River Rejuvenation
                                    </h3>
                                    <p className="text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl">
                                        Together, we&apos;re building a sustainable future where rivers thrive as living ecosystems, supported by science, innovation, and collaborative action.
                                    </p>
                                </div>
                            </div>
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
                            >
                                <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-300" />
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