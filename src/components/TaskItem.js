import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        let {index, task} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td className="text-center">
                    {task.name}   
                </td>
                <td className="text-center">
                    <span className={task.status?"label label-success":"label label-danger"}>
                    {task.status?"Active":"Hide"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-danger">
                        <i className="fas fa-trash-alt mr-5"></i>Delete
                    </button>&nbsp;
                    <button type="button" className="btn btn-warning">
                        <i className="fas fa-edit mr-5"></i>Edit
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
