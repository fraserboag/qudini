import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2em;
  margin-bottom: 2em;
  box-shadow: 0 4px 30px -18px rgba(0,0,0,0.2);
  background: #fff;
  padding: 1.25em 2em;
  width: fit-content;
  border-left: 3px solid rgb(248,3,71);
  font-family: 'Ubuntu', sans-serif;
  @media(max-width: 800px){
    flex-direction: column;
    align-items: center;
    width: 100%
    row-gap: 1em;
  }
  @media(max-width:600px){
    row-gap: 1.5em;
  }
`;
