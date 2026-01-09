import pdfplumber

def load_text(file_path: str) -> list[str]:
    if file_path.lower().endswith(".pdf"):
        chunks = []
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    chunks.append(text)
        return chunks

    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        return [f.read()]
