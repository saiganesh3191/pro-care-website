import React from 'react';
import { 
  Award, 
  Microscope, 
  Pill, 
  HeartHandshake, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Qualified & Experienced Doctors',
      description: 'Senior specialists with decades of clinical expertise across medicine, pediatrics & diagnostics.',
      icon: Award,
      bgColor: 'bg-rose-50/80 border-rose-100 text-rose-700',
      iconBg: 'bg-rose-100 text-rose-700'
    },
    {
      title: 'Modern Diagnostic Facilities',
      description: 'Fully automated lab machinery ensuring precise, fast and reliable diagnostic test results.',
      icon: Microscope,
      bgColor: 'bg-sky-50/80 border-sky-100 text-[#0F4C81]',
      iconBg: 'bg-sky-100 text-[#0F4C81]'
    },
    {
      title: 'In-House Pharmacy',
      description: 'Complete stock of genuine medicines, health supplements and prescription refills.',
      icon: Pill,
      bgColor: 'bg-emerald-50/80 border-emerald-100 text-emerald-700',
      iconBg: 'bg-emerald-100 text-emerald-700'
    },
    {
      title: 'Personalised & Compassionate Care',
      description: 'Warm, patient-centric approach ensuring every individual feels valued, heard and cared for.',
      icon: HeartHandshake,
      bgColor: 'bg-amber-50/80 border-amber-100 text-amber-800',
      iconBg: 'bg-amber-100 text-amber-800'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[#0F4C81] text-xs uppercase font-extrabold tracking-widest bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            Trusted Healthcare Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose PRO CARE?
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            We blend modern medical diagnostics with compassionate human touch to deliver outstanding healthcare.
          </p>
        </div>

        {/* 4 Custom Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-2xl border ${item.bgColor} shadow-sm hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-[#0F4C81] transition">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PRO CARE Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
