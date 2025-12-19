// Axios Instance Configuration
// Centralized HTTP client dengan interceptors

import axios from 'axios';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-hot-toast';

const baseURL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000';
const timeout = Number(import.meta.env.VITE_API_TIMEOUT) || 30000;

const axiosInstance = axios.create({
    baseURL,
    timeout,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor - Attach token
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
            // Ensure headers object exists and set Authorization on the existing headers
            if (!config.headers) {
                config.headers = {} as any;
            }
            (config.headers as any).Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response Interceptor - Handle errors globally
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 401:
                    // Unauthorized - Clear token and redirect to login
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    if (window.location.pathname !== '/admin/login') {
                        toast.error('Session expired. Please login again.');
                        window.location.href = '/admin/login';
                    }
                    break;

                case 403:
                    toast.error('You do not have permission to perform this action.');
                    break;

                case 404:
                    toast.error('Resource not found.');
                    break;

                case 429:
                    toast.error('Too many requests. Please try again later.');
                    break;

                case 500:
                    toast.error('Server error. Please try again later.');
                    break;

                default:
                    // data may be unknown shape
                    toast.error((data as any)?.message || 'An error occurred.');
            }
        } else if (error.request) {
            // Request made but no response
            toast.error('Network error. Please check your connection.');
        } else {
            // Something else happened
            toast.error('An unexpected error occurred.');
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;