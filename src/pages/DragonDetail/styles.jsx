import styled, { css } from 'styled-components';

import { Box } from 'visual/styles/Box';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  padding-bottom: ${pxToRem(100)};
`;

export const Content = styled(Box)`
  overflow: hidden;
  position: relative;
  ${(p) =>
    p.loading &&
    css`
      min-height: 200px;
    `}
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(44)};
  color: ${COLORS.black};
`;

export const Type = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(33)};
  margin: 0;
  padding: 0;
  color: ${COLORS.blackMedium};
`;

export const InfoWrapper = styled.div`
  margin-top: 20px;
`;

export const InfoTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(19)};
  color: ${COLORS.black};
`;

export const InfoValue = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(19)};
  color: ${COLORS.black};
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
`;
