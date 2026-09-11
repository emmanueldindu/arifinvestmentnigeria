"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Compass, Target, GraduationCap, HeartPulse, Users } from "lucide-react";

const approaches = [
  {
    icon: GraduationCap,
    title: "Skill Acquisition & Training",
    description: "We provide training facilities catering for skills acquisition by local youths in welding technology, industrial electrical installation, masonry, carpentry, mechanical maintenance, and structural fabrication. We strengthen existing programs or acquire land to install new facilities with local ruler assistance."
  },
  {
    icon: HeartPulse,
    title: "Social Facilities & Infrastructure",
    description: "Beyond skill centers, we aim to build health centers, borehole water systems, schools, and games facilities. We recognize past neglect in oil-producing areas and commit to dredging waterways, providing motorized boats, or building motorable roads to uplift the community standard of living."
  },
  {
    icon: Users,
    title: "Community Collaboration",
    description: "Extensive study and elaborate discussions with community leaders and youths determine priorities. We tailor our community development programs to the specific needs of the area within available budgets to maximize positive impact."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section: Introduction & Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-primary text-sm font-bold tracking-wide mb-2 border border-brand-accent/30">
                  Who We Are
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
                  Arif Investment Nigeria Limited
                </h2>
              </motion.div>
              <div className="w-20 h-1.5 bg-brand-accent rounded-full"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              className="space-y-6 text-brand-dark/70 text-lg leading-relaxed"
            >
              <p>
                <strong className="text-brand-primary">ARIF INVESTMENT NIGERIA LIMITED</strong> is an Indigenous Company specialized in all fields of Supply and other related Services. Incorporated on March 13th, 2020, in accordance with the Company Allied Matters Act of 1990 of the Federal Republic of Nigeria (RC No. 1653993).
              </p>
              <p>
                With a rating of <strong className="text-brand-primary">9CE</strong>, we possess verified capacity to effectively execute civil engineering projects of unlimited scope and value. Our track records in the construction of stadia, bridges, and other infrastructures demonstrate our exceptional ability and competence in the field of Civil Engineering.
              </p>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                className="bg-brand-gray/50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <Compass className="text-brand-primary mb-4" size={32} />
                <h4 className="text-xl font-bold text-brand-dark mb-2">Our Vision</h4>
                <p className="text-brand-dark/70 text-sm leading-relaxed">To be the best in what we offer.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                className="bg-brand-gray/50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <Target className="text-brand-primary mb-4" size={32} />
                <h4 className="text-xl font-bold text-brand-dark mb-2">Our Mission</h4>
                <p className="text-brand-dark/70 text-sm leading-relaxed">To help our clients deploy the right hardware and software that best serves their unique environments.</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative order-1 lg:order-2 flex flex-col justify-center max-w-xl mx-auto w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-[40px] transform rotate-3 scale-[1.02] transition-transform duration-500 hover:rotate-0"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative bg-brand-gray rounded-[40px] overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] w-full group"
              >
                <Image 
                  src="/images/portfolio/construction-2.jpg"
                  alt="Engineering Team Meeting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-accent shadow-md mb-4 border border-white/20">
                    <Building2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md leading-tight">
                    Building the Future of Nigeria
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>

        {/* Bottom Section: Our Approach */}
        <div className="bg-brand-primary rounded-[40px] p-10 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            className="text-center max-w-3xl mx-auto mb-16 relative z-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Approach to Community Development</h3>
            <p className="text-brand-gray/80 text-lg">
              We tackle social problems by actively engaging with and uplifting the communities in which we operate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {approaches.map((approach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <approach.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 leading-snug">{approach.title}</h4>
                <p className="text-brand-gray/70 leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
