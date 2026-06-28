import requests, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

urls = [
    'https://nodenscare.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-18.25.44-13-scaled.jpeg',
    'https://nodenscare.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-18.25.44-14-scaled.jpeg',
    'https://nodenscare.com/wp-content/uploads/2025/01/arm-lift-before.jpeg',
    'https://nodenscare.com/wp-content/uploads/2025/01/arm-lift-after.jpeg',
    'https://nodenscare.com/wp-content/uploads/2025/01/dental-before.jpeg',
    'https://nodenscare.com/wp-content/uploads/2025/01/dental-after.jpeg',
    'https://static.wixstatic.com/media/aac3c1_080544bca38144268b976126b47eb86f~mv2.jpeg/v1/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-02-21%20at%2012_55_19.jpeg',
    'https://static.wixstatic.com/media/aac3c1_335c719c5c8c4c09a6bfc9f7fff74807~mv2.jpeg/v1/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-02-21%20at%2012_55_21(2).jpeg',
    'https://static.wixstatic.com/media/aac3c1_4a7ff6e0d437480cadba92f2fd0d7b59~mv2.jpeg/v1/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-02-21%20at%2012_55_18(2).jpeg',
    'https://static.wixstatic.com/media/aac3c1_aa64efbd685244ada2b971c7a20b91dc~mv2.jpeg/v1/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-02-21%20at%2012_55_21(3).jpeg',
    'https://static.wixstatic.com/media/aac3c1_0744594d63f8468fa39132890eaf98ab~mv2.jpg/v1/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-03-04%20at%2002_47_edited.jpg',
    'https://static.wixstatic.com/media/aac3c1_12121e78ae72487bb61222ddf5485a99~mv2.png/v1/fill/w_688,h_688,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design(14).png',
    'https://static.wixstatic.com/media/aac3c1_638a1b90042a4e50ac153602c67b3e1a~mv2.jpg/v1/fit/w_928,h_928,q_90,enc_avif,quality_auto/aac3c1_638a1b90042a4e50ac153602c67b3e1a~mv2.jpg',
]
for u in urls:
    r = requests.head(u, timeout=15, allow_redirects=True, headers={'User-Agent': 'Mozilla/5.0'})
    print(r.status_code, u.split('/')[-1][:60])
