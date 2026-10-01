// Keep factual content centralized. See CONTENT-SOURCES.md for provenance.
export const clinic = {
  name: 'PRO CARE',
  tagline: 'Progressively Healthy',
  locality: 'Musheerabad, Hyderabad',
  address: '17-481/1/A, Daira Market Area, Zamistanpur, Ram Nagar Road, Musheerabad, Hyderabad, Telangana 500020',
  landmark: 'Beside Deepak Photo Shop',
  rating: '4.9',
  ratingCount: '118 ratings',
  established: 'September 2023',
  listingYears: '3 years in healthcare',
  weekdayHours: 'Monday-Saturday: 7:00 AM-10:00 PM',
  sundayHours: 'Sunday: 7:00 AM-1:00 PM',
  phone: '+919848188898',
  phoneDisplay: '+91 98481 88898',
  alternatePhone: '+919010107500',
  alternatePhoneDisplay: '+91 90101 07500',
  maps: 'https://share.google/WKmAWQznFnKMKmpa4',
  doctorProfile: 'https://www.carehospitals.com/doctor/hyderabad/nampally/mohammed-vaseem-pulmonologist',
  doctorTimings: 'Monday-Saturday: 4:30 PM-6:30 PM',
  photoCount: '44 photos',
  exteriorPhotos: '8 exterior photos',
  interiorPhotos: '24 interior photos',
  doctorExperience: '15 years',
  doctorSpecialty: 'Pulmonologist, critical care and sleep specialist',
  doctorLanguages: 'English, Hindi and Telugu',
};

export function makeEnquiry({ name, phone, service, date, note }, selectedTests = []) {
  const testLines = selectedTests.map((test, index) => `${index + 1}. ${test.name} - Rs. ${test.price.toLocaleString('en-IN')}`);
  const total = selectedTests.reduce((sum, test) => sum + test.price, 0);
  const testBlock = selectedTests.length
    ? `\nSelected lab tests:\n${testLines.join('\n')}\nEstimated total: Rs. ${total.toLocaleString('en-IN')}`
    : '';
  return `Hello PRO CARE, I would like to enquire about ${service}.\nName: ${name.trim()}\nPhone: ${phone.trim()}${date ? `\nPreferred date: ${date}` : ''}${testBlock}${note.trim() ? `\nMessage: ${note.trim()}` : ''}\nPlease confirm availability, preparation instructions, final price and timing.`;
}

export const labTests = [
  { name: 'Complete Blood Picture', price: 250, category: 'Blood basics' },
  { name: 'ESR', price: 100, category: 'Blood basics' },
  { name: 'Hemoglobin', price: 120, category: 'Blood basics' },
  { name: 'Blood Grouping & Rh Typing', price: 100, category: 'Blood basics' },
  { name: 'MP PV/PF', price: 250, category: 'Fever & infection' },
  { name: 'BTCT', price: 100, category: 'Blood basics' },
  { name: 'Platelet Count', price: 150, category: 'Blood basics' },
  { name: 'HbA1c', price: 450, category: 'Diabetes' },
  { name: 'Complete Urine Examination', price: 100, category: 'Urine tests' },
  { name: 'Urine Culture', price: 650, category: 'Urine tests' },
  { name: 'PT INR', price: 450, category: 'Coagulation' },
  { name: 'APTT', price: 550, category: 'Coagulation' },
  { name: 'Thyroid Profile (T3, T4, TSH)', price: 600, category: 'Hormone & thyroid' },
  { name: 'TSH', price: 300, category: 'Hormone & thyroid' },
  { name: 'CRP', price: 300, category: 'Fever & infection' },
  { name: 'RA Factor', price: 300, category: 'Fever & infection' },
  { name: 'ASO Titre', price: 300, category: 'Fever & infection' },
  { name: 'FBS/PLBS', price: 200, category: 'Diabetes' },
  { name: 'Random Blood Sugar', price: 70, category: 'Diabetes' },
  { name: 'Blood Urea', price: 200, category: 'Kidney & electrolytes' },
  { name: 'Serum Creatinine', price: 200, category: 'Kidney & electrolytes' },
  { name: 'Serum Uric Acid', price: 300, category: 'Kidney & electrolytes' },
  { name: 'Serum Electrolytes', price: 600, category: 'Kidney & electrolytes' },
  { name: 'Liver Function Test', price: 550, category: 'Liver & metabolic' },
  { name: 'Lipid Profile', price: 450, category: 'Liver & metabolic' },
  { name: 'Serum Bilirubin', price: 250, category: 'Liver & metabolic' },
  { name: 'Serum Calcium', price: 300, category: 'Kidney & electrolytes' },
  { name: 'HIV', price: 350, category: 'Serology' },
  { name: 'HBsAg', price: 300, category: 'Serology' },
  { name: 'HCV', price: 500, category: 'Serology' },
  { name: 'Dengue Serology', price: 1500, category: 'Fever & infection' },
  { name: 'Widal (Slide)', price: 250, category: 'Fever & infection' },
  { name: 'Widal (Test Tube)', price: 400, category: 'Fever & infection' },
  { name: 'FSH', price: 500, category: 'Hormone & thyroid' },
  { name: 'LH', price: 500, category: 'Hormone & thyroid' },
  { name: 'Prolactin', price: 500, category: 'Hormone & thyroid' },
  { name: 'Serum Testosterone', price: 650, category: 'Hormone & thyroid' },
  { name: 'Ferritin', price: 650, category: 'Vitamins & nutrition' },
  { name: 'Vitamin D', price: 1250, category: 'Vitamins & nutrition' },
  { name: 'Vitamin B12', price: 800, category: 'Vitamins & nutrition' },
  { name: 'Beta HCG', price: 800, category: 'Hormone & thyroid' },
];

export const labCategories = [...new Set(labTests.map(test => test.category))];
