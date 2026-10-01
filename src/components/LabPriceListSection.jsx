import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TestTube, CheckCircle2, Home, ArrowRight } from 'lucide-react';

const LabPriceListSection = ({ onOpenLabModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const investigations = [
    { sno: 1, name: 'COMPLETE BLOOD PICTURE (CBP)', price: 250, category: 'Hematology' },
    { sno: 2, name: 'ESR (Erythrocyte Sedimentation Rate)', price: 100, category: 'Hematology' },
    { sno: 3, name: 'HEMOGLOBIN (Hb)', price: 120, category: 'Hematology' },
    { sno: 4, name: 'BLOOD GROUPING & RH TYPING', price: 100, category: 'Hematology' },
    { sno: 5, name: 'MP PV/PF (Malarial Parasite)', price: 250, category: 'Infectious' },
    { sno: 6, name: 'BTCT (Bleeding & Clotting Time)', price: 100, category: 'Hematology' },
    { sno: 7, name: 'PLATELET COUNT', price: 150, category: 'Hematology' },
    { sno: 8, name: 'HBA1C (Glycated Hemoglobin)', price: 450, category: 'Diabetes' },
    { sno: 9, name: 'COMPLETE URINE EXAMINATION (CUE)', price: 100, category: 'Routine' },
    { sno: 10, name: 'URINE CULTURE & SENSITIVITY', price: 650, category: 'Microbiology' },
    { sno: 11, name: 'PT INR (Prothrombin Time)', price: 450, category: 'Coagulation' },
    { sno: 12, name: 'APTT', price: 550, category: 'Coagulation' },
    { sno: 13, name: 'THYROID PROFILE (T3, T4, TSH)', price: 600, category: 'Thyroid' },
    { sno: 14, name: 'TSH (Thyroid Stimulating Hormone)', price: 300, category: 'Thyroid' },
    { sno: 15, name: 'CRP (C-Reactive Protein)', price: 300, category: 'Inflammation' },
    { sno: 16, name: 'RA FACTOR', price: 300, category: 'Serology' },
    { sno: 17, name: 'ASO TITRE', price: 300, category: 'Serology' },
    { sno: 18, name: 'FBS / PLBS (Fasting / Post Lunch Sugar)', price: 200, category: 'Diabetes' },
    { sno: 19, name: 'RANDOM BLOOD SUGAR (RBS)', price: 70, category: 'Diabetes' },
    { sno: 20, name: 'BLOOD UREA', price: 200, category: 'Kidney' },
    { sno: 21, name: 'SERUM CREATININE', price: 200, category: 'Kidney' },
    { sno: 22, name: 'SERUM URIC ACID', price: 300, category: 'Kidney' },
    { sno: 24, name: 'SERUM ELECTROLYTES (Na, K, Cl)', price: 600, category: 'Biochemistry' },
    { sno: 25, name: 'LIVER FUNCTION TEST (LFT)', price: 550, category: 'Liver' },
    { sno: 26, name: 'LIPID PROFILE', price: 450, category: 'Cardiac' },
    { sno: 27, name: 'SERUM BILIRUBIN', price: 250, category: 'Liver' },
    { sno: 28, name: 'SERUM CALCIUM', price: 300, category: 'Biochemistry' },
    { sno: 29, name: 'HIV 1 & 2 SCREENING', price: 350, category: 'Serology' },
    { sno: 30, name: 'HBSAG', price: 300, category: 'Serology' },
    { sno: 31, name: 'HCV', price: 500, category: 'Serology' },
    { sno: 32, name: 'DENGUE SEROLOGY', price: 1500, category: 'Infectious' },
    { sno: 33, name: 'WIDAL (SLIDE)', price: 250, category: 'Infectious' },
    { sno: 34, name: 'WIDAL (TEST TUBE)', price: 400, category: 'Infectious' },
    { sno: 35, name: 'FSH', price: 500, category: 'Hormones' },
    { sno: 36, name: 'LH', price: 500, category: 'Hormones' },
    { sno: 37, name: 'PROLACTIN', price: 500, category: 'Hormones' },
    { sno: 38, name: 'SERUM TESTOSTERONE', price: 650, category: 'Hormones' },
    { sno: 39, name: 'FERRITIN', price: 650, category: 'Vitamins & Iron' },
    { sno: 40, name: 'VITAMIN D', price: 1250, category: 'Vitamins & Iron' },
    { sno: 41, name: 'VITAMIN B12', price: 800, category: 'Vitamins & Iron' },
    { sno: 42, name: 'BETA HCG', price: 800, category: 'Hormones' }
  ];

  const categories = ['All', 'Diabetes', 'Hematology', 'Thyroid', 'Liver', 'Kidney', 'Cardiac', 'Hormones', 'Vitamins & Iron', 'Infectious'];

  const filteredTests = investigations.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
        >
          <span className="text-[#0F4C81] text-xs sm:text-sm uppercase font-extrabold tracking-widest bg-sky-100/80 px-4 py-1.5 rounded-full border border-sky-200">
            Official Diagnostic Price Directory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Lab Investigations & Pricing
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium">
            Transparent NABL accredited diagnostic test rates. Book online for quick doorstep home sample collection across Aghapura & Nampally.
          </p>
        </motion.div>

        {/* Search & Category Filter Pills */}
        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input 
              type="text" 
              placeholder="Search test name (e.g. RBS, HbA1c, CBP, Thyroid, Vitamin D, Dengue...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 text-sm text-slate-900 bg-white focus:border-[#0F4C81] shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-extrabold transition shrink-0 ${
                  selectedCategory === cat 
                    ? 'bg-[#0F4C81] text-white shadow-sm' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-sky-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Directory Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
          
          <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] px-6 py-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-sm sm:text-base">
              <TestTube className="w-5 h-5 text-sky-200" />
              <span>Official Test Catalog ({filteredTests.length} Tests)</span>
            </div>
            <button 
              onClick={onOpenLabModal}
              className="bg-white text-[#0F4C81] hover:bg-sky-50 text-xs font-black px-4 py-2 rounded-xl transition shadow-xs flex items-center gap-1.5"
            >
              <span>Book Selected Tests</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="max-h-[480px] overflow-y-auto divide-y divide-slate-100">
            {filteredTests.length > 0 ? (
              filteredTests.map((test) => (
                <div 
                  key={test.sno} 
                  className="px-6 py-3.5 hover:bg-sky-50/50 transition flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center group-hover:bg-[#0F4C81] group-hover:text-white transition">
                      {test.sno}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-[#0F4C81] transition">
                        {test.name}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-semibold">{test.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-base font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      ₹{test.price}
                    </span>
                    <button 
                      onClick={onOpenLabModal}
                      className="hidden sm:flex items-center gap-1 bg-sky-100 hover:bg-[#0F4C81] text-[#0F4C81] hover:text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                    >
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500 text-sm">
                No matching investigation found for "{searchTerm}". Call <strong>+91 99857 21155</strong> for custom lab inquiries.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default LabPriceListSection;
