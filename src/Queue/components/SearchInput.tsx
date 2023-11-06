import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchValue } from '../queueSlice'
import { RootState } from '../../store.ts'

const SearchInput: FC = () => {
  const searchValue = useSelector((state: RootState) => state.queue.searchValue)
  const dispatch = useDispatch()

  return (
    <div>
      <label htmlFor="searchBox">Filter by Name or Email</label>
      <input
        id="searchBox"
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(updateSearchValue(e.target.value))}
      />
    </div>
  )
}

export default SearchInput
