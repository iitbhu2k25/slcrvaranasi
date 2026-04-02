'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. Principal Investigators (Added link property)
const principalInvestigators = [
    {
        name: 'Prof. Anurag Ohri',
        title: 'Department of Civil Engineering, IIT(BHU)',
        role: 'Principal Investigator',
        image: '/people/DSS/aos3.jpg',
        link: 'https://www.iitbhu.ac.in/dept/civ/people/aohriciv'
    },
    {
        name: 'Prof. Pramod Soni',
        title: 'Department of Civil Engineering, IIT(BHU)',
        role: 'Principal Investigator',
        image: '/people/DSS/Picture2.jpg',
        link: 'https://www.iitbhu.ac.in/dept/civ/people/pramodciv'
    },
];

// 2. Co-Principal Investigators (Added link property)
const coPrincipalInvestigators = [
    {
        name: 'Prof. Om Damani',
        title: 'Department of Computer Science, IIT Bombay',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/Om_Damani_Sir.webp',
        link: 'https://www.cse.iitb.ac.in/~damani/' // Example link
    },
    {
        name: 'Prof. P. K. Mishra',
        title: 'Department of Chemical Engineering, IIT(BHU)',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/PK_Mishra_Sir.webp',
        link: 'https://www.iitbhu.ac.in/dept/che/people/pkmishrache' 
    },
    {
        name: 'Prof. Medha Jha',
        title: 'Department of Chemical Engineering, IIT(BHU)',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/Medha_Jha_Mam.webp',
        link: 'https://www.iitbhu.ac.in/dept/civ/people/mjhaciv'
    },
    {
        name: 'Prof. Tanima Dutta',
        title: 'Department of Computer Sc. and Engg., IIT(BHU)',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/Tanima_Dutta_Mam.webp',
        link: 'https://iitbhu.ac.in/dept/cse/people/tanimacse'
    },
    {
        name: 'Prof. Shyam Kamal',
        title: 'Associate Professor, Dept of Electrical Engineering, IIT(BHU)',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/Shyam_Kamal_Sir.webp',
        link: 'https://www.iitbhu.ac.in/dept/eee/people/shyamkamaleee'
    },
    {
        name: 'Prof. Pooja Prasad',
        title: 'School of Public Policy, IIT Delhi',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/Pooja_Parsad_Mam.webp',
        link: 'https://spp.iitd.ac.in/faculty-profile/18'
    },
    {
        name: 'Prof. Nikhil Bugalia',
        title: 'Department of Civil Engineering, IIT Madras',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/Nikhil_Bugalia_Sir.webp',
        link: 'https://civil.iitm.ac.in/faculty/nbugalia/'
    },
    {
        name: 'Prof. Ram Avtar',
        title: 'Faculty of Environmental Earth Science, Hokkaido University, Japan',
        role: 'Co-Principal Investigator',
        image: '/people/DSS/Ram_Avtar_Sir.webp',
        link: 'https://ramenvjnu.wixsite.com/mysite'
    },
];

const researchTeam = [
    { name: 'Dr. Akash Tiwari', title: 'Research Associate', image: '/people/DSS/akss.JPG' },
    { name: 'Dr. Alok Raj', title: 'Young Professional (Data Analyst)', image: '/people/DSS/Picture4.png' },
    { name: 'Dr. Anand', title: 'Young Professional (Project Coordinator)', image: '/people/DSS/Picture5.jpg' },
    { name: 'Dr. Arkadeep Dutta', title: 'Young Professional (Social-Community Expert)', image: '/people/DSS/Picture6.png' },
    { name: 'Shri. Rajarshi Bhattacharjee', title: 'Young Professional (Mathematical Modelling)', image: '/people/DSS/Picture7.jpg' },
    { name: 'Shri. Hariom Singh Rathore', title: 'Young Professional (Programmer)', image: '/people/DSS/Picture8.png' },
    { name: 'Shri. Rajat', title: 'Junior Research Fellow (JRF)', image: '/people/DSS/Picture9.jpg' },
    { name: 'Shri Rajkumar Choudhary', title: 'Junior Research Fellow (JRF)', image: '/people/DSS/Picture10.jpg' },
    { name: 'Ms. Muskan Gupta', title: 'Junior Research Fellow (JRF)', image: '/people/DSS/Picture11.jpg' },
    { name: 'Mr. Mohd. Anas Khan', title: 'Project Assistant', image: '/people/DSS/Picture12.jpg' },
    { name: 'Ms. Aditi Mishra', title: 'Project Assistant', image: '/people/DSS/Picture13.jpg' },
    { name: 'Mr. Gaurav', title: 'Project Assistant', image: '/people/DSS/Picture15.png' },
];

const adminTeam = [
    { name: 'Mr. Vivek Kumar Sen', title: 'Project Assistant', image: '/people/DSS/Picture14.png' },
];

export default function DSSPeoplePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 py-12 px-4">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">Team DSS</h1>
                    <p className="text-lg text-cyan-600 max-w-2xl mx-auto">
                        The experts driving innovation in water resource management
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full mx-auto mt-4" />
                </motion.div>

                {/* SECTION 1: Principal Investigators */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Principal Investigators
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
                        {principalInvestigators.map((person, index) => (
                            <motion.a
                                key={person.name}
                                href={person.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full max-w-[280px] bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer block"
                            >
                                <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-bold text-[#0a3d62] leading-tight mb-1 group-hover:text-emerald-600 transition-colors">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-emerald-600 mb-1">{person.role}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">{person.title}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: Co-Principal Investigators */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Co-Principal Investigators
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        {coPrincipalInvestigators.map((person, index) => (
                            <motion.a
                                key={person.name}
                                href={person.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="w-full max-w-[280px] bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer block"
                            >
                                <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-bold text-[#0a3d62] leading-tight mb-2 group-hover:text-emerald-600 transition-colors">
                                        {person.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{person.title}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* SECTION 3: Research and Development Team (Static - No Links) */}
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

                {/* SECTION 4: Admin Team (Static - No Links) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-[#0a3d62] text-center mb-10 border-b border-gray-200 pb-4 inline-block w-full max-w-md mx-auto">
                        Admin Team
                    </h2>
                    <div className="flex justify-center">
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