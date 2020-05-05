import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { format } from 'logic/date';
import { deleteDragon } from 'logic/requests/dragon';
import { TEXTS } from 'logic/texts';

import {
  Column,
  Container,
  OptionItem,
  OptionsButton,
  OptionsList,
} from './styles';

export const TableRow = ({
  name,
  type,
  createdAt,
  id,
  showOptions,
  toggleOptions,
  onDelete,
}) => {
  const buttonRef = useRef();
  const optionsRef = useRef();

  const fetchDelete = () => {
    deleteDragon(id);
    onDelete(id);
  };

  return (
    <Container>
      <Column size="20%" title={TEXTS.dragons.name}>
        <Link to={ROUTES.DRAGON_DETAIL.replace(':id', id)}>{name}</Link>
      </Column>
      <Column size="25%" title={TEXTS.dragons.type}>
        {type}
      </Column>
      <Column size="15%" title={TEXTS.dragons.createdAt}>
        {format(createdAt)}
      </Column>
      <OptionsButton
        ref={buttonRef}
        onClick={() => toggleOptions(id, { buttonRef, optionsRef })}
      >
        {TEXTS.dragons.options}
      </OptionsButton>
      {showOptions && (
        <OptionsList ref={optionsRef}>
          <OptionItem to={ROUTES.DRAGON_EDIT.replace(':id', id)}>
            {TEXTS.dragons.edit}
          </OptionItem>
          <OptionItem onClick={fetchDelete} as="button" type="text">
            {TEXTS.dragons.delete}
          </OptionItem>
          <OptionItem to={ROUTES.DRAGON_DETAIL.replace(':id', id)}>
            {TEXTS.dragons.detail}
          </OptionItem>
        </OptionsList>
      )}
    </Container>
  );
};

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  showOptions: PropTypes.bool,
  toggleOptions: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

TableRow.defaultProps = {
  showOptions: false,
};

export default TableRow;
