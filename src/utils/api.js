// src/utils/api.js
import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

api.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        
    } else {
        console.warn(`No token found for request to ${config.url}`);
    }
    return config;
});

export default api;

const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
}