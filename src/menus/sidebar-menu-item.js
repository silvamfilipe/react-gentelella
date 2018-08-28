import React, { Component } from 'react';
import {MENU_CLICK} from "./menu-actions";

class SideBarMenuItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            className: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }

    handleOtherClick(event) {
        if (event.detail === this) {
            return;
        }

        this.setState({ className: '' });
    }

    componentWillMount() {
        document.addEventListener(MENU_CLICK, this.handleOtherClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener(MENU_CLICK, this.handleOtherClick, false);
    }

    handleClick() {
        const event = new CustomEvent(MENU_CLICK, { detail: this });
        document.dispatchEvent(event);
        this.setState({ className: 'active' });
    }

    render() {
        return (
            <li onClick={this.handleClick} className={this.state.className}>
                { this.props.children }
            </li>
        );
    }
}

export default SideBarMenuItem;