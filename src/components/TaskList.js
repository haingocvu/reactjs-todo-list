import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        let {tasks} = this.props;
        let ElementTasks = tasks.map((task, index)=>{
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task} 
                        onUpdateItemStatus={this.props.onUpdateStatus}
                        onDeleteItem={this.props.ondeleteTaskItem}
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
                            <input type="text" name="" className="form-control" />    
                        </td>
                        <td>
                            <select name="" className="form-control">
                                <option value="">All</option>
                                <option value="">Active</option>
                                <option value="">Hide</option>
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

export default TaskList;
