import React, { useState } from 'react';
import { X, FileText, MessageSquare } from 'lucide-react';

const ReportRequestForm = ({ onClose }) => {
  const [sampleId, setSampleId] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);

  const handleReview = (event) => {
    event.preventDefault();
    if (!patientPhone.trim()) return;
    setIsReviewing(true);
  };

  const requestText = `Hello PROCARE Diagnostics,\nI would like to enquire about my lab report.\nRegistered mobile number: ${patientPhone.trim()}${sampleId.trim() ? `\nSample ID / Bill number: ${sampleId.trim()}` : ''}\nPlease check the report status and let me know whether the PDF is available. Please confirm any verification needed before sharing it.`;
  const whatsappUrl = `https://wa.me/919848188898?text=${encodeURIComponent(requestText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="report-request-title">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl"><FileText className="w-5 h-5 text-sky-200" /></div>
            <div>
              <h3 id="report-request-title" className="font-extrabold text-lg leading-tight">Request Your Lab Report</h3>
              <p className="text-xs text-sky-100">Contact the clinic on WhatsApp</p>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close report request" className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 text-left space-y-4 overflow-y-auto">
          <p className="text-xs text-slate-600 leading-relaxed">Report status is confirmed by the clinic. Enter your registered mobile number and sample or bill number, if available, to prepare a WhatsApp enquiry.</p>
          {!isReviewing ? (
            <form onSubmit={handleReview} className="space-y-4">
              <div>
                <label htmlFor="report-sample-id" className="block text-xs font-extrabold text-slate-700 mb-1">Sample ID / Bill Number (optional)</label>
                <input id="report-sample-id" type="text" placeholder="Enter the number printed on your bill" value={sampleId} onChange={event => setSampleId(event.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800" />
              </div>
              <div>
                <label htmlFor="report-phone" className="block text-xs font-extrabold text-slate-700 mb-1">Registered Mobile Number *</label>
                <input id="report-phone" type="tel" required placeholder="Your registered mobile number" value={patientPhone} onChange={event => setPatientPhone(event.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800" />
              </div>
              <button type="submit" className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white py-3 rounded-xl font-bold text-xs transition">Review Report Request</button>
            </form>
          ) : (
            <div className="space-y-4 text-xs">
              <h4 className="font-extrabold text-base text-slate-900">Review Your Request</h4>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 break-words">
                <div><strong>Registered Mobile:</strong> {patientPhone.trim()}</div>
                {sampleId.trim() && <div><strong>Sample ID / Bill Number:</strong> {sampleId.trim()}</div>}
              </div>
              <p className="text-slate-600 leading-relaxed">Your request has not been sent. Open WhatsApp and press Send. The clinic will check your details and confirm whether your report is available.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
                <MessageSquare className="w-4 h-4" /> Open WhatsApp to Send Request
              </a>
              <button type="button" onClick={() => setIsReviewing(false)} className="w-full text-[#0F4C81] hover:bg-sky-50 rounded-xl py-2 font-bold">Edit Details</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ReportCheckerModal = ({ isOpen, onClose }) => isOpen ? <ReportRequestForm onClose={onClose} /> : null;

export default ReportCheckerModal;
