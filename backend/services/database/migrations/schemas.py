from pydantic import BaseModel

class TranslationSchema(BaseModel):
    text: str
    source_language: str
    target_language: str

class FeedbackSchema(BaseModel):
    translation_id: str
    rating: int
    correction: str | None
    type: str
