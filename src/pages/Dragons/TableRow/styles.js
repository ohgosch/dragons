import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { tabletDesktop, mobile } from 'visual/medias';
import { Box } from 'visual/styles/Box';

import optionsImage from 'assets/img/options-icon.svg';
import { Link } from 'react-router-dom';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled(Box)`
  ${tabletDesktop(css`
    display: flex;
    align-items: center;
    height: ${pxToRem(50)};
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
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(19)};
  overflow: hidden;

  &, > a {
    text-decoration: none;
    color: ${COLORS.black};
  }
  ${tabletDesktop(css`
    width: ${p => p.size};
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
  height: ${pxToRem(40)};
  width: ${pxToRem(40)};
  background-color: transparent;
  border: none;
  padding: 0;
  background-color: ${COLORS.white};
  background-image: url(${optionsImage});
  font-size: 0;
  background-repeat: no-repeat;
  background-position: center;
  right: ${pxToRem(5)};
  position: absolute;
  top: ${pxToRem(5)};
`;

export const OptionsList = styled(Box)`
  padding: 0;
  position: absolute;
  right: ${pxToRem(20)};
  top: ${pxToRem(30)};
  display: grid;
  z-index: 10;
  min-width: ${pxToRem(100)};
`;

export const OptionItem = styled(Link)`
  font-weight: normal;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(16)};
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  padding: ${pxToRem(7)} ${pxToRem(10)};
  display: block;
  text-decoration: none;
  text-align: left;
  border: none;
  overflow: hidden;

  &:hover {
    background-color: ${COLORS.greyWhite};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.greyWhite};
  }
`;
