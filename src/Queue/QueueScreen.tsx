import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQueueData } from '../mockApi'
import Customer from './components/Customer.tsx'
import { readableDateTime } from '../utils.ts'
import { RootState } from '../store.ts'
import { updateCustomers } from './queueSlice.ts'
import SearchInput from './components/SearchInput.tsx'
import AutoRefreshToggle from './components/AutoRefreshToggle.tsx'
import CardRow from './components/CardRow.ts'
import Controls from './components/Controls.ts'

const QueueScreen: FC = () => {
  const customers = useSelector((state: RootState) => state.queue.customers)
  const autoRefreshEnabled = useSelector(
    (state: RootState) => state.queue.autoRefreshEnabled
  )
  const dispatch = useDispatch()

  // Fetch initial data from API
  useEffect(() => {
    fetchQueueData()
      .then((response) => response.json())
      .then((json) => {
        dispatch(updateCustomers(json.queueData.queue.customersToday))
      })
  }, [dispatch])

  // Auto refresh every 30s, if autoRefreshEnabled is set to true
  useEffect(() => {
    const autoRefresh = setInterval(() => {
      if (autoRefreshEnabled) {
        fetchQueueData()
          .then((response) => response.json())
          .then((json) => {
            dispatch(updateCustomers(json.queueData.queue.customersToday))
          })
      }
    }, 30000)
    return () => {
      clearInterval(autoRefresh)
    }
  }, [autoRefreshEnabled, dispatch])

  return (
    <>
      <Controls>
        <SearchInput />
        <AutoRefreshToggle />
      </Controls>
      <CardRow>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              name={c.customer.name}
              expectedTime={readableDateTime(c.expectedTime)}
              email={c.customer.emailAddress}
            />
          )
        })}
      </CardRow>
    </>
  )
}

export default QueueScreen
