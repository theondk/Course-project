import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isAuth: false,
	username: ''
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggleAuth: (state, action) => { state.isAuth = action.payload },
		rememberUsername: (state, action) => {state.username = action.payload}
	}
})

const { actions, reducer } = authSlice

export default reducer

export const {
	toggleAuth,
	rememberUsername
} = actions