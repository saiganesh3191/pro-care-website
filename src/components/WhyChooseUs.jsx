import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Microscope, 
  Pill, 
  HeartHandshake, 
  CheckCircle2
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Qualified & Experienced Doctors',
      description: 'Senior specialists led by Dr. Mohd Vaseem (MBBS, MD, FCCP (USA), CCEBDM, FCD) with 15+ years of clinical experience.',
      icon: Award,
      bgColor: 'bg-rose-50/90 border-rose-200/80 text-rose-700',
      iconBg: 'bg-rose-100 text-rose-700'
    },
    {
      title: 'Modern Diagnostic Facilities',
      description: 'Blood tests, diabetes testing, thyroid testing and other investigations. Contact reception for availability and preparation instructions.',
      icon: Microscope,
      bgColor: 'bg-sky-50/90 border-sky-200/80 text-[#0F4C81]',
      iconBg: 'bg-sky-100 text-[#0F4C81]'
    },
    {
      title: 'In-House Pharmacy',
      description: 'Request medicines and prescription fulfilment through the clinic pharmacy. Reception confirms stock and delivery availability.',
      icon: Pill,
      bgColor: 'bg-emerald-50/90 border-emerald-200/80 text-emerald-700',
      iconBg: 'bg-emerald-100 text-emerald-700'
    },
    {
      title: 'Personalised & Compassionate Care',
      description: 'Warm, patient-centric approach ensuring every individual feels valued, heard and cared for.',
      icon: HeartHandshake,
      bgColor: 'bg-amber-50/90 border-amber-200/80 text-amber-800',
      iconBg: 'bg-amber-100 text-amber-800'
    }
  ];

  return (
    <section aria-labelledby="why-choose-us-heading" id="about" className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white relative overflow-hidden">
      <div id="why-choose-us" className="max-w-7xl mx-auto px-4 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-3 mb-14"
        >
          <span className="text-[#0F4C81] text-xs sm:text-sm uppercase font-extrabold tracking-widest bg-sky-100/70 px-4 py-1.5 rounded-full border border-sky-200">
            Trusted Healthcare Standard
          </span>
          <h2 id="why-choose-us-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Why Choose PROCARE?
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium">
            We blend modern medical diagnostics with compassionate human touch to deliver outstanding healthcare in Musheerabad.
          </p>
        </motion.div>

        {/* 4 Animated Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className={`p-6 sm:p-7 rounded-3xl border ${item.bgColor} shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-[#0F4C81] transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-slate-600 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Care at PROCARE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
