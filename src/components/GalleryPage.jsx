import React from 'react';
import { ArrowLeft, Images, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo';
import { clinic } from '../data/clinic';

export default function GalleryPage() {
  const whatsapp = `https://wa.me/${clinic.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello PROCARE Polyclinic, I would like to enquire about visiting the clinic.')}`;
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <a href="/" aria-label="PROCARE Polyclinic home"><Logo /></a>
          <a href="/" className="flex items-center gap-2 text-sm font-bold text-[#0F4C81]"><ArrowLeft className="w-4 h-4" /> Back to Home</a>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <p className="text-xs uppercase tracking-widest font-bold text-[#0F4C81]">PROCARE Polyclinic</p>
        <h1 className="text-4xl sm:text-5xl font-black mt-3">Our Gallery</h1>
        <p className="text-slate-600 mt-4 max-w-2xl">A closer look at our clinic, facilities and care.</p>
        <div className="mt-10 rounded-3xl border border-sky-100 bg-white p-8 sm:p-16 text-center shadow-sm">
          <div className="mx-auto w-20 h-20 rounded-2xl bg-sky-50 flex items-center justify-center"><Images className="w-10 h-10 text-[#0F4C81]" /></div>
          <h2 className="text-2xl font-extrabold mt-6">Clinic photos coming soon</h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto">We’ll be sharing photos of our clinic and facilities here. Contact our front office to plan your visit.</p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-7 bg-[#0F4C81] hover:bg-[#0A365C] text-white px-6 py-3 rounded-xl font-bold"><MessageCircle className="w-5 h-5" /> Contact Front Office</a>
        </div>
      </main>
      <footer className="max-w-5xl mx-auto px-4 pb-8 flex flex-wrap justify-between gap-4 text-sm text-slate-600">
        <span>{clinic.address}</span>
        <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 text-[#0F4C81] font-bold"><Phone className="w-4 h-4" />{clinic.phoneDisplay}</a>
      </footer>
    </div>
  );
}
