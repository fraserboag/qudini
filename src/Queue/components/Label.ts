import styled from 'styled-components';

export default styled.label`
  margin-right: 1em;
  font-size: 16px;
  color: darkslategrey;
  cursor: pointer;
  @media(max-width:600px){
    display: block;
    margin-bottom: 0.5em;
    margin-right: 0;
  }
`