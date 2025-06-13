import React, { use } from 'react';
import { AuthContext } from '../contex/AuthContex';

const UseHock = () => {
    const UseAuth = use(AuthContext)
    return UseAuth
};

export default UseHock;