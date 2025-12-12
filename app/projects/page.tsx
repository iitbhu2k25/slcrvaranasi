'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'project1',
    title: 'Developing a Decision Support System',
    subtitle: 'DSS-WRM',
    description: 'For water management to analyze basin water dynamics through hydrological models, scenario generation, forecasting and data analytics. Integrate ground water and hydrological models to create river management plan.',
    image: '/P_1.0.jpg',
  },
  {
    id: 'project2',
    title: 'Hydrogeological Models of the Varuna Basin',
    subtitle: 'Groundwater Analysis',
    description: 'Aims to find Groundwater recharge sites to enhance base flow through managed Aquifer recharge (MAR). Application of advance Geophysical techniques i.e. TEM and Mathematical modelling with Aarhus University.',
    image: '/P_2.0.jpg',
  },
  {
    id: 'project3',
    title: 'Characterization of Emerging Pollutants & Fingerprint Analysis',
    subtitle: 'Water Quality',
    description: 'Aims to create a detailed fingerprint library, enhance water quality monitoring, and propose effective remediation strategies. Jointly working with the team from the University of Copenhagen.',
    image: '/P_3.0.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary-light to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Projects
          </motion.h1>
          <p className="text-lg text-white/80">Research initiatives under SLCR</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`} className="block group h-full">
                  <div className="card card-hover overflow-hidden h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-primary mb-3 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-1">{project.description}</p>
                      <div className="mt-4 text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
