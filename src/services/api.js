import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-food-explorer-kx3t.onrender.com"
});