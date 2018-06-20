import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Action from './components/Action';
import TaskList from './components/TaskList';
import { connect } from "react-redux";
import * as actions from "./actions/index";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onToggleForm = () => {
        if(this.props.editingTask) {
            //if exists editingtask, then clear it and open form.
            this.props.onClearEditingTask();
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm()
        }
    }

    render() {
        let {isDisplayForm} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text text-info text-center">Todo List</h1>
                </div>
                <hr />
                <div className="row">
                    <div className={isDisplayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                        {/* add task */}
                        <TaskForm />
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
                        <Action />
                        {/* list */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        editingTask: state.editingTask
    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onClearEditingTask: () => {
            dispatch(actions.clearEditingTask())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProp)(App);
