import React from 'react';

import { Container, Column } from './styles';

export const TableHeader = () => (
  <Container>
    <Column size="20%">Name</Column>
    <Column size="25%">Type</Column>
    <Column size="15%">Created at</Column>
  </Container>
);

export default TableHeader;
