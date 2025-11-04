import axios from "axios";

const API = axios.create({
  baseURL: "https://pcit9-frontend.onrender.com/api/posts", 
});

export default API;