import React from "react"
import {useSelector} from 'react-redux'
import { Navigate, useLocation } from "react-router-dom"

export const RequireAuth=( {children} )=>{

    const {isAuth}=useSelector((state)=>state.Login)
    const {pathname}=useLocation()
    console.log("qqq",pathname)


    if(isAuth){
        return children
    }
    else{
      return  <Navigate to="/login" state={pathname} replace></Navigate>
    }
}