import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import KezikService from 'shared/api'

const initialState = {
	offices: [],
	office: {},
	loadingStatus: 'idle'
}

export const fetchOffices = createAsyncThunk(
	'offices/fetchOffices',
	async ([offset, limit]) => {
		return await KezikService.getOffices(offset, limit)
	}
)

export const fetchByFilter = createAsyncThunk(
	'offices/fetchByFilter',
	async () => {
		return await KezikService.getFilterOffices()
	}
)

export const fetchOffice = createAsyncThunk(
	'office/fetchOffice',
	async (id) => {
		return await KezikService.getOffice(id)
	}
)

const officesSlice = createSlice({
	name: 'offices',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchOffices.pending, state => {state.loadingStatus = 'loading'})
			.addCase(fetchOffices.fulfilled, (state, action) => {
				state.offices = action.payload
				state.loadingStatus = 'idle'
			})
			.addCase(fetchOffices.rejected, state => {state.loadingStatus = 'error'})
			.addCase(fetchByFilter.pending, state => {
				state.loadingStatus = 'loading'
			})
			.addCase(fetchByFilter.fulfilled, (state, action) => {
				console.log(action.payload)
				state.offices = action.payload
				state.loadingStatus = 'idle'
			})
			.addCase(fetchByFilter.rejected, state => {
				state.loadingStatus = 'error'
			})
			.addCase(fetchOffice.pending, state => {state.loadingStatus = 'loading'})
			.addCase(fetchOffice.fulfilled, (state, action) => {
				state.office = action.payload
				state.loadingStatus = 'idle'
			})
			.addCase(fetchOffice.rejected, state => {state.loadingStatus = 'error'})
			.addDefaultCase(() => {})
	}
})

const { reducer } = officesSlice

export default reducer