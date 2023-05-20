import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

const apiKey = import.meta.env.VITE_API_KEY;


if (!apiKey) {
  throw new Error('API_KEY is not defined');
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apiKey
    }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data); 
  }
}

export default APIClient;