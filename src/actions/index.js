import * as actionTypes from "./../constants/index";
const listALl = ()=>{
    return {
        type: actionTypes.LIST_ALL_TASK
    }
}

const saveTask = task => {
    return {
        type: actionTypes.SAVE_TASK,
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

const updateStatusTask = id => {
    return {
        type: actionTypes.UPDATE_STATUS_TASK,
        id
    }
}

const deleteTaskItem = id => {
    return {
        type: actionTypes.DELETE_TASK_ITEM,
        id// id: id
    }
}

const editTask = task => {
    return {
        type: actionTypes.EDIT_TASK,
        task
    }
}

const clearEditingTask = () => {
    return {
        type: actionTypes.CLEAR_EDITING_TASK
    }
}

const filterTasks = filter => {
    return {
        type: actionTypes.FILTER_TASKS,
        filter
    }
}

const searchTask = keyword => {
    return {
        type: actionTypes.SEARCH_TASK,
        keyword
    }
}

export {listALl, saveTask, toggleForm, closeForm, openForm, 
    updateStatusTask, deleteTaskItem, editTask, clearEditingTask, filterTasks, searchTask};