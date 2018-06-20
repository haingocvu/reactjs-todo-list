import * as actionTypes from "./../constants/index";

let initialState = {
    sortBy: 'name',
    sortValue: 1
};
let myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.SORT_TASK:
            return {...state, sortBy: action.sort.by, sortValue: action.sort.value}
        default:
            return state;
    }
}

export default myReducer;