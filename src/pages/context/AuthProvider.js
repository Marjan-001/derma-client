import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'
//export createContext

export const AuthContext = createContext();
//getAuth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    //signup
    const createUser = (email, password) =>
    {
    
       return createUserWithEmailAndPassword(auth,email,password)
}

    //signin
     
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
        })
        return ()=> unsubscribe();
    }, [])
    
    //sign out
    const logOut = () => {
        return signOut(auth)
    }
    //google sign in
    const provider = new GoogleAuthProvider();
    const google = () => {
   return signInWithPopup(auth,provider)
}
    const authInfo = {
        createUser,signIn,user,logOut,google
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;