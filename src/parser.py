import pdfplumber
import sys
import json

file_path = sys.argv[1]

text = ""

try:
    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"

    result = {
        "success": True,
        "text": text
    }

    print(json.dumps(result))

except Exception as e:

    print(json.dumps({
        "success": False,
        "error": str(e)
    }))