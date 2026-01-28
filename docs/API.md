# LinguaNE API Documentation

Base URL:

## Authentication
Authentication is optional for demo use.
Guest users must provide explicit consent for data usage.

---

## Translation

### POST /translate/text
Translate text between languages.

**Request**
```json
{
  "text": "Hello",
  "source_language": "santali",
  "target_language": "english",
  "user_consent": true
}
{
  "translation": "[ENGLISH] Hello",
  "confidence": 0.87,
  "translation_id": "uuid"
}
 
 
Speech
POST /speech/asr

Speech to text.

POST /speech/tts

Text to speech.

OCR
POST /ocr/extract

Extract text from image.

Feedback
POST /feedback/submit

Submit translation feedback.

Stats
GET /stats/community

Community impact statistics