import { AuthCredential, getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate } from "react-router-dom"
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
        const auth = getAuth();
        return auth.currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;