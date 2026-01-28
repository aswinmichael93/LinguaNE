import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: { 'Content-Type': 'application/json' }
});

export const submitFeedback = async ({
  translationId,
  rating,
  correction,
  type
}) => {
  const res = await api.post('/feedback/submit', {
    translation_id: translationId,
    rating,
    correction,
    type
  });
  return res.data;
};

export const getUserFeedback = async () => {
  const res = await api.get('/feedback/my');
  return res.data;
};
