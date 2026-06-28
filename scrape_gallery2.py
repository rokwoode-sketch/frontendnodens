import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

r = requests.get('https://www.nodenscare.com/', timeout=20, headers={'User-Agent': 'Mozilla/5.0'})
html = r.text

imgs = re.findall(r'https://static\.wixstatic\.com/media/[^"\'\s)]+', html)
clean = []
for img in imgs:
    if 'blur' in img:
        continue
    img = img.split(');')[0].split('background')[0]
    if 'w_688' in img or 'w_344' in img or 'fit/w_' in img:
        clean.append(img)

# dedupe by media id
by_id = {}
for u in clean:
    m = re.search(r'media/([^/]+)', u)
    if m:
        mid = m.group(1)
        # prefer largest
        if mid not in by_id or len(u) > len(by_id[mid]):
            by_id[mid] = u

print(f'Unique media items: {len(by_id)}')
for mid, u in sorted(by_id.items()):
    name = u.split('/')[-1][:80]
    print(f'{mid}: {name}')
    print(f'  {u}')
    print()
