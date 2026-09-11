"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[95vh] flex items-center bg-brand-gray">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] opacity-70 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-200 text-sm font-semibold text-brand-primary mb-8 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent border-2 border-white"></span>
                </span>
                Building Nigeria's Future
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-brand-primary leading-[1.1] tracking-tight mb-8"
            >
              Arif Investment <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">Nigeria</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-dark/80 mb-10 leading-relaxed max-w-xl"
            >
              An indigenous company specialized in world-class construction, engineering, real estate, and cutting-edge IT & Telecommunications services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            >
              <Link
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-primary border border-gray-200 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-brand-primary transition-all duration-300 hover:shadow-md"
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-8 border-t border-gray-200/60 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/30 flex items-center justify-center text-brand-primary">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-sm font-semibold text-brand-dark">RC 425,678<br/><span className="text-brand-dark/60 font-normal">Registered</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/30 flex items-center justify-center text-brand-primary">
                  <Award size={20} />
                </div>
                <div className="text-sm font-semibold text-brand-dark">Indigenous<br/><span className="text-brand-dark/60 font-normal">Company</span></div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Image 1: Construction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="absolute top-0 right-0 w-[350px] h-[450px] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white"
            >
              <Image 
                src="/images/portfolio/construction-1.jpg" 
                alt="Construction Site" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </motion.div>

            {/* Image 2: Telecom Tower */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="absolute bottom-10 left-0 w-[280px] h-[280px] rounded-3xl overflow-hidden shadow-2xl z-30 border-8 border-white"
            >
              <Image 
                src="/images/portfolio/telecomtower.jpg" 
                alt="Telecommunications Tower" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-40 -left-10 bg-white p-4 rounded-2xl shadow-xl z-40 flex items-center gap-4 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-brand-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="text-brand-primary font-bold">Trusted Quality</p>
                <p className="text-sm text-brand-dark/60">Guaranteed</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
