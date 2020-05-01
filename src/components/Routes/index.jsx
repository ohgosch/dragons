import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dragons } from 'pages/Dragons';

export const Routes = () => (
  <Switch>
    <Route path="/">
      <Dragons />
    </Route>
  </Switch>
);

export default Routes;
