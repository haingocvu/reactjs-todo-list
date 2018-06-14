import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
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
        );
    }
}

export default Search;
