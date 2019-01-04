import axios from 'axios';

const financeApi = axios.create({
  baseURL: 'https://stg-apifinance.futuready.com/v1',
});

export default {
  financeApi,
};
