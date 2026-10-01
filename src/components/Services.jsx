import React from 'react';
import { 
  UserCheck, 
  Microscope, 
  Pill, 
  BedDouble, 
  HeartPulse, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const Services = ({ 
  onOpenAppointment, 
  onOpenLabModal, 
  onOpenPharmacyModal, 
  onOpenPackagesModal, 
  onOpenDaycareModal 
}) => {
  const servicesList = [
    {
      id: 'consultation',
      title: 'Doctor Consultation',
      description: 'Experienced doctors for you and your family across general & specialist medicine.',
      image: '/images/consultation.png',
      badge: 'Expert Physicians',
      actionText: 'Book Now',
      icon: UserCheck,
      handler: onOpenAppointment
    },
    {
      id: 'diagnostics',
      title: 'Diagnostics & Lab Tests',
      description: 'Accurate & reliable reports with automated lab machinery and NABL standard protocols.',
      image: '/images/lab_test.png',
      badge: 'Home Collection',
      actionText: 'Book Lab Tests',
      icon: Microscope,
      handler: onOpenLabModal
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      description: 'Genuine medicines at your convenience with 100% authentic stock & prescription fulfillment.',
      image: '/images/pharmacy.png',
      badge: 'Doorstep Delivery',
      actionText: 'Order Now',
      icon: Pill,
      handler: onOpenPharmacyModal
    },
    {
      id: 'daycare',
      title: 'Day Care Procedures',
      description: 'Safe, comfortable and efficient care for minor surgeries, IV infusions & observations.',
      image: '/images/daycare.png',
      badge: '24/7 Observation',
      actionText: 'Know More',
      icon: BedDouble,
      handler: onOpenDaycareModal
    },
    {
      id: 'checkups',
      title: 'Preventive Health Checkups',
      description: 'Stay healthy with regular screenings, comprehensive body checkups & tailored packages.',
      image: '/images/preventive.png',
      badge: 'Discounted Bundles',
      actionText: 'View Packages',
      icon: HeartPulse,
      handler: onOpenPackagesModal
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left space-y-2.5">
            <span className="text-[#0F4C81] text-xs sm:text-sm uppercase font-extrabold tracking-widest bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
              Complete Healthcare Under One Roof
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl font-medium">
              Comprehensive poly clinic, diagnostics, day care, and pharmacy services tailored to keep your whole family healthy.
            </p>
          </div>

          <div>
            <button 
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0F4C81] hover:text-sky-700 bg-sky-50 hover:bg-sky-100 px-5 py-3 rounded-xl border border-sky-200 transition shadow-xs"
            >
              <span>View All Services</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services 5-Column Grid with Taller, Bigger Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Taller Image & Icon Overlay */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#0F4C81] text-xs font-black px-3 py-1 rounded-full shadow-md">
                    {service.badge}
                  </span>

                  {/* Circle Icon overlay */}
                  <div className="absolute bottom-3 left-3 w-12 h-12 rounded-2xl bg-[#0F4C81] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-sky-600 transition">
                    <IconComponent className="w-6 h-6 text-sky-100" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-[#0F4C81] transition leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <button 
                    onClick={service.handler}
                    className="w-full mt-2 py-3 px-4 rounded-xl border-2 border-sky-200 hover:border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
