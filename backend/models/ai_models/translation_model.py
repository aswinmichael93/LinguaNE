import httpx
import os

HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")

if not HUGGINGFACE_API_KEY:
    raise RuntimeError("HUGGINGFACE_API_KEY not found in environment")

class TranslationModel:
    def __init__(self):
        self.api_url = (
            "https://router.huggingface.co/models/facebook/nllb-200-distilled-600M"

        )

        self.headers = {
            "Authorization": f"Bearer {HUGGINGFACE_API_KEY}",
            "Content-Type": "application/json"
        }

    async def translate(self, text: str, source_language: str, target_language: str):
        payload = {
            "inputs": text,
            "parameters": {
                "src_lang": source_language,
                "tgt_lang": target_language
            }
        }

        async with httpx.AsyncClient(timeout=90) as client:
            response = await client.post(
                self.api_url,
                headers=self.headers,
                json=payload
            )

        if response.status_code != 200:
            raise RuntimeError(
                f"HuggingFace error {response.status_code}: {response.text}"
            )

        data = response.json()

        if isinstance(data, dict) and data.get("error"):
            raise RuntimeError(data["error"])

        return {
            "translation": data[0]["translation_text"],
            "confidence": 0.85
        }
