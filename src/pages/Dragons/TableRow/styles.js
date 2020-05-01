import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from 'visual/constants';
import { tabletDesktop, mobile } from 'visual/medias';

export const Container = styled(Link)`
  ${tabletDesktop(css`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;
  `)}
  
  ${mobile(css`
    display: grid;
    padding: 20px;
  `)}
  
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 8px ${COLORS.greyDarkAlpha};
  border-radius: 5px;
  margin-top: 10px;
  text-decoration: none;
`;

export const Column = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.black};
  ${tabletDesktop(css`
    flex-basis: ${p => p.size};
  `)}

  ${mobile(css`
    &:nth-child(1) {
      font-weight: bold;
    }
    &:nth-child(2) {
      color: ${COLORS.blackMedium}
    }
    &:nth-child(3) {
      padding-top: 20px;
      color: ${COLORS.blackMedium}
    }
  `)}
`;
