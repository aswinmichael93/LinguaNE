from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from uuid import uuid4
import time

from services.translation_service import TranslationService

router = APIRouter(prefix="/translate", tags=["Translation"])

translation_service = TranslationService()

# =========================
# Schemas
# =========================

class TranslationRequest(BaseModel):
    text: str
    source_language: str
    target_language: str
    user_id: Optional[str] = None
    user_consent: bool = True


class TranslationResponse(BaseModel):
    translation_id: str
    translation: str
    confidence: Optional[float]
    latency_ms: int


class TranslationHistoryItem(BaseModel):
    translation_id: str
    input_text: str
    output_text: str
    source_language: str
    target_language: str
    confidence: Optional[float]


# =========================
# Routes
# =========================

@router.post("/text", response_model=TranslationResponse)
async def translate_text(payload: TranslationRequest):
    """
    Translate text using AI model (HuggingFace NLLB).
    """

    if not payload.text or not payload.text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty")

    start_time = time.time()

    try:
        result, _ = await translation_service.translate(
            text=payload.text,
            source_language=payload.source_language,
            target_language=payload.target_language,
            user_id=payload.user_id,
            consent=payload.user_consent
        )

        latency_ms = int((time.time() - start_time) * 1000)

        return {
            "translation_id": str(uuid4()),
            "translation": result["translation"],
            "confidence": result.get("confidence"),
            "latency_ms": latency_ms
        }

    except ValueError as e:
        # Validation errors
        raise HTTPException(status_code=400, detail=str(e))

    except RuntimeError as e:
        # AI / external service errors
        print(f"[TRANSLATION ERROR] {e}")
        raise HTTPException(
            status_code=500,
            detail="Translation service failed. Please try again."
        )


@router.get("/history", response_model=List[TranslationHistoryItem])
async def translation_history(limit: int = 20):
    """
    Mocked history for MVP.
    Replace with DB query later.
    """

    history = [
        {
            "translation_id": "demo-1",
            "input_text": "Hello",
            "output_text": "नमस्ते",
            "source_language": "eng_Latn",
            "target_language": "hin_Deva",
            "confidence": 0.91
        },
        {
            "translation_id": "demo-2",
            "input_text": "How are you?",
            "output_text": "आप कैसे हैं?",
            "source_language": "eng_Latn",
            "target_language": "hin_Deva",
            "confidence": 0.88
        }
    ]

    return history[:limit]
