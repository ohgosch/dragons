import styled, { keyframes } from 'styled-components';

import loader from 'assets/img/loader.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  display: block;
  animation: ${rotate} 2s linear infinite;
  background-color: ${p => p.fill};
  -webkit-mask: url(${loader}) no-repeat center;
  mask: url(${loader}) no-repeat center;
`;
