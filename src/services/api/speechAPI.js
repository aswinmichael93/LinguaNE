import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api'
});

export const speechToText = async (audioBlob, language) => {
  const formData = new FormData();
  formData.append('audio', audioBlob);
  formData.append('language', language);

  const res = await api.post('/speech/asr', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  return res.data;
};

export const textToSpeech = async (text, language) => {
  const res = await api.post('/speech/tts', {
    text,
    language
  });

  return res.data; // { audio_url }
};
