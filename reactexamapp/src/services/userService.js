import axios from "axios";

// Use Vite env var (must start with VITE_)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:2000/api";

const api = axios.create({
  baseURL: `${API_BASE_URL}/users`,
});

export const register = (user) => api.post("/register", user);
export const login = (username, password) => api.post("/login", { username, password });
export const getUser = (id) => api.get(`/${id}`);
