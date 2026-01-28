from fastapi import APIRouter
from pydantic import BaseModel
from uuid import uuid4

router = APIRouter()

class FeedbackRequest(BaseModel):
    translation_id: str
    rating: int
    correction: str | None = None
    type: str

@router.post("/submit")
async def submit_feedback(payload: FeedbackRequest):
    return {
        "feedback_id": str(uuid4()),
        "status": "submitted"
    }

@router.get("/my")
async def my_feedback():
    return {
        "total": 1,
        "items": [
            {
                "text": "Correction suggested",
                "status": "validated"
            }
        ]
    }
