import apiInstance from './utils/instanceApi';

const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  async fetchTopNews() {
    const api = apiInstance();

    const params = {
      country: 'us',
      pageSize: 10,
      page: 1,
      apiKey: API_KEY,
    };

    try {
      const response = await api.get('v2/top-headlines', {
        params,
      });

      const { data } = response;

      return {
        data,
      };
    } catch (error) {
      throw error;
    }
  },

  async fetchSearchNewsResult({ searchString, page }) {
    const api = apiInstance();

    const params = {
      q: searchString,
      pageSize: 10,
      page,
      apiKey: API_KEY,
    };

    try {
      const response = await api.get('v2/everything', {
        params,
      });

      const { data } = response;

      return {
        data,
      };
    } catch (error) {
      throw error;
    }
  },
};
