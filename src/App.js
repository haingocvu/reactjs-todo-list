import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Action from './components/Action';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false
        }
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem("tasks")) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem("tasks"))
            })
        }
    }

    randomString(length) {
        //62
        let src = "1234567890zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP";
        let str = "";
        for (let index = 0; index < length; index++) {
            str += src.substr(Math.floor(Math.random()*src.length), 1);
        }
        return str;
    }

    onToggleForm = ()=>{
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }
    
    onCloseForm = ()=>{
        this.setState({
            isDisplayForm: false
        })
    }

    onReceivedTask = (data)=>{
        let task = {
            id: this.randomString(10),
            name: data.name,
            status: data.status
        };
        let {tasks} = this.state;
        tasks.push(task);
        this.setState({
            tasks: tasks
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    updateStatus = (id)=>{
        let {tasks} = this.state;
        tasks.forEach(task => {
            if(task.id === id) {
                return task.status = !task.status
            }
        });
        this.setState({
            tasks: tasks
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
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

    render() {
        let {tasks, isDisplayForm} = this.state;
        let elmForm = isDisplayForm?<TaskForm 
                                        onCloseForm={this.onCloseForm} 
                                        onReceivedTask={this.onReceivedTask}
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
                        <Action />
                        {/* list */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks} 
                                    onUpdateStatus={this.updateStatus}
                                    ondeleteTaskItem={this.deleteTaskItem}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
