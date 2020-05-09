import React from 'react';
import { shallow } from 'enzyme';

import { AuthProvider } from 'contexts/AuthContext';
import { Logout } from '.';

describe('[Page] Logout', () => {
  it('Should renders without crashing', () => {
    shallow(
      <AuthProvider value={{ clearProfile: () => {} }}>
        <Logout />
      </AuthProvider>
    );
  });
});
