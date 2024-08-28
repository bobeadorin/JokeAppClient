import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5003",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
