'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// EPFA Team - Principal Investigator (Updated with Department and Profile Link)
const principalInvestigators = [
    {
        name: 'Prof. Shreyans Kumar Jain',
        title: '',
        department: 'Department of Pharmaceutical Engineering & Technology, IIT(BHU)',
        image: '/people/EPFA/image2.jpg',
        link: 'https://www.iitbhu.ac.in/dept/phe/people/sjainphe'
    },
];

// Research and Development Team
const researchTeam = [
    {
        name: 'Dr. Varun Shukla',
        title: 'Research Associate (II)',
        image: '/people/EPFA/image4.png',
    },
    {
        name: 'Shruti Vilas Chaudhari',
        title: 'Junior Research Fellow (JRF)',
        image: '/people/EPFA/image3.png',
    },
    {
        name: 'Rajyaguru Soham Nipulbhai',
        title: 'Junior Research Fellow (JRF)',
        image: '/people/EPFA/image6.jpg',
    },
    {
        name: 'Smita Patel',
        title: 'Project Assistant',
        image: '/people/EPFA/image5.jpg',
    },
    {
        name: 'Rakesh Kumar Yadav',
        title: 'Project Assistant',
        image: '/people/EPFA/image1.jpg',
    },
];

export default function EPFAPeoplePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 py-12 px-4">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
                        Team EPFA
                    </h1>
                    <p className="text-lg text-cyan-600 max-w-2xl mx-auto">
                        The team leading pollutant characterization research
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mt-4" />
                </motion.div>

                {/* SECTION 1: Principal Investigator (Increased Size & Department Added) */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Principal Investigator
                    </h2>
                    <div className="flex justify-center">
                        {principalInvestigators.map((person, index) => (
                            <Link 
                                href={person.link} 
                                key={person.name}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block w-full max-w-[360px]"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
                                >
                                    {/* Significantly Increased Card Height */}
                                    <div className="h-[200px] w-full relative overflow-hidden bg-gray-50">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-contain object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8 text-center">
                                        <h3 className="text-2xl font-bold text-[#0a3d62] mb-1 group-hover:text-purple-700 transition-colors">
                                            {person.name}
                                        </h3>
                                        <p className="text-base font-bold text-purple-700 mb-3">
                                            {person.title}
                                        </p>
                                        <div className="w-16 h-1 bg-purple-100 mx-auto mb-4 rounded-full" />
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                            {person.department}
                                        </p>
                                       
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: Research and Development Team */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Research and Development Team
                    </h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
                        {researchTeam.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                className="text-center w-full max-w-[200px]"
                            >
                                <div className="w-40 h-40 mx-auto mb-3 rounded-2xl overflow-hidden border-4 border-white bg-white shadow-md hover:shadow-lg transition-all">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        width={160}
                                        height={160}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-sm font-bold text-[#0a3d62] mb-1 leading-tight">{person.name}</h3>
                                <p className="text-xs text-purple-600 font-medium">{person.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}