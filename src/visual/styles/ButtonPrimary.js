import styled from "styled-components";

import { COLORS } from "visual/constants";
import { pxToRem } from "logic/pxToRem";

export const ButtonPrimary = styled.button`
  background-color: ${COLORS.yellow};
  height: 45px;
  line-height: ${pxToRem(45)};
  color: ${COLORS.white};
  padding: 0 30px;
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
