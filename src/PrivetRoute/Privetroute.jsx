import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../ContextApi/UserContextApi';

const Privetroute = ({children}) => {
    const {currentUser,loading,SetLoading} = useContext(UserContext)


    if(loading){
        return (
            <div>
                loading...
            </div>
        )
    }
    console.log(currentUser);
   if( currentUser && currentUser?.uid){
    return (
         <>
        {children}
        </>
    )
   }
    else{
        return <Navigate to='/login'></Navigate>
    }
};

export default Privetroute;