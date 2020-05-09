import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { Wrapper } from 'visual/styles/Wrapper';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div``;

export const Content = styled(Wrapper)`
  max-width: 300px !important;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(38)};
  color: ${COLORS.black};
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 20px;
  margin-top: 50px;
`;
