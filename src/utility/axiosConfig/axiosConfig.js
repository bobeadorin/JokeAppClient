import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5003",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
