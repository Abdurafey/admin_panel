import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [enabledUsers, setEnabledUsers] = useState([]);

  const setUserDataContext = (data) => {
    setUserData([...userData, data]);
  };

  const addUserPage = (firstName) => {
    setEnabledUsers([...enabledUsers, firstName]);
  };

  const removeUserPage = (firstName) => {
    setEnabledUsers(enabledUsers.filter((name) => name !== firstName));
  };

  const getUserData = (firstName) => {
    return userData.find((user) => user.firstName === firstName);
  };

  const isEnabled = (firstName) => {
    return enabledUsers.includes(firstName);
  };

  return (
    <UserContext.Provider value={{ setUserDataContext, getUserData, addUserPage, removeUserPage, isEnabled }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
