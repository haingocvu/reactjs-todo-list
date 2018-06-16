import * as types from "./../constant/ActionType";

const toggleStatus = ()=>{
    return {
        type: types.TOGGLE_STATUS
    }
}

const actionSort = (sort)=>{
    return {
        type: types.SORT,
        sort //sort: sort
    }
}

export {toggleStatus, actionSort}