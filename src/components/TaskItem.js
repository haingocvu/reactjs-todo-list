import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskItem extends Component {
    onUpdateMyStatus = ()=>{
        this.props.onUpdateStatusTask(this.props.task.id)
    }

    deleteItem = ()=>{
        this.props.onDeleteTaskItem(this.props.task.id);
        this.props.onCloseForm();
    }

    editTask = ()=>{
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    render() {
        let {index, task} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td className="text-center">
                    {task.name}   
                </td>
                <td className="text-center">
                    <span 
                        className={task.status?"label label-success":"label label-danger"}
                        onClick={this.onUpdateMyStatus}
                    >
                    {task.status?"Active":"Hide"}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.deleteItem}
                    >
                        <i className="fas fa-trash-alt mr-5"></i>Delete
                    </button>&nbsp;
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={this.editTask}
                    >
                        <i className="fas fa-edit mr-5"></i>Edit
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStatesToProps = state => {
    return {

    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onUpdateStatusTask: id => {
            dispatch(actions.updateStatusTask(id))
        },
        onDeleteTaskItem: id => {
            dispatch(actions.deleteTaskItem(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask: id => {
            dispatch(actions.editTask(id))
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProp)(TaskItem);
