// Verified imagery from nodenscare.com (Wix CDN)
function wix(id, file, w = 688, h = 688) {
  const f = file || id;
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/${encodeURIComponent(f)}`;
}

function wixFit(id, w = 928, h = 928) {
  return `https://static.wixstatic.com/media/${id}/v1/fit/w_${w},h_${h},q_90,enc_avif,quality_auto/${id}`;
}

export const siteImages = {
  logo: wix('aac3c1_a296d25f8cb9453dbfd51198fac6ccc8~mv2.png', 'aac3c1_a296d25f8cb9453dbfd51198fac6ccc8~mv2.png', 200, 80),
  hero: wixFit('aac3c1_ee988dab13854acc9d8b55c7bab546e2~mv2.jpg', 600, 700),

  // Homepage Before & After gallery (exact 6 from nodenscare.com)
  hollywoodSmile: wix('aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg'),
  hair: wix('aac3c1_080544bca38144268b976126b47eb86f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19.jpeg'),
  bbl: wix('aac3c1_335c719c5c8c4c09a6bfc9f7fff74807~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(2).jpeg'),
  rhinoplasty: wix('aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(3).jpeg'),
  allOn6: wix('aac3c1_12121e78ae72487bb61222ddf5485a99~mv2.png', 'Untitled design(14).png'),
  facelift: wix('aac3c1_0744594d63f8468fa39132890eaf98ab~mv2.jpg', 'WhatsApp Image 2026-03-04 at 02_47_edited.jpg'),

  // Other verified patient imagery (not in homepage gallery block)
  zirconium: wix('aac3c1_03fa67fd873549bc872507c16a14400d~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(3).jpeg'),
  dentalImplants: wix('aac3c1_770098405f7e438f867723c05af613d8~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(2).jpeg'),
  breastAug: wix('aac3c1_5d511981d9864e249c732992fee8373f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(3).jpeg'),
  armLift: wixFit('aac3c1_638a1b90042a4e50ac153602c67b3e1a~mv2.jpg', 688, 688),
  prp: wix('aac3c1_16370d695c8c4568bb725fe3fb1069be~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(1).jpeg'),

  dental: wix('aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg', 700, 450),
  plastic: wix('aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(3).jpeg', 700, 450),
  complex: wixFit('aac3c1_a4847bce76c14078a88a51782a507500~mv2.png', 700, 450),

  // Doctor portraits from nodenscare.com site assets
  doctorHalil: wixFit('aac3c1_4c4e67d73976405492a9d00408d5f989~mv2.jpg', 400, 500),
  doctorSenem: wixFit('aac3c1_9de23ebfae584ba3b222af9d4e511bf1~mv2.png', 400, 500),
  doctorEsra: wixFit('aac3c1_2992ab2f1cc1488383a9b206f0ef7505~mv2.jpg', 400, 500),
};
