import styled from "styled-components";

import { COLORS } from "visual/constants";

export const ButtonPrimary = styled.button`
  background-color: ${COLORS.yellow};
  height: 45px;
  line-height: 45px;
  color: ${COLORS.white};
  padding: 0 30px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;

  &:disabled {
    opacity: .5;
  }
`;