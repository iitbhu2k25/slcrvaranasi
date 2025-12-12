'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper } from 'lucide-react';

const newsItems = [
  {
    title: 'Smart Laboratory on Clean Rivers developed at IIT-BHU to rejuvenate small rivers',
    href: '#',
  },
  {
    title: 'Indo-Danish collaborative effort for river rejuvenation',
    href: '#',
  },
];

export default function MediaGalleryPage() {
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
            Media and Gallery
          </motion.h1>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">News</h2>
          <div className="space-y-4">
            {newsItems.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={news.href}
                  className="card p-5 flex items-center gap-4 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Newspaper className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-gray-700 font-medium flex-1">{news.title}</span>
                  <ExternalLink size={18} className="text-gray-400" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Placeholder gallery items */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: item * 0.05 }}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Photo {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
