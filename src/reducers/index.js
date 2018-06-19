import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";

const Myreducer = combineReducers({
    tasks,//task: task
    isDisplayForm//isDisplayForm: isDisplayForm
});

export default Myreducer;