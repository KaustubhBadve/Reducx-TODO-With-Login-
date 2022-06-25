import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/Action'
import style from './todo.module.css'
const Todoinput = () => {
    const ref = useRef()
    const dispatch=useDispatch()
    
    const HandleADD=()=>{
      if(ref.current.value.length>0){
      dispatch(addTodo({
        Title:ref.current.value,
        isCompleted:false
      }))
    }
    ref.current.value=""
    }

  return (
    <div>
        <input className={style.input} type="text" placeholder='ADD YOUR TODO HERE' ref={ref}/>
        <br />
        <button className={style.ADD} onClick={HandleADD}>ADD</button>
        
    </div>
  )
}

export default Todoinput