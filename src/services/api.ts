import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const api = axios.create({
  baseURL: BASE_URL,
});
