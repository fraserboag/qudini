import styled from 'styled-components'

interface Props {
  matchesSearchValue: boolean
}

export default styled.div<Props>`
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 0.2em;
  width: 290px;
  height: 370px;
  display: ${props => props.matchesSearchValue ? "block" : "none"};
`
