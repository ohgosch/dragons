import styled, { css } from 'styled-components';
import { COLORS } from 'visual/constants';
import { ButtonPrimary } from 'visual/styles/ButtonPrimary';
import { ButtonGrey } from 'visual/styles/ButtonGrey';
import { tabletDesktop, mobile } from 'visual/medias';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(38)};
  color: ${COLORS.black};
`;

export const Form = styled.form`
  margin-top: 50px;
  position: relative;
`;

export const FormContent = styled.div`
  display: grid;
  grid-gap: 30px;

  ${p => p.loading && css`
    opacity: .5;
  `}
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

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
`;
