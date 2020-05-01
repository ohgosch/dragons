import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input, TextArea } from './styles';

export const ButtonWithLabel = ({
  id,
  label,
  onChange,
  value,
  placeholder,
  type,
  required,
  isTextArea,
}) => (
  <Container>
    {!!label && <Label htmlFor={id}>{label}</Label>}
    {!isTextArea && (
      <Input
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    )}
    {isTextArea && (
      <TextArea
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    )}
  </Container>
);

ButtonWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  isTextArea: PropTypes.bool,
};

ButtonWithLabel.defaultProps = {
  label: '',
  onChange: () => {},
  value: '',
  placeholder: '',
  type: 'text',
  required: false,
  isTextArea: false,
};

export default ButtonWithLabel;
