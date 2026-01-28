from fastapi import APIRouter, UploadFile, File
from uuid import uuid4

router = APIRouter()

@router.post("/asr")
async def speech_to_text(audio: UploadFile = File(...), language: str = "santali"):
    # MOCK ASR
    return {
        "text": "Sample transcribed speech",
        "language": language
    }

@router.post("/tts")
async def text_to_speech(text: str, language: str):
    # MOCK TTS
    return {
        "audio_url": f"/static/audio/{uuid4()}.mp3"
    }
