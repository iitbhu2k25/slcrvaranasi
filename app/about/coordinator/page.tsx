'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Award, MessageSquare, Waves } from 'lucide-react';

export default function CoordinatorMessagePage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

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
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-28 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" 
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
                            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl">
                                Coordinator's Message
                            </span>
                        </h1>
                        
                        {/* <p className="text-lg sm:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                            Strategic vision for the Smart Laboratory on Clean Rivers (SLCR)
                        </p> */}
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="relative py-2 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-8xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                            {/* Left Column: Profile Section */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="lg:col-span-2 bg-gradient-to-br from-cyan-800 to-cyan-900 p-8 lg:p-10 flex flex-col items-center justify-center relative overflow-hidden"
                            >
                                {/* Decorative Background */}
                                <div className="absolute inset-0 bg-white/5" style={{
                                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                                    backgroundSize: '20px 20px'
                                }} />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
                                
                               <motion.div
    variants={itemVariants}
    className="relative z-10 flex flex-col items-center w-full"
>
    {/* Clickable Image Container */}
    <motion.a 
        href="https://www.iitbhu.ac.in/dept/civ/people/shishirgciv"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="relative w-56 h-72 md:w-124 md:h-90 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 mb-8 bg-white cursor-pointer group"
    >
        <Image 
            src="/persons/sgsir1.png" 
            alt="Prof. Shishir Gaur"
            fill
            className="object-cover p-2 transition-transform duration-500 group-hover:scale-105"
            unoptimized
            priority
        />
        {/* Hover Overlay Hint */}
        <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white/90 text-cyan-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                View Official Profile
            </span>
        </div>
    </motion.a>

                                    {/* Profile Info */}
                                    <div className="text-center w-full">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                            Prof. Shishir Gaur
                                        </h2>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                                            <Award className="w-4 h-4 text-white" />
                                            <p className="text-base md:text-lg font-semibold text-white">
                                                Coordinator, SLCR
                                            </p>
                                        </div>
                                        <div className="w-16 h-1 bg-white/50 rounded-full mx-auto mb-6" />
                                        <div className="space-y-1 text-white/90">
                                            <p className="text-sm md:text-base font-medium">
                                                Department of Civil Engineering
                                            </p>
                                            <p className="text-sm md:text-base font-medium">
                                                Indian Institute of Technology (BHU)
                                            </p>
                                            <p className="text-sm md:text-base font-medium">
                                                Varanasi, India
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Column: Message Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="lg:col-span-3 p-8 lg:p-12 relative bg-white"
                            >
                                {/* Decorative Quote Icon */}
                                <Quote className="absolute top-8 right-8 w-20 h-20 text-blue-50" strokeWidth={1.5} />
                                
                                <div className="relative z-10 space-y-6">
                                    {/* Drop Cap Paragraph */}
                                    <motion.p variants={itemVariants} className="text-slate-700 text-lg leading-relaxed">
                                        <span className="float-left font-black text-6xl text-blue-600 mr-3 leading-[0.85]">A</span>
                                        <span className="block overflow-hidden">s a coordinator, I have the privilege to lead the <strong className="text-slate-900 font-bold">Smart Laboratory on Clean Rivers (SLCR)</strong> under the Dept. of Civil Engg., IIT (BHU) Varanasi, a flagship Indo-Danish initiative advancing sustainable river rejuvenation. SLCR represents a strategic platform for integrating global knowledge, advanced technologies, and ground implemented solutions to address persistent challenges related to river water quality.</span>
                                    </motion.p>
                                    
                                    <motion.p variants={itemVariants} className="text-slate-700 text-lg leading-relaxed">
                                        SLCR operates as a <strong className="text-slate-900 font-bold">living laboratory</strong> for testing and validating innovative management and intervention approaches for small rivers and tributaries, which play a critical role in basin-scale river health. The <span className="font-semibold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">Varuna River Basin</span> is the pilot site, enabling real-world application of integrated planning, monitoring, and management approaches.
                                    </motion.p>

                                    <motion.p variants={itemVariants} className="text-slate-700 text-lg leading-relaxed">
                                        The initiative brings together government agencies, academic institutions, technology providers, and citizens through a collaborative knowledge, ensuring solutions are practical, scalable, and sustainable.
                                    </motion.p>

                                    <motion.p variants={itemVariants} className="text-slate-700 text-lg leading-relaxed">
                                        Through collaboration with Danish partners, SLCR is developing decision-support systems, hydrogeological assessment tools, and pollutant monitoring frameworks with potential for replication across Indian river systems and international river networks. The initiative seeks to contribute systematically to national efforts for river restoration by strengthening knowledge generation, institutional capacity, and solution transfer.
                                    </motion.p>

                                    {/* Sanskrit Quote Section */}
                                    <motion.div 
                                        variants={itemVariants}
                                        className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-l-4 border-blue-500"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <Waves className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="text-2xl md:text-3xl font-bold text-blue-700 font-serif mb-2">
                                                    "आपो ही ष्ठा मयोभुवः"
                                                </h4>
                                                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">
                                                    (Rigveda 10.9.1)
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-lg text-slate-700 italic font-medium">
                                            "Waters are indeed the source of well-being."
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
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
                        className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
                    >
                        <div className="text-center">
                            <motion.div
                                animate={{ 
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-2xl mb-6"
                            >
                                <Waves className="w-10 h-10 text-white" strokeWidth={2} />
                            </motion.div>
                            
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Leading River Rejuvenation
                            </h3>
                            <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
                                Under Prof. Gaur's leadership, SLCR continues to pioneer innovative approaches to river restoration, combining scientific excellence with practical implementation for sustainable water management.
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