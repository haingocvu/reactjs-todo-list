import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text text-info text-center">Todo List</h1>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/* add task */}
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Add Task
                                    <i className="far fa-times-circle text-right"></i>
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
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {/* add task */}
                        <div>
                            <button type="button" className="btn btn-primary">
                                <i className="fas fa-plus mr-5"></i>Add Task
                            </button>
                        </div>
                        {/* search and sort */}
                        <div className="row mt-15">
                            {/* search */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter search key" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default">
                                            <i className="fas fa-search mr-5"></i>Search
                                        </button>
                                    </span>
                                </div>
                            </div>
                            {/* sort */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort
                                    &nbsp;<span className="fas fa-caret-square-down"></span></button>
                                    <ul className="dropdown-menu">
                                        <li><a><i className="fas fa-sort-alpha-down mr-5"></i>Name A-Z</a></li>
                                        <li><a><i className="fas fa-sort-alpha-up mr-5"></i>Name Z-A</a></li>
                                        <li><a>Active</a></li>
                                        <li><a>Hide</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* list */}
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                
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
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
