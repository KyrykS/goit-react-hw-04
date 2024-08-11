import axios from 'axios';

const API_KEY = 'IBkv6QYMm0rmck-Eb3A8LeNgWCHcGQkAuvkN_vPOLQY';
const BASE_URL = 'https://api.unsplash.com/';

const unsplashAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

/**
 * Функція для пошуку зображень за ключовим словом.
 * @param {string} query - Ключове слово для пошуку.
 * @param {number} page - Номер сторінки результатів.
 * @param {number} perPage - Кількість зображень на сторінку.
 * @returns {Promise} - Проміс з результатами запиту.
 */
export const searchImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await unsplashAPI.get('search/photos', {
      params: {
        query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
