import React from 'react';
import { mount } from 'enzyme';

import { Auth } from '.';

describe('[Page] Auth', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Auth />);
  });

  it('Should have a submit button', () => {
    expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
  });

  it('Should have a password input', () => {
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
  });
});
