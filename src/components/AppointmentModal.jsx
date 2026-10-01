import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2, 
  Stethoscope, 
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';

const AppointmentModal = ({ isOpen, onClose, preselectedDoctor = '' }) => {
  if (!isOpen) return null;

  const [doctor, setDoctor] = useState(preselectedDoctor || 'Dr. Mohd. Vaseem (Pulmonologist & Diabetologist)');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [consultType, setConsultType] = useState('In-Clinic Consultation');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const availableDoctors = [
    'Dr. Mohd. Vaseem (Pulmonologist, Chest & Diabetologist)',
    'Dr. Fatima Begum (Gynecologist & Obstetrician)',
    'Dr. Syed Ahmed Farooqui (Pediatrician)',
    'Dr. S. K. Sharma (Cardiologist)'
  ];

  const timeSlots = ['10:00 AM', '10:30 AM', '11:30 AM', '04:30 PM', '06:00 PM', '07:30 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone || !appointmentDate) return;

    const generatedId = 'PRO-APT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(generatedId);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleWhatsAppSend = () => {
    const text = `Hello PRO CARE Poly Clinic,\nI have booked an appointment online!\n\n📌 *Booking Ref:* ${bookingId}\n👤 *Patient Name:* ${patientName}\n📱 *Phone:* ${patientPhone}\n👨‍⚕️ *Doctor:* ${doctor}\n📅 *Date:* ${appointmentDate}\n⏰ *Time:* ${timeSlot}\n📍 *Mode:* ${consultType}\n🏥 *Clinic Address:* D.No. 11-2-553, Opp. Masjid Nawaz Jung, Aghapura, Nampally, Hyderabad`;
    const whatsappUrl = `https://wa.me/919985721155?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPatientPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1E5A96] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <Calendar className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-tight">Book Doctor Appointment</h3>
              <p className="text-xs text-sky-100">PRO CARE Poly Clinic • Fast & Easy</p>
            </div>
          </div>
          <button 
            onClick={resetAndClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-left space-y-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Doctor Selector */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Select Doctor / Department</label>
                <div className="relative">
                  <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select 
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-sky-100 text-xs font-semibold text-slate-800 bg-white"
                  >
                    {availableDoctors.map((doc, idx) => (
                      <option key={idx} value={doc}>{doc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Consultation Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultType('In-Clinic Consultation')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      consultType === 'In-Clinic Consultation'
                        ? 'bg-sky-50 border-[#0F4C81] text-[#0F4C81]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${consultType === 'In-Clinic Consultation' ? 'text-[#0F4C81]' : 'text-slate-300'}`} />
                    <span>In-Clinic Visit</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultType('Home Doctor Visit')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      consultType === 'Home Doctor Visit'
                        ? 'bg-sky-50 border-[#0F4C81] text-[#0F4C81]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${consultType === 'Home Doctor Visit' ? 'text-[#0F4C81]' : 'text-slate-300'}`} />
                    <span>Home Visit</span>
                  </button>
                </div>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Patient Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0F4C81] text-xs text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Mobile Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 99857 21155"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0F4C81] text-xs text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Preferred Date *</label>
                  <input 
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0F4C81] text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Preferred Time Slot</label>
                  <select 
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0F4C81] text-xs font-semibold text-slate-800 bg-white"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reason / Symptoms */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">Brief Symptoms / Notes (Optional)</label>
                <textarea 
                  rows="2"
                  placeholder="Describe your cough, asthma, fever, or checkup requirement..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-[#0F4C81] text-xs text-slate-800"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="btn-glow w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Confirm Appointment Booking</span>
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Receipt */
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                  Appointment Confirmed!
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-2">Booking Receipt</h4>
                <p className="text-xs text-slate-500">Ref No: <strong className="text-slate-900 font-mono">{bookingId}</strong></p>
              </div>

              {/* Ticket Card */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-bold text-slate-900">{patientName}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-bold text-[#0F4C81]">{doctor}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-bold text-slate-900">{appointmentDate} at {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-slate-800">11-2-553, Opp. Masjid Nawaz Jung, Aghapura, Nampally</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button 
                  onClick={handleWhatsAppSend}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </button>
                
                <button 
                  onClick={resetAndClose}
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

export default AppointmentModal;
