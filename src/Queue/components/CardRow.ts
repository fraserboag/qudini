import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.5em;
  row-gap: 1.5em;
  flex-wrap: wrap;
  @media(max-width: 800px){
    justify-content: center;
  }
`;
