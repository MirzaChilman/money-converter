/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';

const URL = 'https://api.exchangeratesapi.io/latest';

/* export const fetchData = async (base, symbols) => {
  const response = await axios.get(`${URL}?${base}${symbols}`);
}; */

export default {
  fetchData: async (base, symbols) => {
    const response = await axios.get(`${URL}?${base}${symbols}`);
    return response;
  },
};
