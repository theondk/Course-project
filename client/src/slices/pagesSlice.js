import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import KezikService from '../components/shared/api'

const initialState = {
    pagesCount: 0,
    activePage: 1
}

export const fetchPages = createAsyncThunk(
    'pages/fetchPages',
    async () => {
        return await KezikService.getTerritoriesCount()
    }
)

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        changeActivePage: (state, action) => { state.activePage = action.payload }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPages.fulfilled, (state, action) => {state.pagesCount = Math.ceil(action.payload / 6)})
            .addDefaultCase(() => {})
    }
})

const { actions, reducer } = pagesSlice

export default reducer

export const {
    changeActivePage 
} = actions