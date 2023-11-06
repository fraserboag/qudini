import styled from 'styled-components';

interface Props {
  avatarUrl: string
}

export default styled.div<Props>`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: grey;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
  background-image: url(${props => props.avatarUrl});
  background-size: cover;
  background-position: center;
  @media(max-width:600px){
    aspect-ratio:1.2/1
  }
`;
