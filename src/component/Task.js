import React from 'react'
import { useDispatch } from 'react-redux'
import { editToDo,editCheck } from '../redux/actions/toDoActions'
import { useRef } from 'react'
const Task = ({toDo}) => {
    const dispatch = useDispatch()
    const x=useRef()
    const y=useRef()

  return (
    <div>
        <h2>{toDo.description}</h2>
        <h2>{toDo.isDone ? "Done" : "Not done"}</h2>
        <div> 
        <input type="text" placeholder='edit' ref={x}/>
        <input type="submit" onClick={() => {console.log(x);dispatch(editToDo({id:toDo.id,description:x.current.value}))}}/>
        <input type='checkbox' ref={y} onClick={() => {console.log(x);dispatch(editCheck({isDone:y.current.checked}))}}/>
        
    

        </div>

    </div>
  )
}

export default Task