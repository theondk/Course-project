import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import CountryKezikService from 'shared/api/country'

const initialState = {
	countries: [],
	loadingStatus: 'idle',
	selectedCountry: 0
}

export const fetchCountries = createAsyncThunk(
	'countries/fetchCountries',
	async () => {
		return await CountryKezikService.getCountries()
	}
)

const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		changeSelectedCountry: (state, action) => {
			state.selectedCountry = action.payload
		},
		addNewCountry: (state, action) => {
			state.countries = [...state.countries, action.payload]
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountries.pending, state => {state.loadingStatus = 'loading'})
			.addCase(fetchCountries.fulfilled, (state, action) => {
				state.countries = action.payload
				state.loadingStatus = 'idle'
			})
			.addCase(fetchCountries.rejected, state => {state.loadingStatus = 'error'})
			.addDefaultCase(() => {})
	}
})

const { reducer, actions } = countrySlice

export default reducer

export const {
	changeSelectedCountry
} = actions