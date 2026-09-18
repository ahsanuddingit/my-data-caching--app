"use client"
import React, { createContext } from 'react';

export const UserContex = createContext(null)

const UserProvider = ({children}) => {

    return (
        <UserContex.Provider value="tometo">
            {children}
        </UserContex.Provider>
    );
};

export default UserProvider;