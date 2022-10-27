import { createContext } from "react";
import React from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, sendEmailVerification } from 'firebase/auth'
import app from "../Firebase/Firebase.config";
import { useEffect } from "react";
import { useState } from "react";

// creating user context api and exporting it
export const UserContext = createContext();

// Using app from firebase
const Auth = getAuth(app)



const UserContextApi = ({children}) => {

// Handleing email varification
const varify = (email) =>{
  return sendEmailVerification(Auth.currentUser)
}

// Handling email and password Registration
const registerWithEmail = (email,password)=>{
  SetLoading(true)
 return createUserWithEmailAndPassword(Auth,email,password)

}

// Handleing github sign in
const gitprovider = new GithubAuthProvider()
const github=()=>{
  SetLoading(true)
  return signInWithPopup(Auth,gitprovider)
}

// Handleing google sign in
const provider = new GoogleAuthProvider()
const Goolge = () =>{
  SetLoading(true)
  return signInWithPopup(Auth,provider)
}

// Handling log in 
const Login = (email,password)=>{
 return signInWithEmailAndPassword(Auth,email,password)
}

// updating user name and photo url
const update = (profile)=>{
  SetLoading(true)
 return updateProfile(Auth.currentUser,profile)
}

// Using loader to store the data until it finishes loading
const [loading,SetLoading] = useState(true)
// seeting the user in the state
const [currentUser,setCurrentUser] = useState(null)
// Signing out from the current user
const signout=()=>{
  SetLoading(true)
  return signOut(Auth);
  
}
// Getting the value after the authenticatio ended
useEffect(()=>{
  
  const unsubscribe = onAuthStateChanged(Auth,(user)=>{
   
    if(user === null || user.emailVerified || user.providerData[0].providerId === 'github.com'){
      setCurrentUser(user)
      
      
     }
  SetLoading(false)
   

  })
  return ()=> unsubscribe;
},[])

  // Context api values
const contextValues = {registerWithEmail,
                      Login,
                      update,
                      currentUser,
                      loading,
                      SetLoading,
                      signout,
                      Goolge,
                      github,
                      varify}
    return (
      <UserContext.Provider value={contextValues}>
        {children}
      </UserContext.Provider>
    );
};

export default UserContextApi;