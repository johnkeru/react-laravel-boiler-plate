import { configureStore } from '@reduxjs/toolkit'
import listingsSlice from './reducers/listings_slice'

export default configureStore({
  reducer: {
    listing: listingsSlice
  },
})