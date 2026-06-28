import re
keys = ['hair', 'dental', 'plastic', 'plastic', 'dental', 'plastic', 'plastic', 'hair', 'complex']
for lang in ['fr', 'ar', 'es']:
    path = f'nodens-frontend/src/i18n/procedureCards/{lang}.js'
    with open(path, encoding='utf-8') as f:
        lines = f.readlines()
    out = []
    pkg_i = 0
    in_pkg = False
    for line in lines:
        if 'packages: [' in line:
            in_pkg = True
            pkg_i = 0
        if in_pkg and re.search(r'\{ id: \d+,', line):
            k = keys[pkg_i]
            line = re.sub(r'\{ id: (\d+),', rf"{{ id: \1, categoryKey: '{k}',", line, count=1)
            pkg_i += 1
        if in_pkg and line.strip() == '],':
            in_pkg = False
        out.append(line)
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(out)
    print(f'{lang}: patched {pkg_i} packages')
