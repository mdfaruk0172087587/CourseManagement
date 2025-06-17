import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.confige';
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
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
        setLoading(true)
        return signOut(auth)
    }
    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // googleLogin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
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
        login,
        googleLogin,
        setLoading,
        githubLogin
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;