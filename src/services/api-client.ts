import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

const apiKey = import.meta.env.VITE_API_KEY;


if (!apiKey) {
  throw new Error('API_KEY is not defined');
}

const instance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apiKey
    }
});

export default instance;