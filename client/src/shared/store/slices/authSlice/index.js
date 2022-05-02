import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isAuth: false,
	username: '',
	currentUserId: 0,
	role: '',
	userOfficeId: 0
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggleAuth: (state, action) => { state.isAuth = action.payload },
		rememberUser: (state, action) => {
			state.username = action.payload.username
			state.currentUserId = action.payload.id
			state.role = action.payload.role
			state.userOfficeId = action.payload.officeId
		}
	}
})

const { actions, reducer } = authSlice

export default reducer

export const {
	toggleAuth,
	rememberUser
} = actions