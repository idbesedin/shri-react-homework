import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030/api/v1" }),
	endpoints: (builder) =>({
		getMovies: builder.query({
			query: ({
				genre, 
				release_year, 
				title,
				limit = 10,
				page,
			} : {
				genre?: string, 
				release_year?: string
				title?: string
				limit?: number
				page: number
			}) => `/search?${genre && `genre=${genre}`}${release_year && `&release_year=${release_year}`}${title && `&title=${title}`}&limit=${limit}&page=${page}`
		}),
		getMovie: builder.query({
			query: (id: number) => `/movie/${id}`
		})
	})
})

export const { 
	useGetMovieQuery, 
	useGetMoviesQuery, 
	useLazyGetMovieQuery, 
	useLazyGetMoviesQuery } = apiSlice as any
	
// The inferred type of 'useLazyGetMoviesQuery' cannot be named 
// without a reference to '../../../node_modules/@reduxjs/toolkit/dist/query/react/buildHooks'. 
// This is likely not portable. A type annotation is necessary.

// cнова не знал как пофиксить эту ошибку, оставлю до разбора


