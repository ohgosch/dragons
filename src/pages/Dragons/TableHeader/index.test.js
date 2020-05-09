import React from 'react';

import { TableHeader } from '.';
import { shallow } from 'enzyme';
import { Column } from './styles';

describe('[Component] TableHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TableHeader />);
  });

  it('Should have 3 columns', () => {
    expect(wrapper.find(Column)).toHaveLength(3);
  });
});
