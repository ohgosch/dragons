import React, { createContext, useState } from "react";

const storageKey = 'AUTH';

const getAuthByStorage = () => JSON.parse(localStorage.getItem(storageKey));

const setAuthInStorage = (value) => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};

export const authInitialState = {
  authenticated: false,
  profile: {},
  ...getAuthByStorage(),
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(authInitialState.authenticated);
  const [profile, setProfile] = useState(authInitialState.profile);

  const setProfileCallback = (profile) => {
    setAuthInStorage({ authenticated: true, profile });
    setAuthenticated(true);
    setProfile(profile);
  };

  const clearProfile = () => {
    setAuthInStorage({});
    setAuthenticated(false);
    setProfile({});
  };

  return (
    <AuthContext.Provider value={{
      setProfile: setProfileCallback, clearProfile, authenticated, profile
    }}>
      {children}
    </AuthContext.Provider>
  );
};
