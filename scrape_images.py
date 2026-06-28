import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

urls = [
    'https://www.nodenscare.com/',
    'https://www.nodenscare.com/hair-transplant',
    'https://www.nodenscare.com/dental-treatments',
    'https://www.nodenscare.com/plastic-surgery',
]
all_imgs = set()
for url in urls:
    r = requests.get(url, timeout=20, headers={'User-Agent': 'Mozilla/5.0'})
    print(url, r.status_code)
    if r.status_code == 200:
        imgs = re.findall(r'https://(?:www\.)?nodenscare\.com/wp-content/uploads/[^\s"\'<>]+', r.text)
        for img in imgs:
            all_imgs.add(img.split('?')[0])
        # also static.wix or wixstatic
        wix = re.findall(r'https://static\.wixstatic\.com/[^\s"\'<>]+', r.text)
        for img in wix:
            all_imgs.add(img.split('?')[0])

print(f'\nTotal unique: {len(all_imgs)}')
for u in sorted(all_imgs):
    print(u)
