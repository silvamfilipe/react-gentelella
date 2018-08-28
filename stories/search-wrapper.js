import React, { Component } from 'react';

import { SearchWidget } from "../src";

class SearchWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    };

    handleOnChange(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return(
            <SearchWidget value={value} onChange={ this.handleOnChange } placeholder={"Search anything..."}/>
        );
    }
}

export default SearchWrapper;
