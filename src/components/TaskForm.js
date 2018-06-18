import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTask } from "./../actions/index";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
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
        if(this.state.name.trim().length && (this.state.status === true || this.state.status === false)){
            this.props.onAddTask(this.state)
            this.onClear();
        }
        this.closeForm();
    }

    onClear = ()=>{
        this.setState({
            name: '',
            status: false
        })
        this.closeForm();
    }

    componentWillMount() {
        if(this.props.EditingTask !== null) {
            this.setState({
                id: this.props.EditingTask.id,
                name: this.props.EditingTask.name,
                status: this.props.EditingTask.status
            })
        }
    }
    
    componentWillReceiveProps(nextProp) {
        //if has editingtask prop
        if(nextProp.EditingTask !== null) {
            this.setState({
                id: nextProp.EditingTask.id,
                name: nextProp.EditingTask.name,
                status: nextProp.EditingTask.status
            })
        }else{ // if it === null
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.state.id !== ""?"Edit Task":"Add Task"}
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
                            <button  
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onClear}
                            >
                                <i className="fas fa-window-close mr-5"></i>Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: task => {
            dispatch(addTask(task))
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(TaskForm);
