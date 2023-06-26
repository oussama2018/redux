import {useSelector } from "react-redux";
import React from 'react'
import Task from './Task'
const ListTask = () => {
    const toDoList= useSelector(state=>state.toDoReducer)
  return (
    <div>
      
      {toDoList.map(toDo=><Task toDo={toDo}/>)}
    </div>
  )
}

export default ListTask