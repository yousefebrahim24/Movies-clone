import React, { useEffect, useState } from "react";

export const Usercontext = React.createContext()
export default function UserContextProvider({children}){
    const [userData , setUserData] = useState(null)
    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            setUserData(localStorage.getItem('userToken'))
        }
    },[])
    return <Usercontext.Provider value={{userData , setUserData }}>
        {children}
    </Usercontext.Provider>
}