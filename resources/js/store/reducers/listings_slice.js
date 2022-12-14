import { createSlice } from '@reduxjs/toolkit'

export const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    listings: [],
  },
  reducers: {
    initialize_listings: (state, action) => {
      state.listings = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { initialize_listings } = listingsSlice.actions
export default listingsSlice.reducer