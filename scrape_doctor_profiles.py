import requests, re, sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
H = {'User-Agent': 'Mozilla/5.0'}

urls = [
    'https://www.nodenscare.com/prof-dr-halil-erbis',
    'https://www.nodenscare.com/prof-dr-esra-kaytan-saglam',
    'https://www.nodenscare.com/cancer-treatment',
]
for url in urls:
    r = requests.get(url, timeout=25, headers=H)
    print(f'\n{"="*60}\n{url} ({r.status_code})')
    if r.status_code != 200:
        continue
    h = r.text
    # headings
    for m in re.finditer(r'<h[12][^>]*>([^<]{5,120})</h[12]>', h):
        print('H:', re.sub(r'\s+',' ',m.group(1)).strip()[:100])
    # paragraphs with substance
    for m in re.finditer(r'<p[^>]*class="[^"]*"[^>]*>([^<]{30,500})</p>', h):
        t = re.sub(r'\s+',' ',m.group(1)).strip()
        if t and 'cookie' not in t.lower():
            print('P:', t[:200])
    # doctor portrait
    for mid in set(re.findall(r'aac3c1_[a-f0-9]+~mv2\.[a-z]+', h)):
        idx = h.find(mid)
        chunk = h[max(0,idx-400):idx+500]
        if re.search(r'Prof|Dr\.|doctor|Halil|Senem|Esra', chunk, re.I):
            alt = re.search(r'"alt":"([^"]*)"', chunk) or re.search(r'alt="([^"]*)"', chunk)
            print(f'IMG: {mid} | {(alt.group(1) if alt else "")[:90]}')

# Find Senem links in homepage menu
home = requests.get('https://www.nodenscare.com/', timeout=25, headers=H).text
for m in re.finditer(r'href="([^"]*senem[^"]*)"', home, re.I):
    print('SENEM LINK:', m.group(1))
for m in re.finditer(r'href="([^"]*halil[^"]*)"', home, re.I):
    print('HALIL LINK:', m.group(1))
