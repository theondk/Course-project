import {
	createSlice,
	createAsyncThunk
} from '@reduxjs/toolkit'

import TasksKezikService from 'shared/api/tasks'

const initialState = {
	tasks: []
}

export const fetchTasks = createAsyncThunk(
	'tasks/fetchTasks',
	async () => {
		return await TasksKezikService.getTasks()
	}
)

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		changeTasks: (state, action) => { state.tasks = action.payload }
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.tasks = action.payload
			})
			.addDefaultCase(() => {})
	}
})

const {
	actions,
	reducer
} = tasksSlice

export default reducer

export const {
	changeTasks
} = actions