import React from 'react';
import { X, HeartPulse, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const HealthPackagesModal = ({ isOpen, onClose, onSelectPackage }) => {
  if (!isOpen) return null;

  const packages = [
    {
      id: 'p1',
      title: 'Basic Health Screening',
      price: '₹799',
      originalPrice: '₹1,500',
      discount: '46% OFF',
      testsCount: '25 Tests Included',
      tests: [
        'Complete Blood Count (CBC)',
        'Fasting Blood Sugar',
        'Lipid Profile (Basic)',
        'Urine Routine Exam',
        'Doctor Consultation'
      ],
      popular: false
    },
    {
      id: 'p2',
      title: 'PRO CARE Executive Health Package',
      price: '₹1,499',
      originalPrice: '₹3,200',
      discount: '53% OFF',
      testsCount: '55 Tests Included',
      tests: [
        'Complete Blood Count (CBC)',
        'Diabetes Profile (HbA1c + Fasting)',
        'Lipid Profile (Complete)',
        'Liver Function Test (LFT)',
        'Kidney Function Test (KFT)',
        'Thyroid Profile (TSH)',
        'ECG & Senior Doctor Consultation'
      ],
      popular: true
    },
    {
      id: 'p3',
      title: 'Diabetes & Cardiac Care Bundle',
      price: '₹1,999',
      originalPrice: '₹4,000',
      discount: '50% OFF',
      testsCount: '62 Tests Included',
      tests: [
        'HbA1c & Average Blood Sugar',
        'Lipid Profile (Full Heart Risk Panel)',
        'Kidney Function & Microalbumin',
        'Serum Electrolytes',
        'ECG & Cardiologist Consultation'
      ],
      popular: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-100 relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <HeartPulse className="w-5 h-5 text-rose-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Preventive Health Checkup Packages</h3>
              <p className="text-xs text-sky-100">Discounted Bundles • Free Doctor Consultation</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 text-left space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`rounded-2xl border p-5 flex flex-col justify-between relative transition ${
                  pkg.popular 
                    ? 'border-[#0F4C81] bg-sky-50/40 shadow-lg ring-2 ring-[#0F4C81]' 
                    : 'border-slate-200 bg-white hover:border-sky-300 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F4C81] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm">
                    Most Popular Choice
                  </span>
                )}

                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#0F4C81] bg-sky-100 px-2 py-0.5 rounded-full">
                      {pkg.testsCount}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-base mt-1.5 leading-snug">
                      {pkg.title}
                    </h4>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                    <span className="text-xs text-slate-400 line-through">{pkg.originalPrice}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      {pkg.discount}
                    </span>
                  </div>

                  <hr className="border-slate-100" />

                  <ul className="space-y-2 text-xs text-slate-600">
                    {pkg.tests.map((testItem, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{testItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <button 
                    onClick={() => { onClose(); onSelectPackage(pkg.title); }}
                    className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                  >
                    <span>Book Package Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HealthPackagesModal;
