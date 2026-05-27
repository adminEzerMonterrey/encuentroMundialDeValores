import os
import unicodedata

jsx_sponsors = [
  "1.- Secretaría de Igualdad e Inclusión.png",
  "AC logo 100 aniversaario_sin slogan_color.png",
  "BEREL.png",
  "CFC logo horizontal naranja.png",
  "Consejo Interreligioso.png",
  "Fundación Chapa González.png",
  "ITESM.png",
  "Logo FD Estandar.png",
  "Monterrey.png",
  "Pasteles de Laura.png",
  "Rotarios.jpeg",
  "San Pedro Garza García.png",
  "Secretaría de Educación NL.png",
  "U-ERRE logotipo comercial RGB.png",
  "UANL.png",
  "UDEM.jpg",
  "logo fundacion alta 01.png"
]

fs_files = os.listdir('public/Sponsors')

for s in jsx_sponsors:
    if s not in fs_files:
        print(f"MISSING EXACT MATCH: {s}")
        # check NFC/NFD
        for f in fs_files:
            if unicodedata.normalize('NFC', s) == unicodedata.normalize('NFC', f):
                print(f"  -> But matches when normalized: {f}")

