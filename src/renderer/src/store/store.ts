// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import tabReducer from '../reducers/tabReducer'

const store = configureStore({
  reducer: {
    tab: tabReducer
  }
})

export default store
