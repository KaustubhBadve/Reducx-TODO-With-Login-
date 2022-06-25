import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Action'
import style from './todo.module.css'



const Login = () => {
    const Emailref = useRef()
    const Passref = useRef()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {isAuth}=useSelector((state)=>state.Login)


    const HandleLogin=()=>{
      dispatch(login({
        email:Emailref.current.value,
        password:Passref.current.value
      }))
    }

    useEffect(() => {
      if(isAuth)
      {
        navigate("/")
      }
    }, [isAuth])
    

  return (
    <div>
        <h1 className={style.head}>Login</h1>
        <br /><br />
        <label>
            Email : 
            <input  type="text" placeholder='Enter Your Email' ref={Emailref} />
        </label>
      
        <br />
        <label>
            Password : 
            <input  type="text" placeholder='Enter Your Email' ref={Passref} />
        </label>
        
        <br /><br />
        <button className={style.ADD} onClick={HandleLogin}>Login</button>
    </div>
  )
}

export default Login