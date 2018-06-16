import {createStore} from 'redux';

let initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}

let Producer = (state = initialState, action)=>{
    if(action.type === 'toggle') {
        state.status = !state.status;
    }
    if(action.type === 'sort') {
        // state.sort = {
        //     by: action.sort.by,
        //     value: action.sort.value
        // }
        //lam nhu sau de tao moi 1 stage. de khong bi trung vung nho
        let {status} = state;
        let {by, value} = action.sort;
        return {
            status: status,
            sort: {
                by: by,
                value: value
            }
        }
    }
   return state;
}

const store = createStore(Producer);

let action = {
    type: 'toggle'
}
//before dispatch
console.log('default', store.getState());

store.dispatch(action);

//after dispatch
console.log('toggle status', store.getState());

let actionSort = {
    type: 'sort',
    sort: {
        by: 'name',
        value: -1
    }
}

store.dispatch(actionSort);

//after sort
console.log("sort ",store.getState());