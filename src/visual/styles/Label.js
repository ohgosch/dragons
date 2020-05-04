import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { toRem } from 'logic/toRem';

export const Label = styled.label`
  font-weight: bold;
  font-size: ${toRem(14)};
  line-height: ${toRem(19)};
  color: ${COLORS.black};
  padding-bottom: 5px;
`;
