import axios from 'axios';
const BASE_URI = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '736db0048cmsh3cd58d6788e617ep18da0cjsn16efe1f68df1',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options);
        return response.data;
    }
}