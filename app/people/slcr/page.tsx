'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// SLCR Secretariat - Principal Investigators (Updated with Profile Links)
const principalInvestigators = [
    {
        name: 'Prof. Shishir Gaur',
        title: 'Principal Investigator',
        department: 'Department of Civil Engineering, IIT(BHU)',
        image: '/people/slcr/sgsir2.png',
        profileUrl: 'https://www.iitbhu.ac.in/dept/civ/people/shishirgciv', // Added link
    },
    {
        name: 'Prof. Harsimran Kaur',
        title: 'Principal Investigator',
        department: 'Department of Architecture, Planning and Design, IIT(BHU)',
        image: '/people/slcr/hks.png',
        profileUrl: 'https://iitbhu.ac.in/dept/apd/people/harsimranapd', // Added link
    },
    {
        name: 'Prof. Anurag Ohri',
        title: 'Co-Principal Investigator',
        department: 'Department of Civil Engineering, IIT(BHU)',
        image: '/people/slcr/aos3.jpg',
        profileUrl: 'https://www.iitbhu.ac.in/dept/civ/people/aohriciv', // Added link
    },
    {
        name: 'Prof. Pramod Soni',
        title: 'Co-Principal Investigator',
        department: 'Department of Civil Engineering, IIT(BHU)',
        image: '/people/DSS/Picture2.jpg',
        profileUrl: 'https://www.iitbhu.ac.in/dept/civ/people/pramodciv'
    },
    {
        name: 'Prof. Anshuman Satpathy',
        title: 'Co-Principal Investigator',
        department: 'Department of Civil Engineering, IIT(BHU)',
        image: '/people/slcr/Anshuman.webp',
        profileUrl: 'https://www.iitbhu.ac.in/dept/civ/people/asatpathyciv', // Added link
    },
    
];

// Research and Development Team
const researchTeam = [
    {
        name: 'Dr. Hema Patel',
        title: 'Senior Project Scientist',
        image: '/people/slcr/image2.jpg',
    },
    {
        name: 'Dr. Nikhilesh Singh',
        title: 'Research Associate III',
        image: '/people/slcr/nik2.jpg',
    },
    {
        name: 'Dr. Anugrah Ray',
        title: 'Research Associate I',
        image: '/people/slcr/image10.jpg',
    },
    {
        name: 'Dr. Dinkar Parashar',
        title: 'Research Associate I',
        image: '/people/slcr/image9.jpg',
    },
    {
        name: 'Shri. Chakravarti Patel',
        title: 'Project Assistant (Technical)',
        image: '/people/slcr/image1.jpg',
    },
    {
        name: 'Shri Amit Kumar Sonkar',
        title: 'Project Assistant (Technical)',
        image: '/people/slcr/amit.jpg',
    },
    {
        name: 'Shri Abhishek Kumar',
        title: 'Project Attendant',
        image: '/people/slcr/image6.jpg',
    },
];

// Admin Team
const adminTeam = [
    {
        name: 'Shri. Chandan Singh',
        title: 'Senior Project Manager',
        image: '/people/slcr/chandan.png',
    },
    {
        name: 'Shri. Krishna Tiwari',
        title: 'Project Assistant ',
        image: '/people/slcr/krishna.JPG',
    },
    {
        name: 'Shri. Suresh Kumar Pal',
        title: 'Project Assistant',
        image: '/people/slcr/photo.jpg',
    },
];

export default function SLCRPeoplePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-gray-100 py-12 px-4">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
                        Team SLCR Secretariat
                    </h1>
                    <p className="text-lg text-cyan-600 max-w-2xl mx-auto">
                        The dedicated team driving the SLCR vision forward
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full mx-auto mt-4" />
                </motion.div>

                {/* SECTION 1: Principal Investigators (Updated with Links) */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Principal Investigators
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 justify-items-center max-w-8xl mx-auto">
                        {principalInvestigators.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full max-w-[300px] h-full"
                            >
                                <a
                                    href={person.profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
                                >
                                    <div className="h-60 w-full relative overflow-hidden bg-gray-100">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="px-6 py-4 text-center flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-[#0a3d62] mb-0.5 group-hover:text-cyan-700 transition-colors">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm font-bold text-cyan-700 mb-1">{person.title}</p>
                                        <p className="text-xs text-gray-500 font-medium leading-snug">
                                            {person.department}
                                        </p>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-2 block group-hover:text-cyan-600 font-bold transition-colors mt-auto">
                                            View Faculty Profile →
                                        </span>
                                    </div>
                                </a>
                            </motion.div>
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
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center">
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

                {/* SECTION 3: Admin Team */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Admin Team
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {adminTeam.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
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
                                <h3 className="text-sm font-bold text-[#0a3d62] mb-1">{person.name}</h3>
                                <p className="text-xs text-cyan-600 font-medium">{person.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}