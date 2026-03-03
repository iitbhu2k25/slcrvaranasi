'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, CheckCircle, Sparkles, Award, Users, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const seminars = [
    {
        title: 'International Groundwater Conference (IGWC-2025)',
        date: '5th - 7th March, 2025',
        location: 'NIH, Roorkee',
        conductedBy: 'NIH Roorkee, CGWB, AGGS, NMCG & NRCD',
        description: 'A prestigious international conference organized by the National Institute of Hydrology (NIH), Roorkee under the Department of Water Resources, River Development & Ganga Rejuvenation, Ministry of Jal Shakti, Government of India. The conference focused on "Groundwater Vision 2047: Towards Water Security under Changing Climate."',
        detailedDescription: 'The conference was organized in association with the Central Ground Water Board (CGWB), Association of Global Groundwater Scientists (AGGS), National Mission for Clean Ganga (NMCG), and National River Conservation Directorate (NRCD). A DSS research staff actively participated in this prestigious global gathering, contributing to discussions on sustainable groundwater management and climate resilience.',
        images: [
            '/seminars/Picture1.jpg',
            '/seminars/Picture2.jpg'
        ],
        tags: ['International', 'Conference', 'Climate Resilience'],
        technicalCoverage: [
            'Groundwater Vision 2047: Strategic roadmap towards water security under changing climate',
            'Sustainable development and management of groundwater resources at national scale',
            'Climate change impacts on groundwater recharge, availability, and quality',
            'Integrated GIS and Machine Learning applications in groundwater resource assessment',
            'Advanced aquifer characterization methodologies and hydrogeological investigations',
            'International stakeholder collaboration for groundwater governance and policy frameworks',
            'Non-carcinogenic health risk assessment from groundwater contamination',
            'Participatory approaches and community engagement in groundwater management'
        ],
        objectives: [
            'Develop a strategic vision for groundwater management aligned with India\'s 2047 goals',
            'Foster international scientific exchange on groundwater and climate resilience',
            'Promote integrated approaches combining GIS, ML, and traditional hydrogeology',
            'Strengthen partnerships between government agencies, academia, and research institutions'
        ],
        impact: 'The conference facilitated valuable global scientific exchange and fostered strategic partnerships for resilient water management. It provided a platform for presenting cutting-edge research, sharing best practices, and developing collaborative frameworks for addressing groundwater challenges under climate change. The participation reinforced the importance of evidence-based groundwater governance aligned with national water security objectives.'
    },
    {
        title: 'Sustainable Development and Management of Groundwater Resource',
        date: '24th March, 2025',
        location: 'Department of Geology, Banaras Hindu University',
        conductedBy: 'Rajiv Gandhi National Ground Water Training & Research Institute & Department of Geology, BHU',
        description: 'A specialized training program under the Tier III Training Program focused on sustainable development and management of groundwater resources. Prof. Anurag Ohri and Dr. Shishir Gaur participated as Chief Guests in this prestigious capacity-building initiative.',
        detailedDescription: 'The program was organized by the Rajiv Gandhi National Ground Water Training & Research Institute and hosted by the Department of Geology, Banaras Hindu University. The event brought together groundwater professionals, researchers, and stakeholders to discuss contemporary challenges and best practices in groundwater resource management.',
        images: [
            '/seminars/Picture3.png',
            '/seminars/Picture4.png',
            '/seminars/Picture5.png'
        ],
        tags: ['Training Program', 'Groundwater Management', 'Capacity Building'],
        technicalCoverage: [
            'Sustainable groundwater development methodologies for long-term resource availability',
            'Groundwater resource assessment and aquifer mapping techniques',
            'Management strategies for overexploited and critical groundwater zones',
            'Artificial recharge and rainwater harvesting best practices',
            'Groundwater quality monitoring and contamination prevention measures',
            'Community participation and stakeholder engagement in groundwater governance',
            'Integration of traditional knowledge with modern groundwater management approaches',
            'Policy frameworks and institutional mechanisms for sustainable groundwater use'
        ],
        objectives: [
            'Build capacity among groundwater professionals in sustainable management practices',
            'Promote evidence-based approaches to groundwater resource assessment',
            'Foster collaboration between academic institutions and field practitioners',
            'Strengthen institutional frameworks for groundwater governance and conservation'
        ],
        impact: 'The training program successfully enhanced the technical knowledge and professional skills of participants in groundwater resource management. It strengthened the connection between scientific research and practical field applications, contributing to improved groundwater governance and sustainable resource utilization at the regional level.'
    },
    {
        title: 'International Association of Hydrological Sciences (IAHS 2025)',
        date: '5th - 10th October 2025',
        location: 'IIT Roorkee',
        conductedBy: 'IAHS & IIT Roorkee',
        description: 'A prestigious international scientific assembly where the DSS-WRM framework was presented to a global audience of hydrological experts. The participation provided a valuable platform to showcase India\'s innovative approach to integrated water resource management and exchange scientific insights with international researchers.',
        detailedDescription: 'A Research Associate from the Decision Support System (DSS) team represented the initiative at this globally recognized scientific assembly. The presentation focused on data-driven and sustainable water resource management approaches, demonstrating the holistic integration of surface water, groundwater, and socio-hydrological processes within the DSS framework.',
        images: [
            '/seminars/Picture6.jpg',
            '/seminars/Picture7.jpg',
            '/seminars/Picture8.jpg',
        ],
        tags: ['Scientific Assembly', 'International', 'DSS Showcase'],
        technicalCoverage: [
            'Comprehensive showcase of the Decision Support System framework to international experts',
            'Data-driven water resource management tools and integrated modeling approaches',
            'Sustainable management strategies for small river basins in India',
            'Predictive and diagnostic modeling for water availability and quality assessment',
            'Climate change impact assessment and adaptive management strategies',
            'Participatory water governance frameworks and stakeholder engagement methodologies',
            'International collaboration and knowledge exchange on hydrological sciences',
            'Surface water–groundwater–socio-economic integration in decision support systems'
        ],
        objectives: [
            'Present the DSS framework to an international audience of hydrological experts',
            'Exchange scientific insights on data-driven water resource management approaches',
            'Engage global experts on sustainable basin management and climate resilience',
            'Strengthen international collaboration and research partnerships in hydrology'
        ],
        impact: 'The participation successfully validated the DSS framework on the international stage and facilitated meaningful engagement with global hydrological experts. It provided critical feedback, identified opportunities for enhancement, and established potential collaborations for advancing sustainable water resource management. The scientific exchange reinforced the relevance and scalability of the DSS approach for addressing complex water challenges in diverse hydro-climatic contexts.'
    },
    {
        title: '4th River Health Assessment and Rejuvenation (RHAR) 2025',
        date: '2025',
        location: 'Swatantra bhawan , BHU',
        conductedBy: 'Department of Civil Engineering, IIT (BHU)',
        description: 'The 4th River Health Assessment and Rejuvenation (RHAR) Conference provided a platform for presenting innovative approaches to river ecosystem assessment and restoration. Dr. Akash Tiwari, DSS Research Associate, presented the "Decision Support System for Water Resource Management" framework to the conference participants.',
        detailedDescription: 'This conference focused on holistic approaches to river health assessment, rejuvenation strategies, and sustainable river basin management. The presentation showcased how the DSS framework supports evidence-based decision-making for river restoration and ecological health improvement.',
        images: [
            '/seminars/Picture9.jpg',
            '/seminars/Picture10.jpg',
        ],
        tags: ['River Health', 'Rejuvenation', 'DSS Presentation'],
        technicalCoverage: [
            'River health assessment methodologies and ecological indicators',
            'Decision Support System framework for water resource management',
            'Data-driven approaches to river basin planning and restoration',
            'Integration of environmental, hydrological, and socio-economic parameters',
            'Rejuvenation strategies for degraded river ecosystems',
            'Stakeholder engagement and participatory river management approaches',
            'Monitoring and evaluation frameworks for river restoration projects',
            'Policy support tools for sustainable river basin governance'
        ],
        objectives: [
            'Present the DSS framework as a tool for river health assessment and management',
            'Share insights on data-driven decision-making for river rejuvenation',
            'Facilitate knowledge exchange on river restoration best practices',
            'Strengthen collaboration between researchers and river management practitioners'
        ],
        impact: 'The presentation successfully demonstrated the application of the DSS framework in river health assessment and rejuvenation planning. It highlighted the importance of integrated, science-based approaches to river management and fostered dialogue on innovative tools for supporting sustainable river basin governance and ecological restoration.'
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
                    <Image src={images[index]} alt="Seminar Moment" fill className="object-contain" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                </motion.div>
            </AnimatePresence>
            
            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`transition-all duration-300 rounded-full ${
                                i === index ? 'w-12 h-2.5 bg-purple-400 shadow-lg' : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SeminarsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
       

            <section className="py-20 px-4">
                <div className="w-[98%] max-w-[1600px] mx-auto space-y-24">
                    {seminars.map((seminar, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-10 lg:p-16">
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
                                    <div className="max-w-4xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-purple-100 rounded-lg"><Sparkles className="w-6 h-6 text-purple-600" /></div>
                                            <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">Scientific Activity</span>
                                        </div>
                                        <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">{seminar.title}</h3>
                                        <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {seminar.tags.map(tag => (
                                            <span key={tag} className="px-5 py-2.5 bg-slate-50 text-slate-700 text-xs font-bold uppercase rounded-xl border border-slate-200 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8 mb-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><Calendar className="w-6 h-6 text-purple-600" /></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Event Date</p>
                                            <p className="text-base font-bold text-slate-900">{seminar.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><MapPin className="w-6 h-6 text-purple-600" /></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Venue</p>
                                            <p className="text-base font-bold text-slate-900">{seminar.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><Building2 className="w-6 h-6 text-purple-600" /></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Organizers</p>
                                            <p className="text-base font-bold text-slate-900">{seminar.conductedBy}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12 space-y-6">
                                    <p className="text-2xl text-slate-700 leading-relaxed font-medium max-w-[90%]">{seminar.description}</p>
                                    {seminar.detailedDescription && (
                                        <p className="text-xl text-slate-600 leading-relaxed max-w-[90%]">{seminar.detailedDescription}</p>
                                    )}
                                </div>

                                {/* Image and Objectives Side by Side */}
                                <div className="grid lg:grid-cols-10 gap-10 mb-16">
                                    {/* Left: Image Carousel - 60% */}
                                    <div className="lg:col-span-6">
                                        <ImageCarousel images={seminar.images} />
                                    </div>
                                    
                                    {/* Right: Programme Objectives - 40% */}
                                    {seminar.objectives && (
                                        <div className="lg:col-span-4">
                                            <div className="h-full p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="p-3 bg-purple-500 rounded-xl shadow-lg">
                                                        <Target className="w-7 h-7 text-white" />
                                                    </div>
                                                    <h4 className="text-2xl font-black text-slate-900">Programme Objectives</h4>
                                                </div>
                                                <div className="grid gap-4">
                                                    {seminar.objectives.map((objective, i) => (
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

                                {/* Technical Coverage Split Between Left and Right */}
                                <div className="mb-16">
                                    <div className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold uppercase tracking-widest rounded-xl w-fit shadow-lg mb-8">Technical Coverage</div>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        {/* Left Column */}
                                        <div className="grid gap-5">
                                            {seminar.technicalCoverage.slice(0, Math.ceil(seminar.technicalCoverage.length / 2)).map((item, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all group">
                                                    <CheckCircle className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-800 font-bold leading-relaxed text-lg tracking-tight">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Right Column */}
                                        <div className="grid gap-5">
                                            {seminar.technicalCoverage.slice(Math.ceil(seminar.technicalCoverage.length / 2)).map((item, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all group">
                                                    <CheckCircle className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-800 font-bold leading-relaxed text-lg tracking-tight">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 bg-gradient-to-r from-slate-900 to-purple-900 rounded-[2rem] border border-slate-700 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                                    <div className="p-4 bg-purple-500/20 rounded-2xl"><Award className="w-10 h-10 text-purple-400" /></div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-3">Key Outcome & Strategic Impact</h4>
                                        <p className="text-slate-100 text-xl italic font-light leading-relaxed">{seminar.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}