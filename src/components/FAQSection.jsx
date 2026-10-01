import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Appointments',
      question: 'How do I book an appointment with a doctor at PRO CARE?',
      answer: 'You can book an appointment online by clicking the "Book Appointment" button on our website, selecting your doctor, preferred date & time slot. Alternatively, you can call us at +91 99857 21155 or walk into our clinic in Aghapura, Nampally.'
    },
    {
      category: 'Lab Tests',
      question: 'Is home sample collection available for diagnostic lab tests?',
      answer: 'Yes! PRO CARE offers home sample collection for blood tests, diabetes profiles, lipid profiles, and thyroid packages across Aghapura, Nampally, and surrounding areas in Hyderabad. You can select "Home Collection" when booking online.'
    },
    {
      category: 'Lab Tests',
      question: 'How and when will I receive my diagnostic lab test reports?',
      answer: 'Most routine lab test reports (like CBC, Blood Sugar, LFT, KFT) are generated within 6 to 12 hours. You will receive an instant PDF report directly on your registered WhatsApp number and via email.'
    },
    {
      category: 'Pharmacy',
      question: 'Can I order medicines online and get home delivery?',
      answer: 'Yes, our in-house licensed pharmacy provides 100% genuine medicines with doorstep delivery. Simply upload your doctor’s prescription or type your medicine list on our website or WhatsApp.'
    },
    {
      category: 'Timings',
      question: 'What are the operating clinic timings for PRO CARE Poly Clinic?',
      answer: 'Our poly clinic is open Monday to Saturday from 9:00 AM to 9:00 PM, and on Sundays from 9:00 AM to 2:00 PM. Pharmacy and sample collection operate during all clinic hours.'
    },
    {
      category: 'General',
      question: 'Where is PRO CARE Poly Clinic located in Hyderabad?',
      answer: 'We are located at V Care Clinic, Behind Habeeb Nagar PS, Near Alhamdulillah Hotel Rd, Aghapura, Nampally, Hyderabad, Telangana 500001.'
    }
  ];

  const categories = ['All', 'Appointments', 'Lab Tests', 'Pharmacy', 'Timings', 'General'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[#0F4C81] text-xs uppercase font-extrabold tracking-widest bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Find quick answers regarding doctor consults, lab reports, pharmacy orders & clinic timings.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input 
              type="text" 
              placeholder="Search any question (e.g. lab reports, timings...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:border-[#0F4C81] shadow-xs"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'bg-[#0F4C81] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition"
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-4 text-left font-bold text-slate-900 text-sm md:text-base flex items-center justify-between gap-4 hover:text-[#0F4C81] transition"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0F4C81]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 text-left bg-sky-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 bg-white rounded-2xl text-center text-slate-500 text-xs">
              No matching questions found. Call us at <strong>+91 99857 21155</strong> for instant help!
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
