import React from 'react';

import { TEXTS } from 'logic/texts';
import { Container, Column } from './styles';

export const TableHeader = () => (
  <Container>
    <Column size="20%">{TEXTS.dragons.name}</Column>
    <Column size="25%">{TEXTS.dragons.type}</Column>
    <Column size="15%">{TEXTS.dragons.createdAt}</Column>
  </Container>
);

export default TableHeader;
