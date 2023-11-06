import styled from 'styled-components'

interface Props {
  matchesSearchValue: boolean
}

export default styled.div<Props>`
  border-radius: 0.5em;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  display: ${props => props.matchesSearchValue ? "block" : "none"};
  background: #fff;
  box-shadow: 0 4px 30px -18px rgba(0,0,0,0.2);
  @media(max-width:800px){
    max-width: 250px;
  }
  @media(max-width:600px){
    max-width: 200px;
  }
`
