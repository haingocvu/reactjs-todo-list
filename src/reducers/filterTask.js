import * as actionTypes from "./../constants/index";

let initialState = {
    filterName: '',
    filterStatus: -1
};
let myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.FILTER_TASKS:
            return {
                ...state,
                filterName: action.filter.filterName,
                filterStatus: action.filter.filterStatus
            };
        default:
            return state;
    }
}

export default myReducer;