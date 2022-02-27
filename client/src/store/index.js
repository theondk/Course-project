import { configureStore } from '@reduxjs/toolkit'

import territories from '../slices/territoriesSlice'
import pages from '../slices/pagesSlice'

const store = configureStore({
    reducer: {territories, pages},
    devTools: process.env.NODE_ENV !== 'production'
})

export default store