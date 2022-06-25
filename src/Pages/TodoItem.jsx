import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './todo.module.css'
const TodoItem = () => {
    const {id}=useParams()
    const [todo, settodo] = useState([])
    const navigate=useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:8080/TODOSERVER/${id}`).then((r)=>{
        console.log(r.data)
        settodo(r.data)
      })
    }, [])
    

 const HandleUpdate=()=>{
   navigate(`/${id}/edit`)
 }  
 
 
  return (
    <div>
       <h1 className={style.head}>TODO ID : {id}</h1>
       <h1 className={style.idpage}>Title : {todo.Title}</h1>  
       <h1 className={style.idpage}>Completion Status : {todo.isCompleted ? "Completed" : "Not Completed"}</h1>
       <br />
       <button className={style.update}  onClick={HandleUpdate}>Update</button>
    </div>
  )
}

export default TodoItem