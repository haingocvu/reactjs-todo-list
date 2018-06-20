import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import editingTask from "./editingTask";
import filterTask from './filterTask';
import searchTask from './searchTask';
import sortTask from "./sortTask";

const Myreducer = combineReducers({
    tasks,//task: task
    isDisplayForm,//isDisplayForm: isDisplayForm
    editingTask,
    filterTask,
    searchTask,
    sortTask
});

export default Myreducer;