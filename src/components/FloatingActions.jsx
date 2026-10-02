import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

const FloatingActions = ({ onOpenAppointment, onOpenReportModal }) => {
  const whatsappUrl = 'https://wa.me/919848188898?text=' + encodeURIComponent('Hello PROCARE Polyclinic, I need information about appointments / lab tests.');

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end pointer-events-none">
      
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white w-13 h-13 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-md">
          Chat on WhatsApp
        </span>
      </a>

      {/* Floating Phone Call Button */}
      <a 
        href="tel:+919848188898"
        className="pointer-events-auto bg-[#0F4C81] hover:bg-[#0A365C] text-white w-13 h-13 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110 group relative"
        aria-label="Call Clinic"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-md">
          Call +91 98481 88898
        </span>
      </a>

      {/* Mobile Floating Appointment Bar */}
      <div className="sm:hidden pointer-events-auto fixed bottom-3 left-3 right-3 z-30">
        <button 
          onClick={onOpenAppointment}
          className="w-full bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] text-white font-extrabold py-3 px-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2 text-sm"
        >
          <Calendar className="w-4 h-4 text-sky-200" />
          <span>Book Appointment Now</span>
        </button>
      </div>

    </div>
  );
};

export default FloatingActions;
