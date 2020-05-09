import React from 'react';
import { shallow } from 'enzyme';

import { TableRow } from '.';
import { OptionsList, Column, OptionsButton, OptionItem } from './styles';

describe('[Component] TableRow', () => {
  const baseProps = {
    name: 'Name',
    type: 'Type',
    createdAt: '2020-05-08T03:27:51.342Z',
    id: '1',
    showOptions: false,
    toggleOptions: () => {},
    onDelete: () => {},
  };

  describe('With showOptions equal false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<TableRow {...baseProps} />);
    });

    it('Should render without options component', () => {
      expect(wrapper.find(OptionsList)).toHaveLength(0);
    });

    it('Should render with three columns', () => {
      expect(wrapper.find(Column)).toHaveLength(3);
    });

    it('Should render with options button', () => {
      expect(wrapper.find(OptionsButton)).toHaveLength(1);
    });
  });

  describe('With showOptions equal true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<TableRow {...baseProps} showOptions />);
    });

    it('Should render options component', () => {
      expect(wrapper.find(OptionsList)).toHaveLength(1);
    });

    it('Should render with options button', () => {
      expect(wrapper.find(OptionsButton)).toHaveLength(1);
    });

    it('Should render with options with three items', () => {
      expect(wrapper.find(OptionItem)).toHaveLength(3);
    });
  });
  
});
