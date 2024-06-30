import { RootState } from "..";

export const selectLoginData = (state: RootState) => ({
	username: state.authorization.username,
	password: state.authorization.password
})