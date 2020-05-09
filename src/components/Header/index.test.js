import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Header from '.';

import { Title, Logo, Container, User } from './styles';
import { MemoryRouter, Route } from 'react-router-dom';
import { ROUTES } from 'logic/constants';
import { AuthProvider } from 'contexts/AuthContext';

describe('[Component] Header', () => {
  describe(`Render in route ${ROUTES.MAIN}`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={[ROUTES.MAIN]}>
          <Route path={ROUTES.MAIN}>
            <AuthProvider value={{ profile: { name: 'My Name', } }}>
              <Header />
            </AuthProvider>
          </Route>
        </MemoryRouter>
      );
    });

    it('Should contains the Title element', () => {
      expect(wrapper.find(Title)).toHaveLength(1);
    });

    it('Should contains a Logo', () => {
      expect(wrapper.find(Logo)).toHaveLength(1);
    });

    it('Should contains a User', () => {
      expect(wrapper.find(User)).toHaveLength(1);
    });
  });
  
  describe(`Render in route ${ROUTES.AUTH}`, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={[ROUTES.AUTH]}>
          <Route path={ROUTES.AUTH}>
            <AuthProvider value={{ profile: { name: 'My Name', } }}>
              <Header />
            </AuthProvider>
          </Route>
        </MemoryRouter>
      );
    });

    it('Should contains the Title element', () => {
      expect(wrapper.find(Title)).toHaveLength(1);
    });

    it('Should contains a Logo', () => {
      expect(wrapper.find(Logo)).toHaveLength(1);
    });

    it('Should not contains a User', () => {
      expect(wrapper.find(User)).toHaveLength(0);
    });
  });
});
