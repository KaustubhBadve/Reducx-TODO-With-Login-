import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './todo.module.css'


const TodoEdit = ({}) => {
    const ref = useRef()
    const navigate=useNavigate()
    const {id}=useParams()

    const Handleupdate=()=>{
        axios.patch(`http://localhost:8080/TODOSERVER/${id}`,{
            Title:ref.current.value
        })
        navigate("/")
    }


  return (
    <div>
        <h1 className={style.head}>Update Todo</h1>
        <br />
        <input className={style.input} type="text" placeholder='Update Here' ref={ref} />
        <br />
        <button className={style.update} onClick={Handleupdate}>Update</button>
    </div>
  )
}

export default TodoEdit