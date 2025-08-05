import axios from 'axios';
const BASE_URI = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '5e3255a6c8msh4b458163ba661bep15eb76jsn13a65c48124b',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options);
        return response;
    }
}