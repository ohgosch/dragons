import styled, { keyframes } from 'styled-components';

import { pxToRem } from 'logic/pxToRem';

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
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  margin: 0 auto;
  display: block;
  animation: ${rotate} 2s linear infinite;
  background-color: ${p => p.fill};
  -webkit-mask: url(${loader}) no-repeat center;
  mask: url(${loader}) no-repeat center;
  mask-size: ${pxToRem(30)};
`;
