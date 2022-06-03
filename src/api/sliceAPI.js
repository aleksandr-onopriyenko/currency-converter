import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v6.exchangerate-api.com/v6',
  }),
  endpoints(build) {
    return {
      fetchCurrency: build.query({
        query(countries) {
          return `/3b2baf166f8c11e3f1651c86/latest/${countries}`;
        },
      }),
    };
  },
});

export const { useFetchCurrencyQuery } = apiSlice;
