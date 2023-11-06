import styled from 'styled-components';

interface Props {
  avatarUrl: string
}

export default styled.div<Props>`
  height: 290px;
  width: 290px;
  background-color: grey;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
  background-image: url(${props => props.avatarUrl});
  background-size: cover;
`;
