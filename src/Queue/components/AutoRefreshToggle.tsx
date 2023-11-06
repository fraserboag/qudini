import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAutoRefresh } from '../queueSlice'
import { RootState } from '../../store.ts'
import FlexContainer from './FlexContainer.ts'
import Label from './Label.ts'

const AutoRefreshToggle: FC = () => {
  const autoRefreshEnabled = useSelector(
    (state: RootState) => state.queue.autoRefreshEnabled
  )
  const dispatch = useDispatch()

  return (
    <FlexContainer>
      <Label htmlFor="autoRefreshToggle">Auto Refresh (Every 30s)</Label>
      <input
        id="autoRefreshToggle"
        type="checkbox"
        defaultChecked={autoRefreshEnabled}
        onChange={(e) => dispatch(toggleAutoRefresh())}
      />
    </FlexContainer>
  )
}

export default AutoRefreshToggle
