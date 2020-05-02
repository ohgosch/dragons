import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';

import { Dragons } from 'pages/Dragons';
import { Auth } from 'pages/Auth';
import { AuthContext } from 'contexts/AuthContext';
import { ROUTES } from 'logic/constants';
import { Logout } from 'pages/Logout';
import { DragonDetail } from 'pages/DragonDetail';
import { DragonCreateEdit } from 'pages/DragonCreateEdit';

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
    <>
      {/* Auth Redirects */}
      {redirectToAuth && <Redirect to={ROUTES.AUTH} />}
      {redirectToMain && <Redirect to={ROUTES.MAIN} />}

      <Switch>
        <Route path={ROUTES.AUTH} exact>
          <Auth />
        </Route>
        <Route path={ROUTES.LOGOUT} exact>
          <Logout />
        </Route>
        <Route path={ROUTES.MAIN} exact>
          <Dragons />
        </Route>
        <Route path={ROUTES.DRAGON_CREATE}>
          <DragonCreateEdit />
        </Route>
        <Route path={ROUTES.DRAGON_EDIT}>
          <DragonCreateEdit />
        </Route>
        <Route path={ROUTES.DRAGON_DETAIL}>
          <DragonDetail />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
