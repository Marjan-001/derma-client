import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'
//export createContext

export const AuthContext = createContext();
//getAuth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
const [loading,setloading]=useState(true)
    //signup
    const createUser = (email, password) =>
    {
        setloading(true);
       return createUserWithEmailAndPassword(auth,email,password)
}

    //signin
     
    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //update user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
            setloading(false)
        })
        return ()=> unsubscribe();
    }, [])
    
    //sign out
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }
    //google sign in
    const provider = new GoogleAuthProvider();
    const google = () => {
   return signInWithPopup(auth,provider)
}
    const authInfo = {
        createUser,signIn,user,logOut,google,updateUser,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;