import requests, re, json, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

r = requests.get('https://www.nodenscare.com/', timeout=30, headers={'User-Agent': 'Mozilla/5.0'})
html = r.text

# Extract gallery item labels + images from rich text near comp-moj73dqw1
blocks = re.findall(r'comp-moj73dqw1__item[^"]*".*?(?=comp-moj73dqw1__item|comp-moj73dqw)', html, re.DOTALL)
print(f'Gallery blocks found: {len(blocks)}')

# Find all img with alt containing before/after
for m in re.finditer(r'<img[^>]+alt="([^"]*before[^"]*)"[^>]*>', html, re.I):
    alt = m.group(1)
    src = re.search(r'src="([^"]+)"', m.group(0))
    srcset = re.search(r'srcSet="([^"]+)"', m.group(0))
    url = (srcset.group(1).split(',')[0].split(' ')[0] if srcset else (src.group(1) if src else ''))
    print(f'ALT: {alt[:100]}')
    print(f'  URL: {url[:120]}')
    print()

# Labels in gallery section (22px underline text)
labels = re.findall(r'font-size:22px;">\s*<span[^>]*>([^<]+)</span>', html)
print('Gallery labels:', labels)

# Doctor images
print('\n=== DOCTOR IMAGES ===')
for u in re.findall(r'https://static\.wixstatic\.com/media/[^"\'\s)]+', html):
    if 'blur' in u:
        continue
    if any(x in u.lower() for x in ['halil', 'senem', 'esra', 'doctor', 'prof', 'erbi']):
        print(u)
# search for doctor section
idx = html.find('Prof')
if idx > 0:
    chunk = html[idx:idx+5000]
    imgs = re.findall(r'https://static\.wixstatic\.com/media/[^"\'\s)]+', chunk)
    for u in imgs[:10]:
        print('near prof:', u[:100])

# All unique media with alt in JSON warmup
for pat in [r'"alt":"([^"]+)"[^}]*"fileName":"([^"]+)"', r'"fileName":"([^"]+)"[^}]*"alt":"([^"]+)"']:
    matches = re.findall(pat, html)
    if matches:
        print(f'\nJSON alts ({len(matches)}):')
        for m in matches[:30]:
            if 'before' in str(m).lower() or 'after' in str(m).lower() or 'hair' in str(m).lower() or 'smile' in str(m).lower():
                print(m)

# Extract pro-gallery items order from page text between Before & After and Packages
start = html.find('Before &amp; After')
end = html.find('Packages', start)
section = html[start:end] if start > 0 else html
items = []
for label in ['Hollywood Smile', 'HAIR TRANSPLANT', '360 Liposuction', 'Rhinoplasty', 'All-on-6', 'Facelift']:
    if label.lower() in section.lower():
        print(f'Found label in section: {label}')
