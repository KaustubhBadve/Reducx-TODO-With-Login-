import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './todo.module.css'


const Total = () => {
    const [todo, settodo] = useState([])

    let count=0
    useEffect(() => {
      axios.get("http://localhost:8080/TODOSERVER").then((r)=>{
        settodo(r.data)
        console.log(todo)
      })
      
     
    }, [])
    
    for(let i=0;i<todo.length;i++)
    {
       if(todo[i].isCompleted===true)
       {
        count++
       }
    }

  return (
    <div className={style.totall}>
        <h3>Total Todos : {todo.length}</h3>
        <h3>Completed Todos : {count}</h3>
        <h3>Pending Todos : {todo.length-count}</h3>
    </div>
  )
}

export default Total