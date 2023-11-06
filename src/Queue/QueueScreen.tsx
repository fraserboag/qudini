import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQueueData } from '../mockApi'
import Customer from './components/Customer'
import { readableDateTime } from '../utils'
import { RootState } from '../store'
import { updateCustomers } from './queueSlice'

const QueueScreen: FC = () => {
  const customers = useSelector((state: RootState) => state.queue.customers)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchQueueData()
      .then((response) => response.json())
      .then((json) => {
        dispatch(updateCustomers(json.queueData.queue.customersToday))
      })
  }, [dispatch])

  return (
    <div>
      {customers.map((c) => {
        console.log(c)
        return (
          <Customer
            key={c.id}
            name={c.customer.name}
            expectedTime={readableDateTime(c.expectedTime)}
            email={c.customer.emailAddress}
          />
        )
      })}
    </div>
  )
}

export default QueueScreen
