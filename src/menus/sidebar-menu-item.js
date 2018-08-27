import React, { Component } from 'react';

class SideBarMenuItem extends Component {

    render() {
        return (
            <li>
                { this.props.children }
            </li>
        );
    }
}

export default SideBarMenuItem;