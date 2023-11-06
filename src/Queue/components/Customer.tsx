import React, { FC } from 'react'
import CustomerCard from './CustomerCard'
import ProfilePicture from './ProfilePicture.ts'
import Name from './Name'
import Content from './Content'
import { getGravatarUrl } from '../../utils'

interface CustomerProps {
  name: string
  expectedTime: string
  email: string
}

const Customer: FC<CustomerProps> = (props) => {
  return (
    <CustomerCard>
      <ProfilePicture avatarUrl={getGravatarUrl(props.email)} />
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
