import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.finetwork.com',
});

const httpAdapter = {
  get: (url, params) => api.get(url, { params })
};

export default httpAdapter;
