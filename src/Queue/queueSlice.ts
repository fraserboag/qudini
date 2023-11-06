import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface QueueState {
  customers: Array<any>,
  searchValue: string,
  autoRefreshEnabled: boolean
}

export const initialState: QueueState = {
  customers: [],
  searchValue: '',
  autoRefreshEnabled: false
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
    },
    toggleAutoRefresh:(state) => {
      state.autoRefreshEnabled = !state.autoRefreshEnabled
    }
  },
})

export const { updateCustomers, updateSearchValue, toggleAutoRefresh } = queueSlice.actions

export default queueSlice