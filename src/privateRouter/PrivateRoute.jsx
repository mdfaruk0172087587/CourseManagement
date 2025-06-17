import React from 'react';
import UseHock from '../hock/UseHock';
import { Navigate, useLocation } from 'react-router';
import Loading from '../shared/Loading';
const PrivateRoute = ({ children }) => {
    const { user, loading } = UseHock();
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children;
};
export default PrivateRoute;