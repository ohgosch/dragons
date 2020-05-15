import React, { useState } from 'react';

import { ButtonFixed } from 'components/ButtonFixed';
import { InputWithLabel } from 'components/InputWithLabel';
import { ROUTES } from 'logic/constants';
import { TEXTS } from 'logic/texts';
import { Wrapper } from 'visual/styles/Wrapper';

import { Container, FilterWrapper, Table } from './styles';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

export const Dragons = () => {
  const [filter, setFilter] = useState('');

  return (
    <Container>
      <Wrapper>
        <ButtonFixed to={ROUTES.DRAGON_CREATE}>
          {TEXTS.dragons.create}
        </ButtonFixed>
        <FilterWrapper>
          <InputWithLabel
            label={TEXTS.dragons.filter}
            placeholder={TEXTS.dragons.filterPlaceholder}
            id="dragons-filter"
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          />
        </FilterWrapper>
        <Table>
          <TableHeader />
          <TableBody filter={filter} />
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Dragons;
