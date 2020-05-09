import styled from "styled-components";
import { COLORS } from "visual/constants";
import { pxToRem } from "logic/pxToRem";

export const Input = styled.input`
  height: ${pxToRem(45)};
  background-color: ${COLORS.white};
  border: 3px solid ${COLORS.greyDark};
  padding: ${pxToRem(13)} ${pxToRem(12)};
  color: ${COLORS.black};
  font-size: ${pxToRem(14)};
  border-radius: 5px;

  &::placeholder {
    color: ${COLORS.greyDark};
  }
`;
