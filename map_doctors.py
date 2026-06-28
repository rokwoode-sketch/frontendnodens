import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

html = requests.get('https://www.nodenscare.com/', timeout=30, headers={'User-Agent': 'Mozilla/5.0'}).text

names = ['Halil ERBIS', 'Senem Karabulut', 'Esra Kaytan', '4c4e67d7', '9de23ebf', '2992ab2f', '648bb774', 'fd28935a', '80030384']
for n in names:
    idx = html.find(n)
    if idx < 0:
        print(n, 'NOT FOUND')
        continue
    chunk = html[max(0, idx - 800):idx + 1200]
    imgs = list(dict.fromkeys(re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', chunk)))
    print(n, '->', imgs[:6])

# All image metadata with alt containing doctor/prof
alts = re.findall(r'"alt":"([^"]+)"[^}]{0,400}?"name":"(aac3c1_[^"]+)"', html)
for alt, mid in alts:
    if any(x in alt.lower() for x in ['prof', 'doctor', 'halil', 'senem', 'esra', 'oncolog', 'transplant', 'radiat']):
        print('ALT:', alt[:80], '|', mid)
