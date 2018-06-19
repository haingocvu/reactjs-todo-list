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

const toggleForm = () => {
    return {
        type: actionTypes.TOGGLE_FORM
    }
}

const closeForm = () => {
    return {
        type: actionTypes.CLOSE_FORM
    }
}

const openForm = () => {
    return {
        type: actionTypes.OPEN_FORM
    }
}

export {listALl, addTask, toggleForm, closeForm, openForm};