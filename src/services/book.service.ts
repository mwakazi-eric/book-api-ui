import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllBooks = () => {
  return axios.get(`${BASE_URL}/api/v1/books/all-books`);
};
