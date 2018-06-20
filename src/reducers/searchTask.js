import * as actionTypes from "./../constants/index";

let initialState = '';
let myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.SEARCH_TASK:
            return action.keyword;
        default:
            return state;
    }
}

export default myReducer;