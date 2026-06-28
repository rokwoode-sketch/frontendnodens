"""Scrape nodenscare.com pages for image-to-section mapping."""
import requests, re, sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

PAGES = [
    ('/', 'home'),
    ('/hair-transplant', 'hair'),
    ('/plastic-surgery', 'plastic'),
    ('/dental', 'dental'),
    ('/complex-treatments', 'complex'),
    ('/cancer-treatment', 'cancer'),
    ('/organ-transplant', 'transplant'),
    ('/ivf-treatment', 'ivf'),
    ('/mommy-makeover', 'mommy'),
    ('/prof-dr-halil-erbi', 'halil'),
    ('/prof-dr-senem-karabulut', 'senem'),
    ('/prof-dr-esra-kaytan-saglam', 'esra'),
]

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def extract_media(html):
    results = []
    # JSON blobs with fileName + name (media id)
    for m in re.finditer(
        r'"fileName":"([^"]+)"[^}]{0,500}?"name":"(aac3c1_[^"]+)"[^}]{0,300}?"alt":"([^"]*)"',
        html
    ):
        results.append({'file': m.group(1), 'id': m.group(2), 'alt': m.group(3)})
    for m in re.finditer(
        r'"alt":"([^"]*)"[^}]{0,500}?"fileName":"([^"]+)"[^}]{0,300}?"name":"(aac3c1_[^"]+)"',
        html
    ):
        results.append({'file': m.group(2), 'id': m.group(3), 'alt': m.group(1)})
    # img tags
    for m in re.finditer(r'<img[^>]+>', html):
        tag = m.group(0)
        src = re.search(r'src="([^"]+)"', tag)
        alt = re.search(r'alt="([^"]*)"', tag)
        if src and 'wixstatic' in src.group(1):
            mid = re.search(r'media/([^/~]+)', src.group(1))
            if mid:
                results.append({'id': mid.group(1), 'alt': alt.group(1) if alt else '', 'file': ''})
    # dedupe
    seen = set()
    out = []
    for r in results:
        k = r['id']
        if k not in seen:
            seen.add(k)
            out.append(r)
    return out

def extract_text_sections(html):
    """Find headings near images."""
    headings = re.findall(r'<h[12][^>]*>([^<]{5,80})</h[12]>', html, re.I)
    return headings[:20]

base = 'https://www.nodenscare.com'
all_data = {}

for path, key in PAGES:
    url = base + path
    try:
        r = requests.get(url, timeout=25, headers=HEADERS)
        print(f'\n{"="*60}\n{key.upper()} ({url}) -> {r.status_code}')
        if r.status_code != 200:
            continue
        html = r.text
        media = extract_media(html)
        all_data[key] = media
        print(f'  Images found: {len(media)}')
        for img in media[:25]:
            alt = (img.get('alt') or '')[:90]
            fid = img['id'][:40]
            fn = (img.get('file') or '')[:50]
            print(f'  {fid} | {fn} | {alt}')
        # logo
        if key == 'home':
            logos = [m for m in media if 'logo' in (m.get('alt') or '').lower() or 'nodens' in (m.get('alt') or '').lower()]
            if not logos:
                logos = [m for m in media if 'a296d25f' in m['id']]
            print('  LOGO candidates:', logos[:3])
    except Exception as e:
        print(f'  ERROR: {e}')

# Save for reference
with open('scrape_page_images_output.json', 'w', encoding='utf-8') as f:
    json.dump(all_data, f, indent=2, ensure_ascii=False)
print('\nSaved scrape_page_images_output.json')
