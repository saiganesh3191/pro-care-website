import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="relative bg-gradient-to-b from-[#F0F7FF] via-[#EBF5FF] to-white pt-8 pb-16 overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl pointer-events-none"
      ></motion.div>
      
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-200/50 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Text & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Eyebrow Tag */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-sky-100/90 text-[#0F4C81] px-4 py-2 rounded-full text-xs md:text-sm font-extrabold tracking-wide uppercase border border-sky-200 shadow-xs cursor-default"
            >
              <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
              <span>YOUR FAMILY'S HEALTH, OUR PRIORITY</span>
            </motion.div>

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
              <span className="text-slate-900 font-bold">All in One Place – PROCARE Polyclinic</span>
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { icon: UserCheck, title: 'Expert', sub: 'Doctors' },
                { icon: Microscope, title: 'Accurate', sub: 'Diagnostics' },
                { icon: CalendarCheck, title: 'Convenient', sub: 'Appointments' },
                { icon: Shield, title: 'Trusted', sub: 'Pharmacy' }
              ].map((badge, index) => {
                const IconComp = badge.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05, translateY: -3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition cursor-pointer"
                  >
                    <div className="p-2.5 bg-sky-50 text-[#0F4C81] rounded-xl shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900">{badge.title}</div>
                      <div className="text-[11px] text-slate-500 font-semibold">{badge.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenAppointment}
                className="btn-glow bg-gradient-to-r from-[#0F4C81] via-[#165DA0] to-[#0A365C] text-white p-4 sm:p-5 rounded-2xl font-bold text-left flex items-center gap-4 transition group shadow-lg"
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
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
              </motion.button>
            </div>

          </motion.div>

          {/* Right Column: 100% UNBLOCKED Photo + Quick Book Card Below */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4"
          >
            {/* 100% Clear Unblocked Photo Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img 
                src="/images/hero.png" 
                alt="PROCARE Doctor Consulting Indian Family"
                className="w-full h-[400px] sm:h-[460px] object-cover object-top transform group-hover:scale-105 transition duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-extrabold text-[#0F4C81] shadow-md flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open Today • Direct Consultations</span>
              </motion.div>
            </div>

            {/* Quick Book Now Card - Placed below the photo so NOTHING blocks the image! */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl border border-sky-100 p-4 space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0F4C81]"></span>
                  Quick Book Now
                </h3>
                <span className="text-[10px] font-extrabold bg-sky-100 text-[#0F4C81] px-2.5 py-0.5 rounded-full">Instant</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { icon: UserCheck, title: 'Doctor Consult', sub: 'In-Clinic Visit', handler: onOpenAppointment },
                  { icon: TestTube, title: 'Lab Tests', sub: 'Home Pickup', handler: onOpenLabModal },
                  { icon: Pill, title: 'Pharmacy', sub: 'Order Online', handler: onOpenPharmacyModal }
                ].map((item, idx) => {
                  const IconC = item.icon;
                  return (
                    <motion.button 
                      key={idx}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={item.handler}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-left border border-slate-100 hover:border-sky-200 transition group"
                    >
                      <div className="p-2 bg-sky-100 text-[#0F4C81] rounded-lg group-hover:bg-[#0F4C81] group-hover:text-white transition shrink-0">
                        <IconC className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-slate-900 truncate">{item.title}</div>
                        <div className="text-[10px] text-slate-500 truncate">{item.sub}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
