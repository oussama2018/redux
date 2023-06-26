import {useSelector } from "react-redux";
import {useEffect, useState}from 'react'
import Task from './Task'
const ListTask = () => {
  const toDoList= useSelector(state=>state.toDoReducer)
console.log(toDoList)
  const [filtre,setfiltre]=useState("All")
  const [list,setlist]=useState(toDoList)


  return (
    <div>
      {(filtre=="All")?
      toDoList.map(toDo=><Task toDo={toDo}/>):
      (filtre=="NotDone")?
      toDoList.filter(todo=>todo.isDone==false).map(toDo=><Task toDo={toDo}/>):
      toDoList.filter(todo=>todo.isDone==true).map(toDo=><Task toDo={toDo}/>)
      
      }
      <button onClick={()=>{setfiltre("All")}}>All</button>
      <button onClick={()=>{setfiltre("Done")}}>Done</button>
      <button onClick={()=>{setfiltre("NotDone")}}>NotDone</button>
    </div>
  )
}

export default ListTask