import axios from 'axios';

const API_URL = 'http://192.168.1.219:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const login = async (email: string, password: string) => {
  return await api.post('/auth/login', { email, password });
};

export default api;
