import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        }
    }
    
    closeForm = ()=>{
        this.props.onCloseForm();
    }

    onHandleChange = (event)=>{
        let target = event.target;
        let ename = target.name;
        let evalue = (target.type === 'checkbox')?target.checked:target.value;
        if(ename === 'status') evalue = (evalue === 'true')?true:false;
        this.setState({
            [ename]: evalue
        })
    }

    onHandleSubmit = (event)=>{
        event.preventDefault();
        this.props.onReceivedTask(this.state);
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
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onHandleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select 
                                name="status" 
                                className="form-control"
                                value={this.state.status}
                                onChange={this.onHandleChange}
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Hide</option>
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
