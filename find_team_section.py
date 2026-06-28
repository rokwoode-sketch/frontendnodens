import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
html = requests.get('https://www.nodenscare.com/', timeout=30, headers={'User-Agent': 'Mozilla/5.0'}).text

for label in ['Led by University', 'Medical Team', 'Professors', 'Halil Erbi', 'Senem Karabulut', 'Esra Kaytan']:
    i = html.find(label)
    if i < 0:
        continue
    chunk = html[i:i + 12000]
    imgs = list(dict.fromkeys(re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', chunk)))
    print(f'\n=== Near "{label}" ===')
    print(imgs[:8])
