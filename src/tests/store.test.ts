import queueSlice, { updateCustomers, updateSearchValue, QueueState } from '../Queue/queueSlice.ts'

test('should return the initial state', () => {
  expect(queueSlice.reducer(undefined, { type: undefined })).toEqual({
    customers: [],
    searchValue: ""
  })
})

test('should handle customers being updated with an array of objects', () => {
  const previousState: QueueState = {customers:[], searchValue:""}

  expect(queueSlice.reducer(previousState, updateCustomers([{name:'Fraser'},{name:'Siobhan'},{name:'Bobby'}]))).toEqual(
    {"customers": [{name:'Fraser'},{name:'Siobhan'},{name:'Bobby'}], "searchValue":""}
  )
})

test('should handle search value being updated', () => {
  const previousState: QueueState = {customers:[], searchValue:''}

  expect(queueSlice.reducer(previousState, updateSearchValue("This is my search"))).toEqual(
    {"customers": [], "searchValue": "This is my search"}
  )
})