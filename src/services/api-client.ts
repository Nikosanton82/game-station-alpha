import axios from "axios";
const apiKey = 'f657e8986bca4391ad008d9128937782';

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