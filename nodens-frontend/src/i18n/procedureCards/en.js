import hair from './hair-en';
import plastic from './plastic-en';
import complex from './complex-en';

export default {
  dental: {
    sectionLabel: 'Our Dental Treatments',
    sectionH2: 'Comprehensive',
    sectionH2Accent: 'Dental Care',
    priceLabel: 'All-Inclusive Price',
    packageIncludes: 'Package Includes:',
    requestQuote: 'Request Quote',
    ctaBottomDesc: 'Send your dental photos or X-rays for a free remote assessment. Our prosthodontist will review your case within 24 hours.',
    sendPhotos: 'Send Dental Photos',
    contactUs: 'Contact Us',
    procedures: [
      {
        id: 'hollywood-smile',
        tag: 'Most Requested',
        title: 'Hollywood Smile',
        subtitle: 'E-max Veneers · Zirconia · Full Smile Design',
        price: '€3,200 / $3,800',
        description: 'A Hollywood Smile is a full aesthetic smile transformation — typically 16–20 ultra-thin porcelain veneers designed for your face shape, skin tone, and lip position.',
        includes: ['Digital Smile Design preview', '16–20 E-max porcelain or zirconia veneers', 'Gum contouring if required', '5-day Istanbul stay', 'All transfers and accommodation', 'Lifetime warranty on materials'],
        faqs: [
          { q: 'Are Hollywood Smile veneers permanent?', a: 'Porcelain veneers typically last 10–20 years with proper care. The process involves removing a thin layer of enamel, which is irreversible.' },
          { q: 'Will the veneers look natural?', a: 'Our prosthodontists use Digital Smile Design to customize shade, shape, and texture. E-max ceramic mimics natural enamel translucency.' },
        ],
      },
      {
        id: 'implants',
        tag: 'Permanent Solution',
        title: 'Dental Implants',
        subtitle: 'Single · Multiple · Full Arch',
        price: 'From €800 / $950 per implant',
        description: 'Dental implants are the gold standard for replacing missing teeth — titanium posts that fuse with bone to create a permanent foundation for crowns or bridges.',
        includes: ['Premium implant system (Nobel Biocare / Straumann)', 'Digital implant planning with 3D CT scan', 'Surgical placement and healing abutment', 'Zirconia or E-max crown', 'All transfers and coordinator support'],
        faqs: [
          { q: 'How long does the implant process take?', a: 'Standard treatment requires two visits. Visit 1 places the implant; you return in 3–6 months for the final crown.' },
          { q: 'What is the success rate?', a: 'With healthy bone and good hygiene, success rates exceed 95% at 10 years.' },
        ],
      },
      {
        id: 'zirconium',
        tag: 'Strength & Aesthetics',
        title: 'Zirconium Crowns',
        subtitle: 'Metal-Free · Natural Appearance · Durable',
        price: '€200–350 / $240–420 per crown',
        description: 'Zirconium dioxide crowns offer strength and aesthetics without metal. No grey gum line — monolithic zirconia with custom shading in 2–3 working days.',
        includes: ['Full mouth X-ray and evaluation', 'Digital shade matching', 'Monolithic or layered zirconia crown', '3–5 day turnaround', 'Temporary crowns during fabrication'],
        faqs: [
          { q: 'How long do zirconia crowns last?', a: 'High-quality zirconia crowns can last 15–25 years with proper care.' },
        ],
      },
      {
        id: 'all-on-6',
        tag: 'Full Arch Restoration',
        title: 'All-on-6 Dental Implants',
        subtitle: 'Full Arch · Fixed Bridge · Permanent Teeth',
        price: '€6,200 / $7,400 per arch',
        description: 'All-on-6 uses 6 strategically placed implants supporting a fixed porcelain bridge — replacing a full arch permanently with no removable dentures.',
        includes: ['3D CT scan and full treatment planning', '6 premium titanium implants per arch', 'Immediate fixed temporary bridge', 'Final zirconia or E-max fixed bridge', '7-day Istanbul stay', 'All transfers and accommodation'],
        faqs: [
          { q: 'All-on-4 vs All-on-6?', a: 'All-on-6 uses 6 implants for superior load distribution and longer-term stability.' },
          { q: 'Teeth on day of surgery?', a: 'Yes — a fixed temporary bridge is usually placed immediately after surgery.' },
        ],
      },
    ],
  },
  hair,
  plastic,
  complex,
  packages: [
    { id: 1, categoryKey: 'hair', category: 'Hair Transplant', name: 'Hair Transplant', subtitle: 'FUE Sapphire · DHI Method', priceEur: '1,500', priceUsd: '1,800', highlights: ['Permanent results', '3,000–5,000 grafts', 'Natural hairline design', '3-night stay included'], popular: true, imageKey: 'hair', link: '/hair-transplant' },
    { id: 2, categoryKey: 'dental', category: 'Dental', name: 'Hollywood Smile', subtitle: 'E-max Veneers · Zirconia', priceEur: '3,200', priceUsd: '3,800', highlights: ['20 porcelain veneers', 'Digital Smile Design preview', 'Metal-free, natural look', '5-night stay included'], popular: false, imageKey: 'hollywoodSmile', link: '/dental' },
    { id: 3, categoryKey: 'plastic', category: 'Plastic Surgery', name: 'Liposuction 360 + BBL', subtitle: 'Full Midsection & Glute Sculpting', priceEur: '5,300', priceUsd: '6,200', highlights: ['360° midsection contouring', 'Own fat transfer to glutes', 'Hourglass silhouette', '10-night stay included'], popular: true, imageKey: 'bbl', link: '/plastic-surgery' },
    { id: 4, categoryKey: 'plastic', category: 'Plastic Surgery', name: 'Rhinoplasty', subtitle: 'Open · Closed · Ethnic · Revision', priceEur: '3,500', priceUsd: '4,000', highlights: ['3D digital planning', 'Ethnic preservation', 'Functional correction', '7-night stay included'], popular: false, imageKey: 'rhinoplasty', link: '/plastic-surgery' },
    { id: 5, categoryKey: 'dental', category: 'Dental', name: 'All-on-6 Implants', subtitle: 'Full Arch · Fixed · Permanent', priceEur: '6,200', priceUsd: '7,400', highlights: ['Fixed porcelain bridge', 'Day-1 immediate loading', 'Premium implant systems', '7-night stay included'], popular: true, imageKey: 'allOn6', link: '/dental' },
    { id: 6, categoryKey: 'plastic', category: 'Plastic Surgery', name: 'Facelift', subtitle: 'Deep Plane SMAS Technique', priceEur: '4,200', priceUsd: '5,000', highlights: ['Deep plane SMAS technique', 'Natural, non-operated look', 'Jawline & neck sculpting', '10-night stay included'], popular: false, imageKey: 'facelift', link: '/plastic-surgery' },
    { id: 7, categoryKey: 'plastic', category: 'Plastic Surgery', name: 'Breast Augmentation', subtitle: 'Motiva · Mentor Premium Implants', priceEur: '3,800', priceUsd: '4,500', highlights: ['Premium Motiva / Mentor', 'Dual-plane placement', 'Custom size selection', '7-night stay included'], popular: false, imageKey: 'breastAug', link: '/plastic-surgery' },
    { id: 8, categoryKey: 'hair', category: 'Hair Transplant', name: 'PRP & Exosome Therapy', subtitle: 'Non-Surgical Hair Revitalization', priceEur: '800', priceUsd: '950', highlights: ['Activates dormant follicles', 'Zero downtime', 'Scalp health protocol', 'Same-day treatment'], popular: false, imageKey: 'prp', link: '/hair-transplant' },
    { id: 9, categoryKey: 'complex', category: 'Complex', name: 'IVF & Genetic Screening', subtitle: 'PGD / PGS · EmbryoScope Technology', priceEur: 'Custom', priceUsd: 'Custom', highlights: ['EmbryoScope time-lapse', 'PGD/PGS genetic testing', 'Egg & embryo donation', 'Full cycle coordination'], popular: false, imageKey: 'complex', link: '/complex-treatments' },
  ],
  popular: 'Popular',
  learnMore: 'Learn more',
  doctors: {
    viewProfile: 'View Full Profile',
    meetAll: 'Meet All Doctors',
    list: [
      { slug: 'halil-erbis', name: 'Prof. Dr. Halil Erbiş', specialty: 'Organ Transplant & Hepatobiliary Surgery', affiliation: 'Istanbul University Faculty of Medicine', expertise: ['Kidney Transplant', 'Liver Transplant', 'Hepatobiliary Surgery'], stats: [{ num: '20+', label: 'Years Experience' }, { num: '2,400+', label: 'Transplants' }, { num: '1,200+', label: 'Citations' }], imageKey: 'doctorHalil' },
      { slug: 'senem-karabulut', name: 'Prof. Dr. Senem Karabulut', specialty: 'Medical Oncology Specialist', affiliation: 'Istanbul University — Cerrahpaşa', expertise: ['Immunotherapy', 'Targeted Smart Drugs', 'Cancer Follow-up'], stats: [{ num: '15+', label: 'Years in Oncology' }, { num: 'ESMO', label: 'Member' }, { num: 'MDT', label: 'Tumor Board Lead' }], imageKey: 'doctorSenem' },
      { slug: 'esra-kaytan-saglam', name: 'Prof. Dr. Esra Kaytan Sağlam', specialty: 'Radiation Oncology — Former Faculty Dean', affiliation: 'Istanbul University — İstanbul Faculty', expertise: ['CyberKnife Radiosurgery', 'TrueBeam STx', 'Precision Radiotherapy'], stats: [{ num: 'CyberKnife', label: 'Expert' }, { num: 'TrueBeam', label: 'STx' }, { num: 'Former', label: 'Dean' }], imageKey: 'doctorEsra' },
    ],
  },
};
