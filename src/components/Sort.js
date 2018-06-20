import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: 'name',
                value: 1
            }
        }
    }

    sort = (name, value)=>{
        this.setState({
           sort: {
               by: name,
               value: value
           }
        }, ()=>{
            this.props.onSort(this.state.sort)
        })
    }
    
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort
                    &nbsp;<span className="fas fa-caret-square-down"></span></button>
                    <ul className="dropdown-menu">
                        <li onClick={()=>this.sort('name', 1)}><a><i className="fas fa-sort-alpha-down mr-5"></i>
                            Name A-Z 
                            <span className={(this.state.sort.by==='name'&&this.state.sort.value===1)?'fas fa-check ml-5':''}/></a>
                        </li>
                        <li onClick={()=>this.sort('name', -1)}><a><i className="fas fa-sort-alpha-up mr-5"></i>
                            Name Z-A
                            <span className={(this.state.sort.by==='name'&&this.state.sort.value===-1)?'fas fa-check ml-5':''}/></a>
                        </li>
                        <li onClick={()=>this.sort('status', 1)}><a>
                            Active
                            <span className={(this.state.sort.by==='status'&&this.state.sort.value===1)?'fas fa-check ml-5':''}/></a>
                        </li>
                        <li onClick={()=>this.sort('status', -1)}><a>
                            Hide 
                            <span className={(this.state.sort.by==='status'&&this.state.sort.value===-1)?'fas fa-check ml-5':''}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onSort: sort => {
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Sort);
