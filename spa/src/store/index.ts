import { configureStore } from '@reduxjs/toolkit'
import { authorizationSlice } from './authorization/authorizationSlice'
import { apiSlice } from './apiSlice/apiSlice'

export const store = configureStore({
	reducer: {
		authorization: authorizationSlice.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
export type RootState = ReturnType<typeof store.getState>