import { v4 as uuidv4 } from 'uuid';

const toDoReducer=(state=[{id:uuidv4(),
description:"dzajdhazdh",
isDone:true
}],action)=>{
    switch (action.type) {
        case "ADDTODO":
            return [...state,action.payload]
            break;

          /*   case "EDITTODO":
            return state.map(el=>(el.id==action.payload.id)?{...el,description:action.payload.description}:(el.id==action.payload.id && action.payload.isDone!=undefined)? {...el,isDone:action.payload.isDone}: el)
            break; */
            case "EDITTODO":
  return state.map(el => (el.id === action.payload.id) ? { ...el, description: action.payload.description } : el);
        break;
            
            case "EDITCHECK":
            return state.map(elem => (action.payload.isDone!=undefined) ? {...elem,isDone:action.payload.isDone}: elem);
            break;
                
                case "EDITCHECK":
            break;
        default:
            return state
            break;
    }
}
export default toDoReducer