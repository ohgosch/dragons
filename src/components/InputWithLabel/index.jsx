import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input, TextArea } from './styles';

export const InputWithLabel = ({
  id,
  label,
  onChange,
  value,
  placeholder,
  type,
  required,
  isTextArea,
  disabled,
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
        disabled={disabled}
      />
    )}
    {isTextArea && (
      <TextArea
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        as="textarea"
        disabled={disabled}
      />
    )}
  </Container>
);

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  isTextArea: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputWithLabel.defaultProps = {
  label: '',
  onChange: () => {},
  value: '',
  placeholder: '',
  type: 'text',
  required: false,
  isTextArea: false,
  disabled: false,
};

export default InputWithLabel;
