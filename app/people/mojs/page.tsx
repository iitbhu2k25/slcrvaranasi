'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Ministry of Jal Shakti Officials - Placeholder data
const mojsOfficials = [
    {
        name: 'Shri C R Patil',
        title: "Hon'ble Union Minister",
        department: 'Ministry of Jal Shakti',
        image: '/people/mojs/CR_patil.jpg',
    },
    {
        name: 'Shri V. Somanna',
        title: "Hon'ble Minister of State",
        department: 'Ministry of Jal Shakti',
        image: '/people/mojs/somnna.jpeg',
    },
    {
        name: 'Shri Raj Bhushan Choudhary',
        title: "Hon'ble Minister of State",
        department: 'Ministry of Jal Shakti',
        image: '/people/mojs/bhushan.png',
    },
    {
        name: 'Shri V L kantha Rao',
        title: "Secretary",
        department: 'Ministry of Jal Shakti',
        image: '/people/mojs/secretary1.jpg',
    },
    
];

export default function MOJSPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                        Leadership
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                         Ministry of Jal Shakti Officials
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ministry of Jal Shakti - Providing strategic direction for the SLCR initiative
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-4" />
                </motion.div>

                {/* Officials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mojsOfficials.map((person, index) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                        >
                            <div className="h-64 overflow-hidden relative bg-gradient-to-br from-blue-100 to-cyan-100">
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
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{person.name}</h3>
                                <p className="text-sm text-blue-600 font-medium leading-tight">{person.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{person.department}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {mojsOfficials.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">Content coming soon...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
