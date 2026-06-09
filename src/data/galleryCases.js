// Real patient imagery from nodenscare.com (Wix CDN)
function wix(id, file) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/${encodeURIComponent(file).replace(/%20/g, '%20')}`;
}

function wixFit(id) {
  return `https://static.wixstatic.com/media/${id}/v1/fit/w_928,h_928,q_90,enc_avif,quality_auto/${id}`;
}

export const galleryCases = [
  {
    id: 1,
    type: 'slider',
    before: wix('aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg'),
    after: wix('aac3c1_080544bca38144268b976126b47eb86f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19.jpeg'),
  },
  {
    id: 2,
    type: 'slider',
    before: wix('aac3c1_335c719c5c8c4c09a6bfc9f7fff74807~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(2).jpeg'),
    after: wix('aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(3).jpeg'),
  },
  {
    id: 3,
    type: 'single',
    image: wix('aac3c1_0744594d63f8468fa39132890eaf98ab~mv2.jpg', 'WhatsApp Image 2026-03-04 at 02_47_edited.jpg'),
  },
  {
    id: 4,
    type: 'single',
    image: wixFit('aac3c1_638a1b90042a4e50ac153602c67b3e1a~mv2.jpg'),
  },
  {
    id: 5,
    type: 'single',
    image: 'https://static.wixstatic.com/media/aac3c1_12121e78ae72487bb61222ddf5485a99~mv2.png/v1/fill/w_688,h_688,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design(14).png',
  },
];
