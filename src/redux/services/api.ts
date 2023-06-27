import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Cinema, Movie, Review } from "./apiTypes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: String(process.env.NEXT_PUBLIC_API_URL),
  }),
  endpoints: ({ query }) => ({
    getCinemas: query<Cinema[], void>({
      query: () => ({
        url: "cinemas",
      }),
    }),
    getMoviesByCinemaId: query<Movie[], string | void | null>({
      query: (id) => ({
        url: "movies",
        params: {
          cinemaId: id ?? undefined,
        },
      }),
    }),
    getMovieByMovieId: query<Movie, string | void>({
      query: (id) => ({
        url: "movie",
        params: {
          movieId: id ?? undefined,
        },
      }),
    }),
    getReviewsByMovieId: query<Review[], string | void>({
      query: (id) => ({
        url: "reviews",
        params: {
          movieId: id ?? undefined,
        },
      }),
    }),
  }),
});

export const {
  useGetCinemasQuery,
  useLazyGetMoviesByCinemaIdQuery,
  useGetMoviesByCinemaIdQuery,
  useGetMovieByMovieIdQuery,
  useGetReviewsByMovieIdQuery,
} = api;
