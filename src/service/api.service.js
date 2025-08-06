import axios from 'axios';
const BASE_URI = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'e6a6813f39mshc0ab90295c6f7bap1e94b5jsnf6138b62b72b',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options);
        return response.data;
    }
}