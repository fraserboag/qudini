import queueSlice, { updateCustomers, QueueState } from '../Queue/queueSlice.ts'

test('should return the initial state', () => {
  expect(queueSlice.reducer(undefined, { type: undefined })).toEqual({
    customers: [],
  })
})

test('should handle customers being updated with an array of objects', () => {
  const previousState: QueueState = {customers:[]}

  expect(queueSlice.reducer(previousState, updateCustomers([{name:'Fraser'},{name:'Siobhan'},{name:'Bobby'}]))).toEqual(
    {"customers": [{name:'Fraser'},{name:'Siobhan'},{name:'Bobby'}]}
  )
})