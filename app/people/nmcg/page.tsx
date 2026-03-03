'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const nmcgOfficials = [
    {
        name: 'Shri Rajeev Mittal',
        title: 'DG, National Mission For Clean Ganga',
        image: '/people/nmcg/Rajeev_Mital1.jpg',
    },
    {
        name: 'Shri Nalin Kumar Srivastava',
        title: 'DDG, National Mission For Clean Ganga',
        image: '/people/nmcg/nalin_sir.png',
    },
    {
        name: 'Shri Anup Kumar Srivastava',
        title: 'Executive Director (Technical), National Mission For Clean Ganga',
        image: '/people/nmcg/aps.jpg',
    },
    {
        name: 'Shri Dheeraj Joshi',
        title: 'Director(Urban), National Mission For Clean Ganga',
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {nmcgOfficials.map((person, index) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10" />
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    width={300}
                                    height={400}
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 text-center bg-gradient-to-b from-white to-blue-50/50">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    {person.name}
                                </h3>
                                <p className="text-sm text-blue-600 font-medium leading-tight">
                                    {person.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
