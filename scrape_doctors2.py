import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

urls = [
    'https://www.nodenscare.com/',
    'https://www.nodenscare.com/our-doctors',
    'https://www.nodenscare.com/doctors',
    'https://www.nodenscare.com/about',
]
for url in urls:
    try:
        r = requests.get(url, timeout=15, headers={'User-Agent': 'Mozilla/5.0'})
        print(f'\n=== {url} status {r.status_code} ===')
        if r.status_code != 200:
            continue
        html = r.text
        # portrait-like images near doctor names
        for name in ['Halil', 'Senem', 'Esra', 'ERBIS', 'Karabulut', 'Kaytan']:
            for m in re.finditer(name, html, re.I):
                chunk = html[max(0,m.start()-500):m.start()+1500]
                imgs = re.findall(r'https://static\.wixstatic\.com/media/[^"\'\s)]+', chunk)
                if imgs:
                    print(f'{name}:')
                    for u in set(imgs):
                        if 'blur' not in u:
                            print(' ', u[:120])
        # all aac3c1 images not in gallery set
        all_imgs = set(re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', html))
        print('aac3c1 count:', len(all_imgs), list(all_imgs)[:15])
    except Exception as e:
        print(url, e)
