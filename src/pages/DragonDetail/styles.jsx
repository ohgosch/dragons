import styled from 'styled-components';

import { Box } from 'visual/styles/Box';
import { COLORS } from 'visual/constants';
import { toRem } from 'logic/toRem';

export const Container = styled.div``;

export const Content = styled(Box)`
  overflow: hidden;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${toRem(32)};
  line-height: ${toRem(44)};
  color: ${COLORS.black};
`;

export const Type = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: ${toRem(24)};
  line-height: ${toRem(33)};
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
  font-size: ${toRem(14)};
  line-height: ${toRem(19)};
  color: ${COLORS.black};
`;

export const InfoValue = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${toRem(14)};
  line-height: ${toRem(19)};
  color: ${COLORS.black};
`;
