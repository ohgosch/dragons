import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { mobile } from 'visual/medias';
import { toRem } from 'logic/toRem';

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
  font-size: ${toRem(14)};
  line-height: ${toRem(19)};
  color: ${COLORS.blackMedium};

  flex-basis: ${p => p.size};
`;
