import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api'
});

export const extractTextFromImage = async (imageFile, language) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('language', language);

  const res = await api.post('/ocr/extract', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  return res.data;
};
