import styled from 'styled-components';

import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  padding-bottom: ${pxToRem(100)};
`;

export const FilterWrapper = styled.div`
  max-width: ${pxToRem(300)};
`;

export const Table = styled.div`
  margin-top: 50px;
`;

export const LoaderWrapper = styled.div`
  margin-top: 50px;
`;
