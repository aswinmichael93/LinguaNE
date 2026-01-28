from sqlalchemy import Column, String, DateTime
from sqlalchemy.sql import func
from database.connection import Base

class DictionaryEntry(Base):
    __tablename__ = "dictionary"

    id = Column(String, primary_key=True, index=True)
    language = Column(String, index=True)

    word = Column(String, index=True)
    meaning = Column(String)
    pronunciation = Column(String, nullable=True)
    example = Column(String, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
