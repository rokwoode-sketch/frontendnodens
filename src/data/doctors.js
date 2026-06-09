import { siteImages } from './siteImages';

export const doctors = [
  {
    slug: 'halil-erbis',
    imageKey: 'doctorHalil',
    image: siteImages.doctorHalil,
    translations: {
      en: {
        name: 'Prof. Dr. Halil Erbiş',
        title: 'Organ Transplant & Hepatobiliary Surgery',
        affiliation: 'Istanbul University Faculty of Medicine · Biruni University Hospital',
        intro: 'Prof. Dr. Halil Erbiş is one of Turkey\'s most experienced transplant surgeons, with over 2,400 successful kidney and liver transplants and 20+ years of academic surgical practice at Istanbul University.',
        sections: [
          { heading: 'Areas of Expertise', items: ['Living-donor kidney transplantation', 'Living-donor and cadaveric liver transplantation', 'Hepatobiliary surgery and complex liver resections', 'Laparoscopic donor nephrectomy', 'Re-transplantation and pediatric liver transplants'] },
          { heading: '48-Hour Evaluation Protocol', body: 'Prof. Dr. Erbiş leads a rapid 48-hour pre-transplant evaluation at Biruni University Hospital. From initial blood work and tissue typing to advanced MRI/CT imaging and cardiac assessment, a Multidisciplinary Council — including Gastroenterology, Anesthesia, and Nephrology — reviews every case before any commitment is made.' },
          { heading: 'Hospital Stay', items: ['Kidney Transplant: 5-day hospital stay', 'Liver Transplant: 7–10 day hospital stay', 'Full post-operative immunosuppression protocol', 'International continuity-of-care documentation for your home team'] },
        ],
        stats: [{ num: '20+', label: 'Years Experience' }, { num: '2,400+', label: 'Transplants' }, { num: '1,200+', label: 'Citations' }],
        expertise: ['Kidney Transplant', 'Liver Transplant', 'Hepatobiliary Surgery'],
      },
      fr: {
        name: 'Prof. Dr. Halil Erbiş',
        title: 'Transplantation d\'Organes & Chirurgie Hépatobiliaire',
        affiliation: 'Université d\'Istanbul · Hôpital Universitaire Biruni',
        intro: 'Le Prof. Dr. Halil Erbiş compte parmi les chirurgiens de transplantation les plus expérimentés de Turquie, avec plus de 2 400 greffes réussies et plus de 20 ans de pratique universitaire.',
        sections: [
          { heading: 'Domaines d\'Expertise', items: ['Greffe de rein du donneur vivant', 'Greffe de foie', 'Chirurgie hépatobiliaire', 'Néphrectomie laparoscopique du donneur', 'Re-transplantation et greffes pédiatriques'] },
          { heading: 'Protocole d\'Évaluation 48 Heures', body: 'Évaluation complète en 48 heures : bilan sanguin, imagerie IRM/CT, évaluation cardiaque et revue par un conseil multidisciplinaire avant toute décision.' },
          { heading: 'Séjour Hospitalier', items: ['Greffe de rein : 5 jours', 'Greffe de foie : 7–10 jours', 'Protocole d\'immunosuppression complet', 'Documentation de continuité des soins internationale'] },
        ],
        stats: [{ num: '20+', label: 'Ans d\'Expérience' }, { num: '2 400+', label: 'Transplantations' }, { num: '1 200+', label: 'Citations' }],
        expertise: ['Greffe de Rein', 'Greffe de Foie', 'Chirurgie Hépatobiliaire'],
      },
      ar: {
        name: 'أ.د. خليل إربيش',
        title: 'زراعة الأعضاء والجراحة الكبدية',
        affiliation: 'جامعة إسطنبول · مستشفى بيروني الجامعي',
        intro: 'أ.د. خليل إربيش من أبرز جراحي زراعة الأعضاء في تركيا، مع أكثر من 2400 زراعة ناجحة و20 عاماً من الخبرة الأكاديمية.',
        sections: [
          { heading: 'مجالات الخبرة', items: ['زراعة الكلى من متبرع حي', 'زراعة الكبد', 'جراحة الكبد والقنوات الصفراوية', 'استئصال الكلى بالمنظار للمتبرع', 'إعادة الزراعة وزراعة الكبد للأطفال'] },
          { heading: 'بروتوكول التقييم 48 ساعة', body: 'تقييم شامل خلال 48 ساعة يشمل تحاليل الدم والتصوير بالرنين والأشعة المقطعية وتقييم القلب ومراجعة مجلس متعدد التخصصات.' },
          { heading: 'مدة الإقامة', items: ['زراعة الكلى: 5 أيام', 'زراعة الكبد: 7–10 أيام', 'بروتوكول كامل للمثبطات المناعية', 'وثائق متابعة للفريق الطبي في بلدك'] },
        ],
        stats: [{ num: '+20', label: 'سنة خبرة' }, { num: '+2,400', label: 'زراعة' }, { num: '+1,200', label: 'استشهاد' }],
        expertise: ['زراعة الكلى', 'زراعة الكبد', 'جراحة الكبد'],
      },
      es: {
        name: 'Prof. Dr. Halil Erbiş',
        title: 'Trasplante de Órganos y Cirugía Hepatobiliar',
        affiliation: 'Universidad de Estambul · Hospital Universitario Biruni',
        intro: 'El Prof. Dr. Halil Erbiş es uno de los cirujanos de trasplante más experimentados de Turquía, con más de 2.400 trasplantes exitosos y 20+ años de práctica académica.',
        sections: [
          { heading: 'Áreas de Especialización', items: ['Trasplante de riñón de donante vivo', 'Trasplante de hígado', 'Cirugía hepatobiliar', 'Nefrectomía laparoscópica del donante', 'Re-trasplante y trasplante hepático pediátrico'] },
          { heading: 'Protocolo de Evaluación 48 Horas', body: 'Evaluación completa en 48 horas: análisis de sangre, resonancia/TC, evaluación cardíaca y revisión por consejo multidisciplinario antes de cualquier decisión.' },
          { heading: 'Estancia Hospitalaria', items: ['Trasplante de riñón: 5 días', 'Trasplante de hígado: 7–10 días', 'Protocolo completo de inmunosupresión', 'Documentación de continuidad de cuidados internacional'] },
        ],
        stats: [{ num: '20+', label: 'Años de Experiencia' }, { num: '2,400+', label: 'Trasplantes' }, { num: '1,200+', label: 'Citas' }],
        expertise: ['Trasplante de Riñón', 'Trasplante de Hígado', 'Cirugía Hepatobiliar'],
      },
    },
  },
  {
    slug: 'senem-karabulut',
    imageKey: 'doctorSenem',
    image: siteImages.doctorSenem,
    translations: {
      en: {
        name: 'Prof. Dr. Senem Karabulut',
        title: 'Medical Oncology Specialist',
        affiliation: 'Istanbul University — Cerrahpaşa · Biruni University Hospital',
        intro: 'Prof. Dr. Senem Karabulut is a leading medical oncologist at Biruni University Hospital, specialising in immunotherapy, targeted smart drugs, and multidisciplinary cancer care integrated with advanced diagnostic imaging.',
        sections: [
          { heading: 'Areas of Expertise', items: ['Medical oncology and systemic cancer treatment', 'Immunotherapy and checkpoint inhibitors', 'Targeted therapy based on molecular tumour profiles', 'Breast cancer early diagnosis and screening protocols', 'Multidisciplinary Tumor Board leadership'] },
          { heading: 'Early Diagnosis & Screening', body: 'Prof. Dr. Karabulut emphasises the critical importance of early diagnosis — particularly in breast cancer, where treatment outcomes are dramatically better when detected at early stages. She leads strategic screening protocols for women aged 40 and over, integrating imaging and medical oncology for rapid diagnosis.' },
          { heading: 'Personalised Treatment Approach', body: 'Every patient receives a treatment plan based on individual molecular profiling. Targeted therapies and immunotherapy are selected according to tumour genetics, ensuring fewer side effects and higher success rates than traditional chemotherapy in qualifying cases.' },
        ],
        stats: [{ num: '15+', label: 'Years in Oncology' }, { num: 'ESMO', label: 'Member' }, { num: 'MDT', label: 'Tumor Board Lead' }],
        expertise: ['Immunotherapy', 'Targeted Smart Drugs', 'Cancer Follow-up'],
      },
      fr: {
        name: 'Prof. Dr. Senem Karabulut',
        title: 'Spécialiste en Oncologie Médicale',
        affiliation: 'Université d\'Istanbul — Cerrahpaşa · Hôpital Biruni',
        intro: 'Le Prof. Dr. Senem Karabulut est une oncologue médicale de premier plan, spécialisée en immunothérapie et traitements ciblés intelligents.',
        sections: [
          { heading: 'Domaines d\'Expertise', items: ['Oncologie médicale', 'Immunothérapie', 'Thérapies ciblées moléculaires', 'Dépistage précoce du cancer du sein', 'Direction du Tumor Board'] },
          { heading: 'Diagnostic Précoce', body: 'Importance cruciale du diagnostic précoce — protocoles de dépistage pour les femmes de 40 ans et plus, intégrant imagerie et oncologie médicale.' },
          { heading: 'Traitement Personnalisé', body: 'Plan de traitement basé sur le profilage moléculaire individuel — immunothérapie et thérapies ciblées selon la génétique tumorale.' },
        ],
        stats: [{ num: '15+', label: 'Ans en Oncologie' }, { num: 'ESMO', label: 'Membre' }, { num: 'MDT', label: 'Tumor Board' }],
        expertise: ['Immunothérapie', 'Médicaments Ciblés', 'Suivi Cancer'],
      },
      ar: {
        name: 'أ.د. سنيم كارابولوت',
        title: 'أخصائية الأورام الطبية',
        affiliation: 'جامعة إسطنبول — جراح باشا · مستشفى بيروني',
        intro: 'أ.د. سنيم كارابولوت من أبرز أخصائيات الأورام الطبية، متخصصة في العلاج المناعي والأدوية الذكية المستهدفة.',
        sections: [
          { heading: 'مجالات الخبرة', items: ['علم الأورام الطبي', 'العلاج المناعي', 'العلاجات المستهدفة جزيئياً', 'التشخيص المبكر لسرطان الثدي', 'قيادة مجلس الأورام'] },
          { heading: 'التشخيص المبكر', body: 'تؤكد على أهمية التشخيص المبكر — بروتوكولات فحص للنساء فوق 40 عاماً مع تكامل التصوير والأورام.' },
          { heading: 'العلاج الشخصي', body: 'خطة علاج مبنية على التحليل الجزيئي الفردي — علاج مناعي وعلاجات مستهدفة حسب جينات الورم.' },
        ],
        stats: [{ num: '+15', label: 'سنة في الأورام' }, { num: 'ESMO', label: 'عضو' }, { num: 'MDT', label: 'رئيسة الفريق' }],
        expertise: ['العلاج المناعي', 'الأدوية الذكية', 'متابعة السرطان'],
      },
      es: {
        name: 'Prof. Dr. Senem Karabulut',
        title: 'Especialista en Oncología Médica',
        affiliation: 'Universidad de Estambul — Cerrahpaşa · Hospital Biruni',
        intro: 'La Prof. Dr. Senem Karabulut es una oncóloga médica líder, especializada en inmunoterapia y fármacos inteligentes dirigidos.',
        sections: [
          { heading: 'Áreas de Especialización', items: ['Oncología médica', 'Inmunoterapia', 'Terapias dirigidas moleculares', 'Diagnóstico temprano de cáncer de mama', 'Liderazgo del Tumor Board'] },
          { heading: 'Diagnóstico Temprano', body: 'Énfasis en diagnóstico temprano — protocolos de cribado para mujeres de 40 años o más, integrando imagen y oncología médica.' },
          { heading: 'Tratamiento Personalizado', body: 'Plan basado en perfilado molecular individual — inmunoterapia y terapias dirigidas según genética tumoral.' },
        ],
        stats: [{ num: '15+', label: 'Años en Oncología' }, { num: 'ESMO', label: 'Miembro' }, { num: 'MDT', label: 'Tumor Board' }],
        expertise: ['Inmunoterapia', 'Medicamentos Inteligentes', 'Seguimiento Oncológico'],
      },
    },
  },
  {
    slug: 'esra-kaytan-saglam',
    imageKey: 'doctorEsra',
    image: siteImages.doctorEsra,
    translations: {
      en: {
        name: 'Prof. Dr. Esra Kaytan Sağlam',
        title: 'Radiation Oncology — Former Faculty Dean',
        affiliation: 'Istanbul University — İstanbul Faculty · Biruni University Hospital',
        intro: 'Prof. Dr. Esra Kaytan Sağlam is a leading radiation oncologist and former Faculty Dean at Istanbul University, internationally recognised for CyberKnife radiosurgery and TrueBeam STx precision radiotherapy.',
        sections: [
          { heading: 'Areas of Expertise', items: ['CyberKnife robotic radiosurgery', 'TrueBeam STx precision radiotherapy', 'Stereotactic body radiotherapy (SBRT)', '3D conformal and intensity-modulated radiotherapy (IMRT)', 'Multidisciplinary cancer treatment planning'] },
          { heading: 'Advanced Radiotherapy Planning', body: 'Before treatment begins, high-resolution CT imaging creates a 3D map of the target area. Virtual simulation ensures maximum radiation dose to the tumour while preserving healthy surrounding tissues — a rigorous planning process that defines outcomes in modern oncology.' },
          { heading: 'Treatment Delivery', items: ['Targeted Accuracy: virtual simulation for tumour-focused dosing', 'Real-time Monitoring: specialised imaging verifies positioning during each session', 'Efficiency: most modern sessions completed in approximately 10 minutes', 'Comfortable, rapid patient experience with minimal disruption'] },
        ],
        stats: [{ num: 'CyberKnife', label: 'Expert' }, { num: 'TrueBeam', label: 'STx' }, { num: 'Former', label: 'Dean' }],
        expertise: ['CyberKnife Radiosurgery', 'TrueBeam STx', 'Precision Radiotherapy'],
      },
      fr: {
        name: 'Prof. Dr. Esra Kaytan Sağlam',
        title: 'Oncologie Radiothérapique — Ex-Doyenne',
        affiliation: 'Université d\'Istanbul · Hôpital Biruni',
        intro: 'Le Prof. Dr. Esra Kaytan Sağlam est une radiothérapeute de premier plan et ex-doyenne de la Faculté d\'Istanbul, reconnue internationalement pour CyberKnife et TrueBeam STx.',
        sections: [
          { heading: 'Domaines d\'Expertise', items: ['Radiosurgery CyberKnife', 'Radiothérapie TrueBeam STx', 'Radiothérapie stéréotaxique (SBRT)', 'Radiothérapie 3D et IMRT', 'Planification multidisciplinaire'] },
          { heading: 'Planification Avancée', body: 'Imagerie CT haute résolution pour une cartographie 3D précise. Simulation virtuelle pour maximiser la dose sur la tumeur tout en préservant les tissus sains.' },
          { heading: 'Déroulement du Traitement', items: ['Précision ciblée par simulation virtuelle', 'Surveillance en temps réel pendant la séance', 'Séances d\'environ 10 minutes', 'Expérience patient confortable et rapide'] },
        ],
        stats: [{ num: 'CyberKnife', label: 'Expert' }, { num: 'TrueBeam', label: 'STx' }, { num: 'Ex', label: 'Doyenne' }],
        expertise: ['CyberKnife', 'TrueBeam STx', 'Radiothérapie de Précision'],
      },
      ar: {
        name: 'أ.د. إسراء كايتان صاغلام',
        title: 'الأورام الإشعاعية — عميدة سابقة',
        affiliation: 'جامعة إسطنبول · مستشفى بيروني',
        intro: 'أ.د. إسراء كايتان صاغلام من أبرز أخصائيات العلاج الإشعاعي وعميدة سابقة لكلية إسطنبول، معترف بها دولياً في CyberKnife وTrueBeam STx.',
        sections: [
          { heading: 'مجالات الخبرة', items: ['جراحة CyberKnife الإشعاعية', 'العلاج الإشعاعي TrueBeam STx', 'العلاج الإشعاعي التجسيمي', 'العلاج الإشعاعي ثلاثي الأبعاد وIMRT', 'تخطيط علاجي متعدد التخصصات'] },
          { heading: 'التخطيط المتقدم', body: 'تصوير مقطعي عالي الدقة لرسم خريطة ثلاثية الأبعاد. محاكاة افتراضية لتوجيه الجرعة نحو الورم مع حماية الأنسجة السليمة.' },
          { heading: 'تقديم العلاج', items: ['دقة مستهدفة عبر المحاكاة الافتراضية', 'مراقبة فورية أثناء الجلسة', 'جلسات حوالي 10 دقائق', 'تجربة مريحة وسريعة'] },
        ],
        stats: [{ num: 'CyberKnife', label: 'خبيرة' }, { num: 'TrueBeam', label: 'STx' }, { num: 'سابقة', label: 'عميدة' }],
        expertise: ['CyberKnife', 'TrueBeam', 'علاج إشعاعي دقيق'],
      },
      es: {
        name: 'Prof. Dr. Esra Kaytan Sağlam',
        title: 'Oncología Radioterápica — Ex-Decana',
        affiliation: 'Universidad de Estambul · Hospital Biruni',
        intro: 'La Prof. Dr. Esra Kaytan Sağlam es una radioterapeuta líder y ex-decana de la Facultad de Estambul, reconocida internacionalmente por CyberKnife y TrueBeam STx.',
        sections: [
          { heading: 'Áreas de Especialización', items: ['Radiocirugía CyberKnife', 'Radioterapia TrueBeam STx', 'Radioterapia estereotáxica (SBRT)', 'Radioterapia 3D e IMRT', 'Planificación multidisciplinaria'] },
          { heading: 'Planificación Avanzada', body: 'Imagen CT de alta resolución para mapeo 3D. Simulación virtual para maximizar la dosis al tumor preservando tejidos sanos.' },
          { heading: 'Entrega del Tratamiento', items: ['Precisión dirigida por simulación virtual', 'Monitoreo en tiempo real durante la sesión', 'Sesiones de aproximadamente 10 minutos', 'Experiencia cómoda y rápida'] },
        ],
        stats: [{ num: 'CyberKnife', label: 'Experta' }, { num: 'TrueBeam', label: 'STx' }, { num: 'Ex', label: 'Decana' }],
        expertise: ['CyberKnife', 'TrueBeam STx', 'Radioterapia de Precisión'],
      },
    },
  },
];

export function getDoctor(slug) {
  return doctors.find((d) => d.slug === slug);
}
