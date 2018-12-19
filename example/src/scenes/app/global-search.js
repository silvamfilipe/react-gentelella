import React, { Component } from 'react';
import { SearchWidget } from 'react-gentelella';

class GlobalSearch extends Component {

    state = {
        value: ''
    };

    onChange = value => this.setState({value});

    render() {
        return (
            <SearchWidget value={ this.state.value } onChange={this.onChange} />
        );
    }
}

export default GlobalSearch;
