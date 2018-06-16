let initialState = {
    by: 'name',
    value: 1
}

let myProducer = (state = initialState, action)=>{
    if(action.type === 'SORT') {
        var {by, value} = action.sort;
        state = {
            by,
            value
        }
    }
    return state;
}
export default myProducer