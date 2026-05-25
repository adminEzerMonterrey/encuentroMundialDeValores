import pypdf

def extract_text(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        for i in range(14, min(30, len(reader.pages))):
            text = reader.pages[i].extract_text()
            if "Programa" in text or "Sábado" in text or "Domingo" in text or "Agenda" in text or "pm" in text.lower() or "am" in text.lower() or ":" in text:
                print(f"--- Page {i+1} ---")
                print(text)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    extract_text("public/Mayo 19 Encuentro Mundial de Valores en la Era IA.pptx.pdf")
