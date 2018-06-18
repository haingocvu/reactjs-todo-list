import * as actionTypes from "./../constants/index";
let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data?data:[];
let myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.LIST_ALL_TASK:
            return state;
        default:
            return state;
    }
}

export default myReducer;