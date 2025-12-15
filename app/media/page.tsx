'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Gallery categories with images
const galleryCategories = [
  {
    title: 'Ganga at Varanasi',
    image: '/gallery/pexels-narin-chauhan-295714705-16542959.jpg',
    slug: 'drone-views'
  },
  {
    title: 'Site Visits',
    image: '/gallery/slcr14.jpg',
    slug: 'site-visits'
  },
  {
    title: 'Field Work',
    image: '/gallery/slcr3img.JPG',
    slug: 'field-work'
  },
  {
    title: 'Events at SLCR',
    image: '/gallery/slcr10.jpg',
    slug: 'events'
  },
  {
    title: 'Visitors at SLCR',
    image: '/gallery/partnership2.jpg',
    slug: 'visitors'
  },
  {
    title: 'SLCR Outreach',
    image: '/gallery/slcr18.jpg',
    slug: 'outreach'
  },
];

export default function MediaGalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative py-10 sm:py-14 bg-gradient-to-r from-primary via-primary-light to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide"
          >
            The SLCR Gallery: An Initiative of
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide"
          >
            Smart Laboratory on Clean Rivers (SLCR), IIT BHU Varanasi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-white/80 italic"
          >
            A gallery for public awareness, conservation and restoration of the river
          </motion.p>
        </div>
      </section>

      {/* Main Content - Written Content with Image Float */}
      <section className="py-10 sm:py-16 px-3 sm:px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {/* Image floated to the right */}
            <div className="float-right ml-6 mb-4 w-full sm:w-[350px] md:w-[400px] not-prose">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/gallery/gangavns4.jpg"
                  alt="A view of the Ganga River in Varanasi"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2 italic">
                A view of the Ganga River in Varanasi
              </p>
            </div>

            {/* Text content that wraps around the image */}
            <p className="text-gray-700 leading-relaxed mb-6 text-justify first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              The Ganga River is the lifeline of India, flowing through the heart of the country and sustaining
              millions of lives along its banks. Revered as a sacred river and a symbol of India&apos;s rich cultural
              heritage, the Ganga faces unprecedented challenges from pollution, industrial effluents, and
              urbanization. The Government of India, under the leadership of Hon&apos;ble Prime Minister Shri Narendra Modi,
              has taken significant steps towards the rejuvenation of the Ganga through the Namami Gange Programme.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              The <strong className="text-primary">Smart Laboratory on Clean Rivers (SLCR)</strong> initiative represents
              a landmark collaboration between India and Denmark, conceptualized during the meeting between the Hon&apos;ble
              Prime Minister of India and the Prime Minister of Denmark. This joint venture aims to develop innovative
              solutions for river restoration through cutting-edge research, technology transfer, and capacity building.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              In the sacred city of <strong>Varanasi</strong>, the SLCR initiative takes special significance. The city,
              also known as Kashi or Banaras, derives its very name from two rivers - the <strong className="text-primary">Varuna</strong> in
              the north and the <strong className="text-primary">Assi</strong> in the south, both tributaries of the Ganga. The Varuna River,
              in particular, has been a focus of restoration efforts as it flows into the holy Ganga at the northern
              boundary of the city.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Unlike the main Ganges stream, the Varuna has suffered from reduced flow and heavy encroachment.
              The water, which should be a lifeline for the northern districts, often stagnates. A lack of
              dissolved oxygen promotes the growth of anaerobic bacteria, leading to foul odors and a decline
              in aquatic life. The present situation reflects decades of indifference towards the environment.
              The basin has been treated as a reservoir for dumping waste—plastic bags, industrial effluent
              from small-scale dyeing units, and untreated sewage.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Such exogenic activities have robbed the river of its pristine glory. Therefore, collective action
              from all stakeholders—government, academia, and citizens—is needed to bring &quot;Varuna&quot; back to life.
              <strong className="text-primary"> The Smart Laboratory on Clean River (SLCR) at IIT (BHU)</strong> has
              made a remarkable effort by establishing this digital SLCR Gallery.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              The SLCR at IIT (BHU) Varanasi serves as a Living Laboratory where global knowledge meets local wisdom.
              Through a multi-disciplinary approach involving hydrology, environmental science, social engagement, and
              policy research, the laboratory works towards developing sustainable solutions for river rejuvenation.
              The initiative brings together experts from Indian Institutes of Technology, Danish universities, and
              various government bodies to create a collaborative platform for knowledge exchange.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              This digital gallery serves as a window into the various activities, research initiatives, field work,
              and events organized under the SLCR umbrella. Through these visual narratives, we aim to inspire
              collective action and raise public awareness about the importance of river conservation for our
              future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Categories - Below Content */}
      <section className="py-10 sm:py-16 px-3 sm:px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">SLCR Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of photographs documenting the various activities and initiatives
              under the Smart Laboratory on Clean Rivers program.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link
                  href={`/gallery/${category.slug}`}
                  className="block relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-base sm:text-lg drop-shadow-lg">
                        {category.title}
                      </h4>
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
