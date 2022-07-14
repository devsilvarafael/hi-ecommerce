import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
