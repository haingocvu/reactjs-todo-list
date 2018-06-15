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
            isDisplayForm: false,
            editingItem: null,
            filter: {
                filterName: '',
                filterStatus: -1
            },
            searchKey: ''
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
        //when not edit
        if(this.state.editingItem === null) {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm
            })
        }else{//when editing item
            this.setState({
                isDisplayForm: true,
                editingItem: null
            })
        }
    }
    
    onCloseForm = ()=>{
        this.setState({
            isDisplayForm: false
        })
    }

    onReceivedTask = (data)=>{
        //if editing task
        if(data.id !== ''){
            let {tasks} = this.state;
            tasks.forEach((task, index) => {
                if(task.id === data.id) {
                   return tasks[index] = data;
                }
            });
            this.setState({
                tasks: tasks,
                editingItem: null
            })
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }else{//when add new task
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

    render() {
        let {tasks, isDisplayForm, filter, searchKey} = this.state;
        if(filter){
            if(filter.filterName){
                tasks = tasks.filter((task, index)=>{
                    return task.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1
                })
            }
            tasks = tasks.filter((task, index)=>{
                //status -1 will take all
                if(parseInt(filter.filterStatus, 10) === -1) return task;
                let filterStatus = parseInt(filter.filterStatus, 10) === 1?true:false;
                return task.status === filterStatus;
            })
        }
        if(searchKey) {
            tasks = tasks.filter((task, index)=>{
                return task.name.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
            })
        }
        let elmForm = isDisplayForm?<TaskForm 
                                        onCloseForm={this.onCloseForm} 
                                        onReceivedTask={this.onReceivedTask}
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
                        <Action onSearch={this.Search}/>
                        {/* list */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks} 
                                    onUpdateStatus={this.updateStatus}
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

export default App;
