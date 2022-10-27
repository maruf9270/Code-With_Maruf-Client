import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../ContextApi/UserContextApi';



const Privetroute = ({children}) => {
    let location = useLocation();

    const {currentUser,loading,SetLoading} = useContext(UserContext)


    if(loading){
        return (
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
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
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
};

export default Privetroute;