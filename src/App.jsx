import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CalendarDays, Check, ChevronDown, Clock3, GraduationCap, HeartHandshake, Images, IndianRupee, MapPin, Menu, MessageCircle, Microscope, Phone, Pill, ShieldCheck, Star, Stethoscope, Users, X, BedDouble } from 'lucide-react';
import { clinic, labCategories, labTests, makeEnquiry } from './data/clinic';
import logo from './assets/logo.png';
import './showcase.css';

const currentYear = new Date().getFullYear();

const services = [
  { title: 'Doctor consultation', image: '/images/consultation.png', icon: Stethoscope, text: 'Talk through your health concerns and discuss the next steps with a doctor.', action: 'Enquire about a consultation' },
  { title: 'Diagnostics & lab tests', image: '/images/lab_test.png', icon: Microscope, text: 'Ask reception about available tests, preparation instructions and report collection.', action: 'Enquire about lab tests' },
  { title: 'Pharmacy', image: '/images/pharmacy.png', icon: Pill, text: 'Contact the pharmacy about your prescription and medicine availability.', action: 'Enquire about medicines' },
  { title: 'Day care', image: '/images/daycare.png', icon: BedDouble, text: 'Discuss your care needs with the clinic. Procedures are subject to medical assessment.', action: 'Ask about day care' },
  { title: 'Health checkups', image: '/images/preventive.png', icon: HeartHandshake, text: 'Ask which health checks are appropriate for you and what they include.', action: 'Ask about checkups' },
];
const faqs = [
  ['How do I arrange a consultation?', 'Call reception or send a WhatsApp enquiry. The team will confirm the doctor’s availability, consultation charges and your visit time. Sending an enquiry does not confirm an appointment.'],
  ['Where is PRO CARE located?', `${clinic.address}. Landmark: ${clinic.landmark}. Use the directions link for the clinic’s Google listing.`],
  ['What are the listed clinic hours?', `${clinic.weekdayHours}. ${clinic.sundayHours}. Please call before travelling, because listing hours and individual doctor schedules can change.`],
  ['When can I consult Dr. Vaseem?', `Dr. Vaseem’s listed PRO CARE consultation hours are ${clinic.doctorTimings}. Please call ahead to confirm; individual doctor schedules can change.`],
  ['Can I ask about lab tests or medicines?', 'Yes. Choose the service in the enquiry form or call reception. The team can confirm test availability, preparation, prices, medicine stock and any collection or delivery options.'],
  ['How do I collect a report?', 'Contact reception with your sample or bill number. Reports and their status are provided by the clinic; this website does not retrieve patient records.'],
  ['What should I bring to my visit?', 'Bring previous prescriptions, relevant reports and a list of current medicines. Reception can advise whether anything else is needed for your appointment.'],
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function EnquiryDialog({ enquiry, onClose }) {
  const { service, tests = [] } = enquiry;
  const dialog = useRef(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement;
    element.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, []);
  function prepare(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const digits = data.phone.replace(/[\s()+-]/g, '');
    if (!data.name.trim()) { setError('Please enter your name.'); return; }
    if (!/^(?:91)?[6-9][0-9]{9}$/.test(digits)) { setError('Please enter a valid Indian mobile number.'); return; }
    const today = new Date();
    const minimum = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    if (data.date && data.date < minimum) { setError('Please choose today or a future date.'); return; }
    setError(''); setMessage(makeEnquiry(data, tests));
  }
  const selectedTotal = tests.reduce((sum, test) => sum + test.price, 0);
  return <dialog ref={dialog} className="enquiry-dialog" aria-labelledby="enquiry-title" onCancel={onClose} onClick={event => { if (event.target === dialog.current) onClose(); }}>
    <motion.div initial={reduced ? false : { opacity: 0, y: 18, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.25 }}>
      <div className="dialog-heading"><div><span className="eyebrow">LET’S TALK</span><h2 id="enquiry-title">Enquire with reception</h2></div><button className="icon-button" onClick={onClose} aria-label="Close enquiry"><X /></button></div>
      <p>Tell us what you need. Reception will confirm availability and charges.</p>
      {tests.length > 0 && <div className="dialog-selected-tests"><strong>{tests.length} selected test{tests.length > 1 ? 's' : ''}</strong><div>{tests.map(test => <span key={test.name}>{test.name} <b>{rupees(test.price)}</b></span>)}</div><small>Estimated total: {rupees(selectedTotal)}</small></div>}
      <form onSubmit={prepare} onChange={() => { setMessage(''); setError(''); }}>
        <label>Service<select name="service" defaultValue={service}>{[...new Set([...services.map(item => item.title), 'Lab test booking', 'Dr. Mohammed Vaseem consultation', 'Report collection', service])].map(item => <option key={item}>{item}</option>)}</select></label>
        <div className="enquiry-fields"><label>Your name<input name="name" autoComplete="name" maxLength={100} required placeholder="Full name" /></label><label>Mobile number<input name="phone" autoComplete="tel" inputMode="tel" type="tel" maxLength={18} required placeholder="10-digit mobile" /></label></div>
        <label>Preferred date <small>(optional)</small><input name="date" type="date" /></label>
        <label>Your enquiry <small>(optional)</small><textarea name="note" rows={3} maxLength={1000} placeholder="For example, I would like to check consultation timings." /></label>
        <p className="privacy-note">Nothing is stored on this website. Your details are included only in the WhatsApp message you choose to send. Attach any prescription directly in WhatsApp.</p>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="primary-button" type="submit">Prepare WhatsApp enquiry <ArrowRight size={17}/></button>
      </form>
      {message && <div className="message-preview" role="status"><strong>Your enquiry is ready to review</strong><p>{message}</p><a className="primary-button whatsapp-button" href={`https://wa.me/${clinic.phone.replace('+','')}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Open WhatsApp to send</a><small>Your appointment is confirmed only when reception replies.</small></div>}
    </motion.div>
  </dialog>;
}

function rupees(value) {
  return `Rs. ${value.toLocaleString('en-IN')}`;
}

function ListingProof() {
  const facts = [
    { icon: Star, value: clinic.rating, label: clinic.ratingCount, note: 'Justdial rating index' },
    { icon: Images, value: clinic.photoCount, label: `${clinic.exteriorPhotos} and ${clinic.interiorPhotos}`, note: 'Public listing gallery' },
    { icon: Clock3, value: clinic.established, label: clinic.listingYears, note: 'Year of establishment' },
    { icon: GraduationCap, value: clinic.doctorExperience, label: clinic.doctorSpecialty, note: 'CARE Hospitals doctor profile' },
  ];
  return <section className="proof-band container" aria-label="Verified clinic highlights">{facts.map(({ icon: Icon, value, label, note }) => <Reveal className="proof-card" key={note}><Icon/><div><strong>{value}</strong><span>{label}</span><small>{note}</small></div></Reveal>)}</section>;
}

function LabTariffSection({ onEnquire }) {
  const [selectedTests, setSelectedTests] = useState([]);
  const featured = ['Random Blood Sugar', 'Complete Urine Examination', 'Complete Blood Picture', 'HbA1c', 'Lipid Profile', 'Thyroid Profile (T3, T4, TSH)', 'Liver Function Test', 'Urine Culture', 'Vitamin D'];
  const featuredTests = featured.map(name => labTests.find(test => test.name === name)).filter(Boolean);
  const grouped = labCategories.map(category => ({ category, tests: labTests.filter(test => test.category === category) }));
  const selectedTotal = selectedTests.reduce((sum, test) => sum + test.price, 0);
  const selectedNames = new Set(selectedTests.map(test => test.name));
  const toggleTest = test => {
    setSelectedTests(current => current.some(item => item.name === test.name)
      ? current.filter(item => item.name !== test.name)
      : [...current, test]);
  };
  const bookSelected = () => {
    if (selectedTests.length) onEnquire('Lab test booking', selectedTests);
  };
  return <section id="lab-prices" className="section lab-tariff"><div className="container"><Reveal className="section-heading"><div><span className="eyebrow">LAB PRICE LIST</span><h2>Select tests.<br/><span>Book on WhatsApp.</span></h2></div><p>{labTests.length} listed investigations from the PROCARE lab price list. Pick the tests you need, then send the booking enquiry directly to reception on WhatsApp.</p></Reveal><Reveal className="price-hero"><div><span className="eyebrow">STARTING FROM</span><h3><IndianRupee size={38}/>{rupees(Math.min(...labTests.map(test => test.price))).replace('Rs. ', '')}</h3><p>Tap tests below to build your lab enquiry. Reception will confirm availability, preparation instructions, final price and report timing.</p></div><div className="price-actions"><button className="primary-button" onClick={bookSelected} disabled={!selectedTests.length}>Book selected tests <ArrowUpRight size={17}/></button><a className="secondary-button" href={`https://wa.me/${clinic.phone.replace('+','')}?text=${encodeURIComponent('Hello PRO CARE, I would like to enquire about lab tests and current prices.')}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp lab desk</a></div></Reveal><div className="featured-prices">{featuredTests.map((test, index) => <Reveal className={selectedNames.has(test.name) ? 'price-chip is-selected' : 'price-chip'} delay={index * 0.035} key={test.name}><button onClick={() => toggleTest(test)} aria-pressed={selectedNames.has(test.name)}><div><strong>{test.name}</strong><span>{test.category}</span></div><b>{rupees(test.price)}</b></button></Reveal>)}</div><Reveal className="lab-booking-panel"><div><span className="eyebrow">SELECTED TESTS</span><h3>{selectedTests.length ? `${selectedTests.length} test${selectedTests.length > 1 ? 's' : ''} selected` : 'Choose tests to book'}</h3><p>{selectedTests.length ? `Estimated total: ${rupees(selectedTotal)}` : 'Selected tests will appear here before you send the WhatsApp enquiry.'}</p></div>{selectedTests.length > 0 && <div className="selected-test-list">{selectedTests.map(test => <button key={test.name} onClick={() => toggleTest(test)}><span>{test.name}</span><strong>{rupees(test.price)}</strong><X size={15}/></button>)}</div>}<div className="booking-actions"><button className="primary-button" onClick={bookSelected} disabled={!selectedTests.length}><MessageCircle size={18}/> Book selected tests</button>{selectedTests.length > 0 && <button className="secondary-button" onClick={() => setSelectedTests([])}>Clear selection</button>}</div></Reveal><Reveal className="tariff-board"><div className="tariff-board-head"><div><span className="eyebrow">FULL TARIFF</span><h3>Tap to select investigations</h3></div><span>{labCategories.length} categories</span></div><div className="tariff-columns">{grouped.map(group => <div className="tariff-group" key={group.category}><h4>{group.category}</h4>{group.tests.map(test => <button className={selectedNames.has(test.name) ? 'is-selected' : ''} key={test.name} onClick={() => toggleTest(test)} aria-pressed={selectedNames.has(test.name)}><span>{test.name}</span><strong>{rupees(test.price)}</strong></button>)}</div>)}</div><p className="tariff-note">Prices are from the supplied PROCARE LAB PRICE LIST workbook. Please confirm current price, fasting requirements and report timing before sample collection.</p></Reveal></div></section>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [enquiry, setEnquiry] = useState(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close);
  }, []);
  const open = (service = 'Doctor consultation', tests = []) => { setMenu(false); setEnquiry({ service, tests }); };
  return <div className="procare-site" id="home">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <motion.div className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} />
    <div className="clinic-topline"><span><MapPin size={14}/> {clinic.locality}</span><a href={`tel:${clinic.phone}`}><Phone size={14}/> {clinic.phoneDisplay}</a><span><Clock3 size={14}/> {clinic.weekdayHours}</span></div>
    <header className="clinic-header">
      <a className="clinic-logo" href="#home" aria-label="PRO CARE home"><img src={logo} alt="PRO CARE — Progressively Healthy"/></a>
      <nav id="clinic-navigation" className={menu ? 'clinic-nav is-open' : 'clinic-nav'} aria-label="Main navigation">{[['Home','home'],['About','about'],['Doctor','doctors'],['Services','services'],['Lab tests','lab-tests'],['Lab prices','lab-prices'],['Pharmacy','pharmacy'],['FAQ','faq'],['Contact','contact']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="primary-button" onClick={() => open()}><CalendarDays size={18}/><span>Appointment enquiry</span></button><button className="icon-button menu-button" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="clinic-navigation" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>
    </header>
    <main id="main-content">
      <section className="showcase-hero">
        <div className="hero-orbit" aria-hidden="true"/>
        <div className="container hero-grid"><Reveal className="hero-intro"><span className="eyebrow">PRO CARE · MUSHEERABAD</span><h1>Quality care.<br/><em>Closer to you.</em></h1><p className="hero-lead">A conversation. A clear next step.<br/>Care that starts with you.</p><p className="hero-description">PRO CARE Progressively Healthy is a clinic in Musheerabad, Hyderabad, listed near {clinic.landmark}. Explore consultations, diagnostics and pharmacy enquiries before you visit.</p><div className="button-row"><button className="primary-button" onClick={() => open()}><CalendarDays size={19}/> Plan your visit <ArrowUpRight size={18}/></button><a className="secondary-button" href={clinic.maps} target="_blank" rel="noreferrer"><MapPin size={18}/> Get directions</a></div><div className="hero-assurances"><span><HeartHandshake size={19}/> {clinic.rating} from {clinic.ratingCount}</span><span><Clock3 size={19}/> Established {clinic.established}</span></div></Reveal>
        <Reveal className="hero-visual" delay={0.12}><img className="hero-family" src="/images/hero.png" alt="Illustration of a family consultation" fetchPriority="high"/><div className="hero-photo-note">Illustrative image</div><div className="visit-card"><span className="visit-icon"><Stethoscope size={25}/></span><div><small>YOUR NEXT STEP</small><strong>Let’s plan your visit</strong><span>Check timings with reception</span></div><button aria-label="Enquire about a consultation" onClick={() => open()}><ArrowUpRight/></button></div></Reveal></div>
      </section>
      <div className="care-strip container">{[[Stethoscope,'Consultations','Discuss your concerns'],[Microscope,'Diagnostics',`${labTests.length} listed lab prices`],[Pill,'Pharmacy','Check medicine availability'],[MapPin,'Musheerabad','Care in your neighbourhood']].map(([Icon,title,text],i) => <Reveal className="care-strip-item" delay={i*.05} key={title}><Icon/><div><strong>{title}</strong><span>{text}</span></div></Reveal>)}</div>
      <ListingProof />
      <section id="services" className="section container"><Reveal className="section-heading"><div><span className="eyebrow">HOW WE CAN HELP</span><h2>Care for your<br/><span>everyday health.</span></h2></div><p>Find the right starting point.<br/>Our reception team can help you plan ahead.</p></Reveal><div className="service-cards">{services.map((item,i) => <Reveal key={item.title} delay={i*.055}><article className="showcase-service"><div className="service-photo"><img src={item.image} alt="" loading="lazy"/><span><item.icon size={24}/></span></div><div className="service-copy"><h3>{item.title}</h3><p>{item.text}</p><button onClick={() => open(item.title)}>{item.action}<ArrowUpRight size={17}/></button></div></article></Reveal>)}</div><p className="image-note">Service images are illustrative. Contact reception for current services and charges.</p></section>
      <LabTariffSection onEnquire={open} />
      <section id="about" className="about-showcase"><div className="container about-grid"><Reveal><span className="eyebrow">WE TREAT, HE CURES</span><h2>A local clinic.<br/>A personal approach.</h2><p>PRO CARE Progressively Healthy is based in Musheerabad, Hyderabad. The public listing shows {clinic.rating} stars from {clinic.ratingCount}, an establishment date of {clinic.established}, and care hours from early morning to late evening on weekdays.</p><a className="text-button" href="#contact">Find your way to PRO CARE <ArrowRight size={18}/></a></Reveal><div className="approach-grid">{[[HeartHandshake,'A listening ear','Start with a conversation about your needs.'],[Users,'Help planning your visit','Speak to reception about the right consultation.'],[ShieldCheck,'Clear next steps','Confirm timings and charges before you travel.'],[MessageCircle,'A direct connection','Call or send an enquiry to the clinic.']].map(([Icon,title,text],i) => <Reveal className="approach-item" delay={i*.05} key={title}><Icon/><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
      <section id="doctors" className="section container"><Reveal className="section-heading"><div><span className="eyebrow">MEET THE DOCTOR</span><h2>Experience.<br/><span>With a human touch.</span></h2></div></Reveal><Reveal className="doctor-showcase"><div className="doctor-photo"><img src="/images/dr-vaseem.jpg" alt="Dr. Mohammed Vaseem" loading="lazy"/></div><div className="doctor-copy"><span className="eyebrow">PULMONOLOGY · CRITICAL CARE · SLEEP MEDICINE</span><h3>Dr. Mohammed Vaseem</h3><p className="doctor-degrees">MBBS, MD, FCCP (USA)</p><p>A pulmonologist and chest physician with experience in critical care and sleep medicine. His professional profile records community health camps and consultation work at PRO CARE Polyclinic, Musheerabad.</p><div className="doctor-details"><span><GraduationCap size={20}/> English, Hindi &amp; Telugu</span><span><Clock3 size={20}/> {clinic.doctorTimings}</span></div><p className="small-note">Consultation timing is listed on the doctor’s website. Call to confirm before visiting.</p><div className="button-row"><button className="primary-button" onClick={() => open('Dr. Mohammed Vaseem consultation')}>Enquire about a consultation <ArrowUpRight size={17}/></button><a className="text-button" href={clinic.doctorProfile} target="_blank" rel="noreferrer">Professional profile <ArrowUpRight size={15}/></a></div></div></Reveal></section>
      <section className="container support-grid section"><Reveal className="support-card" ><div id="lab-tests"><span className="eyebrow">DIAGNOSTICS</span><Microscope className="support-icon"/><h2>Planning a lab test?</h2><p>Ask about the test you need, preparation requirements, charges and when to collect your report.</p><ul><li><Check/> Check test availability</li><li><Check/> Confirm preparation instructions</li><li><Check/> Ask about report collection</li></ul><button className="primary-button" onClick={() => open('Diagnostics & lab tests')}>Lab test enquiry <ArrowRight size={18}/></button><button className="text-button" onClick={() => open('Report collection')}>Already visited? Ask about your report</button></div></Reveal><Reveal className="support-card pharmacy-support" delay={.1}><div id="pharmacy"><span className="eyebrow">PHARMACY</span><Pill className="support-icon"/><h2>Your prescription.<br/>A helpful conversation.</h2><p>Speak to the team about medicine stock and collection. If needed, share your prescription directly with reception on WhatsApp.</p><ul><li><Check/> Enquire about your medicine</li><li><Check/> Confirm availability and price</li><li><Check/> Discuss collection options</li></ul><button className="primary-button" onClick={() => open('Pharmacy')}>Pharmacy enquiry <ArrowRight size={18}/></button></div></Reveal></section>
      <section className="section container visit-steps"><Reveal className="section-heading"><div><span className="eyebrow">A LITTLE PLANNING GOES A LONG WAY</span><h2>Your visit, made simpler.</h2></div></Reveal><div className="step-grid">{[['01','Choose your service','Explore the care you’re looking for.'],['02','Speak to reception','Call or send a WhatsApp enquiry.'],['03','Confirm the details','The team confirms availability, time and charges.'],['04','Visit the clinic','Bring any relevant prescriptions and reports.']].map(([n,title,text],i) => <Reveal key={n} delay={i*.06}><span className="step-number">{n}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>
      <section id="faq" className="section container faq-layout"><Reveal><span className="eyebrow">BEFORE YOU VISIT</span><h2>A few helpful<br/>answers.</h2><p>Need something else?<br/>Reception is a call away.</p><a className="text-button" href={`tel:${clinic.phone}`}><Phone size={17}/>{clinic.phoneDisplay}</a></Reveal><Reveal className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</Reveal></section>
      <section id="contact" className="contact-section"><div className="container contact-pro"><Reveal className="contact-pro-head"><div><span className="eyebrow">VISIT PRO CARE</span><h2>Plan your visit with confidence.</h2><p>{clinic.name} · {clinic.tagline} in Musheerabad, Hyderabad.</p></div><div className="contact-action-row"><a className="primary-button" href={`tel:${clinic.phone}`}><Phone size={18}/> Call reception</a><a className="secondary-button" href={`https://wa.me/${clinic.phone.replace('+','')}?text=${encodeURIComponent('Hello PRO CARE, I would like to plan a visit.')}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a></div></Reveal><div className="contact-pro-grid"><Reveal className="contact-info-panel"><div className="contact-main-card"><span className="contact-card-icon"><MapPin size={23}/></span><div><span className="eyebrow">ADDRESS</span><h3>Beside Deepak Photo Shop</h3><address>{clinic.address}</address><a className="text-button" href={clinic.maps} target="_blank" rel="noreferrer">Open Google directions <ArrowUpRight size={16}/></a></div></div><div className="contact-detail-grid"><div className="contact-soft-card"><Clock3 size={22}/><strong>Opening hours</strong><span>{clinic.weekdayHours}</span><span>{clinic.sundayHours}</span></div><div className="contact-soft-card"><Phone size={22}/><strong>Reception desk</strong><a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a><a href={`tel:${clinic.alternatePhone}`}>{clinic.alternatePhoneDisplay}</a></div><div className="contact-soft-card"><Star size={22}/><strong>Public listing</strong><span>{clinic.rating} rating</span><span>{clinic.photoCount}</span></div><div className="contact-soft-card"><ShieldCheck size={22}/><strong>Before you visit</strong><span>Confirm doctor timing, lab availability and report collection.</span></div></div></Reveal><Reveal className="contact-map-clean"><iframe title="PRO CARE location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=PRO%20CARE%20Progressively%20Healthy%20Musheerabad%20Hyderabad&output=embed"></iframe><div className="map-clean-footer"><div><span className="eyebrow">DIRECTIONS</span><strong>PRO CARE, Musheerabad</strong><small>Use Google Maps for the fastest route.</small></div><a className="primary-button" href={clinic.maps} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={18}/></a></div></Reveal></div></div></section>
    </main>
    <footer className="showcase-footer container"><div><strong>PRO CARE</strong><span>Progressively Healthy</span></div><p>© {currentYear} PRO CARE.<br/>Appointment enquiries are subject to confirmation.</p><a href="#home">Back to top ↑</a></footer>
    <a className="floating-contact" href={`https://wa.me/${clinic.phone.replace('+','')}?text=${encodeURIComponent('Hello PRO CARE, I would like to enquire about your clinic services.')}`} target="_blank" rel="noreferrer" aria-label="Enquire with PRO CARE on WhatsApp"><MessageCircle size={25}/><span>Let’s talk</span></a>
    {enquiry && <EnquiryDialog key={`${enquiry.service}-${enquiry.tests.map(test => test.name).join('|')}`} enquiry={enquiry} onClose={() => setEnquiry(null)}/>}
  </div>;
}
