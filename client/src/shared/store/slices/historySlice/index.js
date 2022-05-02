import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import HistoryKezikService from 'shared/api/history'

const initialState = {
	history: [],
	loadingStatus: 'idle'
}

export const fetchHistory = createAsyncThunk(
	'history/fetchHistory',
	async () => {
		return await HistoryKezikService.getHistory()
	}
)

const historySlice = createSlice({
	name: 'history',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchHistory.pending, state => {state.loadingStatus = 'loading'})
			.addCase(fetchHistory.fulfilled, (state, action) => {
				state.history = action.payload
				state.loadingStatus = 'idle'
			})
			.addCase(fetchHistory.rejected, state => {state.loadingStatus = 'error'})
			.addDefaultCase(() => {})
	}
})

const { reducer } = historySlice

export default reducer