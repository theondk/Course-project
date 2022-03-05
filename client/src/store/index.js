import { configureStore } from '@reduxjs/toolkit'

import territories from 'slices/territoriesSlice'
import pages from 'slices/pagesSlice'
import auth from 'slices/authSlice'

const store = configureStore({
	reducer: {territories, pages, auth},
	devTools: process.env.NODE_ENV !== 'production'
})

export default store