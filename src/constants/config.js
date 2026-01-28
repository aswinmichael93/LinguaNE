const CONFIG = {
  APP_NAME: 'LinguaNE',
  APP_DESCRIPTION: 'Preserving tribal languages through daily digital use',

  API_BASE_URL:
    process.env.REACT_APP_API_URL || 'http://localhost:8000/api',

  FEATURES: {
    TEXT_TRANSLATION: true,
    SPEECH_TRANSLATION: true,
    OCR_TRANSLATION: true,
    DICTIONARY: true,
    COMMUNITY_STATS: true,
    FEEDBACK: true
  },

  LIMITS: {
    MAX_TEXT_LENGTH: 5000,
    MAX_IMAGE_SIZE_MB: 10,
    MAX_AUDIO_DURATION_SEC: 30
  }
};

export default CONFIG;
