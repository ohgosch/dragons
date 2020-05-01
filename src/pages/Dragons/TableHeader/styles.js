import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { mobile } from 'visual/medias';

export const Container = styled.div`
  padding: 0 20px;
  display: flex;

  ${mobile(css`
    display: none;
  `)}
`;

export const Column = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.blackMedium};

  flex-basis: ${p => p.size};
`;
