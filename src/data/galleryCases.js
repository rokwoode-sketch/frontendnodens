// All 24 before/after images from nodenscare.com homepage gallery section
function wix(id, file) {
  const f = file || id;
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/${encodeURIComponent(f)}`;
}

export const galleryCases = [
  { id: 1, image: wix('aac3c1_0744594d63f8468fa39132890eaf98ab~mv2.jpg', 'WhatsApp Image 2026-03-04 at 02_47_edited.jpg'), procedureKey: 'facelift' },
  { id: 2, image: wix('aac3c1_638a1b90042a4e50ac153602c67b3e1a~mv2.jpg', 'Copy of White Neutral Elegant Collage Beauty Photography Before After Instagram Post_edite'), procedureKey: 'armLift' },
  { id: 3, image: wix('aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(2).jpeg'), procedureKey: 'hollywoodSmile' },
  { id: 4, image: wix('aac3c1_03fa67fd873549bc872507c16a14400d~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(3).jpeg'), procedureKey: 'zirconium' },
  { id: 5, image: wix('aac3c1_12121e78ae72487bb61222ddf5485a99~mv2.png', 'Untitled design(14).png'), procedureKey: 'allOn6' },
  { id: 6, image: wix('aac3c1_080544bca38144268b976126b47eb86f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19.jpeg'), procedureKey: 'hairTransplant' },
  { id: 7, image: wix('aac3c1_237c9ca236b44837a0044820ffa4416d~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20.jpeg'), procedureKey: 'hairTransplantMax' },
  { id: 8, image: wix('aac3c1_770098405f7e438f867723c05af613d8~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(2).jpeg'), procedureKey: 'dentalImplants' },
  { id: 9, image: wix('aac3c1_16370d695c8c4568bb725fe3fb1069be~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(1).jpeg'), procedureKey: 'hairDhi' },
  { id: 10, image: wix('aac3c1_fd28935acb8c4d32bd259e384aadaf08~mv2.jpg', 'WhatsApp Image 2026-03-16 at 23_06_edited.jpg'), procedureKey: 'breastAug' },
  { id: 11, image: wix('aac3c1_8bdb785c42f1429e841f6183bbd3bec9~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_18(1).jpeg'), procedureKey: 'gastricSleeve' },
  { id: 12, image: wix('aac3c1_7edd59c684b74017989b9f8199ef72a9~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19(2).jpeg'), procedureKey: 'vaserLipo' },
  { id: 13, image: wix('aac3c1_7818d5de14ad44378ab179db31be874f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19(1).jpeg'), procedureKey: 'calfImplants' },
  { id: 14, image: wix('aac3c1_f08e11645b154c0daadcca5ca952a834~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19(5).jpeg'), procedureKey: 'rhinoplastyNostril' },
  { id: 15, image: wix('aac3c1_e33118ab8ff6494998e86ac7238dc5b4~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19(4).jpeg'), procedureKey: 'rhinoplastyEthnic' },
  { id: 16, image: wix('aac3c1_d44ae035105b4beea6e99b764a6a0810~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_19(6).jpeg'), procedureKey: 'rhinoplastyDorsal' },
  { id: 17, image: wix('aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(3).jpeg'), procedureKey: 'rhinoplastyMale' },
  { id: 18, image: wix('aac3c1_5d511981d9864e249c732992fee8373f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(3).jpeg'), procedureKey: 'breastImplants' },
  { id: 19, image: wix('aac3c1_c9952fd332ff4e7d8f5ef2fa63672e7f~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_20(4).jpeg'), procedureKey: 'abdominoplasty' },
  { id: 20, image: wix('aac3c1_ccdcccd6461145df9c92cf5c2a4e83fd~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21.jpeg'), procedureKey: 'breastLift' },
  { id: 21, image: wix('aac3c1_568e954158a54cd2b0c1607f8d94c952~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(1).jpeg'), procedureKey: 'breastReduction' },
  { id: 22, image: wix('aac3c1_a12387eba9d9404da11573554c9e78f5~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_22.jpeg'), procedureKey: 'postWeightLoss' },
  { id: 23, image: wix('aac3c1_d28f2ac151f44d83a550ba53a96542e5~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_22(1).jpeg'), procedureKey: 'bbl' },
  { id: 24, image: wix('aac3c1_335c719c5c8c4c09a6bfc9f7fff74807~mv2.jpeg', 'WhatsApp Image 2026-02-21 at 12_55_21(2).jpeg'), procedureKey: 'bblHipDip' },
];

// First 6 shown on homepage (nodenscare.com featured order)
export const galleryFeatured = galleryCases.filter((c) => [3, 6, 24, 17, 5, 1].includes(c.id));
