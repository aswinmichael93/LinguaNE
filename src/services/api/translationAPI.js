import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: { 'Content-Type': 'application/json' }
});

export const translateText = async ({
  text,
  sourceLanguage,
  targetLanguage,
  userConsent = true
}) => {
  const res = await api.post('/translate/text', {
    text,
    source_language: sourceLanguage,
    target_language: targetLanguage,
    user_consent: userConsent
  });
  return res.data;
};

export const getTranslationHistory = async (limit = 20) => {
  const res = await api.get('/translate/history', { params: { limit } });
  return res.data;
};
