import React, { useState } from 'react';
import { 
  UserCheck, 
  Calendar, 
  Clock, 
  Award, 
  Stethoscope, 
  Star,
  Building2,
  Mail,
  Phone
} from 'lucide-react';

const DoctorsDirectory = ({ onOpenAppointment }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const doctorsList = [
    {
      id: 'doc-1',
      name: 'Dr. Mohd. Vaseem',
      specialty: 'Pulmonologist, Chest Physician & Diabetologist',
      qualification: 'MBBS, MD (Pulmonary Medicine), FCCP (USA)',
      experience: '16+ Years Clinical Expertise',
      affiliation: 'Consultant Pulmonologist - CARE Hospitals Nampally & Director PRO CARE',
      timings: 'Mon - Sat: 10:00 AM - 2:00 PM & 6:00 PM - 9:00 PM',
      rating: '5.0',
      image: '/images/consultation.png',
      badge: 'Medical Director & Lead Physician',
      isLead: true
    },
    {
      id: 'doc-2',
      name: 'Dr. Fatima Begum',
      specialty: 'Gynecologist & Obstetrician',
      qualification: 'MBBS, DGO, DNB',
      experience: '14+ Years Experience',
      affiliation: 'Senior Consultant Women Care Specialist',
      timings: 'Mon - Sat: 11:00 AM - 3:00 PM',
      rating: '4.9',
      image: '/images/preventive.png',
      badge: 'Women Health Specialist',
      isLead: false
    },
    {
      id: 'doc-3',
      name: 'Dr. Syed Ahmed Farooqui',
      specialty: 'Pediatrician & Child Care Specialist',
      qualification: 'MBBS, MD (Pediatrics)',
      experience: '12+ Years Experience',
      affiliation: 'Consultant Pediatrician',
      timings: 'Mon - Sat: 5:00 PM - 9:00 PM',
      rating: '4.8',
      image: '/images/hero.png',
      badge: 'Child Care Expert',
      isLead: false
    },
    {
      id: 'doc-4',
      name: 'Dr. S. K. Sharma',
      specialty: 'Consultant Cardiologist',
      qualification: 'MBBS, MD, DM (Cardiology)',
      experience: '20+ Years Experience',
      affiliation: 'Senior Heart Care Specialist',
      timings: 'Tue, Thu, Sat: 4:00 PM - 7:00 PM',
      rating: '5.0',
      image: '/images/lab_test.png',
      badge: 'Cardiac Care Specialist',
      isLead: false
    }
  ];

  const specialties = ['All', 'Pulmonology & Chest', 'Diabetology', 'Gynecologist', 'Pediatrician', 'Cardiologist'];

  const filteredDoctors = selectedSpecialty === 'All' 
    ? doctorsList 
    : doctorsList.filter(d => 
        d.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()) ||
        (selectedSpecialty === 'Pulmonology & Chest' && d.specialty.includes('Pulmonologist')) ||
        (selectedSpecialty === 'Diabetology' && d.specialty.includes('Diabetologist'))
      );

  return (
    <section id="doctors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[#0F4C81] text-xs sm:text-sm uppercase font-extrabold tracking-widest bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            Expert Medical Director & Consultant Panel
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Consult Specialist Doctors
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium">
            Led by <strong>Dr. Mohd. Vaseem</strong> (MD Pulmonary Medicine, FCCP USA • Consultant CARE Hospitals Nampally), our medical team brings world-class healthcare to Aghapura & Nampally.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition ${
                selectedSpecialty === spec
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-[#0F4C81]'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div 
              key={doc.id}
              className={`bg-white rounded-3xl border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group text-left ${
                doc.isLead ? 'border-2 border-[#0F4C81] ring-2 ring-sky-100' : 'border-slate-200 hover:border-sky-300'
              }`}
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={doc.image} 
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <span className={`absolute top-3 left-3 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md ${doc.isLead ? 'bg-amber-600' : 'bg-[#0F4C81]'}`}>
                    {doc.badge}
                  </span>

                  <div className="absolute bottom-3 right-3 bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>{doc.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-[#0F4C81] transition leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-black text-[#0F4C81] mt-0.5">
                      {doc.specialty}
                    </p>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                      {doc.qualification}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                      <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{doc.experience}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <Building2 className="w-4 h-4 text-[#0F4C81] shrink-0 mt-0.5" />
                      <span>{doc.affiliation}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[11px] text-slate-500">
                      <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{doc.timings}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="p-5 pt-0">
                <button 
                  onClick={() => onOpenAppointment(doc.name)}
                  className="w-full py-3 rounded-xl bg-sky-50 hover:bg-[#0F4C81] text-[#0F4C81] hover:text-white border border-sky-200 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DoctorsDirectory;
