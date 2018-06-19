import * as actionTypes from "./../constants/index";

let initialState = false;
let myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.TOGGLE_FORM:
            return !state;
        case actionTypes.CLOSE_FORM:
            return false;
        case actionTypes.OPEN_FORM:
            return true;
        default:
            return state;
    }
}

export default myReducer;