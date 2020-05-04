import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { tabletDesktop, mobile } from 'visual/medias';
import { Box } from 'visual/styles/Box';

import optionsImage from 'assets/img/options-icon.svg';
import { Link } from 'react-router-dom';

export const Container = styled(Box)`
  ${tabletDesktop(css`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;
  `)}
  
  ${mobile(css`
    display: grid;
  `)}

  margin-top: 10px;
  position: relative;
`;

export const Column = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  &, > a {
    text-decoration: none;
    color: ${COLORS.black};
  }
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

export const OptionsButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: transparent;
  border: none;
  padding: 0;
  background-image: url(${optionsImage});
  font-size: 0;
  background-repeat: no-repeat;
  background-position: center;
  right: 20px;
  position: absolute;
  top: 0;
`;

export const OptionsList = styled(Box)`
  padding: 0;
  position: absolute;
  right: 20px;
  top: 30px;
  display: grid;
  z-index: 10;
  min-width: 100px;
`;

export const OptionItem = styled(Link)`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${COLORS.black};
  padding: 7px 10px;
  display: block;
  text-decoration: none;
  text-align: left;
  border: none;

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.greyWhite};
  }
`;
