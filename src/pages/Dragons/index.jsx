import React, { useState, useEffect } from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import { InputWithLabel } from 'components/InputWithLabel';
import { getDragonList } from 'logic/requests/dragon';
import { sort } from 'logic/sort';
import { ButtonFixed } from 'components/ButtonFixed';
import { filterByName } from 'logic/filter';
import { ROUTES } from 'logic/constants';
import { TEXTS } from 'logic/texts';
import { Container, FilterWrapper, Table } from './styles';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const Dragons = () => {
  const [dragons, setDragons] = useState([]);
  const [filter, setFilter] = useState('');
  const [showingOptions, setShowingOptions] = useState();

  const fetch = async () => {
    const { data } = await getDragonList();
    setDragons(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const toggleOptions = (value) => {
    if (value === showingOptions) return setShowingOptions();
    return setShowingOptions(value);
  };

  const onDelete = (id) => {
    const filtered = dragons.filter((dragon) => dragon.id !== id);
    setDragons(filtered);
  };

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
          {sort(filterByName(dragons, filter)).map(
            ({ id, name, type, createdAt }) => (
              <TableRow
                key={id}
                id={id}
                name={name}
                type={type}
                createdAt={createdAt}
                showOptions={showingOptions === id}
                toggleOptions={toggleOptions}
                onDelete={onDelete}
              />
            ),
          )}
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Dragons;
