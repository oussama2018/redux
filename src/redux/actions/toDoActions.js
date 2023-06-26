export const addToDo=(data)=>{
    return {
        payload:data,
        type:"ADDTODO"
    }
}
export const editToDo=(editData)=>{
    return{
        payload:editData,
        type:"EDITTODO"
    }
}

export const editCheck=(checkData)=>{
    return{
        payload:checkData,
        type:"EDITCHECK"
    }
}