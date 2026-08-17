import os
import re

src_dir = r"c:\Users\miaje\OneDrive\Desktop\EncuentroMundialDeValores\src"
speakers_dir = r"c:\Users\miaje\OneDrive\Desktop\EncuentroMundialDeValores\public\speakers"
sponsors_dir = r"c:\Users\miaje\OneDrive\Desktop\EncuentroMundialDeValores\public\Sponsors"
images_dir = r"c:\Users\miaje\OneDrive\Desktop\EncuentroMundialDeValores\public\images"

# Gather all text content from src files
src_content = ""
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.jsx', '.js', '.css', '.html')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8', errors='ignore') as file_obj:
                src_content += file_obj.read() + "\n"

# Also include index.html
with open(r"c:\Users\miaje\OneDrive\Desktop\EncuentroMundialDeValores\index.html", 'r', encoding='utf-8', errors='ignore') as f:
    src_content += f.read()

def check_unused(directory, name):
    print(f"\n--- Checking unused files in {name} ---")
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return []
    
    unused = []
    files = os.listdir(directory)
    for f in files:
        if f == ".DS_Store":
            continue
        # Check if the filename (or part of it) is in the source code
        # We can look for exact match of the filename
        # Since sometimes paths are like "/speakers/name.jpg" or "name.jpg"
        if f not in src_content:
            # Let's also do a check ignoring casing/quotes just in case
            unused.append(f)
            print(f"Unused: {f}")
        else:
            print(f"Used: {f}")
    return unused

unused_speakers = check_unused(speakers_dir, "speakers")
unused_sponsors = check_unused(sponsors_dir, "Sponsors")
unused_images = check_unused(images_dir, "images")

print("\nSummary of unused files:")
print(f"Speakers unused count: {len(unused_speakers)}")
print(f"Sponsors unused count: {len(unused_sponsors)}")
print(f"Images unused count: {len(unused_images)}")
