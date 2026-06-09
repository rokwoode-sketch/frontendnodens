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
  hair: wix('aac3c1_080544bca38144268b976126b47eb86f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19.jpeg'),
  hollywoodSmile: wix('aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg'),
  rhinoplasty: wix('aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(3).jpeg'),
  bbl: wix('aac3c1_335c719c5c8c4c09a6bfc9f7fff74807~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(2).jpeg'),
  facelift: wix('aac3c1_0744594d63f8468fa39132890eaf98ab~mv2.jpg', 'WhatsApp Image 2026-03-04 at 02_47_edited.jpg'),
  allOn6: wix('aac3c1_12121e78ae72487bb61222ddf5485a99~mv2.png', 'Untitled design(14).png'),
  zirconium: wixFit('aac3c1_638a1b90042a4e50ac153602c67b3e1a~mv2.jpg'),
  dental: wix('aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg', 700, 450),
  plastic: wix('aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(3).jpeg', 700, 450),
  complex: wixFit('aac3c1_a4847bce76c14078a88a51782a507500~mv2.png', 700, 450),
};
