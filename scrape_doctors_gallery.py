import requests, re, sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

r = requests.get('https://www.nodenscare.com/', timeout=30, headers={'User-Agent': 'Mozilla/5.0'})
html = r.text

# Map fileName to media id
for fname in ['12.55.18(3)', '12_55_18(3)', '12.55.18(2)', 'Halil', 'Senem', 'Esra', 'doctor']:
    if fname.replace('.', '_') in html or fname in html:
        print(f'Found {fname} in html')
        idx = html.find(fname)
        print(html[max(0,idx-200):idx+300][:400])
        print('---')

# All media/fileName pairs from JSON blobs
pairs = re.findall(r'"uri":"([^"]+)"[^}]{0,300}?"fileName":"([^"]+)"', html)
by_file = {}
for uri, fn in pairs:
    mid = uri.split('/')[-1] if '/' in uri else uri
    by_file[fn] = mid

print('\n=== HOMEPAGE GALLERY FILES (from labels section) ===')
gallery_files = [
    ('Hollywood Smile', 'WhatsApp Image 2026-02-21 at 12.55.18(2).jpeg'),
    ('Hair Transplant', 'WhatsApp Image 2026-02-21 at 12.55.19.jpeg'),
    ('BBL', 'WhatsApp Image 2026-02-21 at 12.55.21(2).jpeg'),
    ('Rhinoplasty', 'WhatsApp Image 2026-02-21 at 12.55.21(3).jpeg'),
    ('All-on-6', 'Untitled design(14).png'),
    ('Facelift', 'WhatsApp Image 2026-03-04 at 02.47_edited.jpg'),
]
for label, fn in gallery_files:
    mid = by_file.get(fn, '?')
    print(f'{label}: {mid} / {fn}')

# Doctor section
for section in ['Our Doctors', 'Medical Team', 'Prof. Dr', 'Halil', 'Karabulut', 'Kaytan']:
    i = html.find(section)
    if i > 0:
        chunk = html[i:i+8000]
        imgs = list(set(re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', chunk)))
        if imgs:
            print(f'\n{section} images: {imgs}')

# 11062b images (might be doctors/icons)
for u in re.findall(r'11062b_[a-f0-9]+~mv2\.[a-z]+', html):
    print('11062b:', u)

# Search wix image components with person/team
people = re.findall(r'"alt":"([^"]*(?:Dr|Prof|doctor|Halil|Senem|Esra)[^"]*)"', html, re.I)
for p in people[:20]:
    print('ALT person:', p)
