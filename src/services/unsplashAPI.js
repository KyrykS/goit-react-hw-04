import axios from 'axios';

const API_KEY = 'IBkv6QYMm0rmck-Eb3A8LeNgWCHcGQkAuvkN_vPOLQY';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const searchImages = async (query, page = 1) => {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data;
};
