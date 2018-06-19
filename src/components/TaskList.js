import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from "react-redux";
import * as actions from "./../actions/index";
import { filter as _filter } from "lodash";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    
    handleChange = (event)=>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        }, ()=>{
            this.props.onFilterTask(
                {
                    filterName: this.state.filterName, 
                    filterStatus: this.state.filterStatus
                }
            )
        })
    }

    render() {
        let {tasks, filterTask} = this.props;
        //filter
        let filterName = filterTask.filterName.toString().trim().toLowerCase();
        let filterStatus = parseInt(filterTask.filterStatus.toString(), 10);
        if(filterStatus === 1) filterStatus = true;
            else if(filterStatus === 0) filterStatus = false;
        tasks = _filter(tasks, task => {
            if(filterStatus === -1){
                return task.name.toString().toLowerCase().indexOf(filterName) !== -1
            } else {
                return (task.name.toString().toLowerCase().indexOf(filterName) !== -1) &&
                    (task.status === filterStatus);
            }
        })
        //end filter

        let ElementTasks = tasks.map((task, index)=>{
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task} 
                    />
        })
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                name="filterName" 
                                className="form-control" 
                                value={this.state.filterName}
                                onChange={this.handleChange}
                            />    
                        </td>
                        <td>
                            <select 
                                name="filterStatus" 
                                className="form-control"
                                value={this.state.filterStatus}
                                onChange={this.handleChange}
                            >
                                <option value={-1}>All</option>
                                <option value={1}>Active</option>
                                <option value={0}>Hide</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {ElementTasks}
                </tbody>
            </table>
        );
    }
}

const mapStatesToProps = state=>{
    return {
        tasks: state.tasks,
        filterTask: state.filterTask
    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onFilterTask: filter => {
            dispatch(actions.filterTasks(filter))
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProp)(TaskList);
