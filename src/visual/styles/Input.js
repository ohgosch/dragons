import styled from "styled-components";
import { COLORS } from "visual/constants";

export const Input = styled.input`
  height: 45px;
  background-color: ${COLORS.white};
  border: 3px solid ${COLORS.greyDark};
  padding: 13px 12px;
  color: ${COLORS.black};
  font-size: 14px;

  &::placeholder {
    color: ${COLORS.greyDark};
  }
`;
