"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-gray/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-accent/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-primary/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-primary text-sm font-bold tracking-wide mb-4 border border-brand-accent/30">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent rounded-full mx-auto mb-6"></div>
          <p className="text-brand-dark/70 text-lg">
            Have a project in mind or need more information about our services? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gray flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">Office Address</h4>
                <p className="text-brand-dark/70 leading-relaxed text-sm">
                  No. 34 Tamale Street, off Abidjan Street, Zone 3, Wuse District, Abuja - FCT.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gray flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">Phone Number</h4>
                <p className="text-brand-dark/70 leading-relaxed text-sm">
                  +234 0806 923 0300<br/>07063665287
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gray flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">Email Address</h4>
                <p className="text-brand-dark/70 leading-relaxed text-sm break-all">
                  info@arifinvestmentnigerialtd.com.ng
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-8">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand-dark/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 rounded-xl bg-brand-gray/50 border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-brand-dark/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-4 rounded-xl bg-brand-gray/50 border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-brand-dark/80">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-5 py-4 rounded-xl bg-brand-gray/50 border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand-dark/80">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-brand-gray/50 border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
