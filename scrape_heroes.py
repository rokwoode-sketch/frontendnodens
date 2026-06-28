import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

pages = [
    'plastic-surgery', 'hair-transplant', 'complex-treatments',
    'cancer-treatment', 'organ-transplant', 'ivf-treatment', 'dental-treatments'
]
for slug in pages:
    url = f'https://www.nodenscare.com/{slug}'
    r = requests.get(url, timeout=25, headers={'User-Agent': 'Mozilla/5.0'})
    print(f'\n=== {slug} ({r.status_code}) ===')
    if r.status_code != 200:
        continue
    html = r.text
    # background images in sections
    bgs = re.findall(r'background-image:\s*url\(([^)]+)\)', html)
    for b in bgs[:5]:
        print('  BG:', b[:120])
    # first few wix images in order
    ids = re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', html)
    print('  First 8 media IDs:', ids[:8])
    # hero/cover keywords
    for kw in ['hero', 'cover', 'banner', 'header', 'wixui-column-strip']:
        if kw in html.lower():
            idx = html.lower().find(kw)
            chunk = html[idx:idx+3000]
            imgs = re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', chunk)
            if imgs:
                print(f'  Near {kw}:', imgs[:3])

# Logo dimensions
r = requests.get('https://www.nodenscare.com/', timeout=25, headers={'User-Agent': 'Mozilla/5.0'})
for m in re.finditer(r'800303847ad3444fbec76b98ed1485b5', r.text):
    print('\nLOGO context:', r.text[m.start()-200:m.start()+400][:500])
