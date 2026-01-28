from uuid import uuid4
from typing import Optional

from models.ai_models.translation_model import TranslationModel
from models.database.translation import Translation


class TranslationService:
    def __init__(self):
        # Initialize AI model once (on app startup)
        self.model = TranslationModel()

    async def translate(
        self,
        text: str,
        source_language: str,
        target_language: str,
        user_id: Optional[str] = None,
        consent: bool = True
    ):
        """
        Handles text translation using AI model
        and prepares a Translation record for DB storage.
        """

        # 1️⃣ Basic validation
        if not text or not text.strip():
            raise ValueError("Text cannot be empty")

        if not source_language or not target_language:
            raise ValueError("Source and target languages are required")

        try:
            # 2️⃣ Call AI model
            result = await self.model.translate(
                text=text,
                source_language=source_language,
                target_language=target_language
            )

        except Exception as e:
            # 🔴 IMPORTANT: surface the real error
            print("🔴 TRANSLATION MODEL ERROR:", e)
            raise RuntimeError("Translation service failed. Please try again.")

        # 3️⃣ Validate model response
        if not result or "translation" not in result:
            raise RuntimeError("Invalid response from translation model")

        # 4️⃣ Build DB record (not saved yet – MVP)
        translation_record = Translation(
            id=str(uuid4()),
            user_id=user_id or "guest",
            source_language=source_language,
            target_language=target_language,
            input_text=text,
            output_text=result["translation"],
            confidence=result.get("confidence"),
            consent_used=consent
        )

        # 5️⃣ Return clean result for API layer
        return {
            "translation": result["translation"],
            "confidence": result.get("confidence", 0.0)
        }, translation_record
