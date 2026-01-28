from models.database.feedback import Feedback
from uuid import uuid4

class FeedbackService:
    async def submit(
        self,
        translation_id: str,
        user_id: str,
        rating: int,
        correction: str | None,
        type: str
    ):
        feedback = Feedback(
            id=str(uuid4()),
            translation_id=translation_id,
            user_id=user_id,
            rating=rating,
            correction=correction,
            type=type,
            status="submitted"
        )

        return feedback
