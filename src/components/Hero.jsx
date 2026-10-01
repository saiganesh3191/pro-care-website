import React from 'react';
import { 
  UserCheck, 
  Microscope, 
  CalendarCheck, 
  Shield, 
  ChevronRight, 
  Calendar, 
  TestTube, 
  Pill,
  Sparkles
} from 'lucide-react';

const Hero = ({ onOpenAppointment, onOpenLabModal, onOpenPharmacyModal }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#F0F7FF] via-[#EBF5FF] to-white pt-8 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 bg-sky-100/90 text-[#0F4C81] px-4 py-2 rounded-full text-xs md:text-sm font-extrabold tracking-wide uppercase border border-sky-200 shadow-xs">
              <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
              <span>YOUR FAMILY'S HEALTH, OUR PRIORITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Quality Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] via-[#165DA0] to-sky-600">
                Closer to You
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-semibold leading-relaxed max-w-2xl">
              <strong className="text-[#0F4C81]">Consult Doctors</strong> &nbsp;|&nbsp; 
              <strong className="text-[#0F4C81]">Book Lab Tests</strong> &nbsp;|&nbsp; 
              <strong className="text-[#0F4C81]">Pharmacy</strong>
              <br />
              <span className="text-slate-900 font-bold">All in One Place – PRO CARE Poly Clinic</span>
            </p>

            {/* 4 Feature Badges matching mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm hover:border-sky-300 transition">
                <div className="p-2.5 bg-sky-50 text-[#0F4C81] rounded-xl shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">Expert</div>
                  <div className="text-[11px] text-slate-500 font-semibold">Doctors</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm hover:border-sky-300 transition">
                <div className="p-2.5 bg-sky-50 text-[#0F4C81] rounded-xl shrink-0">
                  <Microscope className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">Accurate</div>
                  <div className="text-[11px] text-slate-500 font-semibold">Diagnostics</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm hover:border-sky-300 transition">
                <div className="p-2.5 bg-sky-50 text-[#0F4C81] rounded-xl shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">Convenient</div>
                  <div className="text-[11px] text-slate-500 font-semibold">Appointments</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm hover:border-sky-300 transition">
                <div className="p-2.5 bg-sky-50 text-[#0F4C81] rounded-xl shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">Trusted</div>
                  <div className="text-[11px] text-slate-500 font-semibold">Pharmacy</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button 
                onClick={onOpenAppointment}
                className="btn-glow bg-gradient-to-r from-[#0F4C81] via-[#165DA0] to-[#0A365C] text-white p-4 sm:p-5 rounded-2xl font-bold text-left flex items-center gap-4 transition group"
              >
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition shrink-0">
                  <Calendar className="w-7 h-7 text-sky-200" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black flex items-center gap-1">
                    Book Appointment
                  </div>
                  <div className="text-xs sm:text-sm text-sky-100 font-normal">Consult Our Doctors</div>
                </div>
              </button>

              <button 
                onClick={onOpenLabModal}
                className="bg-white hover:bg-sky-50 text-[#0F4C81] border-2 border-sky-200 p-4 sm:p-5 rounded-2xl font-bold text-left flex items-center gap-4 shadow-sm hover:shadow-md transition group"
              >
                <div className="p-3 bg-sky-100 text-[#0F4C81] rounded-xl group-hover:bg-[#0F4C81] group-hover:text-white transition shrink-0">
                  <Microscope className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-1">
                    Book Lab Tests
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-normal">Quick & Easy Online</div>
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: Taller & Bigger Hero Photo + Floating Quick Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img 
                src="/images/hero.png" 
                alt="Pro Care Doctor Consulting Indian Family" 
                className="w-full h-[440px] sm:h-[500px] lg:h-[540px] object-cover object-top transform group-hover:scale-105 transition duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-extrabold text-[#0F4C81] shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open Today • Direct Consultations</span>
              </div>
            </div>

            {/* Quick Book Now Widget */}
            <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-4 w-full lg:w-80 bg-white rounded-3xl shadow-2xl border border-sky-100 p-5 space-y-3 animate-float z-20">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#0F4C81]"></span>
                  Quick Book Now
                </h3>
                <span className="text-xs font-extrabold bg-sky-100 text-[#0F4C81] px-2.5 py-0.5 rounded-full">Instant</span>
              </div>

              <button 
                onClick={onOpenAppointment}
                className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-sky-50 text-left border border-slate-100 hover:border-sky-200 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-sky-100 text-[#0F4C81] rounded-xl group-hover:bg-[#0F4C81] group-hover:text-white transition">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900">Book Doctor Appointment</div>
                    <div className="text-[11px] text-slate-500">In-Clinic Consultation</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0F4C81] group-hover:translate-x-1 transition" />
              </button>

              <button 
                onClick={onOpenLabModal}
                className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-sky-50 text-left border border-slate-100 hover:border-sky-200 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-sky-100 text-[#0F4C81] rounded-xl group-hover:bg-[#0F4C81] group-hover:text-white transition">
                    <TestTube className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900">Book Lab Tests</div>
                    <div className="text-[11px] text-slate-500">Home Sample Collection</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0F4C81] group-hover:translate-x-1 transition" />
              </button>

              <button 
                onClick={onOpenPharmacyModal}
                className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-sky-50 text-left border border-slate-100 hover:border-sky-200 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-sky-100 text-[#0F4C81] rounded-xl group-hover:bg-[#0F4C81] group-hover:text-white transition">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900">Buy Medicines</div>
                    <div className="text-[11px] text-slate-500">Order from Pharmacy</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0F4C81] group-hover:translate-x-1 transition" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
