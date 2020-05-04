import styled from "styled-components";
import { COLORS } from "visual/constants";
import { toRem } from "logic/toRem";

export const Input = styled.input`
  height: 45px;
  background-color: ${COLORS.white};
  border: 3px solid ${COLORS.greyDark};
  padding: 13px 12px;
  color: ${COLORS.black};
  font-size: ${toRem(14)};
  border-radius: 5px;

  &::placeholder {
    color: ${COLORS.greyDark};
  }
`;
