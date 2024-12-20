import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        // "x-rapidapi-key",
        // "711599b2e1msh1b66f3aaa0b58e8p1661a8jsnc138f843cb7d"
      );
      headers.set("x-rapidapi-host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/v1/charts/country?country_code=US",
    }),
    getArtistDetails: builder.query({
      query: (artistId) => "/v1/artists/details?artist_id=${artistId}",
    }),
    getSongsByCountry: builder.query({ 
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
  }),
});

export const { 
    useGetTopChartsQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery, 
} = shazamCoreApi;
