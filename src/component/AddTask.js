import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../redux/actions/toDoActions'
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
    const x=useRef()
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" placeholder='add new to do' ref={x}/>
        <input type="submit"  onClick={()=>dispatch(addToDo({id:uuidv4(),description:x.current.value,isDone:false}))}/>
       
    </div>
  )
}

export default AddTask