import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
});

// Attach the JWT to every request.
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Normalise errors into a serialisable shape for rejectWithValue.
export const parseError = (err) => ({
    message:
        err.response?.data?.message || err.message || "Something went wrong",
    status: err.response?.status ?? null,
});

export default api;
