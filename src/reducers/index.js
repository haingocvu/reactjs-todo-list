import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import editingTask from "./editingTask";

const Myreducer = combineReducers({
    tasks,//task: task
    isDisplayForm,//isDisplayForm: isDisplayForm
    editingTask
});

export default Myreducer;