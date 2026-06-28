import requests, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
html = requests.get('https://www.nodenscare.com/', timeout=30, headers={'User-Agent': 'Mozilla/5.0'}).text
for mid in ['648bb774fa88468e8b63a1edc46434c9', '4c4e67d73976405492a9d00408d5f989', '9de23ebfae584ba3b222af9d4e511bf1', '2992ab2f1cc1488383a9b206f0ef7505', '597f1640e8024423a0b173bde10c0a1a']:
    i = html.find(mid)
    if i < 0:
        print(mid, 'not found')
        continue
    chunk = html[max(0, i - 400):i + 600]
    alt = re.search(r'"alt":"([^"]{0,120})', chunk)
    print(mid[:8], 'alt=', (alt.group(1) if alt else 'none')[:100])
