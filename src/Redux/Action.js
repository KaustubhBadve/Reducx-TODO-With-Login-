import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Action.type"
import axios from 'axios'
export const getTodo=()=>(dispatch)=>{
    dispatch({type:GET_TODO_LOADING})

    axios.get("http://localhost:8080/TODOSERVER").then((r)=>{
        dispatch({type:GET_TODO_SUCCESS,payload:r.data})
    })
    .catch(()=>{
        dispatch({type:GET_TODO_ERROR})
    })
}

export const addTodo=(payload)=>(dispatch)=>{
    dispatch({type:ADD_TODO_LOADING})

    axios.post("http://localhost:8080/TODOSERVER",payload).then((r)=>{
        dispatch({type:ADD_TODO_SUCCESS,payload:r.data})
    })
    .catch(()=>{
        dispatch({type:ADD_TODO_ERROR})
    })
}



                  //Login logout 



export const login=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_LOADING})

    axios.post("https://reqres.in/api/login",payload).then((r)=>{
        dispatch({type:LOGIN_SUCCESS,payload:r.data})
    })
    .catch(()=>{
        dispatch({type:LOGIN_ERROR})
    })
}

export const logout=()=>(dispatch)=>{

    dispatch({type:LOGOUT_SUCCESS})

}

