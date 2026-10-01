import React, { useState } from 'react';
import { 
  X, 
  TestTube, 
  Search, 
  Plus, 
  Trash2, 
  Home, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  User, 
  Share2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const LabTestModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const catalog = [
    { id: 't1', name: 'Complete Blood Count (CBC)', category: 'Blood', price: 350, turnaround: '6 Hours' },
    { id: 't2', name: 'Lipid Profile (Cholesterol & Triglycerides)', category: 'Cardiac', price: 650, turnaround: '12 Hours' },
    { id: 't3', name: 'Diabetes Profile (HbA1c + Fasting Blood Sugar)', category: 'Diabetes', price: 499, turnaround: '6 Hours' },
    { id: 't4', name: 'Thyroid Profile (T3, T4, TSH)', category: 'Endocrine', price: 450, turnaround: '12 Hours' },
    { id: 't5', name: 'Liver Function Test (LFT)', category: 'Organ Check', price: 600, turnaround: '12 Hours' },
    { id: 't6', name: 'Kidney Function Test (KFT)', category: 'Organ Check', price: 550, turnaround: '12 Hours' },
    { id: 't7', name: 'Vitamin D & Vitamin B12 Package', category: 'Vitamins', price: 999, turnaround: '24 Hours' },
    { id: 't8', name: 'Urine Routine & Microscopy', category: 'Routine', price: 200, turnaround: '4 Hours' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTests, setSelectedTests] = useState(['t1']);
  const [collectionType, setCollectionType] = useState('Home Collection');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [address, setAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const filteredCatalog = catalog.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleTest = (id) => {
    if (selectedTests.includes(id)) {
      if (selectedTests.length === 1) return; // Keep at least one
      setSelectedTests(selectedTests.filter(tId => tId !== id));
    } else {
      setSelectedTests([...selectedTests, id]);
    }
  };

  const totalPrice = selectedTests.reduce((sum, id) => {
    const item = catalog.find(c => c.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const ref = 'PRO-LAB-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(ref);
    setIsSubmitted(true);

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const handleWhatsAppSend = () => {
    const chosenNames = selectedTests.map(id => catalog.find(c => c.id === id)?.name).join(', ');
    const text = `Hello PRO CARE Diagnostics,\nI want to book Lab Tests!\n\n📌 *Booking Ref:* ${bookingId}\n👤 *Patient:* ${patientName}\n📱 *Phone:* ${patientPhone}\n🔬 *Tests:* ${chosenNames}\n💰 *Total:* ₹${totalPrice}\n🚚 *Collection:* ${collectionType}\n📅 *Date:* ${preferredDate}\n📍 *Address:* ${address || 'Aghapura, Nampally Clinic'}`;
    window.open(`https://wa.me/919985721155?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <TestTube className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Book Diagnostic Lab Tests</h3>
              <p className="text-xs text-sky-100">NABL Accredited Standard • Home Sample Pickup</p>
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
        <div className="p-6 overflow-y-auto flex-1 text-left space-y-5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Collection Type Selector */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Sample Collection Preference</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCollectionType('Home Collection')}
                    className={`p-3 rounded-2xl border text-xs font-bold transition flex items-center gap-2.5 ${
                      collectionType === 'Home Collection'
                        ? 'bg-sky-50 border-[#0F4C81] text-[#0F4C81]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Home className="w-4 h-4 text-sky-600" />
                    <div className="text-left">
                      <div>Home Sample Pickup</div>
                      <div className="text-[10px] font-normal text-slate-500">Phlebotomist visits your doorstep</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCollectionType('Clinic Visit')}
                    className={`p-3 rounded-2xl border text-xs font-bold transition flex items-center gap-2.5 ${
                      collectionType === 'Clinic Visit'
                        ? 'bg-sky-50 border-[#0F4C81] text-[#0F4C81]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-sky-600" />
                    <div className="text-left">
                      <div>Visit Poly Clinic</div>
                      <div className="text-[10px] font-normal text-slate-500">Walk-in sample collection</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Lab Test Search & Selector */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-extrabold text-slate-700">Select Required Tests ({selectedTests.length})</label>
                  <span className="text-xs font-black text-emerald-700">Total: ₹{totalPrice}</span>
                </div>

                <div className="relative mb-2">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input 
                    type="text" 
                    placeholder="Search tests (e.g. CBC, Diabetes, Thyroid...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:border-[#0F4C81]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 border border-slate-200 rounded-xl bg-slate-50/50">
                  {filteredCatalog.map((test) => {
                    const isSelected = selectedTests.includes(test.id);
                    return (
                      <div 
                        key={test.id}
                        onClick={() => toggleTest(test.id)}
                        className={`p-2.5 rounded-xl border text-xs cursor-pointer transition flex items-center justify-between ${
                          isSelected 
                            ? 'bg-white border-[#0F4C81] text-[#0F4C81] font-bold shadow-xs' 
                            : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                        }`}
                      >
                        <div className="text-left">
                          <div className="truncate font-semibold">{test.name}</div>
                          <div className="text-[10px] text-slate-400">{test.turnaround} Report</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 ml-2">
                          <span className="font-extrabold text-slate-900">₹{test.price}</span>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#0F4C81] text-white' : 'bg-slate-100 text-slate-400'}`}>
                            {isSelected ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Patient Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Mobile Phone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 99857 21155"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
              </div>

              {collectionType === 'Home Collection' && (
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Home Delivery / Pickup Address *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="House No, Landmark, Aghapura / Nampally / Hyderabad"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
              )}

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Sample Collection Date</label>
                <input 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="btn-glow w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Confirm Lab Test Booking (₹{totalPrice})</span>
              </button>

            </form>
          ) : (
            /* Confirmation Receipt */
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                  Lab Order Received!
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-2">Test Booking Summary</h4>
                <p className="text-xs text-slate-500">Booking Ref: <strong className="text-slate-900 font-mono">{bookingId}</strong></p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-bold text-slate-900">{patientName}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Collection Type:</span>
                  <span className="font-bold text-[#0F4C81]">{collectionType}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Total Price:</span>
                  <span className="font-extrabold text-emerald-700 text-sm">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Report Status:</span>
                  <span className="font-bold text-sky-700">Available on WhatsApp within 12 Hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button 
                  onClick={handleWhatsAppSend}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Send Lab Booking to WhatsApp</span>
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

export default LabTestModal;
