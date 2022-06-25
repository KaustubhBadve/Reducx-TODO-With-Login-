import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Action.type";

let token=localStorage.getItem("token") || ""

const Inistate={
    isAuth: token ? true :false,
    isLoading:false,
    error:false,
    token:token || ""
}

export const LoginReducer=(state=Inistate,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:{
            return {...state,isLoading:true}
        }
        case LOGIN_SUCCESS:{
            localStorage.setItem("token",payload.token)
            return {...state,isAuth:true,isLoading:false}
        }
        case LOGIN_ERROR:{
            return {...state,error:true,isLoading:false,isAuth:false}
        }
        case LOGOUT_SUCCESS:{
            localStorage.removeItem("token")
            return {...state,isAuth:false}
        }
        default:{
            return state
        }
    }
}