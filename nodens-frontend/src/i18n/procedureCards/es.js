import hair from './hair-es';
import plastic from './plastic-es';
import complex from './complex-es';

export default {
  dental: {
    sectionLabel: 'Nuestros Tratamientos Dentales',
    sectionH2: 'Atención Dental',
    sectionH2Accent: 'Integral',
    priceLabel: 'Precio Todo Incluido',
    packageIncludes: 'El Paquete Incluye:',
    requestQuote: 'Solicitar Presupuesto',
    ctaBottomDesc: 'Envíe sus fotos o radiografías dentales para una evaluación remota gratuita en 24 horas.',
    sendPhotos: 'Enviar Fotos Dentales',
    contactUs: 'Contáctanos',
    procedures: [
      { id: 'hollywood-smile', tag: 'Más Solicitado', title: 'Hollywood Smile', subtitle: 'Carillas E-max · Zirconia · Diseño Completo', price: '€3,200 / $3,800', description: 'Transformación estética completa de la sonrisa — generalmente 16–20 carillas de porcelana ultra-finas diseñadas para su rostro.', includes: ['Vista previa Digital Smile Design', '16–20 carillas E-max o zirconia', 'Contorno gingival si es necesario', 'Estancia 5 días en Estambul', 'Todos los traslados y alojamiento', 'Garantía de por vida en materiales'], faqs: [{ q: '¿Las carillas son permanentes?', a: 'Duran generalmente 10–20 años con el cuidado adecuado.' }, { q: '¿Se verá natural?', a: 'Nuestros prostodoncistas personalizan cada detalle con Digital Smile Design.' }] },
      { id: 'implants', tag: 'Solución Permanente', title: 'Implantes Dentales', subtitle: 'Individual · Múltiple · Arco Completo', price: 'Desde €800 / $950 por implante', description: 'Los implantes dentales son el estándar de oro para reemplazar dientes perdidos — tornillos de titanio que se fusionan con el hueso.', includes: ['Sistema premium (Nobel Biocare / Straumann)', 'Planificación 3D con TAC', 'Colocación quirúrgica y pilar de cicatrización', 'Corona de zirconia o E-max', 'Traslados y coordinador incluidos'], faqs: [{ q: '¿Cuánto dura el proceso?', a: 'Dos visitas: colocación del implante y corona final en 3–6 meses.' }, { q: '¿Tasa de éxito?', a: 'Más del 95% a 10 años con hueso sano.' }] },
      { id: 'zirconium', tag: 'Resistencia y Estética', title: 'Coronas de Zirconio', subtitle: 'Sin Metal · Apariencia Natural · Duraderas', price: '€200–350 / $240–420 por corona', description: 'Las coronas de zirconio ofrecen resistencia y estética sin metal — sin línea gris en las encías.', includes: ['Radiografía panorámica', 'Coincidencia digital de color', 'Corona monolítica o en capas', '3–5 días de plazo', 'Coronas temporales'], faqs: [{ q: '¿Cuánto duran las coronas de zirconio?', a: '15–25 años con el cuidado adecuado.' }] },
      { id: 'all-on-6', tag: 'Rehabilitación Completa', title: 'All-on-6 Implantes', subtitle: 'Arco · Puente Fijo · Dientes Permanentes', price: '€6,200 / $7,400 por arco', description: 'All-on-6 usa 6 implantes estratégicos que soportan un puente fijo de porcelana — reemplazo permanente de un arco completo.', includes: ['TAC 3D y planificación completa', '6 implantes de titanio premium', 'Puente temporal fijo inmediato', 'Puente final de zirconia', 'Estancia 7 días', 'Traslados y alojamiento'], faqs: [{ q: '¿All-on-4 vs All-on-6?', a: 'All-on-6 ofrece mejor distribución de carga y mayor estabilidad.' }, { q: '¿Dientes el día de la cirugía?', a: 'Sí — generalmente se coloca un puente temporal fijo el mismo día.' }] },
    ],
  },
  hair,
  plastic,
  complex,
  packages: [
    { id: 1, categoryKey: 'hair', category: 'Trasplante Capilar', name: 'Trasplante Capilar', subtitle: 'FUE Zafiro · Método DHI', priceEur: '1,500', priceUsd: '1,800', highlights: ['Resultados permanentes', '3,000–5,000 injertos', 'Línea capilar natural', '3 noches incluidas'], popular: true, imageKey: 'hair', link: '/hair-transplant' },
    { id: 2, categoryKey: 'dental', category: 'Dental', name: 'Hollywood Smile', subtitle: 'Carillas E-max · Zirconia', priceEur: '3,200', priceUsd: '3,800', highlights: ['20 carillas de porcelana', 'Vista previa digital', 'Sin metal, aspecto natural', '5 noches incluidas'], popular: false, imageKey: 'hollywoodSmile', link: '/dental' },
    { id: 3, categoryKey: 'plastic', category: 'Cirugía Plástica', name: 'Liposucción 360 + BBL', subtitle: 'Escultura Corporal Completa', priceEur: '5,300', priceUsd: '6,200', highlights: ['Contorno 360°', 'Transferencia de grasa', 'Silueta de reloj de arena', '10 noches incluidas'], popular: true, imageKey: 'bbl', link: '/plastic-surgery' },
    { id: 4, categoryKey: 'plastic', category: 'Cirugía Plástica', name: 'Rinoplastia', subtitle: 'Abierta · Cerrada · Étnica', priceEur: '3,500', priceUsd: '4,000', highlights: ['Planificación 3D', 'Preservación étnica', 'Corrección funcional', '7 noches incluidas'], popular: false, imageKey: 'rhinoplasty', link: '/plastic-surgery' },
    { id: 5, categoryKey: 'dental', category: 'Dental', name: 'All-on-6 Implantes', subtitle: 'Arco · Fijo · Permanente', priceEur: '6,200', priceUsd: '7,400', highlights: ['Puente fijo de porcelana', 'Carga inmediata Día 1', 'Sistemas premium', '7 noches incluidas'], popular: true, imageKey: 'allOn6', link: '/dental' },
    { id: 6, categoryKey: 'plastic', category: 'Cirugía Plástica', name: 'Lifting Facial', subtitle: 'Técnica Deep Plane SMAS', priceEur: '4,200', priceUsd: '5,000', highlights: ['Técnica deep plane', 'Aspecto natural', 'Escultura mandíbula y cuello', '10 noches incluidas'], popular: false, imageKey: 'facelift', link: '/plastic-surgery' },
    { id: 7, categoryKey: 'plastic', category: 'Cirugía Plástica', name: 'Aumento de Senos', subtitle: 'Implantes Motiva · Mentor', priceEur: '3,800', priceUsd: '4,500', highlights: ['Motiva / Mentor premium', 'Colocación dual-plane', 'Tamaño personalizado', '7 noches incluidas'], popular: false, imageKey: 'breastAug', link: '/plastic-surgery' },
    { id: 8, categoryKey: 'hair', category: 'Trasplante Capilar', name: 'PRP y Terapia Exosoma', subtitle: 'Revitalización No Quirúrgica', priceEur: '800', priceUsd: '950', highlights: ['Activa folículos dormidos', 'Sin tiempo de inactividad', 'Protocolo del cuero cabelludo', 'Tratamiento el mismo día'], popular: false, imageKey: 'prp', link: '/hair-transplant' },
    { id: 9, categoryKey: 'complex', category: 'Complejo', name: 'FIV y Cribado Genético', subtitle: 'PGD / PGS · EmbryoScope', priceEur: 'Custom', priceUsd: 'Custom', highlights: ['EmbryoScope time-lapse', 'Pruebas PGD/PGS', 'Donación de óvulos', 'Coordinación completa'], popular: false, imageKey: 'complex', link: '/complex-treatments' },
  ],
  popular: 'Popular',
  learnMore: 'Saber más',
  doctors: {
    viewProfile: 'Ver Perfil Completo',
    meetAll: 'Conocer Todos los Médicos',
    list: [
      { slug: 'halil-erbis', name: 'Prof. Dr. Halil Erbiş', specialty: 'Trasplante de Órganos y Cirugía Hepatobiliar', affiliation: 'Universidad de Estambul', expertise: ['Trasplante de Riñón', 'Trasplante de Hígado', 'Cirugía Hepatobiliar'], stats: [{ num: '20+', label: 'Años de Experiencia' }, { num: '2,400+', label: 'Trasplantes' }, { num: '1,200+', label: 'Citas' }], imageKey: 'doctorHalil' },
      { slug: 'senem-karabulut', name: 'Prof. Dr. Senem Karabulut', specialty: 'Especialista en Oncología Médica', affiliation: 'Universidad de Estambul — Cerrahpaşa', expertise: ['Inmunoterapia', 'Medicamentos Inteligentes', 'Seguimiento Oncológico'], stats: [{ num: '15+', label: 'Años en Oncología' }, { num: 'ESMO', label: 'Miembro' }, { num: 'MDT', label: 'Tumor Board' }], imageKey: 'doctorSenem' },
      { slug: 'esra-kaytan-saglam', name: 'Prof. Dr. Esra Kaytan Sağlam', specialty: 'Oncología Radioterápica — Ex-Decana', affiliation: 'Universidad de Estambul', expertise: ['CyberKnife', 'TrueBeam STx', 'Radioterapia de Precisión'], stats: [{ num: 'CyberKnife', label: 'Experta' }, { num: 'TrueBeam', label: 'STx' }, { num: 'Ex', label: 'Decana' }], imageKey: 'doctorEsra' },
    ],
  },
};
