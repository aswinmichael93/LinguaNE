from models.ai_models.asr_model import ASRModel
from models.ai_models.tts_model import TTSModel

class SpeechService:
    def __init__(self):
        self.asr_model = ASRModel()
        self.tts_model = TTSModel()

    async def speech_to_text(self, audio_bytes: bytes, language: str):
        return await self.asr_model.transcribe(audio_bytes, language)

    async def text_to_speech(self, text: str, language: str):
        return await self.tts_model.synthesize(text, language)
