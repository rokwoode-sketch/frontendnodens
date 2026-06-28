import requests, re, sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

H = {'User-Agent': 'Mozilla/5.0'}
html = requests.get('https://www.nodenscare.com/', timeout=30, headers=H).text

# All before/after images with alt text
gallery = []
seen = set()
for m in re.finditer(
    r'"alt":"([^"]*(?:before|after|Before|After)[^"]*)"[^}]{0,600}?"fileName":"([^"]+)"[^}]{0,200}?"name":"(aac3c1_[^"]+)"',
    html
):
    alt, fn, mid = m.group(1), m.group(2), m.group(3)
    if mid not in seen:
        seen.add(mid)
        gallery.append({'id': mid, 'file': fn, 'alt': alt})

# reverse pattern
for m in re.finditer(
    r'"fileName":"([^"]+)"[^}]{0,600}?"alt":"([^"]*(?:before|after|Before|After)[^"]*)"[^}]{0,200}?"name":"(aac3c1_[^"]+)"',
    html
):
    fn, alt, mid = m.group(1), m.group(2), m.group(3)
    if mid not in seen:
        seen.add(mid)
        gallery.append({'id': mid, 'file': fn, 'alt': alt})

print(f'=== GALLERY ({len(gallery)} items) ===')
for i, g in enumerate(gallery, 1):
    print(f"{i}. {g['id'][:36]}")
    print(f"   file: {g['file'][:60]}")
    print(f"   alt:  {g['alt'][:90]}")

# Doctor pages
doctor_urls = [
    'https://www.nodenscare.com/prof-dr-halil-erbi',
    'https://www.nodenscare.com/prof-dr-halil-erbis',
    'https://www.nodenscare.com/prof-dr-senem-karabulut',
    'https://www.nodenscare.com/prof-dr-esra-kaytan-saglam',
]
for url in doctor_urls:
    r = requests.get(url, timeout=20, headers=H)
    print(f'\n=== {url} -> {r.status_code} ===')
    if r.status_code != 200:
        continue
    h = r.text
    # portrait images
    for mid in re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', h):
        idx = h.find(mid)
        chunk = h[max(0,idx-300):idx+400]
        alt = re.search(r'alt="([^"]*)"', chunk) or re.search(r'"alt":"([^"]*)"', chunk)
        if alt and ('Prof' in alt.group(1) or 'Dr' in alt.group(1) or 'doctor' in alt.group(1).lower()):
            print(f'  PORTRAIT: {mid} | {alt.group(1)[:80]}')
    # text content snippets
    texts = re.findall(r'<p[^>]*>([^<]{40,300})</p>', h)
    for t in texts[:8]:
        clean = re.sub(r'\s+', ' ', t).strip()
        if clean:
            print(f'  TEXT: {clean[:120]}')

# Verify doctor image URLs
print('\n=== IMAGE URL CHECK ===')
imgs = {
    'halil_e1ee': 'aac3c1_e1ee3844c6c84e9aad2a96b88214f011~mv2.jpg',
    'senem_629c': 'aac3c1_629c94c76dbb47c9985ad69fb5fdf15c~mv2.jpg',
    'esra_06e0': 'aac3c1_06e090308a4543d9aa7c73fc8b027db1~mv2.jpg',
    'senem_484d': 'aac3c1_484d05f2b12f4ad2811534f1a1d36d09~mv2.webp',
    'esra_81ad': 'aac3c1_81ad95d5c916449fb61f329114a9b809~mv2.webp',
    'halil_ffbc': 'aac3c1_ffbc0bf1f46f4fa4ba5fab7d56352c35~mv2.webp',
}
for k, mid in imgs.items():
    for ext in ['jpg', 'webp', 'png', 'jpeg']:
        test_id = mid.rsplit('.', 1)[0] + f'.{ext}' if '.' in mid else mid
        u = f'https://static.wixstatic.com/media/{test_id}/v1/fit/w_200,h_200,q_90/{test_id}'
        r = requests.head(u, timeout=10)
        if r.status_code == 200:
            print(f'{k}: OK as {test_id}')
            break
    else:
        u = f'https://static.wixstatic.com/media/{mid}/v1/fit/w_200,h_200,q_90/{mid}'
        r = requests.head(u, timeout=10)
        print(f'{k}: {mid} -> {r.status_code}')

with open('gallery_full.json', 'w', encoding='utf-8') as f:
    json.dump(gallery, f, indent=2, ensure_ascii=False)
