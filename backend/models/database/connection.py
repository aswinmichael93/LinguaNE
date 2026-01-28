from sqlalchemy.ext.asyncio import (
    create_async_engine,
    AsyncSession
)
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# =========================
# DATABASE URL
# =========================
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "sqlite+aiosqlite:///./linguane.db"
)

# =========================
# ASYNC ENGINE
# =========================
engine = create_async_engine(
    DATABASE_URL,
    echo=False,
    future=True
)

# =========================
# SESSION
# =========================
AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)

# =========================
# BASE MODEL
# =========================
Base = declarative_base()

# =========================
# DEPENDENCY
# =========================
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
