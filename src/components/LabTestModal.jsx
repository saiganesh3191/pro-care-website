import React, { useState } from 'react';
import { 
  X, 
  TestTube, 
  Search, 
  Plus, 
  Home, 
  MapPin, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';

export const LabTestForm = ({ onClose, standalone = false }) => {

  // Exact Client Official Investigations & Price List (40+ Tests)
  const catalog = [
    { id: 't1', name: 'COMPLETE BLOOD PICTURE (CBP)', category: 'Hematology', price: 250 },
    { id: 't2', name: 'ESR (Erythrocyte Sedimentation Rate)', category: 'Hematology', price: 100 },
    { id: 't3', name: 'HEMOGLOBIN (Hb)', category: 'Hematology', price: 120 },
    { id: 't4', name: 'BLOOD GROUPING & RH TYPING', category: 'Hematology', price: 100 },
    { id: 't5', name: 'MP PV/PF (Malarial Parasite)', category: 'Infectious', price: 250 },
    { id: 't6', name: 'BTCT (Bleeding & Clotting Time)', category: 'Hematology', price: 100 },
    { id: 't7', name: 'PLATELET COUNT', category: 'Hematology', price: 150 },
    { id: 't8', name: 'HBA1C (Glycated Hemoglobin)', category: 'Diabetes', price: 450 },
    { id: 't9', name: 'COMPLETE URINE EXAMINATION (CUE)', category: 'Routine', price: 100 },
    { id: 't10', name: 'URINE CULTURE & SENSITIVITY', category: 'Microbiology', price: 650 },
    { id: 't11', name: 'PT INR (Prothrombin Time)', category: 'Coagulation', price: 450 },
    { id: 't12', name: 'APTT (Activated Partial Thromboplastin)', category: 'Coagulation', price: 550 },
    { id: 't13', name: 'THYROID PROFILE (T3, T4, TSH)', category: 'Thyroid', price: 600 },
    { id: 't14', name: 'TSH (Thyroid Stimulating Hormone)', category: 'Thyroid', price: 300 },
    { id: 't15', name: 'CRP (C-Reactive Protein)', category: 'Inflammation', price: 300 },
    { id: 't16', name: 'RA FACTOR (Rheumatoid Factor)', category: 'Serology', price: 300 },
    { id: 't17', name: 'ASO TITRE', category: 'Serology', price: 300 },
    { id: 't18', name: 'FBS / PLBS (Fasting / Post Lunch Sugar)', category: 'Diabetes', price: 200 },
    { id: 't19', name: 'RANDOM BLOOD SUGAR (RBS)', category: 'Diabetes', price: 70 },
    { id: 't20', name: 'BLOOD UREA', category: 'Kidney', price: 200 },
    { id: 't21', name: 'SERUM CREATININE', category: 'Kidney', price: 200 },
    { id: 't22', name: 'SERUM URIC ACID', category: 'Kidney', price: 300 },
    { id: 't24', name: 'SERUM ELECTROLYTES (Na, K, Cl)', category: 'Biochemistry', price: 600 },
    { id: 't25', name: 'LIVER FUNCTION TEST (LFT)', category: 'Liver', price: 550 },
    { id: 't26', name: 'LIPID PROFILE (Cholesterol Panel)', category: 'Cardiac', price: 450 },
    { id: 't27', name: 'SERUM BILIRUBIN (Total & Direct)', category: 'Liver', price: 250 },
    { id: 't28', name: 'SERUM CALCIUM', category: 'Biochemistry', price: 300 },
    { id: 't29', name: 'HIV 1 & 2 SCREENING', category: 'Serology', price: 350 },
    { id: 't30', name: 'HBSAG (Hepatitis B Surface Antigen)', category: 'Serology', price: 300 },
    { id: 't31', name: 'HCV (Hepatitis C Virus)', category: 'Serology', price: 500 },
    { id: 't32', name: 'DENGUE SEROLOGY (NS1, IgG, IgM)', category: 'Infectious', price: 1500 },
    { id: 't33', name: 'WIDAL (SLIDE TEST)', category: 'Infectious', price: 250 },
    { id: 't34', name: 'WIDAL (TEST TUBE METHOD)', category: 'Infectious', price: 400 },
    { id: 't35', name: 'FSH (Follicle Stimulating Hormone)', category: 'Hormones', price: 500 },
    { id: 't36', name: 'LH (Luteinizing Hormone)', category: 'Hormones', price: 500 },
    { id: 't37', name: 'PROLACTIN', category: 'Hormones', price: 500 },
    { id: 't38', name: 'SERUM TESTOSTERONE', category: 'Hormones', price: 650 },
    { id: 't39', name: 'FERRITIN', category: 'Vitamins & Iron', price: 650 },
    { id: 't40', name: 'VITAMIN D (25-OH)', category: 'Vitamins & Iron', price: 1250 },
    { id: 't41', name: 'VITAMIN B12', category: 'Vitamins & Iron', price: 800 },
    { id: 't42', name: 'BETA HCG', category: 'Hormones', price: 800 }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTests, setSelectedTests] = useState([]);
  const [collectionType, setCollectionType] = useState('Home Collection');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [address, setAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['All', 'Hematology', 'Diabetes', 'Thyroid', 'Liver', 'Kidney', 'Cardiac', 'Vitamins & Iron', 'Hormones', 'Infectious'];

  const filteredCatalog = catalog.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const toggleTest = (id) => {
    setSelectedTests(current => current.includes(id)
      ? current.filter(testId => testId !== id)
      : [...current, id]);
  };

  const chosenTests = catalog.filter(test => selectedTests.includes(test.id));

  const totalPrice = selectedTests.reduce((sum, id) => {
    const item = catalog.find(c => c.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim() || selectedTests.length === 0) return;
    if (collectionType === 'Home Collection' && !address.trim()) return;
    setIsSubmitted(true);
  };

  const chosenNames = chosenTests.map(test => `${test.name} (\u20b9${test.price})`).join('\n- ');
  const requestText = `Hello PRO CARE Diagnostics,\nI would like to request lab tests.\n\nPatient: ${patientName.trim()}\nPhone: ${patientPhone.trim()}\n\nSelected investigations:\n- ${chosenNames}\n\nListed test total: \u20b9${totalPrice}\nSample collection: ${collectionType}\nPreferred date: ${preferredDate || 'Earliest available slot'}\n${collectionType === 'Home Collection' ? `Address: ${address.trim()}` : 'Collection at clinic'}\n\nPlease confirm availability, collection charges, final price, preparation instructions and timing.`;
  const whatsappUrl = `https://wa.me/919985721155?text=${encodeURIComponent(requestText)}`;

  const [minDate] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  });

  return (
    <div className={standalone ? "max-w-5xl mx-auto px-4 py-8 sm:py-12" : "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"}>
      <div className={`bg-white rounded-3xl shadow-xl w-full overflow-hidden border border-slate-100 relative flex flex-col ${standalone ? "" : "max-w-3xl max-h-[92vh]"}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-4 sm:p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <TestTube className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight">Official Diagnostic Investigations</h3>
              <p className="text-xs text-sky-100">PRO CARE Lab Price List • Home Sample Pickup</p>
            </div>
          </div>
          {!standalone && <button
            onClick={onClose}
            aria-label="Close lab test request"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>}
        </div>

        {/* Body */}
        <div className={`p-4 sm:p-6 flex-1 text-left space-y-4 ${standalone ? "" : "overflow-y-auto"}`}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
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
                    <Home className="w-4 h-4 text-sky-600 shrink-0" />
                    <div className="text-left">
                      <div className="font-extrabold">Home Sample Pickup</div>
                      <div className="text-[10px] font-medium text-slate-500">Phlebotomist visits your doorstep</div>
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
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                    <div className="text-left">
                      <div className="font-extrabold">Visit Clinic</div>
                      <div className="text-[10px] font-medium text-slate-500">Aghapura, Nampally</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Category Pills & Search */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-extrabold text-slate-700">Select Investigations ({selectedTests.length} Selected)</label>
                  <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                    Total: ₹{totalPrice}
                  </span>
                </div>

                <div className="relative mb-2">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
                  <input 
                    type="text" 
                    placeholder="Search 40+ tests (e.g. CBP, HbA1c, Thyroid, Lipid, Vitamin D...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:border-[#0F4C81]"
                  />
                </div>

                {/* Mobile Filter Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 mb-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-bold transition shrink-0 ${
                        selectedCategory === cat 
                          ? 'bg-[#0F4C81] text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-sky-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Scrollable Investigations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto p-1.5 border border-slate-200 rounded-2xl bg-slate-50/50">
                  {filteredCatalog.map((test) => {
                    const isSelected = selectedTests.includes(test.id);
                    return (
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        aria-label={`${isSelected ? 'Remove' : 'Select'} ${test.name}`}
                        key={test.id}
                        onClick={() => toggleTest(test.id)}
                        className={`p-2.5 rounded-xl border text-xs cursor-pointer transition flex items-center justify-between ${
                          isSelected 
                            ? 'bg-white border-[#0F4C81] text-[#0F4C81] font-bold shadow-xs ring-1 ring-[#0F4C81]' 
                            : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                        }`}
                      >
                        <div className="text-left pr-2 min-w-0">
                          <div className="truncate font-extrabold text-slate-900 text-xs">{test.name}</div>
                          <div className="text-[10px] text-slate-500">{test.category}</div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="font-black text-slate-900 text-xs">₹{test.price}</span>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center transition ${isSelected ? 'bg-[#0F4C81] text-white' : 'bg-slate-100 text-slate-400'}`}>
                            {isSelected ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : <Plus className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {filteredCatalog.length === 0 && <p className="text-xs text-slate-500 mt-2">No tests match your search.</p>}
                {chosenTests.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">Selected tests: click to remove</span>
                      <button type="button" onClick={() => setSelectedTests([])} className="font-bold text-[#0F4C81] underline">Clear all</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {chosenTests.map(test => (
                        <button key={test.id} type="button" onClick={() => toggleTest(test.id)} aria-label={`Remove selected ${test.name}`} className="flex items-center gap-1 rounded-lg bg-sky-50 border border-sky-200 px-2 py-1 text-xs text-[#0F4C81]">
                          {test.name} <X className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Home Collection Address *</label>
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
                  min={minDate}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>

              <p className="text-xs text-slate-500">Review your selection, then send the request through WhatsApp. The clinic will confirm availability, timing and any collection charges.</p>
              {/* Submit */}
              <button 
                type="submit"
                disabled={selectedTests.length === 0}
                className={`btn-glow w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition ${
                  selectedTests.length === 0 
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                    : 'bg-[#0F4C81] hover:bg-[#0A365C] text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{selectedTests.length === 0 ? 'Select at least 1 investigation' : `Review Lab Test Request (₹${totalPrice})`}</span>
              </button>

            </form>
          ) : (
            /* Receipt */
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                  Review before sending
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-2">Lab Test Request Summary</h4>
                <p className="text-xs text-slate-500 mt-2">Your request has not been sent. Open WhatsApp and press Send, then wait for the clinic to confirm your booking.</p>
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
                  <span className="text-slate-500">Total Investigations:</span>
                  <span className="font-bold text-slate-900">{selectedTests.length} Tests</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Listed Test Total:</span>
                  <span className="font-extrabold text-emerald-700 text-sm">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Status:</span>
                  <span className="font-bold text-amber-700">Awaiting clinic confirmation</span>
                </div>
              </div>

              <ul className="text-left text-xs divide-y divide-slate-100 border border-slate-200 rounded-xl px-3">
                {chosenTests.map(test => <li key={test.id} className="flex justify-between gap-3 py-2"><span>{test.name}</span><strong className="shrink-0">&#8377;{test.price}</strong></li>)}
              </ul>
              <p className="text-xs text-slate-500">Preferred date: {preferredDate || 'Earliest available slot'}{collectionType === 'Home Collection' && ` | Address: ${address}`}</p>
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Open WhatsApp to Send Request</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-sky-50 hover:bg-sky-100 text-[#0F4C81] px-5 py-2.5 rounded-xl font-bold text-xs transition"
                >
                  Edit Tests & Details
                </button>
                <button 
                  onClick={onClose}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-2.5 rounded-xl font-bold text-xs transition"
                >
                  {standalone ? 'Back to Home' : 'Close'}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

// Mount a fresh form for each visit so a previous summary never becomes a new booking.
const LabTestModal = ({ isOpen, onClose }) => isOpen ? <LabTestForm onClose={onClose} /> : null;

export default LabTestModal;
