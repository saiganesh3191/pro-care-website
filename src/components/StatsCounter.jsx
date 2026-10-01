import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, Clock } from 'lucide-react';

const StatsCounter = () => {
  const stats = [
    {
      icon: Award,
      number: '16+',
      label: 'Years Leadership',
      sublabel: 'Dr. Mohd. Vaseem (MD, FCCP USA)'
    },
    {
      icon: Users,
      number: '25,000+',
      label: 'Patients Treated',
      sublabel: 'Across Aghapura & Nampally'
    },
    {
      icon: ShieldCheck,
      number: '100%',
      label: 'Accurate Reports',
      sublabel: 'NABL Diagnostic Standard'
    },
    {
      icon: Clock,
      number: '7 Days',
      label: 'Open Poly Clinic',
      sublabel: 'Mon-Sat 9-9 | Sun 9-2'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-[#0F4C81] via-[#165DA0] to-[#0A365C] text-white relative overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg flex flex-col items-center justify-center space-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-400/20 flex items-center justify-center text-sky-300 mb-1 border border-sky-300/30">
                  <IconComponent className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[10.5px] text-sky-200/80 font-medium">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
