import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface QueueState {
  customers: Array<any>,
  searchValue: string
}

const initialState: QueueState = {
  customers: [],
  searchValue: ''
}

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    updateCustomers: (state, action:PayloadAction<Array<any>>) => {
      state.customers = action.payload
    },
    updateSearchValue:(state, action:PayloadAction<string>) => {
      state.searchValue = action.payload
    }
  },
})

export const { updateCustomers, updateSearchValue } = queueSlice.actions

export default queueSlice