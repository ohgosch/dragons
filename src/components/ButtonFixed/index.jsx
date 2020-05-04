import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

export const ButtonFixed = ({ children, to }) => (
  <Container>
    <Button as={Link} to={to}>
      {children}
    </Button>
  </Container>
);

ButtonFixed.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default ButtonFixed;
