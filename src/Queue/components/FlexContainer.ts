import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media(max-width: 600px){
    flex-direction: column;
    width: 100%;
  }
`