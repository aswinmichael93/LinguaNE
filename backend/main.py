"""
LinguaNE Backend
FastAPI entry point for AI-powered tribal language services
"""

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# ✅ Load environment variables ONCE, before imports
load_dotenv()

# -----------------------------
# Route imports
# -----------------------------
from api.routes.translation import router as translation_router
from api.routes.speech import router as speech_router
from api.routes.ocr import router as ocr_router
from api.routes.dictionary import router as dictionary_router
from api.routes.feedback import router as feedback_router
from api.routes.stats import router as stats_router

# -----------------------------
# App initialization
# -----------------------------
app = FastAPI(
    title="LinguaNE API",
    description="Backend services for tribal language translation and preservation",
    version="1.0.0"
)

# -----------------------------
# CORS (safe for development)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Register routes
# IMPORTANT: no extra prefix here
# -----------------------------
app.include_router(translation_router)
app.include_router(speech_router)
app.include_router(ocr_router)
app.include_router(dictionary_router)
app.include_router(feedback_router)
app.include_router(stats_router)

# -----------------------------
# Health & root
# -----------------------------
@app.get("/")
def root():
    return {
        "message": "LinguaNE API running",
        "status": "ok"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "LinguaNE Backend"
    }
