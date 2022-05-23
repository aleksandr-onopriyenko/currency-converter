import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v6.exchangerate-api.com/v6',
  }),
  endpoints(build) {
    return {
      fetchBreeds: build.query({
        query(countries = 'UAH') {
          return `/3b2baf166f8c11e3f1651c86/latest/${countries}`;
        },
      }),
      fetchTest: build.query({
        query(limit = 10) {
          return `https://api.thedogapi.com/v1/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery, useFetchTestQuery } = apiSlice;
