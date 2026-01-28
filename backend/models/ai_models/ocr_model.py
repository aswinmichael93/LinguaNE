"""
OCR Model
Extracts text from images
"""

import time

class OCRModel:
    def __init__(self):
        self.model_version = "mock-ocr-1.0"

    async def extract_text(self, image_bytes: bytes, language: str):
        start_time = time.time()

        # MOCK OCR OUTPUT
        extracted_text = "Sample extracted text from image"

        processing_time = round(time.time() - start_time, 4)

        return {
            "text": extracted_text,
            "language": language,
            "confidence": 0.9,
            "model_version": self.model_version,
            "processing_time": processing_time
        }
