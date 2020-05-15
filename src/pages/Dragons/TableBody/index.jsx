import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Loader } from 'components/Loader';
import { sort } from 'logic/sort';
import { filterByName } from 'logic/filter';
import { getDragonList } from 'logic/requests/dragon';
import { TableRow } from '../TableRow';
import { LoaderWrapper } from './styles';

export const TableBody = ({ filter }) => {
  const [dragons, setDragons] = useState([]);
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

  const deleteCallback = (id) => {
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
    <>
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
            onDelete={deleteCallback}
          />
        ),
      )}
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </>
  );
};

TableBody.propTypes = {
  filter: PropTypes.string.isRequired,
};
