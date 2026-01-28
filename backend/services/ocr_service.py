from models.ai_models.ocr_model import OCRModel

class OCRService:
    def __init__(self):
        self.model = OCRModel()

    async def extract(self, image_bytes: bytes, language: str):
        return await self.model.extract_text(image_bytes, language)
