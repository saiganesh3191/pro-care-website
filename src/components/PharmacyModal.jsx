import React, { useState } from 'react';
import { 
  X, 
  Pill, 
  Upload, 
  FileText, 
  MapPin, 
  Phone, 
  User, 
  CheckCircle2, 
  Share2,
  Bike
} from 'lucide-react';
import confetti from 'canvas-confetti';

const PharmacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [medicineText, setMedicineText] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const ref = 'PRO-PHARM-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(ref);
    setIsSubmitted(true);

    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const handleWhatsAppSend = () => {
    const text = `Hello PRO CARE Pharmacy,\nI want to order medicines online!\n\n📌 *Order Ref:* ${orderId}\n👤 *Name:* ${patientName}\n📱 *Phone:* ${patientPhone}\n💊 *Medicine List:* ${medicineText || 'Prescription Attached'}\n📄 *Prescription File:* ${prescriptionFile || 'None'}\n📍 *Delivery Address:* ${deliveryAddress || 'Aghapura / Nampally'}`;
    window.open(`https://wa.me/919985721155?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <Pill className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Order Medicines from Pharmacy</h3>
              <p className="text-xs text-sky-100">100% Genuine Medicines • Fast Home Delivery</p>
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
        <div className="p-6 overflow-y-auto flex-1 text-left space-y-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Prescription Upload Card */}
              <div className="border-2 border-dashed border-sky-200 bg-sky-50/50 p-4 rounded-2xl text-center space-y-2 relative">
                <Upload className="w-8 h-8 text-[#0F4C81] mx-auto" />
                <div>
                  <label className="cursor-pointer font-extrabold text-xs text-[#0F4C81] hover:underline">
                    Upload Prescription Image / PDF
                    <input 
                      type="file" 
                      accept="image/*,.pdf" 
                      onChange={handleFileChange}
                      className="hidden" 
                    />
                  </label>
                  <p className="text-[10px] text-slate-500 mt-0.5">Clear doctor prescription photo for fast fulfillment</p>
                </div>
                {prescriptionFile && (
                  <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                    <FileText className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[200px]">{prescriptionFile}</span>
                  </div>
                )}
              </div>

              {/* Medicine List Textarea */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Or Type Medicine Names & Quantities</label>
                <textarea 
                  rows="3"
                  placeholder="e.g. Paracetamol 500mg (1 Strip), Augmentin 625mg (1 Strip)..."
                  value={medicineText}
                  onChange={(e) => setMedicineText(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-[#0F4C81] text-xs text-slate-800"
                ></textarea>
              </div>

              {/* Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 99857 21155"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Delivery Address (Aghapura, Nampally & Nearby)</label>
                <input 
                  type="text" 
                  placeholder="House No, Street, Landmark..."
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="btn-glow w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <Bike className="w-4 h-4 text-sky-200" />
                <span>Submit Pharmacy Order</span>
              </button>

            </form>
          ) : (
            /* Receipt */
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                  Pharmacy Order Submitted!
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-2">Order Reference</h4>
                <p className="text-xs text-slate-500">Order ID: <strong className="text-slate-900 font-mono">{orderId}</strong></p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Customer:</span>
                  <span className="font-bold text-slate-900">{patientName}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-bold text-[#0F4C81]">{patientPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery Status:</span>
                  <span className="font-bold text-emerald-700">Dispatching from PRO CARE Pharmacy</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button 
                  onClick={handleWhatsAppSend}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>
                <button 
                  onClick={onClose}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-2.5 rounded-xl font-bold text-xs transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PharmacyModal;
