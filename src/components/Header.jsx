import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  FileText, 
  Activity, 
  Pill, 
  Stethoscope, 
  MessageSquare
} from 'lucide-react';
import Logo from './Logo';

const Header = ({ onOpenAppointment, onOpenReportModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className="sticky top-0 z-40 bg-white shadow-md transition-all">
      {/* Top Bar - Info & Contact */}
      <div className="bg-gradient-to-r from-[#0F4C81] via-[#1E5A96] to-[#0A365C] text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 hover:text-sky-200 transition">
              <Clock className="w-4 h-4 text-sky-300" />
              <span>Mon - Sat: <strong>7:00 AM - 9:00 PM</strong> | Sun: <strong>8:00 AM - 2:00 PM</strong></span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 hover:text-sky-200 transition">
              <MapPin className="w-4 h-4 text-sky-300" />
              <span>Musheerabad, Hyderabad</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button 
              onClick={onOpenReportModal}
              className="hidden sm:flex items-center gap-1.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-100 px-3 py-1 rounded-full border border-sky-300/30 transition text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-sky-300" />
              <span>Request Lab Reports</span>
            </button>
            <a 
              href="tel:+919848188898"
              className="flex items-center gap-1.5 font-extrabold hover:text-emerald-300 transition bg-emerald-600/30 px-3.5 py-1 rounded-full border border-emerald-400/40 text-xs md:text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span>+91 98481 88898</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        
        {/* Big Clear Logo */}
        <a href="#home" aria-label="PROCARE homepage"
          className="cursor-pointer hover:opacity-95 transition transform hover:scale-[1.02] shrink-0 py-1"
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-4 xl:gap-6 font-bold text-slate-700 text-sm md:text-base">
          <a href="#home" className="hover:text-[#0F4C81] font-extrabold transition">
            Home
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0F4C81] transition">
            About
          </a>
          <a href="#doctors" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0F4C81] transition">
            Doctors
          </a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0F4C81] transition">
            Services
          </a>
          <a href="/lab-tests" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0F4C81] transition">
            Lab Tests
          </a>
          <a href="#pharmacy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0F4C81] transition">
            Pharmacy
          </a>
          <a href="/gallery" className="hover:text-[#0F4C81] transition">Gallery</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0F4C81] transition">
            FAQ
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0F4C81] transition">
            Contact
          </a>
        </nav>

        {/* Header Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button 
            onClick={onOpenAppointment}
            className="btn-glow bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] hover:from-[#0A365C] hover:to-[#0F4C81] text-white px-6 py-3 rounded-xl font-extrabold text-sm md:text-base flex items-center gap-2 transition"
          >
            <Calendar className="w-5 h-5 text-sky-300" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition border border-slate-200"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 text-sm font-medium text-slate-700">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-800">
              <Stethoscope className="w-4 h-4 text-sky-600" />
              <span>Services</span>
            </a>
            <a href="#doctors" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-800">
              <Activity className="w-4 h-4 text-sky-600" />
              <span>Doctors</span>
            </a>
            <a href="/lab-tests" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-800">
              <FileText className="w-4 h-4 text-sky-600" />
              <span>Lab Tests</span>
            </a>
            <a href="#pharmacy" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-800">
              <Pill className="w-4 h-4 text-sky-600" />
              <span>Pharmacy</span>
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-1 text-sm font-medium">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 px-2 text-slate-700 hover:text-sky-700">About PROCARE</a>
            <a href="/gallery" className="text-left py-2 px-2 text-slate-700 hover:text-sky-700">Gallery</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 px-2 text-slate-700 hover:text-sky-700">Frequently Asked Questions</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 px-2 text-slate-700 hover:text-sky-700">Contact & Directions</a>
            <button onClick={onOpenReportModal} className="text-left py-2 px-2 text-sky-700 font-bold flex items-center justify-between">
              <span>Request Lab Reports</span>
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenAppointment(); }}
              className="w-full bg-[#0F4C81] text-white py-3.5 rounded-xl font-extrabold text-center flex items-center justify-center gap-2 shadow-md text-base"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Now</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
