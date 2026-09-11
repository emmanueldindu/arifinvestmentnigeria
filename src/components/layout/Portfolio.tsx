"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
  { src: "/images/portfolio/construction-1.jpg", alt: "Construction Project", category: "Construction" },
  { src: "/images/portfolio/telecomtower.jpg", alt: "Telecom Tower", category: "IT & Telecommunications" },
  { src: "/images/portfolio/real-estate.jpg", alt: "Luxury Real Estate", category: "Real Estate" },
  { src: "/images/portfolio/road-contruction.jpg", alt: "Road Construction", category: "Civil Engineering" },
  { src: "/images/portfolio/server-1.jpg", alt: "Server Infrastructure", category: "Procurement" },
];

const row2 = [
  { src: "/images/portfolio/construction-2.jpg", alt: "Building Project", category: "Construction" },
  { src: "/images/portfolio/oil-gas.jpg", alt: "Oil & Gas Facility", category: "Engineering Services" },
  { src: "/images/portfolio/server-2.jpg", alt: "Network Infrastructure", category: "IT & Telecommunications" },
  { src: "/images/portfolio/oil-gas2.jpg", alt: "Industrial Facility", category: "Engineering Services" },
  { src: "/images/portfolio/road-contruction.jpg", alt: "Highway Development", category: "Civil Engineering" },
];

// Helper to duplicate array for infinite scroll
const duplicatedRow1 = [...row1, ...row1];
const duplicatedRow2 = [...row2, ...row2];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-primary text-sm font-bold tracking-wide mb-4 border border-brand-accent/30">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-6">
            Portfolio
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent rounded-full mx-auto mb-6"></div>
          <p className="text-brand-dark/70 text-lg">
            A showcase of our capabilities across Civil Engineering, IT & Telecommunications, Construction, and Procurement.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Row 1 - Sliding Left */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[120vw] lg:w-[100vw] min-w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-6 pr-6 w-full"
          >
            {duplicatedRow1.map((item, idx) => (
              <div 
                key={`r1-${idx}`} 
                className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[250px] md:h-[300px] rounded-3xl overflow-hidden shrink-0 group shadow-lg"
              >
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-accent font-bold text-sm mb-1">{item.category}</p>
                  <h4 className="text-white text-xl font-bold">{item.alt}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Sliding Right */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[120vw] lg:w-[100vw] min-w-max">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex gap-6 pr-6 w-full"
          >
            {duplicatedRow2.map((item, idx) => (
              <div 
                key={`r2-${idx}`} 
                className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[250px] md:h-[300px] rounded-3xl overflow-hidden shrink-0 group shadow-lg"
              >
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-accent font-bold text-sm mb-1">{item.category}</p>
                  <h4 className="text-white text-xl font-bold">{item.alt}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Edges for smooth fade out */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
