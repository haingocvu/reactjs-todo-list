import React, { Component } from 'react';

class TaskForm extends Component {
    closeForm = ()=>{
        this.props.onCloseForm();
    }
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Add Task
                        <i 
                            className="far fa-times-circle text-right"
                            onClick={this.closeForm}
                        ></i>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select name="" className="form-control">
                                <option value="1">Active</option>
                                <option value="0">Hide</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">
                                <i className="fas fa-save mr-5"></i>Save
                            </button>&nbsp;
                            <button type="submit" className="btn btn-danger">
                                <i className="fas fa-window-close mr-5"></i>Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
