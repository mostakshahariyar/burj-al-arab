import React from 'react';
import { redirect } from "react-router-dom"

const PrivateRoute = ({ children }) => {
        return user.email ? { children } : redirect("/login");
};

export default PrivateRoute;