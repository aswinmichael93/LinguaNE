import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api'
});

export const getCommunityStats = async () => {
  const res = await api.get('/stats/community');
  return res.data;
};
