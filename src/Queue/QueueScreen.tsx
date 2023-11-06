import React, { useState, useEffect, FC } from 'react'
import { fetchQueueData } from '../mockApi'
import Customer from './components/Customer'
import { readableDateTime } from '../utils'

const QueueScreen: FC = () => {
  const [customers, setCustomers] = useState<Array<any>>([])

  useEffect(() => {
    fetchQueueData()
      .then((response) => response.json())
      .then((json) => {
        setCustomers(json.queueData.queue.customersToday)
      })
  }, [])

  return (
    <div>
      {customers.map((c) => {
        console.log(c)
        return (
          <Customer
            key={c.id}
            name={c.customer.name}
            expectedTime={readableDateTime(c.expectedTime)}
          />
        )
      })}
    </div>
  )
}

export default QueueScreen
