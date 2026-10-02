import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  TestTube, 
  Pill, 
  Smartphone, 
  ShoppingBag, 
  Bike, 
  MessageSquare,
  FileCheck,
  Search,
  Check
} from 'lucide-react';

const PromoSection = ({ onOpenLabModal, onOpenPharmacyModal, onOpenReportModal }) => {
  // Sample interactive lab test quick list for mobile mockup
  const quickTests = [
    { name: 'Complete Blood Count (CBC)', price: '₹350' },
    { name: 'Lipid Profile', price: '₹650' },
    { name: 'Diabetes Profile (HbA1c + Fasting)', price: '₹499' },
    { name: 'Thyroid Profile (T3, T4, TSH)', price: '₹450' },
    { name: 'Liver Function Test (LFT)', price: '₹600' },
    { name: 'Kidney Function Test (KFT)', price: '₹550' }
  ];

  const [selectedQuickTest, setSelectedQuickTest] = useState('Complete Blood Count (CBC)');

  return (
    <section id="lab-tests" className="py-16 bg-gradient-to-b from-sky-50/70 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Book Your Lab Tests Online */}
          <div className="bg-gradient-to-br from-sky-100/80 via-sky-50 to-white p-6 sm:p-8 rounded-3xl border border-sky-200/80 shadow-md flex flex-col justify-between relative overflow-hidden group">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left Phone Screen Mockup matching client image */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="w-56 bg-slate-900 p-2.5 rounded-[32px] shadow-xl border-4 border-slate-800 relative transform group-hover:scale-105 transition duration-500">
                  {/* Phone Notch */}
                  <div className="w-20 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mr-2"></div>
                    <div className="w-6 h-1 rounded-full bg-slate-700"></div>
                  </div>

                  {/* Phone Screen UI */}
                  <div className="bg-white rounded-[22px] overflow-hidden text-left p-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <span className="font-extrabold text-[#0F4C81]">← Lab Tests</span>
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <div className="text-[10px] text-slate-400 bg-slate-50 p-1.5 rounded-lg border border-slate-100 flex items-center gap-1">
                      <Search className="w-3 h-3 text-slate-400" />
                      <span>Search for a test...</span>
                    </div>

                    {/* Interactive List */}
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {quickTests.map((t, i) => (
                        <div 
                          key={i}
                          onClick={() => setSelectedQuickTest(t.name)}
                          className={`p-2 rounded-lg border text-[10.5px] cursor-pointer flex items-center justify-between transition ${
                            selectedQuickTest === t.name 
                              ? 'bg-sky-50 border-[#0F4C81] font-bold text-[#0F4C81]' 
                              : 'border-slate-100 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate pr-1">{t.name}</span>
                          <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded">{t.price}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={onOpenLabModal}
                      className="w-full bg-[#0F4C81] text-white text-[10px] font-bold py-1.5 rounded-lg text-center"
                    >
                      Book Selected Test →
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content details matching mockup */}
              <div className="sm:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 bg-sky-200/60 text-[#0F4C81] px-3 py-1 rounded-full text-xs font-bold">
                  <TestTube className="w-3.5 h-3.5" />
                  <span>NABL Standard Diagnostics</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  Book Your Lab Tests Online
                </h3>

                {/* Bullet List */}
                <ul className="space-y-2.5 text-slate-700 text-xs md:text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span>Wide range of blood & specialty tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span>Accurate & reliable digital reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span>Home sample collection available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span>Get reports on WhatsApp / Email</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button 
                    onClick={onOpenLabModal}
                    className="btn-glow bg-gradient-to-r from-[#0F4C81] to-[#165DA0] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
                  >
                    <span>Book Lab Tests Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Card 2: Order Medicines from Our Pharmacy */}
          <div id="pharmacy" className="bg-gradient-to-br from-sky-100/80 via-blue-50 to-white p-6 sm:p-8 rounded-3xl border border-sky-200/80 shadow-md flex flex-col justify-between relative overflow-hidden group">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left Photo & Delivery graphic matching client image */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white w-full h-48 bg-slate-100">
                  <img 
                    src="/images/pharmacy.png" 
                    alt="PROCARE Pharmacy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Delivery Scooter Icon */}
                  <div className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-lg text-[#0F4C81] flex items-center gap-1 animate-bounce">
                    <Bike className="w-5 h-5 text-sky-600" />
                  </div>
                </div>

                <div className="w-full mt-3 bg-white p-2.5 rounded-xl border border-sky-100 shadow-xs flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <Check className="w-4 h-4" /> 100% Genuine Medicines
                  </span>
                  <span className="text-slate-500 font-normal">Fast Delivery</span>
                </div>
              </div>

              {/* Right Content details matching mockup */}
              <div className="sm:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                  <Pill className="w-3.5 h-3.5" />
                  <span>In-House Licensed Pharmacy</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  Order Medicines from Our Pharmacy
                </h3>

                {/* Bullet List */}
                <ul className="space-y-2.5 text-slate-700 text-xs md:text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span>Genuine medicines & healthcare products</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span>Quick & convenient prescription refill</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C81] shrink-0" />
                    <span>Home delivery available in Musheerabad</span>
                  </li>
                </ul>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button 
                    onClick={onOpenPharmacyModal}
                    className="btn-glow w-full sm:w-auto bg-gradient-to-r from-[#0F4C81] to-[#165DA0] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
                  >
                    <span>Order Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={onOpenReportModal}
                    className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Order via WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PromoSection;
