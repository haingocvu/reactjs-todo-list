import * as actionTypes from "./../constants/index";
import {randomString} from "./../ultils/random";
import { findIndex } from "lodash";

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data?data:[];
let myReducer = (state = initialState, action)=>{
    let taskIndex = -1;
    switch (action.type) {
        case actionTypes.LIST_ALL_TASK:
            return state;
        case actionTypes.SAVE_TASK:
            let task = {
                id: randomString(10),
                name: action.task.name,
                status: action.task.status
            };
            if(action.task.id || action.task.id === 0) {
                //edit task
                task.id = action.task.id;
                taskIndex = findIndex(state, mtask => {
                    return mtask.id === action.task.id
                });
                if(taskIndex || taskIndex === 0) {
                    state[taskIndex] = task;
                }
            }else {
                //add task
                state.push(task);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            //khi thay doi state. phai tra ve 1 state moi bang cu phap es6. giong ham map. no se tra ve 1 array moi tu array cu.
            return [...state];
        case actionTypes.UPDATE_STATUS_TASK:
            taskIndex = findIndex(state, task => {
                return task.id === action.id
            });
            if(taskIndex || taskIndex === 0) {
                let cloneTask = {
                    ...state[taskIndex],
                    status: !state[taskIndex].status
                };
                state.splice(taskIndex, 1, cloneTask);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case actionTypes.DELETE_TASK_ITEM:
            taskIndex = findIndex(state, task => {
                return task.id === action.id
            });
            if(taskIndex || taskIndex === 0) {
                state.splice(taskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state]; 
        default:
            return state;
    }
}

export default myReducer;