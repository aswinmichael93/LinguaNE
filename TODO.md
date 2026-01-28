#TODO – LinguaNE

This document tracks pending tasks, improvements, and planned enhancements for LinguaNE.
Items are grouped by priority and system layer.

Completed (Hackathon MVP)

Text-to-text translation (AI integrated)

Speech-to-speech translation flow

Scanner (OCR) translation

Camera capture

Document upload

Language selection flow (Text / Speech / Scanner)

Profile overview page

Settings page with preferences

Community feedback module

Consent-first AI usage

Modular backend architecture

API documentation via Swagger

 High Priority (Next Iteration)
AI & Translation

Improve error handling for AI model timeouts

Add fallback model for low-resource languages

Cache frequent translations to reduce latency

Confidence scoring improvement (model-based)

Speech

Noise handling for live speech input

Language auto-detection for speech

Adjustable voice pitch and speed

Offline speech fallback (basic)

OCR / Scanner

Auto-crop and perspective correction

Multi-page document scanning

Handwritten text detection

Language auto-detection from image

Medium Priority
User Experience

Profile edit (name, photo, language pair)

Save favorite language pairs

Translation history per user

Download translation history

Community & Feedback

Voting system for corrections

Contributor leaderboard

Native speaker verification badge

Moderation workflow

Accessibility

Screen-reader friendly mode

Font and spacing presets

High-contrast accessibility mode

🛠 Backend & Infrastructure

Persistent database integration (PostgreSQL)

User authentication (JWT / OAuth)

Rate limiting and abuse protection

Structured logging and monitoring

Background task queue for heavy AI calls

Privacy & Security

Data export (GDPR-style)

Clear translation history option

Account deletion workflow

Audit logs for AI usage

Per-feature consent management

Future Scope

Mobile application (Android / iOS)

Offline-first translation packs

Regional dialect support

Educational mode for language learning

NGO / government deployment support

Notes

All AI integrations must remain opt-in

Native speaker validation is mandatory for model improvement

Performance and ethical design take priority over feature volume
