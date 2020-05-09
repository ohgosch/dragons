import React from 'react';
import { shallow } from "enzyme";

import { InputWithLabel } from '.';
import { Label, Input, TextArea } from './styles';

describe('[Component] InputWithLabel', () => {
  const baseProps = {
    id: '1',
  };

  describe('Without label value', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<InputWithLabel {...baseProps} />);
    });

    it('Should render without Label component', () => {
      expect(wrapper.find(Label)).toHaveLength(0);
    });

    it('Should render Input component', () => {
      expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('Should render without TextArea component', () => {
      expect(wrapper.find(TextArea)).toHaveLength(0);
    });
  });

  describe('With label value and isTextArea', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<InputWithLabel {...baseProps} label="My Label" isTextArea />);
    });

    it('Should render Label component', () => {
      expect(wrapper.find(Label)).toHaveLength(1);
    });

    it('Should render without Input component', () => {
      expect(wrapper.find(Input)).toHaveLength(0);
    });

    it('Should render TextArea component', () => {
      expect(wrapper.find(TextArea)).toHaveLength(1);
    });
  });
  
});
