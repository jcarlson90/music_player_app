import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '711599b2e1msh1b66f3aaa0b58e8p1661a8jsnc138f843cb7d');
      headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ({
        url: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world',
        params: { country_code: 'DZ', genre_code: 'POP' }, // Add required params if necessary
      }),
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;


