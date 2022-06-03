import axios from 'axios';

export const currencyAPI = {
  getCurrency: (countries = 'USD') => axios.get(`https://v6.exchngerate-api.com/v6/3b2baf166f8c11e3f1651c86/latest/${countries}`),
};
