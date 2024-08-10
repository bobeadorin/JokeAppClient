import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5003",
});

export default api;
