import axios from 'axios';
const BASE_URI = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '461efd1e04msh358169c2ec9447ep1f8063jsn383d22cff09c',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options);
        return response.data;
    }
}