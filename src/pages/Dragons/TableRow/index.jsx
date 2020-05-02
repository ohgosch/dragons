import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { format } from 'logic/date';
import { ROUTES } from 'logic/constants';
import {
  Container,
  Column,
  OptionsButton,
  OptionsList,
  OptionItem,
} from './styles';

export const TableRow = ({
  name,
  type,
  createdAt,
  id,
  showOptions,
  toggleOptions,
}) => (
  <Container>
    <Column size="20%" title="Name">
      <Link to={ROUTES.DRAGON_DETAIL.replace(':id', id)}>{name}</Link>
    </Column>
    <Column size="25%" title="Type">
      {type}
    </Column>
    <Column size="15%" title="Created at">
      {format(createdAt)}
    </Column>
    <OptionsButton onClick={() => toggleOptions(id)}>Options</OptionsButton>
    {showOptions && (
      <OptionsList>
        <OptionItem to={ROUTES.DRAGON_EDIT.replace(':id', id)}>Edit</OptionItem>
        <OptionItem>Delete</OptionItem>
        <OptionItem to={ROUTES.DRAGON_DETAIL.replace(':id', id)}>
          Detail
        </OptionItem>
      </OptionsList>
    )}
  </Container>
);

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  showOptions: PropTypes.bool,
  toggleOptions: PropTypes.func.isRequired,
};

TableRow.defaultProps = {
  showOptions: false,
};

export default TableRow;
