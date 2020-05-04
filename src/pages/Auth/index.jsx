import React, { useState, useContext } from 'react';

import { InputWithLabel } from 'components/InputWithLabel';
import { ButtonPrimary } from 'visual/styles/ButtonPrimary';
import { AuthContext } from 'contexts/AuthContext';
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
        <Title>Login</Title>
        <Form onSubmit={submit}>
          <InputWithLabel
            id="user-name"
            label="Username"
            placeholder="Ex.: Richard"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
          <InputWithLabel
            id="user-password"
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <ButtonPrimary type="submit">Login</ButtonPrimary>
        </Form>
      </Content>
    </Container>
  );
};

export default Auth;
