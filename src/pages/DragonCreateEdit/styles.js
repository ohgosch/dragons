import styled, { css } from 'styled-components';
import { COLORS } from 'visual/constants';
import { ButtonPrimary } from 'visual/styles/ButtonPrimary';
import { ButtonGrey } from 'visual/styles/ButtonGrey';
import { tabletDesktop, mobile } from 'visual/medias';
import { toRem } from 'logic/toRem';

export const Container = styled.div`
  
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${toRem(28)};
  line-height: ${toRem(38)};
  color: ${COLORS.black};
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 30px;
  margin-top: 50px;
`;

export const InputsWrapper = styled.div`
  display: grid;
  
  ${tabletDesktop(css`
    grid-gap: 60px;
    grid-template-columns: 1fr 1fr;
  `)}

  ${mobile(css`
    grid-gap: 30px;
  `)}
`;

export const ButtonsWrapper = styled.div``;

export const SaveButton = styled(ButtonPrimary)`
  margin-right: 30px;
`;

export const CancelButton = styled(ButtonGrey)``;
