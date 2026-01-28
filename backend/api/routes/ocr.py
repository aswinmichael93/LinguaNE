from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/extract")
async def extract_text(image: UploadFile = File(...), language: str = "santali"):
    # MOCK OCR
    return {
        "text": "Sample extracted text from image",
        "language": language
    }
