import os
import re
import unicodedata

def slugify(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '-', value)

sponsor_dir = 'public/Sponsors'
files = os.listdir(sponsor_dir)

safe_names = {}

for f in files:
    if f == '.DS_Store': continue
    name, ext = os.path.splitext(f)
    safe_name = slugify(name) + ext.lower()
    
    old_path = os.path.join(sponsor_dir, f)
    new_path = os.path.join(sponsor_dir, safe_name)
    
    # rename
    os.rename(old_path, new_path)
    safe_names[f] = safe_name
    print(f"Renamed: '{f}' -> '{safe_name}'")

# update Sponsors.jsx
jsx_path = 'src/components/Sponsors.jsx'
with open(jsx_path, 'r') as file:
    content = file.read()

for old, new in safe_names.items():
    content = content.replace(f'src: "{old}"', f'src: "{new}"')

with open(jsx_path, 'w') as file:
    file.write(content)

print("Updated Sponsors.jsx")
