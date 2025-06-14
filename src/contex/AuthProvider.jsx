import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.confige';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // register
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // update profile
    const userUpdateProfile = (userUpdate) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userUpdate)
    }

    // logout
    const logOut = () => {
        return signOut(auth)
    }

    // login
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        setUser,
        register,
        userUpdateProfile,
        logOut,
        login
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;