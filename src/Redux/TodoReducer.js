import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./Action.type"

const IniState={
    todo:[],
    isLoading:false,
    error:false
}

export const TodoReducer=(state=IniState,{type,payload})=>{
    switch(type){
        case GET_TODO_LOADING:{
            return {...state,isLoading:true}
        }
        case GET_TODO_SUCCESS:{
            return {...state,isLoading:false,todo:payload}
        }
        case GET_TODO_ERROR:{
            return {...state,isLoading:false,error:true}
        }

        case ADD_TODO_LOADING:{
            return {...state,isLoading:true}
        }
        case ADD_TODO_SUCCESS:{
            return {...state,isLoading:false,todo:[...state.todo,payload]}
        }
        case ADD_TODO_ERROR:{
            return {...state,isLoading:false,error:true}
        }
        default:{
            return state
        }
    }
}