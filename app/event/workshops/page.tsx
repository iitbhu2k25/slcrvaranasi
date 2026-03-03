'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, CheckCircle, Sparkles, Award, Users, Target, Lightbulb, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const events = [
    // SEMINARS
    {
        type: 'seminar',
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
        type: 'seminar',
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
        type: 'seminar',
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
            'Strengthen international collaboration for hydrological research and innovation'
        ],
        impact: 'The presentation provided international recognition for India\'s innovative DSS framework and facilitated knowledge exchange with global experts. The participation strengthened international scientific partnerships and highlighted the potential for collaborative solutions to address global water challenges. The event validated the robustness of the DSS approach and opened avenues for future international collaborative research.'
    },
    // WORKSHOPS
    {
        type: 'workshop',
        title: 'DSS-Expert Meeting cum Workshop',
        date: '21 July 2025',
        location: 'Seminar Hall, Department of Civil Engineering, IIT (BHU)',
        conductedBy: 'Department of Civil Engineering, IIT (BHU)',
        description: 'A comprehensive one-day technical and stakeholder interaction programme organized to deliberate on contemporary challenges and innovations in water resource management. The event brought together academicians, domain experts, industry professionals, and policymakers for interdisciplinary exchange and collaborative dialogue.',
        detailedDescription: 'The programme commenced with a ceremonial garlanding of the Mahamana statue and lamp lighting, followed by inaugural and introductory remarks by the conveners. Technical sessions were delivered in both offline and online modes, ensuring broad participation and knowledge exchange across geographical boundaries.',
        images: [
            '/workshop/pic1.jpg',
            '/workshop/pic4.jpg',
            '/workshop/pic5.jpg'
        ],
        tags: ['Expert Meeting', 'Workshop', 'Stakeholder Interaction'],
        technicalCoverage: [
            'Environmental forecasting and flood protection practices in water resource systems',
            'Advanced water resource planning methodologies for sustainable basin management',
            'System dynamics approaches and modeling frameworks under DSS-WRM',
            'Industrial applications of decision support systems in water governance',
            'Expert lectures delivered in offline and online modes for broad participation',
            'Interactive panel discussion on Decision Support System for Water Resource Management',
            'Practical implementation strategies and policy relevance of DSS-based water governance',
            'Future directions and innovations in collaborative water resource management'
        ],
        objectives: [
            'Foster interdisciplinary exchange among academicians, industry professionals, and policymakers',
            'Explore contemporary challenges in water resource management and flood protection',
            'Facilitate interactive dialogue on practical implementation of DSS frameworks',
            'Strengthen collaborative, data-driven initiatives for sustainable water governance'
        ],
        impact: 'The programme concluded with a vote of thanks and group photograph, marking a meaningful step toward strengthening collaborative, data-driven, and sustainable water resource management initiatives under the DSS framework. The event successfully bridged the gap between scientific research and policy implementation.'
    },
    {
        type: 'workshop',
        title: 'Hydrological Modelling Using MIKE+ Training Programme',
        date: '15th December 2025 - 19th December 2025',
        location: 'SLCR Laboratory, IIT (BHU)',
        conductedBy: 'Ramboll India & Smart Laboratory on Clean River (SLCR)',
        description: 'A comprehensive technical capacity-building programme conducted by Ramboll India to equip researchers, project staff, and students with practical skills in hydrological analysis, river modelling, flood forecasting, and decision-support activities under the DSS for Water Resource Management.',
        detailedDescription: 'The training was conducted in offline mode in the SLCR laboratory at IIT (BHU), ensuring effective interaction, demonstrations, guided exercises, and participant engagement. Each session was carefully structured to balance conceptual understanding with hands-on practice, enabling participants with varying levels of prior exposure to MIKE tools to actively contribute and learn.',
        images: [
            '/workshop/pic9.jpg',
            '/workshop/pic8.jpg',
            '/workshop/pic7.jpg'
        ],
        tags: ['Technical Training', 'MIKE+', 'Capacity Building'],
        technicalCoverage: [
            'Comprehensive Rainfall–Runoff (RR), Hydrodynamic (HD), and Data Assimilation (DA) models using MIKE+',
            'Integrated river–catchment model development for hydrological analysis and flood forecasting',
            'MIKE+ interface, workflows, and GIS-based model building techniques',
            'Preparation and management of input datasets including time series and gridded data',
            'River network development, cross-section creation, and hydraulic structure modelling',
            'Advanced model calibration, validation, troubleshooting, and scenario simulations',
            'Visualization, analysis, and interpretation of simulation results using MIKE+ and MIKE View software',
            'Effective application of modelling outputs within the DSS framework for informed decision-making',
            'Error diagnostics and open discussions to address participant queries and challenges'
        ],
        objectives: [
            'Build technical capacity among researchers and project staff in hydrological modelling',
            'Develop skills to set up, run, and interpret RR, HD, and DA models using MIKE+',
            'Enable participants to create integrated river-catchment models for flood forecasting',
            'Support the operationalization of DSS for small river basin management in India'
        ],
        impact: 'The training programme successfully strengthened institutional and technical capacity for science-based, data-driven water resource management. It directly supported the operationalization of the DSS for small river basin management in India, empowering participants with advanced modeling skills and practical knowledge for real-world applications. The programme progressed systematically from basic project setup to advanced simulation and result analysis.'
    },
    {
        type: 'workshop',
        title: 'HMVB-Expert Meeting cum Workshop',
        date: '4 July, 2025',
        location: 'Seminar Hall, Department of Civil Engineering, IIT (BHU)',
        conductedBy: 'Smart Laboratory on Clean Rivers (SLCR) & Department of Civil Engineering, IIT (BHU)',
        description: 'Expert meeting on the project "Hydrogeological Modelling of Varuna Basin for Recharge Site," discussions centered on controls of subsurface resistivity in alluvial settings, including lithology, pore-fluid conductivity, saturation, and clay content.',
        detailedDescription: 'Electrical resistivity was recognized as a diagnostic indicator of grain size distribution, porosity, permeability, and compaction for hydro stratigraphic delineation. The need to establish representative resistivity ranges for distinct lithological units in the Varuna River Basin was emphasized to improve geoelectrical interpretation and model reliability.',
        images: [
            '/workshop/Picture1.jpeg',
            '/workshop/Picture2.jpeg',
            '/workshop/Picture3.jpeg',
            '/workshop/Picture4.jpeg'
        ],
        tags: ['Expert Meeting', 'Hydrogeology', 'Recharge Sites'],
        objectives: [
            'Develop a comprehensive hydrogeological model for the Varuna Basin',
            'Establish representative resistivity ranges for lithological units',
            'Improve geoelectrical interpretation accuracy for recharge site identification',
            'Enhance model reliability through advanced subsurface characterization techniques'
        ],
        skipTechnicalCoverage: true,
        skipImpact: true
    },
    {
        type: 'workshop',
        title: "People's Varuna: A National Brainstorming Workshop",
        date: '31 January 2025, Friday',
        location: 'ABLT, IIT(BHU), Varanasi',
        conductedBy: 'Dept. of Humanistic Studies, Smart Lab on Clean River (SLCR), Dept. of Civil Engineering & Unnat Bharat Abhiyaan',
        description: "A community engagement initiative themed 'Culturally Connecting with the River,' bringing together local communities, stakeholders, and experts for the rejuvenation of the Varuna River.",
        detailedDescription: "Organized by the Department of Humanistic Studies in collaboration with SLCR and Unnat Bharat Abhiyaan, this workshop focuses on the intersection of cultural connectivity and scientific river management. The primary objectives were to involve local communities in river conservation efforts, launch educational initiatives for river health, and foster joint efforts for sustainable management through cultural connectivity to drive ecological rejuvenation.",
        images: [
            "/People's_Varuna.png"
        ],
        tags: ['Community Engagement', 'River Rejuvenation', 'Cultural Connectivity'],
        // Objectives removed to force full-width image layout
        skipTechnicalCoverage: true,
        skipImpact: true,
        imageHeight: 'h-[850px]', 
        isFullWidthImage: true // Custom flag for layout logic
    }
];

function ImageCarousel({ images, height = "h-[550px]" }: { images: string[], height?: string }) {
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
            className={`relative ${height} w-full overflow-hidden bg-slate-200 rounded-3xl group shadow-inner`}
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
                    <Image src={images[index]} alt="Event Moment" fill className="object-contain lg:object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                </motion.div>
            </AnimatePresence>
            
            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all ${i === index ? 'bg-white w-8' : 'bg-white/50 w-1.5'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function WorkshopsAndSeminarsPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Events Section */}
            <section className="py-16 px-4">
                <div className="w-[95%] max-w-[1700px] mx-auto">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="mb-24"
                        >
                            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                                {/* Type Badge */}
                                <div className={`px-8 py-4 ${event.type === 'seminar' ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-teal-500 to-cyan-600'}`}>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-white uppercase tracking-widest">
                                            {event.type === 'seminar' ? '📚 Seminar' : '🛠️ Workshop'}
                                        </span>
                                        <div className="flex gap-2">
                                            {event.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 lg:p-16">
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">{event.title}</h2>

                                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><Calendar className="w-6 h-6 text-purple-600" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Event Date</p>
                                                <p className="text-base font-bold text-slate-900">{event.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><MapPin className="w-6 h-6 text-purple-600" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Venue</p>
                                                <p className="text-base font-bold text-slate-900">{event.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-xl shadow-md border border-slate-100"><Building2 className="w-6 h-6 text-purple-600" /></div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Organizers</p>
                                                <p className="text-base font-bold text-slate-900">{event.conductedBy}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-12 space-y-6">
                                        <p className="text-2xl text-slate-700 leading-relaxed font-medium max-w-[90%]">{event.description}</p>
                                        {event.detailedDescription && (
                                            <p className="text-xl text-slate-600 leading-relaxed max-w-[90%]">{event.detailedDescription}</p>
                                        )}
                                    </div>

                                    {/* Image and Objectives Container */}
                                    <div className={`grid ${event.objectives ? 'lg:grid-cols-10' : 'grid-cols-1'} gap-10 mb-16`}>
                                        {/* Left: Image Carousel */}
                                        <div className={event.objectives ? 'lg:col-span-6' : 'w-full'}>
                                            <ImageCarousel images={event.images} height={event.imageHeight} />
                                        </div>
                                        
                                        {/* Right: Programme Objectives */}
                                        {event.objectives && (
                                            <div className="lg:col-span-4">
                                                <div className="h-full p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                                                    <div className="flex items-center gap-4 mb-6">
                                                        <div className="p-3 bg-purple-500 rounded-xl shadow-lg">
                                                            <Target className="w-7 h-7 text-white" />
                                                        </div>
                                                        <h4 className="text-2xl font-black text-slate-900">Programme Objectives</h4>
                                                    </div>
                                                    <div className="grid gap-4">
                                                        {event.objectives.map((objective, i) => (
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

                                    {/* Technical Coverage - Only show if not skipped */}
                                    {!event.skipTechnicalCoverage && event.technicalCoverage && (
                                        <div className="mb-16">
                                            <div className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold uppercase tracking-widest rounded-xl w-fit shadow-lg mb-8">Technical Coverage</div>
                                            <div className="grid lg:grid-cols-2 gap-8">
                                                <div className="grid gap-5">
                                                    {event.technicalCoverage.slice(0, Math.ceil(event.technicalCoverage.length / 2)).map((item, i) => (
                                                        <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all group">
                                                            <CheckCircle className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-800 font-bold leading-relaxed text-lg tracking-tight">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="grid gap-5">
                                                    {event.technicalCoverage.slice(Math.ceil(event.technicalCoverage.length / 2)).map((item, i) => (
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
                                    {!event.skipImpact && event.impact && (
                                        <div className="p-10 bg-gradient-to-r from-slate-900 to-purple-900 rounded-[2rem] border border-slate-700 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                                            <div className="p-4 bg-purple-500/20 rounded-2xl"><Award className="w-10 h-10 text-purple-400" /></div>
                                            <div className="flex-1 text-center md:text-left">
                                                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-3">Key Outcome & Strategic Impact</h4>
                                                <p className="text-slate-100 text-xl italic font-light leading-relaxed">{event.impact}</p>
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