"""
TTS Model (Text-to-Speech)
Converts text into spoken audio
"""

from uuid import uuid4

class TTSModel:
    def __init__(self):
        self.model_version = "mock-tts-1.0"

    async def synthesize(self, text: str, language: str):
        # MOCK AUDIO FILE PATH
        audio_file = f"/static/audio/{uuid4()}.mp3"

        return {
            "audio_url": audio_file,
            "language": language,
            "model_version": self.model_version
        }
