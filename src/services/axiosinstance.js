import axios from 'axios';

const instance = axios.create({

    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://innovatorsnew-production.up.railway.app/api",
});


instance.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {

        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

export default instance;
