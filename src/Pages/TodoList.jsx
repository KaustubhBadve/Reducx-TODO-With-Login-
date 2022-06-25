import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getTodo } from '../Redux/Action'
import TodoItem from './TodoItem'
import style from './todo.module.css'
import axios from 'axios'

const TodoList = () => {
    const dispatch=useDispatch()
    const {isLoading,todo,error}=useSelector((state)=>state.TodoApp)
    const navigate=useNavigate()
    const {id}=useParams()
    const [flag, setflag] = useState(false)


    useEffect(() => {
      dispatch(getTodo())
     }, [])


if(isLoading)
{
  return <div className={style.loading}>Loading... please wait</div>
}
else if(error)
{
  return <div className={style.loading}>Error 404 Page not found</div>
}


   
    
    const Handlecheckbox=(e,id)=>{
  
      if(e.target.checked)
      {
        axios.patch(`http://localhost:8080/TODOSERVER/${id}`,{
          isCompleted: true
        })
        setflag(true)
      }
      else{
        axios.patch(`http://localhost:8080/TODOSERVER/${id}`,{
          isCompleted: false
        })
        setflag(false)
      }
    }
    
    const HandleID=(id)=>{
      navigate(`/${id}`)
    }

    const HandleDelete=(id)=>{
      axios.delete(`http://localhost:8080/TODOSERVER/${id}`)
      .then((r)=>{
         dispatch(getTodo())
      })
    }
  return (  
    <div className={style.list}>
    {todo.length && todo.map((elem)=>{
        return <div key={elem.id} className={elem.isCompleted ? style.linethrough :style.todolist}>

        <input  type="checkbox" onChange={(e)=>Handlecheckbox(e,elem.id)}/>
        <div className={style.title} onClick={()=> HandleID(elem.id)}>{elem.Title}</div> 
        <button onClick={()=>HandleDelete(elem.id)}>Delete Todo</button>
        </div>
    })}
    </div>
  )
}

export default TodoList