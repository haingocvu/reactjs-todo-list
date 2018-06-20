import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Action extends Component {
    render() {
        return (
            <div className="row mt-15">
                {/* search */}
                <Search />
                {/* sort */}
                <Sort />
            </div>
        );
    }
}

export default Action;
