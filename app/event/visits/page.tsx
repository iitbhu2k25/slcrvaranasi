'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, CheckCircle, Sparkles, Award, Target, Lightbulb, Plane, Handshake } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const visits = [
    {
        title: 'DSS Staff Visit to Denmark - Innovation Management Training',
        date: '5th January - 17th January 2026',
        location: 'Copenhagen, Denmark',
        conductedBy: 'Danish Technological Institute & ISO 56000 Training Program',
        description: 'Dr. Akash Tiwari, Research Associate (DSS), attended an international training programme on Innovation Management held in Copenhagen, Denmark. The programme was centered on the ISO 56000 series of standards, which provide a structured framework for establishing, implementing, assessing, and continuously improving innovation management systems at both organizational and project levels.',
        detailedDescription: 'The training offered in-depth exposure to innovation governance, strategic intelligence, intellectual property management, innovation partnerships, design thinking, opportunity management, and innovation performance measurement. Particular emphasis was placed on applying innovation management principles to complex, interdisciplinary, public-sector, and sustainability-oriented initiatives. The programme included a visit to the BLOXHUB in Copenhagen, comprehensive training sessions at Copenhagen facilities, and concluded with a certification ceremony at the Danish Technological Institute, Taastrup, Denmark.',
        images: [
             '/visits/Picture14.jpg',
            '/visits/Picture15.jpg',
            '/visits/Picture16.jpg'
        ],
        tags: ['International', 'Innovation Management', 'ISO 56000'],
        technicalCoverage: [
            'ISO 56000 series standards for innovation management systems',
            'Innovation governance frameworks for organizational and project levels',
            'Strategic intelligence and opportunity management methodologies',
            'Intellectual property management in public-sector innovations',
            'Innovation partnerships and collaborative frameworks for sustainability',
            'Design thinking approaches for complex interdisciplinary challenges',
            'Innovation performance measurement and assessment techniques',
            'Application to public-sector and sustainability-oriented initiatives'
        ],
        objectives: [
            'Gain expertise in ISO 56000 innovation management standards and frameworks',
            'Enhance innovation-driven planning for the DSS and SLCR initiatives',
            'Strengthen stakeholder collaboration and adaptive decision-making capabilities',
            'Support effective design, implementation, and scaling of sustainable solutions'
        ],
        impact: 'The knowledge and skills gained through this programme directly contribute to the objectives of the Smart Laboratory on Clean Rivers (SLCR) and the Decision Support System (DSS) for Water Resource Management. The training strengthens the DSS by enhancing innovation-driven planning, stakeholder collaboration, adaptive decision-making, and continuous improvement mechanisms, thereby supporting the effective design, implementation, and scaling of data-driven and participatory solutions for sustainable river and water resource management.'
    },
    {
        title: 'Sewage Treatment Plant (STP) Site Visits',
        date: 'February - April 2025',
        location: 'Varanasi, Uttar Pradesh',
        conductedBy: 'DSS Team & System Dynamics Team',
        description: 'Technical site visits conducted by the DSS team to operational Sewage Treatment Plants in Varanasi to assess infrastructure, understand treatment processes, and evaluate performance parameters for integration into the Decision Support System framework.',
        detailedDescription: 'The visits provided first-hand exposure to STP operations, capacity utilization, treatment technologies, and challenges in sewage management. The system dynamics team participated in the BLW STP visit to understand the complex interactions between sewage generation, treatment capacity, and environmental impacts for modeling purposes. The site visit of the Bhagwanpur STP (8 MLD) was conducted on 17th February 2025, followed by the site visit of the BLW STP (12 MLD) on 7th April 2025 with the system dynamics team.',
        images: [
            '/visits/Picture11.jpg',
            '/visits/Picture12.jpg',
            '/visits/BLW_STP.jpeg',
        ],
        tags: ['Field Visit', 'STP Assessment', 'Infrastructure'],
        technicalCoverage: [
            'Site visit of Bhagwanpur STP with 8 MLD treatment capacity',
            'Assessment of treatment processes and operational efficiency',
            'Site visit of BLW STP with 12 MLD treatment capacity',
            'Evaluation of infrastructure and capacity utilization patterns',
            'System dynamics team collaboration for integrated modeling',
            'Understanding sewage load management and treatment challenges',
            'Data collection for DSS integration and priority module development',
            'Assessment of technology deployment and performance monitoring systems'
        ],
        objectives: [
            'Conduct technical assessment of operational STPs in Varanasi',
            'Understand treatment processes, capacity, and operational challenges',
            'Collect field data for integration into DSS framework and modeling',
            'Facilitate system dynamics modeling for sewage management planning'
        ],
        impact: 'The STP site visits provided crucial field-level insights into sewage treatment infrastructure, operational challenges, and capacity constraints. The knowledge gained directly supports the development of the STP Priority and Suitability modules within the DSS framework, enabling evidence-based planning for sewage management and treatment infrastructure development in small river basins.'
    },
    {
        title: 'World Environment Day Celebration - River Conservation Pledge',
        date: '5th June 2025',
        location: 'Varuna Bridge & Adikeshav Ghat, Varanasi',
        conductedBy: 'DSS Team',
        description: 'On the occasion of World Environment Day, the DSS team organized a special visit to Varuna Bridge and Adikeshav Ghat to reinforce their commitment to river conservation and environmental sustainability. The team collectively took an oath to combat plastic pollution and promote environmental responsibility.',
        detailedDescription: 'The celebration emphasized the connection between the DSS initiative and broader environmental conservation goals. By visiting significant river locations, the team reaffirmed their dedication to protecting water resources, reducing pollution, and promoting sustainable practices in water resource management.',
        images: [
            '/visits/Picture13.jpg',
            '/visits/Picture10.jpeg'
        ],
        tags: ['Environment Day', 'River Conservation', 'Awareness'],
        technicalCoverage: [
            'Visit to Varuna Bridge to assess river health and pollution levels',
            'Assessment of Adikeshav Ghat and surrounding water quality conditions',
            'Collective pledge to combat plastic pollution in river systems',
            'Promotion of environmental responsibility and sustainable practices',
            'Team commitment to river conservation and ecological protection',
            'Integration of environmental awareness with DSS objectives',
            'Recognition of World Environment Day and its significance',
            'Reinforcement of sustainable water resource management principles'
        ],
        objectives: [
            'Celebrate World Environment Day with field-based river conservation activities',
            'Reinforce team commitment to environmental sustainability and plastic pollution reduction',
            'Connect DSS initiative with broader environmental conservation goals',
            'Promote awareness about river health and water resource protection'
        ],
        impact: 'The World Environment Day celebration strengthened the team\'s resolve to integrate environmental sustainability into all aspects of the DSS initiative. The collective pledge to combat plastic pollution and protect river ecosystems reinforces the broader mission of promoting clean rivers and sustainable water resource management in alignment with national and global environmental goals.'
    },
    {
        title: 'Meeting with the Assistant DPRO, Varanasi, regarding NOC for MAR site construction',
        date: '6th February, 2025',
        location: 'Vikash Bhawan, Varanasi',
        conductedBy: 'SLCR Team',
        description: 'Meeting with the Assistant DPRO, Varanasi, regarding NOC for MAR site construction.',
        images: [
            '/workshop/dpro.jpeg'
        ],
        tags: ['Meeting', 'MAR Site', 'NOC'],
        skipTechnicalCoverage: true,
        skipObjectives: true,
        skipImpact: true
    },
    {
        title: 'Meeting with the Principal, Primary School, Isarwar (Sevapuri Block, Varanasi), regarding construction of a Rainwater Harvesting Structure',
        date: '21st January, 2025',
        location: 'Primary School, Isarwar, Varanasi',
        conductedBy: 'SLCR Team',
        description: 'Meeting with the Principal, Primary School, Isarwar (Sevapuri Block, Varanasi), regarding construction of a Rainwater Harvesting Structure.',
        images: [
             '/workshop/primary.jpeg'
        ],
        tags: ['Meeting', 'Rainwater Harvesting', 'School'],
        skipTechnicalCoverage: true,
        skipObjectives: true,
        skipImpact: true
    },
    {
        title: 'Meeting with the Principal, Shri Yugal Bihari Inter College, Rameswar (Sevapuri Block, Varanasi), regarding construction of a Rainwater Harvesting Structure',
        date: '21st January, 2025',
        location: 'Shri Yugal Bihari Inter College, Rameswar, Varanasi',
        conductedBy: 'SLCR Team',
        description: 'Meeting with the Principal, Shri Yugal Bihari Inter College, Rameswar (Sevapuri Block, Varanasi), regarding construction of a Rainwater Harvesting Structure.',
        images: [
           '/workshop/inter.jpeg'
        ],
        tags: ['Meeting', 'Rainwater Harvesting', 'College'],
        skipTechnicalCoverage: true,
        skipObjectives: true,
        skipImpact: true
    }
];

function ImageCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused || images.length <= 1) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length, isPaused]);

    return (
        <div 
            className="relative h-[550px] w-full overflow-hidden bg-slate-200 rounded-3xl group shadow-inner"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image src={images[index]} alt="Visit Moment" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${i === index ? 'bg-white w-8' : 'bg-white/50 w-1.5'}`}
                    />
                ))}
            </div>
        </div>
    );
}

function SmallImageCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused || images.length <= 1) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length, isPaused]);

    return (
        <div 
            className="relative h-[320px] w-full overflow-hidden bg-slate-200 rounded-2xl group shadow-inner"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image src={images[index]} alt="Visit Moment" fill className="object-contain" />
                </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${i === index ? 'bg-white w-8' : 'bg-white/50 w-1.5'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function VisitsAndMeetingsPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Main Visits Section */}
            <section className="py-16 px-4">
                <div className="w-[95%] max-w-[1700px] mx-auto">
                    {visits.map((visit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="mb-24"
                        >
                            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                                {/* Header Badge */}
                                <div className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-white uppercase tracking-widest">
                                            🌍 Visits
                                        </span>
                                        <div className="flex gap-2">
                                            {visit.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 lg:p-16">
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">{visit.title}</h2>

                                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><Calendar className="w-6 h-6 text-purple-600" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Visit Date</p>
                                                <p className="text-base font-bold text-slate-900">{visit.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><MapPin className="w-6 h-6 text-purple-600" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Location</p>
                                                <p className="text-base font-bold text-slate-900">{visit.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><Building2 className="w-6 h-6 text-purple-600" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Conducted By</p>
                                                <p className="text-base font-bold text-slate-900">{visit.conductedBy}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8 space-y-4">
                                        <p className="text-lg text-slate-700 leading-relaxed font-medium max-w-[90%]">{visit.description}</p>
                                        {visit.detailedDescription && (
                                            <p className="text-base text-slate-600 leading-relaxed max-w-[90%]">{visit.detailedDescription}</p>
                                        )}
                                    </div>

                                    {/* Image and Objectives Side by Side - Only show if not skipped */}
                                    {!visit.skipObjectives ? (
                                        <div className="grid lg:grid-cols-10 gap-10 mb-16">
                                            {/* Left: Image Carousel - 60% */}
                                            <div className="lg:col-span-6">
                                                <ImageCarousel images={visit.images} />
                                            </div>
                                            
                                            {/* Right: Visit Objectives - 40% */}
                                            {visit.objectives && (
                                                <div className="lg:col-span-4">
                                                    <div className="h-full p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                                                        <div className="flex items-center gap-4 mb-6">
                                                            <div className="p-3 bg-purple-500 rounded-xl shadow-lg">
                                                                <Target className="w-7 h-7 text-white" />
                                                            </div>
                                                            <h4 className="text-2xl font-black text-slate-900">Visit Objectives</h4>
                                                        </div>
                                                        <div className="grid gap-4">
                                                            {visit.objectives.map((objective, i) => (
                                                                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-purple-100">
                                                                    <div className="p-1.5 bg-purple-100 rounded-lg flex-shrink-0 mt-0.5">
                                                                        <Lightbulb className="w-5 h-5 text-purple-600" />
                                                                    </div>
                                                                    <span className="text-slate-700 font-semibold leading-relaxed text-base">{objective}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        /* Show image in a smaller centered container if objectives are skipped */
                                        <div className="mb-16 flex justify-center">
                                            <div className="w-full max-w-2xl">
                                                <SmallImageCarousel images={visit.images} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Technical Coverage - Only show if not skipped */}
                                    {!visit.skipTechnicalCoverage && visit.technicalCoverage && (
                                        <div className="mb-16">
                                            <div className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold uppercase tracking-widest rounded-xl w-fit shadow-lg mb-8">Technical Coverage & Activities</div>
                                            <div className="grid lg:grid-cols-2 gap-8">
                                                {/* Left Column */}
                                                <div className="grid gap-5">
                                                    {visit.technicalCoverage.slice(0, Math.ceil(visit.technicalCoverage.length / 2)).map((item, i) => (
                                                        <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all group">
                                                            <CheckCircle className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-800 font-bold leading-relaxed text-lg tracking-tight">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                
                                                {/* Right Column */}
                                                <div className="grid gap-5">
                                                    {visit.technicalCoverage.slice(Math.ceil(visit.technicalCoverage.length / 2)).map((item, i) => (
                                                        <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all group">
                                                            <CheckCircle className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-800 font-bold leading-relaxed text-lg tracking-tight">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Impact - Only show if not skipped */}
                                    {!visit.skipImpact && visit.impact && (
                                        <div className="p-10 bg-gradient-to-r from-slate-900 to-purple-900 rounded-[2rem] border border-slate-700 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                                            <div className="p-4 bg-purple-500/20 rounded-2xl"><Award className="w-10 h-10 text-purple-400" /></div>
                                            <div className="flex-1 text-center md:text-left">
                                                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-3">Key Outcome & Strategic Impact</h4>
                                                <p className="text-slate-100 text-xl italic font-light leading-relaxed">{visit.impact}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}