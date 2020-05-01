import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';

import { Dragons } from 'pages/Dragons';
import { Auth } from 'pages/Auth';
import { AuthContext } from 'contexts/AuthContext';
import { ROUTES } from 'logic/constants';

export const Routes = () => {
  const { authenticated } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [redirectToAuth, setRedirectToAuth] = useState(false);
  const [redirectToMain, setRedirectToMain] = useState(false);

  useEffect(() => {
    if (!authenticated && pathname !== ROUTES.AUTH) {
      setRedirectToAuth(true);
      setRedirectToMain(false);
    }
    if (authenticated && pathname === ROUTES.AUTH) {
      setRedirectToMain(true);
      setRedirectToAuth(false);
    }
  }, [authenticated, pathname]);

  return (
    <Switch>
      {/* Auth Redirects */}
      {redirectToAuth && <Redirect to={ROUTES.AUTH} />}
      {redirectToMain && <Redirect to={ROUTES.MAIN} />}

      <Route path={ROUTES.AUTH}>
        <Auth />
      </Route>
      <Route path={ROUTES.MAIN}>
        <Dragons />
      </Route>
    </Switch>
  );
};

export default Routes;
