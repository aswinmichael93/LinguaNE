from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy.sql import func
from database.connection import Base

class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(String, primary_key=True, index=True)
    translation_id = Column(String, index=True)
    user_id = Column(String, index=True)

    rating = Column(Integer)
    correction = Column(String, nullable=True)
    type = Column(String)  # text | speech | ocr

    status = Column(String, default="submitted")  # submitted | validated | applied

    created_at = Column(DateTime(timezone=True), server_default=func.now())
