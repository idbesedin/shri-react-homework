import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// очень долго пытался победить эту ошибку с any, но не победил. Прошу понять и простить :)
export const fetchAuth: any = createAsyncThunk(
	"authorization/fetchLogin",
	async (body: {username: string, password: string}) => {
		const response = await fetch("http://localhost:3030/api/v1/login", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
		const result = await response.json()
		localStorage.setItem('token', result.token)
		return result
	}
)

export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState: {
		token: 'token',
		username: '',
		password: '',
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload
			
		},
		setPassword: (state, action) => {
			state.password = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuth.fulfilled, (state, action) => {
			state.token = action.payload.token
		})
	}
})

export const { setUsername, setPassword } = authorizationSlice.actions
