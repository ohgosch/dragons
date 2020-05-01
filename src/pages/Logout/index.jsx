import React, { useEffect, useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import { ROUTES } from 'logic/constants';

export const Logout = () => {
  const { clearProfile } = useContext(AuthContext);

  useEffect(() => {
    clearProfile();
  }, [clearProfile]);

  return <Redirect to={ROUTES.AUTH} />;
};

export default Logout;
