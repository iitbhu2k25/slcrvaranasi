'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { Building2, Globe, Lightbulb, Target, BookOpen, Handshake } from 'lucide-react';

export default function SECRProject() {
    return (
        <main className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section
                className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/project_images/SECR/new3.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

                {/* Floating Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="inline-block text-teal-300 text-lg sm:text-xl font-medium tracking-widest uppercase">
                            Project SLCR Secretariat and Holistic River management
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-green-100 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl">
                            Establishment of Secretariat and Holistic River management
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
                    >
                        Smart Laboratory on Clean Rivers - Varanasi
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
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About SLCR Secretariat</h2>
                            <div className="prose prose-lg max-w-none text-justify">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The <strong className="text-primary">Smart Laboratory on Clean Rivers (SLCR)</strong> in Varanasi is a pioneering Indo-Danish collaboration aimed at advancing sustainable river rejuvenation. Conceptualized under the joint leadership of Prime Minister Narendra Modi and Danish Prime Minister Mette Frederiksen, the initiative was formalized through a Memorandum of Understanding between India&apos;s Ministry of Jal Shakti and Denmark&apos;s Ministry of Environment in September 2022.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    The core vision of SLCR is to mobilize global knowledge, technologies, and best practices to enable the holistic and sustainable rejuvenation of small rivers and tributaries. Emphasis is placed on solutions that are environmentally sound, economically viable, and socially appropriate within local contexts.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right - SECR Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-full min-h-[400px]"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full bg-white relative">
                                <Image
                                    src="/project_images/lab_component2.png"
                                    alt="SLCR Secretariat"
                                    fill
                                    quality={100}
                                    className="object-contain p-2"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Functions Section */}
            <section className="py-12 sm:py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Core Functions</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Handshake className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Collaborative Platform</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify">
                                            The laboratory functions as a collaborative platform for knowledge creation, transfer, and co-creation, bringing together government authorities, academic and research institutions, technology providers, and citizens.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Living Lab Approach</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify">
                                            SLCR addresses contemporary challenges related to river water quality and ecosystem health through targeted research and development. By adopting a Living Lab approach, the initiative facilitates real-world testing of innovative interventions, ensuring scalability, cost-effectiveness, and long-term sustainability.
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
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">NMCG Support</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify">
                                            The program directly supports the National Mission for Clean Ganga, with a strategic focus on small rivers and tributaries that are often underrepresented in large-scale river restoration efforts.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <BookOpen className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Knowledge Repository</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify">
                                            A key objective of SLCR is the development of a comprehensive, structured repository of knowledge, data, and validated technologies. This repository will enable systematic knowledge sharing and replication through national and international platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Varuna River Section */}
            <section className="py-12 sm:py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-3xl border border-green-100">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Varuna River Demonstration Site</h3>
                                    <p className="text-gray-600">Living Lab for holistic river basin planning</p>
                                </div>
                            </div>
                            <div className="prose prose-lg max-w-none text-justify space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    The Varuna River has been identified as the demonstration site for implementing and evaluating integrated, technology-enabled interventions based on holistic river basin planning. Leveraging advanced monitoring tools, international expertise, and locally adapted governance and business models, SLCR seeks to demonstrate viable pathways for river rejuvenation.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    The primary outcome will be a portfolio of proven, context-specific solutions that can be scaled across other small rivers and tributaries in India and in partner countries associated with the Global River Cities Alliance.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Objectives Section */}
            <section className="py-12 sm:py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-left mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Key Objectives</h2>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        SLCR will develop the repository of all collected knowledge and technologies, which can be shared through various initiatives like River Cities Alliance/Global River Cities Alliance to perform rejuvenation work on other small rivers or tributaries in India and in GRCA member countries.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        Create a platform between Government authorities, Knowledge institutions, technology providers and citizens for knowledge sharing and co-creation to achieve clean river water.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        To bring the global solutions on current challenges in the field of clean river water and conduct research and development to fit in real environment through Living lab approach to make them scalable and economically attractive.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        To Support NMCG in achieving its vision by focusing on small rivers & provide preliminary solution for the local problems and provide inputs for Urban River Management Plans and other interventions being carried out by other agencies.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        Holistic river management through rejuvenation and protection of critical sites across the Varuna watershed, including river origins, confluence points, urban and non-urban stretches, and the broader watershed area.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Holistic River Management Section */}
            <section className="py-12 sm:py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start gap-4 mb-8 justify-center">
                            
                            <div>
                                <h2 className="text-3xl sm:text-4xl  font-bold text-primary">Holistic River Management</h2>
                                
                            </div>
                        </div>

                       
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src="/project_images/SECR/holistic_1.webp"
                                        alt="Holistic river management map highlighting critical watershed sites"
                                        fill
                                        quality={100}
                                        className="object-contain bg-white"
                                    />
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src="/project_images/SECR/holistic_2.webp"
                                        alt="Holistic river management planning visual for Varuna watershed"
                                        fill
                                        quality={100}
                                        className="object-contain bg-white"
                                    />
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src="/project_images/SECR/holistic_3.webp"
                                        alt="Critical sites identified under holistic river management"
                                        fill
                                        quality={100}
                                        className="object-contain bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>







        </main>
    );
}
