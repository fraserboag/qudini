import queueSlice, { updateCustomers, updateSearchValue, QueueState, initialState, toggleAutoRefresh } from '../Queue/queueSlice.ts'

test('should return the initial state', () => {
  expect(queueSlice.reducer(undefined, { type: undefined })).toEqual(initialState)
})

test('should handle customers being updated with an array of objects', () => {
  const previousState: QueueState = initialState
  expect(queueSlice.reducer(previousState, updateCustomers([{name:'Fraser'},{name:'Siobhan'},{name:'Bobby'}]))).toEqual(
    {"customers": [{name:'Fraser'},{name:'Siobhan'},{name:'Bobby'}], "searchValue":"", autoRefreshEnabled: false}
  )
})

test('should handle search value being updated', () => {
  const previousState: QueueState = initialState
  expect(queueSlice.reducer(previousState, updateSearchValue("This is my search"))).toEqual(
    {"customers": [], "searchValue": "This is my search", autoRefreshEnabled: false}
  )
})

test('should handle auto refresh being toggled', () => {
  const previousState: QueueState = initialState
  expect(queueSlice.reducer(previousState, toggleAutoRefresh())).toEqual(
    {"customers": [], "searchValue": "", autoRefreshEnabled: true}
  )
})