let initialState = false;

let myProducer = (state = initialState, action)=>{
    if(action.type === 'TOGGLE_STATUS') {
        state = !state;
    }
    return state;
}
export default myProducer