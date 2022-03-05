import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import KezikService from 'shared/api'

const initialState = {
	territories: [],
	territory: {},
	loadingStatus: 'idle'
}

export const fetchTerritories = createAsyncThunk(
	'territories/fetchTerritories',
	async ([offset, limit]) => {
		return await KezikService.getSomeTerritories(offset, limit)
	}
)

export const fetchTerritory = createAsyncThunk(
	'territory/fetchTerritories',
	async (id) => {
		return await KezikService.getTerritory(id)
	}
)

const territoriesSlice = createSlice({
	name: 'territories',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchTerritories.pending, state => {state.loadingStatus = 'loading'})
			.addCase(fetchTerritories.fulfilled, (state, action) => {
				state.territories = action.payload
				state.loadingStatus = 'idle'
			})
			.addCase(fetchTerritories.rejected, state => {state.loadingStatus = 'error'})
			.addCase(fetchTerritory.pending, state => {state.loadingStatus = 'loading'})
			.addCase(fetchTerritory.fulfilled, (state, action) => {
				state.territory = action.payload
				state.loadingStatus = 'idle'
			})
			.addCase(fetchTerritory.rejected, state => {state.loadingStatus = 'error'})
			.addDefaultCase(() => {})
	}
})

const { reducer } = territoriesSlice

export default reducer