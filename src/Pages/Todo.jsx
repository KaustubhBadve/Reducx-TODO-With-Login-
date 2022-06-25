import React from 'react'
import Todoinput from './Todoinput'
import TodoList from './TodoList'
import style from './todo.module.css'
import Total from './Total'


const Todo = () => {
  return (
    <div>
        <h1 className={style.head}>TODO APP</h1>
        <Todoinput/>
        <TodoList/>
        <Total />
    </div>
  )
}

export default Todo