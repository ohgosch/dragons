import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { format } from 'logic/date';
import { ROUTES } from 'logic/constants';
import { Container, Column } from './styles';

export const TableRow = ({ name, type, createdAt, id }) => (
  <Container to={ROUTES.DRAGON_DETAIL.replace(':id', id)} as={Link}>
    <Column size="20%" title="Name">
      {name}
    </Column>
    <Column size="25%" title="Type">
      {type}
    </Column>
    <Column size="15%" title="Created at">
      {format(createdAt)}
    </Column>
  </Container>
);

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default TableRow;
