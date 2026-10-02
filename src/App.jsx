import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import PromoSection from './components/PromoSection';
import LabTestsPage from './components/LabTestsPage';
import GalleryPage from './components/GalleryPage';
import DoctorsDirectory from './components/DoctorsDirectory';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import PharmacyModal from './components/PharmacyModal';
import HealthPackagesModal from './components/HealthPackagesModal';
import ReportCheckerModal from './components/ReportCheckerModal';
import DaycareModal from './components/DaycareModal';
import FloatingActions from './components/FloatingActions';

function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState('');
  const openLabPage = () => window.location.assign('/lab-tests');
  const [isPharmacyModalOpen, setIsPharmacyModalOpen] = useState(false);
  const [isPackagesModalOpen, setIsPackagesModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isDaycareModalOpen, setIsDaycareModalOpen] = useState(false);

  const handleOpenDoctorConsult = (doctorName = '') => {
    setPreselectedDoctor(doctorName);
    setIsAppointmentOpen(true);
  };

  const handleSelectPackage = (pkgTitle) => {
    handleOpenDoctorConsult(`Preventive Package: ${pkgTitle}`);
  };

  if (window.location.pathname.replace(/\/$/, '') === '/gallery') return <GalleryPage />;

  if (window.location.pathname.replace(/\/$/, '') === '/lab-tests') {
    return <LabTestsPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-200 selection:text-sky-900 font-sans">
      
      {/* Top Header */}
      <Header 
        onOpenAppointment={() => handleOpenDoctorConsult()}
        onOpenLabModal={openLabPage}
        onOpenPharmacyModal={() => setIsPharmacyModalOpen(true)}
        onOpenReportModal={() => setIsReportModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner with Quick Actions & Animations */}
        <Hero 
          onOpenAppointment={() => handleOpenDoctorConsult()}
          onOpenLabModal={openLabPage}
          onOpenPharmacyModal={() => setIsPharmacyModalOpen(true)}
        />

        {/* Animated Statistics Counter Bar */}
        <StatsCounter />

        {/* Our 5 Core Services */}
        <Services 
          onOpenAppointment={() => handleOpenDoctorConsult()}
          onOpenLabModal={openLabPage}
          onOpenPharmacyModal={() => setIsPharmacyModalOpen(true)}
          onOpenPackagesModal={() => setIsPackagesModalOpen(true)}
          onOpenDaycareModal={() => setIsDaycareModalOpen(true)}
        />

        {/* Why Choose PROCARE? */}
        <WhyChooseUs />

        {/* How It Works Flowchart */}
        <HowItWorks onOpenAppointment={() => handleOpenDoctorConsult()} />

        {/* Lab Tests & Pharmacy Showcase Cards */}
        <PromoSection 
          onOpenLabModal={openLabPage}
          onOpenPharmacyModal={() => setIsPharmacyModalOpen(true)}
          onOpenReportModal={() => setIsReportModalOpen(true)}
        />


        {/* Doctors Directory */}
        <DoctorsDirectory onOpenAppointment={(docName) => handleOpenDoctorConsult(docName)} />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer with Timings, Location & Map */}
      <Footer 
        onOpenAppointment={() => handleOpenDoctorConsult()}
        onOpenLabModal={openLabPage}
        onOpenPharmacyModal={() => setIsPharmacyModalOpen(true)}
        onOpenReportModal={() => setIsReportModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <FloatingActions 
        onOpenAppointment={() => handleOpenDoctorConsult()}
        onOpenReportModal={() => setIsReportModalOpen(true)}
      />

      {/* Modals */}
      <AppointmentModal 
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedDoctor={preselectedDoctor}
      />


      <PharmacyModal 
        isOpen={isPharmacyModalOpen}
        onClose={() => setIsPharmacyModalOpen(false)}
      />

      <HealthPackagesModal 
        isOpen={isPackagesModalOpen}
        onClose={() => setIsPackagesModalOpen(false)}
        onSelectPackage={handleSelectPackage}
      />

      <ReportCheckerModal 
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      <DaycareModal 
        isOpen={isDaycareModalOpen}
        onClose={() => setIsDaycareModalOpen(false)}
        onBookAppointment={() => handleOpenDoctorConsult('Day Care Procedure')}
      />

    </div>
  );
}

export default App;
