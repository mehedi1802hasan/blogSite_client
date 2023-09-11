import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext =createContext(null);

const Provider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState('');
    const [loading, setLoading]=useState(true);
   
    const signUpUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const singInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
  
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser);
       console.log('authstate change..:',currentUser)    
       setLoading(false);

          
    })
    return ()=>{unsubscribe()}

    },[])

    const logOut=()=>{
        return signOut(auth);
    }
  const authInfo={
    loading,
    user,
    signUpUser,
    singInUser,
     logOut
  }
    return (
        <div >
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default Provider;