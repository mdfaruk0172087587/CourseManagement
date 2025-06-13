import React from 'react';
import { AuthContext } from './AuthContex';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.confige';


const AuthProvider = ({children}) => {

// register
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        register
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;