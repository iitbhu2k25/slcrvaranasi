'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// HMVB Team - Principal Investigator (Updated with Department and Profile Link)
const principalInvestigators = [
    {
        name: 'Prof. S.B. Dwivedi',
        title: 'Principal Investigator',
        department: 'Department of Civil Engineering, IIT(BHU)',
        image: '/people/HMVB/sbdwidedi.jpg',
        profileUrl: 'https://iitbhu.ac.in/dept/civ/people/sbdciv',
    },
    {
        name: 'Prof. Rahul Singh',
        title: 'Co-Principal Investigator',
        department: 'Department of Civil Engineering, IIT(BHU)',
        image: '/people/HMVB/rahul.webp',
        profileUrl: 'https://www.iitbhu.ac.in/dept/civ/people/rahulciv',
    },
];

// Research and Development Team
const researchTeam = [
    {
        name: 'Dr. Dharmendra Kumar',
        title: 'Research Associate (I)',
        image: '/people/HMVB/image2.jpg',
    },
    {
        name: 'Ashutosh Goutam',
        title: 'Junior Research Fellow (JRF)',
        image: '/people/HMVB/image3.jpg',
    },
    {
        name: 'Abhishek Singh',
        title: 'Project Assistant',
        image: '/people/HMVB/image1.jpg',
    },
];

export default function HMVBPeoplePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-12 px-4">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
                        Team HMVB
                    </h1>
                    <p className="text-lg text-cyan-600 max-w-2xl mx-auto">
                        The experts driving hydrogeological research and innovation
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mx-auto mt-4" />
                </motion.div>

                {/* SECTION 1: Principal Investigator (Increased Size & Department Added) */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Principal Investigator
                    </h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        {principalInvestigators.map((person, index) => (
                            <Link 
                                href={person.profileUrl} 
                                key={person.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full max-w-[350px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
                                >
                                    {/* Card Image Section */}
                                    <div className="h-56 w-full relative overflow-hidden bg-gray-50">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-contain object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Card Details Section */}
                                    <div className="p-8 text-center">
                                        <h3 className="text-2xl font-bold text-[#0a3d62] mb-1 group-hover:text-blue-700 transition-colors">
                                            {person.name}
                                        </h3>
                                        <p className="text-base font-bold text-blue-700 mb-3">
                                            {person.title}
                                        </p>
                                        <div className="w-12 h-1 bg-blue-100 mx-auto mb-3 rounded-full group-hover:w-20 transition-all duration-300" />
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
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
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
                                <p className="text-xs text-cyan-600 font-medium">{person.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}