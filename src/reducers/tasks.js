import * as actionTypes from "./../constants/index";
import {randomString} from "./../ultils/random";

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data?data:[];
let myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.LIST_ALL_TASK:
            return state;
        case actionTypes.ADD_TASK:
            let task = {
                id: randomString(10),
                name: action.task.name,
                status: action.task.status
            };
            state.push(task);
            localStorage.setItem('tasks', JSON.stringify(state));
            //khi thay doi state. phai tra ve 1 state moi bang cu phap es6. giong ham map. no se tra ve 1 array moi tu array cu.
            return [...state];
        default:
            return state;
    }
}

export default myReducer;