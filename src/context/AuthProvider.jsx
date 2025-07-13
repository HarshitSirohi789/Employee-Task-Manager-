import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export  const AuthContext = createContext()

function AuthProvider({children}) {

    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        setLocalStorage()
        const {employees} =  getLocalStorage()
        setUserData(employees)
    },[])

    

    return ( 
        <div>
            <AuthContext value={[userData,setUserData]}>
                {children}
            </AuthContext>
        </div>
     );
}

export default AuthProvider;