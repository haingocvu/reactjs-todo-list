import * as actionTypes from "./../constants/index";
const listALl = ()=>{
    return {
        type: actionTypes.LIST_ALL_TASK
    }
}

const addTask = task => {
    return {
        type: actionTypes.ADD_TASK,
        task
    }
}

export {listALl, addTask};