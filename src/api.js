import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL + "/api"
    : "https://pcit9-backend.onrender.com/api",
});

export default API;
