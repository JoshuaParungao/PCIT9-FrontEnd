import axios from "axios";

const API = axios.create({
  baseURL: "https://pcit9-backend.onrender.com/api/posts", 
});

export default API;