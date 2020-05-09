import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from 'visual/constants';
import { Container } from './styles';

export const Loader = ({ color }) => <Container fill={color} />;

Loader.propTypes = {
  color: PropTypes.string,
};

Loader.defaultProps = {
  color: COLORS.blackMedium,
};

export default Loader;
