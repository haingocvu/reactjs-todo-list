import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Action from './components/Action';
import TaskList from './components/TaskList';
// import _ from 'lodash';
// import {filter as myFilter} from'lodash';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm: false,
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

    // componentWillMount() {
    //     if(localStorage && localStorage.getItem("tasks")) {
    //         this.setState({
    //             tasks: JSON.parse(localStorage.getItem("tasks"))
    //         })
    //     }
    // }

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

    // onReceivedTask = (data)=>{
    //     //if editing task
    //     if(data.id !== ''){
    //         let {tasks} = this.state;
    //         tasks.forEach((task, index) => {
    //             if(task.id === data.id) {
    //                return tasks[index] = data;
    //             }
    //         });
    //         this.setState({
    //             tasks: tasks,
    //             editingItem: null
    //         })
    //         localStorage.setItem("tasks", JSON.stringify(tasks));
    //     }else{//when add new task
    //         let task = {
    //             id: this.randomString(10),
    //             name: data.name,
    //             status: data.status
    //         };
    //         let {tasks} = this.state;
    //         tasks.push(task);
    //         this.setState({
    //             tasks: tasks
    //         });
    //         localStorage.setItem("tasks", JSON.stringify(tasks));
    //     }
    // }

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

    Sort = (sort)=>{
        this.setState({
            sort: {
                by: sort.by,
                value: sort.value
            }
        })
    }

    render() {
        let {isDisplayForm} = this.state;
        // if(filter){
        //     if(filter.filterName){
        //         // tasks = tasks.filter((task, index)=>{
        //         //     return task.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1
        //         // })
        //         //use lodash
        //         // tasks = _.filter(tasks, task=>{
        //         //     return task.name.toString().toLowerCase().indexOf(filter.filterName.toString().toLowerCase()) !== -1
        //         // })
        //         //custom Lodash
        //         tasks = myFilter(tasks, task=>{
        //             return task.name.toString().toLowerCase().indexOf(filter.filterName.toString().toLowerCase()) !== -1
        //         })
        //     }
        //     tasks = tasks.filter((task, index)=>{
        //         //status -1 will take all
        //         if(parseInt(filter.filterStatus, 10) === -1) return task;
        //         let filterStatus = parseInt(filter.filterStatus, 10) === 1?true:false;
        //         return task.status === filterStatus;
        //     })
        // }
        // if(searchKey) {
        //     //search multi key. remember toString()
        //     //remember task[key]. can not use (task.key) when key is a variable.
        //     tasks = tasks.filter((task, index)=>{
        //         return Object.keys(task).some((key, index)=>{
        //             return task[key].toString().toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
        //         })
        //     })
        // }
        // if(sort) {
        //     if(sort.by === 'name') {
        //         let value = sort.value;
        //         tasks = tasks.sort((task1, task2)=>{
        //             if(task1.name.toString().toLowerCase() < task2.name.toString().toLowerCase()) return -value
        //             else if (task1.name.toString().toLowerCase() > task2.name.toString().toLowerCase()) return value
        //             else return 0;
        //         })
        //     }else{
        //         let value = sort.value;
        //         tasks = tasks.sort((task1, task2)=>{
        //             if(task1.status.toString().toLowerCase() < task2.status.toString().toLowerCase()) return value
        //             else if (task1.status.toString().toLowerCase() > task2.status.toString().toLowerCase()) return -value
        //             else return 0;
        //         })
        //     }
        // }
        let elmForm = isDisplayForm?<TaskForm 
                                        onCloseForm={this.onCloseForm} 
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
