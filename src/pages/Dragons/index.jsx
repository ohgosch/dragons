import React, { useState, useEffect } from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import { InputWithLabel } from 'components/InputWithLabel';
import { getDragonList } from 'logic/requests/dragon';
import { Container, FilterWrapper, Table } from './styles';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const Dragons = () => {
  const [dragons, setDragons] = useState([]);

  const fetch = async () => {
    const { data } = await getDragonList();
    setDragons(data);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <Container>
      <Wrapper>
        <FilterWrapper>
          <InputWithLabel
            label="Filter by name"
            placeholder="Type the dragon name"
            id="dragons-filter"
          />
        </FilterWrapper>
        <Table>
          <TableHeader />
          {dragons.map(({ id, name, type, createdAt }) => (
            <TableRow
              key={id}
              id={id}
              name={name}
              type={type}
              createdAt={createdAt}
            />
          ))}
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Dragons;
