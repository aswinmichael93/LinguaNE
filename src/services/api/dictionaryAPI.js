import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api'
});

export const searchDictionary = async (query, language) => {
  const res = await api.get('/dictionary/search', {
    params: { q: query, language }
  });
  return res.data;
};

export const getWordDetails = async (wordId) => {
  const res = await api.get(`/dictionary/word/${wordId}`);
  return res.data;
};
