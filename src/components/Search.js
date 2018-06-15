import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    HandleChange = (event)=>{
        let target = event.target;
        let name= target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    HandleSearch = ()=>{
        this.props.onSearch(this.state.keyword);
    }
    
    render() {
        let {keyword} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter search key" 
                        name="keyword"
                        value={keyword}
                        onChange={this.HandleChange}
                    />
                    <span className="input-group-btn">
                        <button 
                            type="button" 
                            className="btn btn-default"
                            name="search"
                            onClick={this.HandleSearch}
                        >
                            <i className="fas fa-search mr-5"></i>Search
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
