import * as actionTypes from "./../constants/index";

let initialState = {};
let myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.EDIT_TASK:
            return action.task;
        case actionTypes.CLEAR_EDITING_TASK:
            return null;
        default:
            return state;
    }
}

export default myReducer;