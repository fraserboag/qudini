import React, { FC } from 'react'
import CustomerCard from './CustomerCard.ts'
import ProfilePicture from './ProfilePicture.ts'
import Name from './Name.ts'
import Content from './Content.ts'
import { getGravatarUrl } from '../../utils.ts'

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
