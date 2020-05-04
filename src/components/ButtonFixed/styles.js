import styled from 'styled-components';

import { Wrapper } from 'visual/styles/Wrapper';
import { COLORS } from 'visual/constants';
import { ButtonPrimary } from 'visual/styles/ButtonPrimary';

export const Container = styled(Wrapper)`
  position: fixed;
  bottom: 50px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  pointer-events: none;
`;

export const Button = styled(ButtonPrimary)`
  box-shadow: 0px 0px 8px ${COLORS.greyDarkAlpha};
  pointer-events: auto;
`;
