import React, { Component } from 'react';
import {MENU_CLICK} from "./menu-actions";

class TopMenuItem extends Component {

    constructor(props) {
        super(props);
    }

    static handleClick() {
        const event = new Event(MENU_CLICK);
        document.dispatchEvent(event);
    }

    render() {
        return (
            <li onClick={ TopMenuItem.handleClick }>
                { this.props.children }
            </li>
        );
    }
}

export default TopMenuItem;