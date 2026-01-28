from sqlalchemy import Column, String, Boolean, DateTime
from sqlalchemy.sql import func
from models.database.connection import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=True)
    role = Column(String, default="guest")  # guest | user | admin
    consent_given = Column(Boolean, default=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
