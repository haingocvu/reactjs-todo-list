import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td className="text-center">
                    Learn Reactjs   
                </td>
                <td className="text-center">
                    <span className="label label-success">Active</span>
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
