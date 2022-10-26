import { createContext } from "react";
import React from 'react';

// creating user context api and exporting it
export const UserContext = createContext();

const UserContextApi = ({children}) => {
    return (
      <UserContext.Provider value={'default value'}>
        {children}
      </UserContext.Provider>
    );
};

export default UserContextApi;