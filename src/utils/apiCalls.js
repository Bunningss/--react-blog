import axios from "axios";

const base_url = "http://localhost:8000/api/v1/";
const token = "";

export const publicRequest = axios.create({
  baseURL: base_url,
  headers: `Bearer ${token}`,
});
