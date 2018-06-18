import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from "react-redux";

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
            this.props.onFilter(this.state.filterName, this.state.filterStatus)
        })
    }

    render() {
        let {tasks} = this.props;
        let ElementTasks = tasks.map((task, index)=>{
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task} 
                        onUpdateItemStatus={this.props.onUpdateStatus}
                        onDeleteItem={this.props.ondeleteTaskItem}
                        onEdit={this.props.onEditTaskItem}
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
        tasks: state.tasks
    }
}

export default connect(mapStatesToProps, null)(TaskList);
