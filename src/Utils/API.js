/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';

const URL = 'https://api.exchangeratesapi.io/latest';

export default {
  fetchData: async (symbols) => {
    const defaultSymbols = '&symbols=IDR&symbols=EUR&symbols=GBP&symbols=SGD';
    const defaultBase = 'base=USD';

    const response = await axios.get(`${URL}?${defaultBase}${defaultSymbols}${symbols || ''}`);
    return response;
  },
};
