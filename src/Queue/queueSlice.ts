import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface QueueState {
  customers: Array<any>
}

const initialState: QueueState = {
  customers: []
}

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    updateCustomers: (state, action:PayloadAction<Array<any>>) => {
      state.customers = action.payload
    },
  },
})

export const { updateCustomers } = queueSlice.actions

export default queueSlice