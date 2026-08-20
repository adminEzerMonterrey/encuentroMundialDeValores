import re

with open('src/components/Speakers.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all blocks containing name
blocks = re.findall(r'\{[^{}]*name:[^{}]*\}', content, re.DOTALL)
# If that is too simple, let's find blocks between { and } by parsing braces
# Actually, since it's a standard JS array:
# we can just find all matches of speaker object properties
# Let's find speaker names and then search for imgScale in the surrounding text.
# Let's do a simple regex search for all names, and print their surrounding imgScale
matches = re.finditer(r'name:\s*["\']([^"\']+)["\']', content)
for m in matches:
    name = m.group(1)
    start = max(0, m.start() - 300)
    end = min(len(content), m.end() + 300)
    context = content[start:end]
    scale_match = re.search(r'imgScale:\s*["\']([^"\']+)["\']', context)
    pos_match = re.search(r'imgPosition:\s*["\']([^"\']+)["\']', context)
    scale = scale_match.group(1) if scale_match else "None"
    pos = pos_match.group(1) if pos_match else "None"
    print(f"Speaker: {name} | imgScale: {scale} | imgPosition: {pos}")
