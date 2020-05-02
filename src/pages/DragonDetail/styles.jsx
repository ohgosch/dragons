import styled from 'styled-components';

import { Box } from 'visual/styles/Box';
import { COLORS } from 'visual/constants';

export const Container = styled.div``;

export const Content = styled(Box)``;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: ${COLORS.black};
`;

export const Type = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
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
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.black};
`;

export const InfoValue = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.black};
`;
