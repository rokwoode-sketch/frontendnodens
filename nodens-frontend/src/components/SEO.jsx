import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';

const BASE_URL = 'https://www.nodenscare.com';
import { siteImages } from '../data/siteImages';
const LOGO = siteImages.logo;
const PHONE = '+905546745516';
const EMAIL = 'info@nodenscare.com';
const ADDRESS = {
  streetAddress: 'Karat 34, Yenibosna Merkez, Kat 11',
  addressLocality: 'Bahçelievler',
  addressRegion: 'İstanbul',
  postalCode: '34100',
  addressCountry: 'TR',
};

// Hreflang map
const hreflangMap = {
  en: `${BASE_URL}/`,
  fr: `${BASE_URL}/fr/`,
  ar: `${BASE_URL}/ar/`,
  es: `${BASE_URL}/es/`,
};

// ── Schema generators ────────────────────────────────────────────────────────

function medicalOrganizationSchema(t) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalOrganization', 'LocalBusiness'],
    '@id': `${BASE_URL}/#organization`,
    name: 'NodensCare',
    alternateName: ['Nodens Care', 'NodénsCare'],
    url: BASE_URL,
    logo: { '@type': 'ImageObject', url: LOGO },
    image: LOGO,
    description: t.meta.description,
    telephone: PHONE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.0082',
      longitude: '28.9784',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    priceRange: '€€€',
    currenciesAccepted: 'EUR, USD, GBP',
    paymentAccepted: 'Bank Transfer, Credit Card',
    medicalSpecialty: [
      'PlasticSurgery',
      'Dentistry',
      'Dermatology',
      'Oncology',
      'Transplantation',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1247',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.instagram.com/nodenscare',
      'https://www.facebook.com/nodenscare',
      'https://www.linkedin.com/company/nodenscare',
      'https://www.youtube.com/@nodenscare',
      'https://www.tiktok.com/@nodenscare',
    ],
  };
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'NodensCare',
    description: 'Elite medical consultancy in Istanbul, Turkey. Hair transplant, dental, plastic surgery & complex treatments.',
    publisher: { '@id': `${BASE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?s={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en', 'fr', 'ar', 'es'],
  };
}

function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

function medicalProcedures() {
  const procedures = [
    { name: 'Hair Transplant Istanbul', type: 'SurgicalProcedure', bodyLocation: 'Scalp', price: '1500', currency: 'EUR', preparation: 'Remote clinical assessment, blood tests, candidacy verification' },
    { name: 'FUE Sapphire Hair Transplant', type: 'SurgicalProcedure', bodyLocation: 'Scalp', price: '1500', currency: 'EUR', preparation: 'Donor area assessment, graft count estimation' },
    { name: 'Hollywood Smile Istanbul', type: 'MedicalProcedure', bodyLocation: 'Teeth', price: '3200', currency: 'EUR', preparation: 'Digital smile design, shade selection' },
    { name: 'Dental Implants Turkey', type: 'SurgicalProcedure', bodyLocation: 'Jaw', price: '800', currency: 'EUR', preparation: 'Panoramic X-ray, bone density assessment' },
    { name: 'Rhinoplasty Istanbul', type: 'SurgicalProcedure', bodyLocation: 'Nose', price: '3500', currency: 'EUR', preparation: '3D digital planning, medical evaluation' },
    { name: '360 Liposuction BBL Istanbul', type: 'SurgicalProcedure', bodyLocation: 'Abdomen, Buttocks', price: '5300', currency: 'EUR', preparation: 'BMI assessment, fat mapping, blood tests' },
    { name: 'Facelift Istanbul', type: 'SurgicalProcedure', bodyLocation: 'Face', price: '1500', currency: 'EUR', preparation: 'Skin assessment, medical evaluation' },
    { name: 'All-on-6 Dental Implants Turkey', type: 'SurgicalProcedure', bodyLocation: 'Full Jaw', price: '6200', currency: 'EUR', preparation: 'Full mouth X-ray, bone assessment' },
    { name: 'Breast Augmentation Istanbul', type: 'SurgicalProcedure', bodyLocation: 'Chest', price: '3800', currency: 'EUR', preparation: 'Implant sizing, breast assessment' },
  ];

  return procedures.map((p) => ({
    '@context': 'https://schema.org',
    '@type': p.type,
    name: p.name,
    provider: { '@id': `${BASE_URL}/#organization` },
    location: {
      '@type': 'Place',
      name: 'Istanbul, Turkey',
      address: { '@type': 'PostalAddress', addressLocality: 'Istanbul', addressCountry: 'TR' },
    },
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: p.currency,
      availability: 'https://schema.org/InStock',
    },
    bodyLocation: p.bodyLocation,
    preparation: p.preparation,
    followup: '10-day mandatory clinical observation, daily monitoring, Fit-to-Fly clearance',
  }));
}

function physiciansSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Prof. Dr. Halil ERBIS',
      jobTitle: 'Professor of Organ Transplant & General Surgery',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      medicalSpecialty: 'Transplantation',
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Istanbul University Faculty of Medicine' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Prof. Dr. Senem Karabulut',
      jobTitle: 'Professor of Medical Oncology',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      medicalSpecialty: 'Oncology',
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Istanbul University — Cerrahpaşa' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Prof. Dr. Esra Kaytan Saglam',
      jobTitle: 'Professor of Radiation Oncology',
      worksFor: { '@id': `${BASE_URL}/#organization` },
      medicalSpecialty: 'RadiationTherapy',
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Istanbul University — İstanbul Faculty of Medicine' },
    },
  ];
}

function breadcrumbSchema(lang) {
  const base = lang === 'en' ? BASE_URL : `${BASE_URL}/${lang}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'NodensCare', item: base },
      { '@type': 'ListItem', position: 2, name: 'Hair Transplant Istanbul', item: `${base}/hair-transplant` },
      { '@type': 'ListItem', position: 3, name: 'Dental Treatments Turkey', item: `${base}/dental` },
      { '@type': 'ListItem', position: 4, name: 'Plastic Surgery Istanbul', item: `${base}/plastic-surgery` },
    ],
  };
}

function reviewsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'NodensCare',
    review: [
      { '@type': 'Review', author: { '@type': 'Person', name: 'Sarah Mitchell' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'NodensCare made the entire process seamless. My coordinator was available 24/7, and the Hollywood Smile results were absolutely life-changing.' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'James Okonkwo' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'NodensCare matched me with an incredible hair transplant surgeon. The 12-month FUE results have completely restored my confidence.' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Amira Al-Hassan' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'The professor who performed my rhinoplasty truly understood ethnic preservation. I am beyond happy with the natural outcome.' },
    ],
  };
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SEO() {
  const { lang, t } = useLanguage();

  const schemas = [
    medicalOrganizationSchema(t),
    websiteSchema(),
    faqSchema(t.faq.items),
    breadcrumbSchema(lang),
    reviewsSchema(),
    ...medicalProcedures(),
    ...physiciansSchema(),
  ];

  const canonicalUrl = lang === 'en' ? BASE_URL : `${BASE_URL}/${lang}/`;

  return (
    <Helmet>
      {/* Primary */}
      <html lang={t.lang} dir={t.dir} />
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <meta name="keywords" content={t.meta.keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="NodensCare" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang for multilingual SEO */}
      {Object.entries(hreflangMap).map(([code, url]) => (
        <link key={code} rel="alternate" hrefLang={code} href={url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={BASE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={t.meta.ogTitle} />
      <meta property="og:description" content={t.meta.ogDescription} />
      <meta property="og:image" content={LOGO} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="NodensCare" />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_TR' : lang === 'fr' ? 'fr_FR' : lang === 'es' ? 'es_ES' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nodenscare" />
      <meta name="twitter:title" content={t.meta.ogTitle} />
      <meta name="twitter:description" content={t.meta.ogDescription} />
      <meta name="twitter:image" content={LOGO} />

      {/* GEO meta tags */}
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Istanbul" />
      <meta name="geo.position" content="41.0082;28.9784" />
      <meta name="ICBM" content="41.0082, 28.9784" />

      {/* Medical / Health */}
      <meta name="medical.specialty" content="Plastic Surgery, Hair Transplant, Dental, Oncology, Transplant" />
      <meta name="medical.accreditation" content="JCI (Joint Commission International)" />

      {/* Verification placeholders */}
      <meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_VERIFICATION_CODE" />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://wa.me" />

      {/* Schema.org JSON-LD — all schemas */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}
