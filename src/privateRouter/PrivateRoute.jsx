import React from 'react';
import UseHock from '../hock/UseHock';
import { Navigate } from 'react-router';
import Loading from '../shared/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = UseHock();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;