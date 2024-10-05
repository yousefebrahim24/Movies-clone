import React from "react";
import { Usercontext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export default function LogOut(){
    const {userData , setUserData} = useContext(Usercontext)
    const navigate = useNavigate()
    function logOut(){
        localStorage.removeItem('userToken')
        setUserData(null)
        navigate('/login')
    }
    return(
        <>
            <i className="fa fa-sign-out fs-3 px-2" aria-hidden="true" onClick={()=>logOut()} id="logOut-icon"></i>
        </>
    )
}