import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import style from '../Pages/todo.module.css'
import { logout } from '../Redux/Action'


const Navbar = () => {
  const {isAuth}=useSelector((state)=>state.Login)
  const navigate=useNavigate()
  const dispatch=useDispatch()


const Handlelogout=()=>{
  dispatch(logout())
  navigate("/login")
}

  return (
    <div className={style.navbarmain}>
      <Link to="/login">{isAuth ? "":"Login"}</Link>
      <Link to="/">HOME</Link>
      <button className={style.logbtn} onClick={Handlelogout}>{isAuth ? "Logout":""}</button>

      
    </div>
  )
}

export default Navbar