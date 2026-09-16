'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const nmcgOfficials = [
    {
        name: 'Shri Rajeev Kumar Mittal',
        title: 'Director General, National Mission For Clean Ganga',
        image: '/people/nmcg/Rajeev_Mital1.jpg',
    },
    {
        name: 'Shri Nalin Kumar Srivastava',
        title: 'Deputy Director General, National Mission For Clean Ganga',
        image: '/people/nmcg/nalin_sir.png',
    },
    {
        name: 'Shri Brijendra Swaroop',
        title: 'Executive Director (Projects), National Mission For Clean Ganga',
        image: '/people/nmcg/bswaroop2.jpg',
    },
    {
        name: 'Shri Anup Kumar Srivastava',
        title: 'Executive Director (Technical), National Mission For Clean Ganga',
        image: '/people/nmcg/aps.jpg',
    },
    {
        name: 'Shri   Dheeraj   Joshi',
        title: 'Director (Urban) , National Mission For Clean Ganga',
        image: '/people/nmcg/dheeraj_joshi.jpeg',
    },
];

export default function NMCGPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        NMCG Officials
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        National Mission for Clean Ganga - Leadership driving the SLCR initiative
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-4" />
                </motion.div>

                {/* Officials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center max-w-8xl mx-auto">
                    {nmcgOfficials.map((person, index) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full max-w-[360px] h-full"
                        >
                            <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                                <div className="h-60 w-full relative overflow-hidden bg-gray-100">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="px-6 py-4 text-center flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-[#0a3d62] mb-1">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm text-blue-600 font-medium leading-snug">
                                        {person.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
