import React, { useState } from 'react';
import { X, FileText, Search, MessageSquare, CheckCircle2 } from 'lucide-react';

const ReportCheckerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [sampleId, setSampleId] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [statusResult, setStatusResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!sampleId && !patientPhone) return;

    setStatusResult({
      status: 'Ready',
      sampleId: sampleId || 'PRO-98421',
      testName: 'Complete Blood Count (CBC) & Lipid Profile',
      date: new Date().toLocaleDateString('en-GB'),
      downloadUrl: '#'
    });
  };

  const handleWhatsAppSend = () => {
    const text = `Hello PRO CARE Diagnostics,\nPlease send my Lab Report PDF on WhatsApp.\n\n📌 Sample ID / Mobile: ${sampleId || patientPhone}`;
    window.open(`https://wa.me/919985721155?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <FileText className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Get WhatsApp Lab Reports</h3>
              <p className="text-xs text-sky-100">Check Report Status or Request PDF</p>
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
          {!statusResult ? (
            <form onSubmit={handleCheck} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Sample ID / Bill Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. PRO-98421"
                  value={sampleId}
                  onChange={(e) => setSampleId(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Registered Mobile Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 99857 21155"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button 
                  type="submit"
                  className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Search className="w-4 h-4" />
                  <span>Check Status Online</span>
                </button>

                <button 
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request PDF Report on WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3 text-xs">
              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-emerald-800 flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Report is READY & Verified by Pathologist!</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <div><strong>Sample ID:</strong> {statusResult.sampleId}</div>
                <div><strong>Test Name:</strong> {statusResult.testName}</div>
                <div><strong>Date:</strong> {statusResult.date}</div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button 
                  onClick={handleWhatsAppSend}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Receive PDF on WhatsApp (+91 99857 21155)</span>
                </button>
                <button 
                  onClick={() => setStatusResult(null)}
                  className="text-slate-500 hover:text-slate-800 text-center text-xs py-1"
                >
                  Back to Search
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ReportCheckerModal;
