import hair from './hair-fr';
import plastic from './plastic-fr';
import complex from './complex-fr';

export default {
  dental: {
    sectionLabel: 'Nos Soins Dentaires',
    sectionH2: 'Soins Dentaires',
    sectionH2Accent: 'Complets',
    priceLabel: 'Prix Tout Compris',
    packageIncludes: 'Le Forfait Comprend :',
    requestQuote: 'Demander un Devis',
    ctaBottomDesc: 'Envoyez vos photos ou radiographies dentaires pour une évaluation gratuite à distance.',
    sendPhotos: 'Envoyer des Photos',
    contactUs: 'Nous Contacter',
    procedures: [
      { id: 'hollywood-smile', tag: 'Le Plus Demandé', title: 'Hollywood Smile', subtitle: 'Facettes E-max · Zirconia · Design Complet', price: '3 200 € / 3 800 $', description: 'Transformation esthétique complète du sourire — généralement 16 à 20 facettes en porcelaine ultra-fines adaptées à votre visage.', includes: ['Aperçu Digital Smile Design', '16–20 facettes E-max ou zirconia', 'Contouring gingival si nécessaire', 'Séjour 5 jours à Istanbul', 'Tous les transferts et hébergement', 'Garantie à vie sur les matériaux'], faqs: [{ q: 'Les facettes sont-elles permanentes ?', a: 'Les facettes en porcelaine durent généralement 10 à 20 ans avec des soins appropriés.' }, { q: 'Le résultat sera-t-il naturel ?', a: 'Nos prosthodontistes personnalisent chaque aspect via le Digital Smile Design.' }] },
      { id: 'implants', tag: 'Solution Permanente', title: 'Implants Dentaires', subtitle: 'Simple · Multiple · Arcade Complète', price: 'À partir de 800 € / 950 $ par implant', description: 'Les implants dentaires sont la référence pour remplacer les dents manquantes — des pivots en titane qui fusionnent avec l\'os.', includes: ['Système premium (Nobel Biocare / Straumann)', 'Planification 3D par scanner', 'Pose chirurgicale et pilier de cicatrisation', 'Couronne zirconia ou E-max', 'Transferts et coordinateur inclus'], faqs: [{ q: 'Combien de temps dure le processus ?', a: 'Deux visites en général : pose de l\'implant, puis couronne finale après 3 à 6 mois.' }, { q: 'Quel taux de réussite ?', a: 'Plus de 95 % à 10 ans avec une bonne hygiène et un os sain.' }] },
      { id: 'zirconium', tag: 'Solidité & Esthétique', title: 'Couronnes Zirconium', subtitle: 'Sans Métal · Aspect Naturel · Durable', price: '200–350 € / 240–420 $ par couronne', description: 'Les couronnes en zirconium offrent solidité et esthétique sans métal — pas de ligne grise au niveau des gencives.', includes: ['Radiographie panoramique', 'Correspondance numérique des teintes', 'Couronne monolithique ou stratifiée', 'Délai 3–5 jours', 'Couronnes provisoires'], faqs: [{ q: 'Durée de vie des couronnes zirconia ?', a: '15 à 25 ans avec des soins appropriés.' }] },
      { id: 'all-on-6', tag: 'Réhabilitation Complète', title: 'All-on-6 Implants', subtitle: 'Arcade · Bridge Fixe · Dents Permanentes', price: '6 200 € / 7 400 $ par arcade', description: 'All-on-6 utilise 6 implants stratégiques supportant un bridge fixe en porcelaine — remplacement permanent d\'une arcade complète.', includes: ['Scanner 3D et planification', '6 implants titane premium', 'Bridge temporaire fixe immédiat', 'Bridge final zirconia ou E-max', 'Séjour 7 jours', 'Transferts et hébergement'], faqs: [{ q: 'All-on-4 vs All-on-6 ?', a: 'All-on-6 offre une meilleure répartition des charges et plus de stabilité.' }, { q: 'Dents le jour de l\'opération ?', a: 'Oui — un bridge temporaire fixe est généralement posé le jour même.' }] },
    ],
  },
  hair,
  plastic,
  complex,
  packages: [
    { id: 1, categoryKey: 'hair', category: 'Greffe de Cheveux', name: 'Greffe de Cheveux', subtitle: 'FUE Saphir · Méthode DHI', priceEur: '1 500', priceUsd: '1 800', highlights: ['Résultats permanents', '3 000–5 000 greffons', 'Ligne capillaire naturelle', '3 nuits incluses'], popular: true, imageKey: 'hair', link: '/hair-transplant' },
    { id: 2, categoryKey: 'dental', category: 'Dentaire', name: 'Hollywood Smile', subtitle: 'Facettes E-max · Zirconia', priceEur: '3 200', priceUsd: '3 800', highlights: ['20 facettes porcelaine', 'Aperçu Digital Smile Design', 'Sans métal, aspect naturel', '5 nuits incluses'], popular: false, imageKey: 'hollywoodSmile', link: '/dental' },
    { id: 3, categoryKey: 'plastic', category: 'Chirurgie Esthétique', name: 'Liposuccion 360 + BBL', subtitle: 'Sculpture Complète', priceEur: '5 300', priceUsd: '6 200', highlights: ['Contour 360°', 'Transfert de graisse aux fesses', 'Silhouette sablier', '10 nuits incluses'], popular: true, imageKey: 'bbl', link: '/plastic-surgery' },
    { id: 4, categoryKey: 'plastic', category: 'Chirurgie Esthétique', name: 'Rhinoplastie', subtitle: 'Ouverte · Fermée · Ethnique', priceEur: '3 500', priceUsd: '4 000', highlights: ['Planification 3D', 'Préservation ethnique', 'Correction fonctionnelle', '7 nuits incluses'], popular: false, imageKey: 'rhinoplasty', link: '/plastic-surgery' },
    { id: 5, categoryKey: 'dental', category: 'Dentaire', name: 'All-on-6 Implants', subtitle: 'Arcade · Fixe · Permanent', priceEur: '6 200', priceUsd: '7 400', highlights: ['Bridge porcelaine fixe', 'Chargement immédiat J1', 'Systèmes premium', '7 nuits incluses'], popular: true, imageKey: 'allOn6', link: '/dental' },
    { id: 6, categoryKey: 'plastic', category: 'Chirurgie Esthétique', name: 'Lifting du Visage', subtitle: 'Technique Deep Plane SMAS', priceEur: '4 200', priceUsd: '5 000', highlights: ['Technique deep plane', 'Aspect naturel', 'Sculpture mâchoire et cou', '10 nuits incluses'], popular: false, imageKey: 'facelift', link: '/plastic-surgery' },
    { id: 7, categoryKey: 'plastic', category: 'Chirurgie Esthétique', name: 'Augmentation Mammaire', subtitle: 'Implants Motiva · Mentor', priceEur: '3 800', priceUsd: '4 500', highlights: ['Motiva / Mentor premium', 'Placement dual-plane', 'Taille personnalisée', '7 nuits incluses'], popular: false, imageKey: 'breastAug', link: '/plastic-surgery' },
    { id: 8, categoryKey: 'hair', category: 'Greffe de Cheveux', name: 'PRP & Thérapie Exosome', subtitle: 'Revitalisation Non Chirurgicale', priceEur: '800', priceUsd: '950', highlights: ['Active les follicules dormants', 'Zéro temps d\'arrêt', 'Protocole cuir chevelu', 'Traitement le jour même'], popular: false, imageKey: 'prp', link: '/hair-transplant' },
    { id: 9, categoryKey: 'complex', category: 'Complexe', name: 'FIV & Dépistage Génétique', subtitle: 'PGD / PGS · EmbryoScope', priceEur: 'Custom', priceUsd: 'Custom', highlights: ['EmbryoScope time-lapse', 'Tests PGD/PGS', 'Don d\'ovocytes/embryons', 'Coordination complète'], popular: false, imageKey: 'complex', link: '/complex-treatments' },
  ],
  popular: 'Populaire',
  learnMore: 'En savoir plus',
  doctors: {
    viewProfile: 'Voir le Profil',
    meetAll: 'Tous nos Médecins',
    list: [
      { slug: 'halil-erbis', name: 'Prof. Dr. Halil Erbiş', specialty: 'Transplantation & Chirurgie Hépatobiliaire', affiliation: 'Université d\'Istanbul', expertise: ['Greffe de Rein', 'Greffe de Foie', 'Chirurgie Hépatobiliaire'], stats: [{ num: '20+', label: 'Ans d\'Expérience' }, { num: '2 400+', label: 'Transplantations' }, { num: '1 200+', label: 'Citations' }], imageKey: 'doctorHalil' },
      { slug: 'senem-karabulut', name: 'Prof. Dr. Senem Karabulut', specialty: 'Spécialiste en Oncologie Médicale', affiliation: 'Université d\'Istanbul — Cerrahpaşa', expertise: ['Immunothérapie', 'Médicaments Ciblés', 'Suivi Cancer'], stats: [{ num: '15+', label: 'Ans en Oncologie' }, { num: 'ESMO', label: 'Membre' }, { num: 'MDT', label: 'Tumor Board' }], imageKey: 'doctorSenem' },
      { slug: 'esra-kaytan-saglam', name: 'Prof. Dr. Esra Kaytan Sağlam', specialty: 'Oncologie Radiothérapique — Ex-Doyenne', affiliation: 'Université d\'Istanbul', expertise: ['CyberKnife', 'TrueBeam STx', 'Radiothérapie de Précision'], stats: [{ num: 'CyberKnife', label: 'Expert' }, { num: 'TrueBeam', label: 'STx' }, { num: 'Ex', label: 'Doyenne' }], imageKey: 'doctorEsra' },
    ],
  },
};
