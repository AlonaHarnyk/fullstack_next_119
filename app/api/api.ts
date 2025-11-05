import axios from "axios";

export const api = axios.create({
  baseURL: "https://next-docs-9f0504b0a741.herokuapp.com",
  withCredentials: true,
});
