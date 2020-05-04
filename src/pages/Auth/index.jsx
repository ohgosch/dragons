import React, { useState, useContext } from 'react';

import { InputWithLabel } from 'components/InputWithLabel';
import { ButtonPrimary } from 'visual/styles/ButtonPrimary';
import { AuthContext } from 'contexts/AuthContext';
import { TEXTS } from 'logic/texts';
import { Container, Content, Form, Title } from './styles';

export const Auth = () => {
  const { setProfile } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    setProfile({ name });
    setName('');
    setPassword('');
  };

  return (
    <Container>
      <Content>
        <Title>{TEXTS.auth.title}</Title>
        <Form onSubmit={submit}>
          <InputWithLabel
            id="user-name"
            label={TEXTS.auth.username}
            placeholder={TEXTS.auth.usernamePlaceholder}
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
          <InputWithLabel
            id="user-password"
            label={TEXTS.auth.password}
            type="password"
            placeholder={TEXTS.auth.passwordPlaceholder}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <ButtonPrimary type="submit">{TEXTS.auth.submit}</ButtonPrimary>
        </Form>
      </Content>
    </Container>
  );
};

export default Auth;
