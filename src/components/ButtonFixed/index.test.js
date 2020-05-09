import React from 'react';
import { shallow } from 'enzyme';

import { ButtonFixed } from '.';
import { ROUTES } from 'logic/constants';

describe('[Component] ButtonFixed', () => {
  it('Should renders without crashing', () => {
    shallow(
      <ButtonFixed to={ROUTES.MAIN}>MyButton</ButtonFixed>
    );
  });
});
