import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

urls = [
    'https://www.nodenscare.com/',
    'https://www.nodenscare.com/hair-transplant',
    'https://www.nodenscare.com/dental',
    'https://www.nodenscare.com/plastic-surgery',
]

for url in urls:
    print(f'\n=== {url} ===')
    try:
        r = requests.get(url, timeout=20, headers={'User-Agent': 'Mozilla/5.0'})
        html = r.text
        imgs = re.findall(r'https://static\.wixstatic\.com/media/[^"\'\s\)]+', html)
        seen = set()
        for u in imgs:
            if 'blur' in u:
                continue
            mid = re.search(r'media/([^/~]+)', u)
            if not mid or mid.group(1) in seen:
                continue
            seen.add(mid.group(1))
            fname = u.split('/')[-1][:60]
            print(f'  {mid.group(1)}: {fname}')
    except Exception as e:
        print(f'  ERROR: {e}')

# Gallery labels from homepage
r = requests.get('https://www.nodenscare.com/', timeout=20, headers={'User-Agent': 'Mozilla/5.0'})
html = r.text
# Look for text near gallery images
for m in re.finditer(r'Hollywood|Rhinoplasty|Hair Transplant|Dental|Facelift|BBL|Smile', html, re.I):
    start = max(0, m.start()-100)
    snippet = html[start:m.start()+150]
    if 'wix' in snippet.lower() or 'gallery' in snippet.lower() or 'before' in snippet.lower():
        print('LABEL CONTEXT:', re.sub(r'<[^>]+>', ' ', snippet)[:200])
