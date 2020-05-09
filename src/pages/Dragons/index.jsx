import React, { useCallback, useEffect, useState } from 'react';

import { ButtonFixed } from 'components/ButtonFixed';
import { InputWithLabel } from 'components/InputWithLabel';
import { Loader } from 'components/Loader';
import { ROUTES } from 'logic/constants';
import { filterByName } from 'logic/filter';
import { getDragonList } from 'logic/requests/dragon';
import { sort } from 'logic/sort';
import { TEXTS } from 'logic/texts';
import { Wrapper } from 'visual/styles/Wrapper';

import { Container, FilterWrapper, Table, LoaderWrapper } from './styles';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const Dragons = () => {
  const [dragons, setDragons] = useState([]);
  const [filter, setFilter] = useState('');
  const [showingOptions, setShowingOptions] = useState();
  const [rowRefs, setRowRefs] = useState({});
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    const { data } = await getDragonList();
    setDragons(data);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  const toggleOptions = useCallback(
    (value, refs) => {
      if (value === showingOptions) return setShowingOptions();
      setShowingOptions(value);
      return setRowRefs(refs);
    },
    [showingOptions, setShowingOptions, setRowRefs],
  );

  const onDelete = (id) => {
    const filtered = dragons.filter((dragon) => dragon.id !== id);
    setDragons(filtered);
  };

  const handleOptionsClick = useCallback(
    ({ target }) => {
      if (!showingOptions) return;

      const { buttonRef, optionsRef } = rowRefs;
      if (
        buttonRef.current.contains(target) ||
        optionsRef.current.contains(target)
      )
        return;

      toggleOptions();
    },
    [toggleOptions, rowRefs, showingOptions],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOptionsClick);

    return () => {
      document.removeEventListener('mousedown', handleOptionsClick);
    };
  }, [handleOptionsClick]);

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
          {loading && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Dragons;
