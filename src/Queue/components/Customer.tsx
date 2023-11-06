import React, { FC } from 'react'
import CustomerCard from './CustomerCard'
import ProfilePicture from './ProfilePicture'
import Name from './Name'
import Content from './Content'

interface CustomerProps {
  name: string
  expectedTime: string
}

const Customer: FC<CustomerProps> = (props) => {
  return (
    <CustomerCard>
      <ProfilePicture />
      <Content>
        <Name>{props.name}</Name>
        <div>
          <strong>Expected Time:</strong> {props.expectedTime}
        </div>
      </Content>
    </CustomerCard>
  )
}

export default Customer
