import {createStore} from 'redux';
import { toggleStatus, actionSort } from "./action/index";
import myProducer from "./reducer/index";

const store = createStore(myProducer);

// let action = {
//     type: 'toggleStatus'
// }
//before dispatch
console.log('default', store.getState());

store.dispatch(toggleStatus());

//after dispatch
console.log('toggle status', store.getState());

// let actionSort = {
//     type: 'sort',
//     sort: {
//         by: 'name',
//         value: -1
//     }
// }

store.dispatch(actionSort(
    {
        by: 'name',
        value: -1
    }
));

//after sort
console.log("sort ",store.getState());