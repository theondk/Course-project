import { configureStore } from '@reduxjs/toolkit'

import offices from './slices/officesSlice'
import pages from './slices/pagesSlice'
import auth from './slices/authSlice'
import history from './slices/historySlice'
import country from './slices/countrySlice'
import users from './slices/usersSlice'
import tasks from './slices/tasksSlice'

const store = configureStore({
	reducer: {offices, pages, auth, history, country, users, tasks},
	devTools: process.env.NODE_ENV !== 'production'
})

export default store