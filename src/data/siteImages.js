// Exact imagery scraped from nodenscare.com pages (Wix CDN)
function wix(id, file, w = 688, h = 688) {
  const f = file || id;
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/${encodeURIComponent(f)}`;
}

function wixFit(id, w = 928, h = 928) {
  return `https://static.wixstatic.com/media/${id}/v1/fit/w_${w},h_${h},q_90,enc_avif,quality_auto/${id}`;
}

function wixLogo(id, w = 140, h = 44) {
  return `https://static.wixstatic.com/media/${id}/v1/fit/w_${w},h_${h},q_90,enc_avif,quality_auto/${id}`;
}

export const siteImages = {
  // Logo — nodenscare.com uses 80030384 (Untitled design(11).png), NOT a296d25f
  logo: wixLogo('aac3c1_800303847ad3444fbec76b98ed1485b5~mv2.png', 160, 48),
  hero: wixFit('aac3c1_ee988dab13854acc9d8b55c7bab546e2~mv2.jpg', 600, 700),

  // Homepage Before & After gallery (exact 6)
  hollywoodSmile: wix('aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg'),
  hair: wix('aac3c1_080544bca38144268b976126b47eb86f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19.jpeg'),
  bbl: wix('aac3c1_335c719c5c8c4c09a6bfc9f7fff74807~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(2).jpeg'),
  rhinoplasty: wix('aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(3).jpeg'),
  allOn6: wix('aac3c1_12121e78ae72487bb61222ddf5485a99~mv2.png', 'Untitled design(14).png'),
  facelift: wix('aac3c1_0744594d63f8468fa39132890eaf98ab~mv2.jpg', 'WhatsApp Image 2026-03-04 at 02_47_edited.jpg'),

  // Hair transplant page — each technique has its own image (nodenscare.com/hair-transplant)
  hairFue: wixFit('aac3c1_301191de26b84bb2a54fe43cd87a4a1a~mv2.jpg', 700, 500),
  hairDhi: wixFit('aac3c1_20d6203a9a9b433683f0d785848d3ebb~mv2.png', 700, 500),
  hairPrp: wixFit('aac3c1_445a8d05e5aa49f28ebe6566e98980f4~mv2.jpg', 700, 500),
  hairExosome: wixFit('aac3c1_91cf5c488b4e4e2c88155af1e0edfe25~mv2.jpg', 700, 500),

  // Plastic surgery page — exact per-procedure images (nodenscare.com/plastic-surgery)
  rhinoplastyProc: wix('aac3c1_f08e11645b154c0daadcca5ca952a834~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19(5).jpeg', 700, 500),
  liposuction: wix('aac3c1_c9952fd332ff4e7d8f5ef2fa63672e7f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(4).jpeg', 700, 500),
  bblProc: wix('aac3c1_d28f2ac151f44d83a550ba53a96542e5~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_22(1).jpeg', 700, 500),
  breastAug: wix('aac3c1_5d511981d9864e249c732992fee8373f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(3).jpeg', 700, 500),
  blepharoplasty: wixFit('aac3c1_c50ce7b7b708438f8cfc3e1cdf8f5cec~mv2.jpg', 700, 500),
  abdominoplasty: wix('aac3c1_8bdb785c42f1429e841f6183bbd3bec9~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(1).jpeg', 700, 500),
  mommyMakeover: wixFit('aac3c1_92a7622f7bac4299805e136f6504fe38~mv2.jpg', 700, 500),

  // Dental & other patient imagery
  zirconium: wix('aac3c1_03fa67fd873549bc872507c16a14400d~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(3).jpeg'),
  dentalImplants: wix('aac3c1_770098405f7e438f867723c05af613d8~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(2).jpeg'),
  armLift: wixFit('aac3c1_638a1b90042a4e50ac153602c67b3e1a~mv2.jpg', 688, 688),
  prp: wix('aac3c1_16370d695c8c4568bb725fe3fb1069be~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(1).jpeg'),

  // Page heroes — first content image on each nodenscare.com guide page
  dental: wix('aac3c1_f564ac50443b462da0806ef554090d3d~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg', 1200, 600),
  plastic: wix('aac3c1_f08e11645b154c0daadcca5ca952a834~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19(5).jpeg', 1200, 600),
  hairHero: wixFit('aac3c1_301191de26b84bb2a54fe43cd87a4a1a~mv2.jpg', 1200, 600),
  complex: wixFit('aac3c1_648bb774fa88468e8b63a1edc46434c9~mv2.jpg', 1200, 600),

  // Complex treatments — per section (nodenscare.com/complex-treatments, cancer, ivf pages)
  cancerTreatment: wixFit('aac3c1_7dce11b25c7a4e0a9cce538d908f5645~mv2.jpg', 700, 500),
  transplantTreatment: wixFit('aac3c1_648bb774fa88468e8b63a1edc46434c9~mv2.jpg', 700, 500),
  ivfTreatment: wixFit('aac3c1_6f4d778d5ce04a9086043dc593b59400~mv2.jpg', 700, 500),
  ivfLab: wixFit('aac3c1_cd02429d4a4949d787d1ecbffeb6819d~mv2.jpg', 700, 500),

  // Doctor portraits — nodenscare.com/prof-dr-esra-kaytan-saglam (explicit professor photos)
  doctorHalil: wixFit('aac3c1_e1ee3844c6c84e9aad2a96b88214f011~mv2.jpg', 400, 520),
  doctorSenem: wixFit('aac3c1_629c94c76dbb47c9985ad69fb5fdf15c~mv2.jpg', 400, 520),
  doctorEsra: wixFit('aac3c1_06e090308a4543d9aa7c73fc8b027db1~mv2.jpg', 400, 520),
};
