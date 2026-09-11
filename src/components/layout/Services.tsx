"use client";

import { motion } from "framer-motion";
import { Wrench, HardHat, Wifi, Home, Truck, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Engineering Services",
    description: "We offers contracting services on a wide variety of projects; from Conception & Finance, Road Construction and Road Rehabilitation, Design; Build operate & Transfer (BOT) to Public Private Partnership Contracts as well as the conventional building contracts. Backed by significant human capital material resources, the Company is well placed to effectively implement various construction projects of any size and complexity."
  },
  {
    icon: HardHat,
    title: "Building/Road Construction & Rehabilitation",
    description: "Our company’s expertise ranges from office blocks to shopping centres, residential developments, car parks, airports, hospitals and schools. The rush for our services is a testament to our capability and the calibre of work that we can deliver to our clients and the value derivable from such projects."
  },
  {
    icon: Wifi,
    title: "IT & Telecommunications",
    description: "Wireless Services, IP & Fiber Services, Drive Tests & Optimization, Structured Cabling & Traffic Migration and proven technologies for achieving and exceeding the level of performance required by the modern applications for telecommunication systems. Procurement Commercial, industrial and technical procurement and supply services."
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "“A new place for living” We have long-standing experience in the development, planning and completion of building projects. Our knowledge concerning the demands and requirements of our customers is of benefit as regards the quality of the buildings."
  },
  {
    icon: Truck,
    title: "Supply of Construction Equipment",
    description: "We supply any types of construction equipments such as Backhoe, Bulldozers, Excavators, etc."
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    description: "Our procurement team are experienced in managing and performing procurement activities for diverse projects and contracts while expertly sourcing for anything our clients require – anywhere – from highly trusted sources."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-gray/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent rounded-full mx-auto mb-6"></div>
          <p className="text-brand-dark/70 text-lg">
            Delivering high-quality solutions across multiple sectors with precision and professionalism.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.15 }}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden h-full flex flex-col"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-brand-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-14 h-14 bg-brand-gray rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-brand-dark/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
