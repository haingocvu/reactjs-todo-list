import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Action from './components/Action';
import TaskList from './components/TaskList';
import { connect } from "react-redux";
import * as actions from "./actions/index";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingItem: null,
            filter: {
                filterName: '',
                filterStatus: -1
            },
            searchKey: '',
            sort: {
                by: 'name',
                value: '1'
            }
        }
    }

    deleteTaskItem = (id)=>{
        let tasks = this.state.tasks;
        tasks.forEach((task, index) => {
            if(task.id === id) {
               return tasks.splice(index, 1);
            }
        });
        this.setState({
            tasks: tasks
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.onCloseForm();
    }

    EditTaskItem = id=>{
        let {tasks} = this.state;
        let editingTask = null;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                return editingTask = tasks[index];
            };
        });
        if(editingTask !== null) {
            this.setState({
                isDisplayForm: true,
                editingItem: editingTask
            })
        }
    }

    Filter = (filterName, filterStatus)=>{
        this.setState({
            filter: {
                filterName: filterName,
                filterStatus: filterStatus
            }
        })
    }

    Search = (keyword)=>{
        this.setState({
            searchKey: keyword
        })
    }

    Sort = (sort)=>{
        this.setState({
            sort: {
                by: sort.by,
                value: sort.value
            }
        })
    }

    onToggleForm = () => {
        this.props.onToggleForm();
    }

    render() {
        let {isDisplayForm} = this.props;
        let elmForm = isDisplayForm?<TaskForm 
                                        EditingTask={this.state.editingItem}
                                    />:"";
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text text-info text-center">Todo List</h1>
                </div>
                <hr />
                <div className="row">
                    <div className={isDisplayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                        {/* add task */}
                        {elmForm}
                    </div>
                    <div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        {/* add task */}
                        <div>
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={this.onToggleForm}
                                >
                                <i className="fas fa-plus mr-5"></i>Add Task
                            </button>
                        </div>
                        {/* search and sort */}
                        <Action onSort={this.Sort} onSearch={this.Search}/>
                        {/* list */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    ondeleteTaskItem={this.deleteTaskItem}
                                    onEditTaskItem={this.EditTaskItem}
                                    onFilter={this.Filter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProp)(App);
