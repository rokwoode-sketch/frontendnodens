import requests, re, json, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

r = requests.get('https://www.nodenscare.com/', timeout=20, headers={'User-Agent': 'Mozilla/5.0'})
html = r.text

# Find pro-gallery / before after section
idx = html.lower().find('before')
print('before idx snippets:')
for m in re.finditer(r'before', html, re.I):
    if 'after' in html[m.start():m.start()+200].lower():
        print(html[m.start()-50:m.start()+300][:350])
        print('---')
        break

# Extract high-res wix images (688 or fit/w_928+)
imgs = re.findall(r'https://static\.wixstatic\.com/media/[^"\'\s)]+', html)
high = []
for img in imgs:
    if 'blur' in img:
        continue
    if any(x in img for x in ['w_688', 'w_928', 'w_1080', 'fit/w_']):
        high.append(img.split(');')[0])

unique = []
seen = set()
for u in high:
    base = re.sub(r'/v1/.*', '', u)
    if base not in seen:
        seen.add(base)
        unique.append(u)

print(f'\nHigh-res images ({len(unique)}):')
for u in unique:
    print(u)

# Look for JSON data in page
for pat in [r'wix-warmup-data[^>]*>(\{.*?\})</script>', r'"items":\s*\[.*?\]']:
    matches = re.findall(pat, html[:500000], re.DOTALL)
    if matches:
        print('JSON match len', len(matches[0][:500]))
