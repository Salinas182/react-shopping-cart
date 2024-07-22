import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.finetwork.com',
});

const httpAdapter = {
  get: (url, params) => api.get(url, { params }),

  getLocalJson: (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await axios.get(`${process.env.PUBLIC_URL}${url}`);
          resolve(response);
        } catch (error) {
          reject(new Error('Error fetching local JSON'));
        }
      }, 1000);
    });
  }
};

export default httpAdapter;
