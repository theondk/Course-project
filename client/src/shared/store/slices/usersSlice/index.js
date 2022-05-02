import {
	createSlice,
	createAsyncThunk
} from '@reduxjs/toolkit'

import UsersKezikService from 'shared/api/user'

const initialState = {
	users: []
}

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async () => {
		return await UsersKezikService.getUsers()
	}
)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload
			})
			.addDefaultCase(() => {})
	}
})

const {
	reducer
} = usersSlice

export default reducer