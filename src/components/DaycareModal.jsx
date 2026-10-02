import React from 'react';
import { X, BedDouble, CheckCircle2, Calendar } from 'lucide-react';

const DaycareModal = ({ isOpen, onClose, onBookAppointment }) => {
  if (!isOpen) return null;

  const daycareServices = [
    'Minor Surgical Procedures & Wound Dressings',
    'Intravenous (IV) Fluid Administration & Injections',
    'Post-Procedure Patient Observation & Monitoring',
    'Nebulization & Acute Respiratory Relief',
    'Foley Catheterisation & Ryle’s Tube Insertion',
    'Diabetic Foot Dressing & Ulcer Care'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <BedDouble className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Day Care Procedures</h3>
              <p className="text-xs text-sky-100">Safe, Comfortable & Efficient In-Clinic Care</p>
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
        <div className="p-6 text-left space-y-4">
          <div className="relative rounded-2xl overflow-hidden h-40 bg-slate-100 border border-slate-200">
            <img 
              src="/images/daycare.png" 
              alt="Daycare hospital bed" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-3 text-white font-extrabold text-sm">
              State-of-the-Art Daycare Ward
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            PROCARE Polyclinic offers dedicated day care beds equipped with patient monitoring equipment for medical treatments that do not require overnight hospitalization.
          </p>

          <div className="space-y-2">
            <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider">Key Procedures Offered:</h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
              {daycareServices.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => { onClose(); onBookAppointment(); }}
              className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Day Care Procedure / Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DaycareModal;
