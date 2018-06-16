import status from "./status";
import sort from "./sort";
import { combineReducers } from "redux";

const myProducer = combineReducers({
    status,
    sort
})
export default myProducer