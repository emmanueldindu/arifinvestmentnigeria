import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-secondary text-brand-gray pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Arif Investment
              </span>
            </Link>
            <p className="text-brand-gray/70 leading-relaxed text-sm">
              An Indigenous Company specialized in all fields of constructions, engineering, IT & Telecommunications, and Real Estate.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-brand-gray/70 hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-brand-gray/70 hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-brand-gray/70 hover:text-brand-accent transition-colors">Our Services</Link></li>
              <li><Link href="#portfolio" className="text-brand-gray/70 hover:text-brand-accent transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="text-brand-gray/70 hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-brand-gray/70">Engineering Services</li>
              <li className="text-brand-gray/70">Building & Construction</li>
              <li className="text-brand-gray/70">IT & Telecoms</li>
              <li className="text-brand-gray/70">Real Estate</li>
              <li className="text-brand-gray/70">Procurement</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-accent shrink-0 mt-1" size={20} />
                <span className="text-brand-gray/70 text-sm">
                  No. 34 Tamale Street, off Abidjan Street, Zone 3, Wuse District, Abuja - FCT.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-accent shrink-0" size={20} />
                <span className="text-brand-gray/70 text-sm">
                  +234 0806 923 0300<br/>07063665287
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-accent shrink-0" size={20} />
                <span className="text-brand-gray/70 text-sm break-all">
                  info@arifinvestmentnigerialtd.com.ng
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Arif Investment Nigeria. All Rights Reserved.
          </p>
          <div className="text-brand-gray/50 text-sm">
            Developed with excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
