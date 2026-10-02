import React from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import Logo from './Logo';
import { LabTestForm } from './LabTestModal';

export default function LabTestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <a href="/" aria-label="PROCARE home"><Logo className="h-14 sm:h-20" /></a>
          <a href="/" className="flex items-center gap-2 text-sm font-bold text-[#0F4C81]"><ArrowLeft className="w-4 h-4" /> Back to Home</a>
        </div>
      </header>
      <main>
        <div className="max-w-5xl mx-auto px-4 pt-8 sm:pt-12">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0F4C81]">PROCARE Diagnostics</p>
          <h1 className="text-3xl sm:text-4xl font-black mt-2">Lab Tests &amp; Sample Collection</h1>
          <p className="text-sm text-slate-600 mt-3 max-w-2xl">Choose your tests, review the listed prices and request a clinic visit or home sample pickup. Send your request on WhatsApp for the clinic to confirm.</p>
        </div>
        <LabTestForm standalone onClose={() => window.location.assign('/')} />
      </main>
      <footer className="max-w-5xl mx-auto px-4 pb-8 flex flex-wrap justify-between gap-3 text-sm text-slate-600">
        <span>Need help choosing a test or arranging collection?</span>
        <a href="tel:+919848188898" className="flex items-center gap-2 text-[#0F4C81] font-bold"><Phone className="w-4 h-4" /> +91 98481 88898</a>
      </footer>
    </div>
  );
}
