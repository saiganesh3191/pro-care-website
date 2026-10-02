import { clinic } from '../data/clinic';
import React from 'react';
import { 
  Calendar, 
  FileCheck, 
  HeartHandshake, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose Service',
      desc: 'Doctor, Lab Test or Pharmacy',
      icon: Calendar,
      badge: 'Step 1'
    },
    {
      number: '2',
      title: 'Select Date & Time',
      desc: 'Book as per your convenience',
      icon: Calendar,
      badge: 'Step 2'
    },
    {
      number: '3',
      title: 'Send Your Request',
      desc: 'Reception confirms availability on WhatsApp',
      icon: FileCheck,
      badge: 'Step 3'
    },
    {
      number: '4',
      title: 'Visit & Get Care',
      desc: 'Consult, Get Tested or Pick Medicines',
      icon: HeartHandshake,
      badge: 'Step 4'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-[#0F4C81] text-xs uppercase font-extrabold tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Booking your doctor consultation, diagnostic lab tests, or pharmacy order takes less than 60 seconds.
          </p>
        </div>

        {/* Steps Flowchart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center group">
                
                {/* Step Circle Header with Number Pill */}
                <div className="relative mb-6">
                  {/* Number Badge */}
                  <div className="w-8 h-8 rounded-full bg-[#0F4C81] text-white font-extrabold text-xs flex items-center justify-center shadow-md absolute -top-2 -left-2 z-10 border-2 border-white">
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/80 border-2 border-sky-200 text-[#0F4C81] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-[#0F4C81] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-9 h-9" />
                  </div>
                </div>

                {/* Connecting Arrow for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-[-15%] w-12 text-sky-300 pointer-events-none">
                    <ChevronRight className="w-8 h-8 mx-auto animate-pulse" />
                  </div>
                )}

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#0F4C81] transition">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* CTA banner under flow */}
        <div className="mt-12 bg-gradient-to-r from-[#0F4C81] via-[#1E5A96] to-[#0A365C] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-white/10 rounded-xl">
              <Sparkles className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg">Need Assistance with Booking?</h4>
              <p className="text-xs text-sky-100">Our customer support team is available on WhatsApp and phone: Mon–Sat 7 AM–9 PM; Sun 8 AM–2 PM.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${clinic.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello PROCARE Polyclinic, I would like assistance booking an appointment.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-white hover:bg-sky-50 text-[#0F4C81] font-extrabold text-sm px-6 py-3 rounded-xl shadow-md transition"
          >
            Start Booking on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
