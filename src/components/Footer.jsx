import React from 'react';
import { 
  Clock, 
  Phone, 
  MapPin, 
  Navigation, 
  MessageSquare,
  ArrowUpRight,
  Heart,
  Mail,
  Building2
} from 'lucide-react';
import Logo from './Logo';
import { clinic } from '../data/clinic';

const Footer = ({ onOpenAppointment, onOpenLabModal, onOpenPharmacyModal, onOpenReportModal }) => {
  const googleMapLocationUrl = clinic.maps;

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
      
      {/* Top Highlight Cards Bar matching client mockup bottom bar */}
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl text-slate-900 grid grid-cols-1 md:grid-cols-3 gap-6 border border-slate-100">
          
          {/* Box 1: Clinic Timings */}
          <div className="flex items-start gap-4 text-left p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100">
            <div className="p-3 bg-[#0F4C81] text-white rounded-xl shrink-0 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm">Clinic Timings</h4>
              <p className="text-xs text-slate-600 mt-1">
                <strong>Mon - Sat:</strong> 7:00 AM - 9:00 PM<br />
                <strong>Sunday:</strong> 8:00 AM - 2:00 PM
              </p>
              <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                Open All 7 Days
              </span>
            </div>
          </div>

          {/* Box 2: Call & Contact */}
          <div className="flex items-start gap-4 text-left p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <div className="p-3 bg-emerald-600 text-white rounded-xl shrink-0 shadow-sm">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm">Call Clinic Direct</h4>
              <a 
                href="tel:+919848188898"
                className="text-base sm:text-lg font-black text-[#0F4C81] hover:text-sky-700 transition block mt-0.5"
              >
                +91 98481 88898
              </a>
              <a 
                href="tel:+919848188848"
                className="text-xs font-extrabold text-slate-600 hover:text-[#0F4C81] transition block mt-0.5"
              >
                Alt: +91 98481 88848
              </a>
            </div>
          </div>

          {/* Box 3: Location & Get Directions Button */}
          <div className="flex items-start gap-4 text-left p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
            <div className="p-3 bg-rose-600 text-white rounded-xl shrink-0 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-extrabold text-slate-900 text-sm">Exact Location</h4>
              <p className="text-xs text-slate-600 mt-1 leading-snug">
                Beside Marjan Hotel, Diara Market, Mushirabad, Hyderabad
              </p>
              <a 
                href={googleMapLocationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 bg-[#0F4C81] hover:bg-[#0A365C] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition"
              >
                <Navigation className="w-3.5 h-3.5 text-sky-300" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Map */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 text-left pb-12 border-b border-slate-800">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white p-3 rounded-2xl inline-block shadow-md border border-slate-700">
            <Logo />
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed">
            "We Treat, He Cures" — <strong>PROCARE Polyclinic</strong> is led by <strong>Dr. Mohd Vaseem</strong> (MBBS, MD, FCCP (USA), CCEBDM, FCD), delivering chest care, pulmonology, diabetology, diagnostic lab tests, day care, and pharmacy.
          </p>

          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <a href="mailto:drmohdvaseem@gmail.com" className="hover:text-sky-300 transition">drmohdvaseem@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Clinical & Interventional Pulmonology</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button 
              onClick={onOpenAppointment}
              className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition"
            >
              Book Consult
            </button>
            <a
              href={`https://wa.me/${clinic.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello PROCARE Polyclinic, I would like to enquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3.5 py-2 rounded-lg transition flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-extrabold text-sm text-sky-200 uppercase tracking-wider">Medical Services</h4>
          <ul className="space-y-2 text-xs text-slate-300 font-medium">
            <li>
              <button onClick={onOpenAppointment} className="hover:text-white transition flex items-center gap-1.5">
                <span>• Pulmonology & Chest Medicine</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenAppointment} className="hover:text-white transition flex items-center gap-1.5">
                <span>• Diabetes & Hypertension Panel</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenLabModal} className="hover:text-white transition flex items-center gap-1.5">
                <span>• Diagnostics & Home Sample Pickup</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenPharmacyModal} className="hover:text-white transition flex items-center gap-1.5">
                <span>• In-House Pharmacy & Delivery</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenAppointment} className="hover:text-white transition flex items-center gap-1.5">
                <span>• Day Care Observation & IV Therapy</span>
              </button>
            </li>
          </ul>
          <a href="/gallery" className="inline-block text-sky-200 hover:text-white text-sm font-bold">View Gallery</a>
        </div>

        {/* Col 3: Map Preview Card */}
        <div className="md:col-span-5 space-y-3">
          <h4 className="font-extrabold text-sm text-sky-200 uppercase tracking-wider">Clinic Location Map</h4>
          
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-48 shadow-lg group">
            <iframe 
              title="PROCARE Location Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent("PROCARE Polyclinic, Diara Market, Musheerabad, Hyderabad")}&output=embed`}
              className="w-full h-full border-0 filter brightness-90 contrast-125" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl flex items-center justify-between border border-slate-700">
              <span className="text-[11px] font-bold text-slate-200 truncate pr-2">Musheerabad, Hyderabad</span>
              <a 
                href={googleMapLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0F4C81] hover:bg-sky-600 text-white text-[10px] font-bold px-3 py-1 rounded-lg shrink-0 flex items-center gap-1"
              >
                <span>Open Map</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Credits Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div>
          © {new Date().getFullYear()} <strong>PROCARE Polyclinic</strong>. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Designed with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for Patient Excellence</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
