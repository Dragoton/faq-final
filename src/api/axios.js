import axios from "axios";

export const api = axios.create({
  baseURL: "./data.json",
});

export const getPosts = async () => {
  const response = await api.get();
  return response.data;
};
