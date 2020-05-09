import styled from 'styled-components';

import { Input as InputStyle } from 'visual/styles/Input';
import { Label as LabelStyle } from 'visual/styles/Label';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  display: grid;
`;

export const Input = styled(InputStyle)``;

export const Label = styled(LabelStyle)``;

export const TextArea = styled(InputStyle)`
  height: ${pxToRem(120)};
`;
