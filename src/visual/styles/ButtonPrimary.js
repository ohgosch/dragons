import styled from "styled-components";

import { COLORS } from "visual/constants";
import { pxToRem } from "logic/pxToRem";

export const ButtonPrimary = styled.button`
  background-color: ${COLORS.yellow};
  height: ${pxToRem(45)};
  line-height: ${pxToRem(45)};
  color: ${COLORS.white};
  padding: 0 ${pxToRem(30)};
  font-weight: bold;
  font-size: ${pxToRem(14)};
  border: none;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;

  &:disabled {
    opacity: .5;
  }
`;
