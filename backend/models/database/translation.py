from sqlalchemy import Column, String, Float, DateTime, Boolean
from sqlalchemy.sql import func
from models.database.connection import Base

class Translation(Base):
    __tablename__ = "translations"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, index=True)

    source_language = Column(String, index=True)
    target_language = Column(String, index=True)

    input_text = Column(String)
    output_text = Column(String)

    confidence = Column(Float)
    consent_used = Column(Boolean, default=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
