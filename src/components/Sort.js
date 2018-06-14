import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
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
        );
    }
}

export default Sort;
