import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchValue } from '../queueSlice'
import { RootState } from '../../store.ts'
import FlexContainer from './FlexContainer.ts'
import Label from './Label.ts'
import styled from 'styled-components'

const SearchInput: FC = () => {
  const searchValue = useSelector((state: RootState) => state.queue.searchValue)
  const dispatch = useDispatch()

  return (
    <FlexContainer>
      <Label htmlFor="searchBox">Filter by Name or Email</Label>
      <InputField
        id="searchBox"
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(updateSearchValue(e.target.value))}
      />
    </FlexContainer>
  )
}

export default SearchInput

const InputField = styled.input`
  font-size: 16px;
  width: 200px;
  padding: 0.4em;
  border: 0;
  background: #f0f0f0;
  border-radius: 0.25em;
  @media (max-width: 600px) {
    width: 100%;
  }
`
