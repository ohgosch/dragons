import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Label = styled.label`
  font-weight: bold;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(19)};
  color: ${COLORS.black};
  padding-bottom: 5px;
`;
