"""
ASR Model (Automatic Speech Recognition)
Converts speech audio to text
"""

import time

class ASRModel:
    def __init__(self):
        self.model_version = "mock-asr-1.0"

    async def transcribe(self, audio_bytes: bytes, language: str):
        start_time = time.time()

        # MOCK ASR RESULT
        transcription = "Sample transcribed speech from audio input"

        processing_time = round(time.time() - start_time, 4)

        return {
            "text": transcription,
            "language": language,
            "confidence": 0.88,
            "model_version": self.model_version,
            "processing_time": processing_time
        }
