import React, { FC } from 'react'
import CustomerCard from './CustomerCard.ts'
import ProfilePicture from './ProfilePicture.ts'
import Name from './Name.ts'
import Content from './Content.ts'
import { getGravatarUrl } from '../../utils.ts'
import { useSelector } from 'react-redux'
import { RootState } from '../../store.ts'

interface CustomerProps {
  name: string
  expectedTime: string
  email: string
}

const Customer: FC<CustomerProps> = (props) => {
  const searchValue = useSelector((state: RootState) => state.queue.searchValue)

  return (
    <CustomerCard
      matchesSearchValue={
        props.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        props.email?.toLowerCase().includes(searchValue.toLowerCase())
      }
    >
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
