import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../Hooks/usefirebase';

export const AuthProviderContex = createContext();

const Authcontex = ({ children }) => {
        const authValue = useFirebase();
        return (
                <AuthProviderContex.Provider value={authValue}>
                        {children}
                </AuthProviderContex.Provider>
        );
};

export default Authcontex;