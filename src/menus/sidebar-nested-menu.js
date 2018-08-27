import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'
import {NESTED_MENU_CLICK} from "./menu-actions";

class SideBarNestedMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickOther = this.handleClickOther.bind(this);
    }

    handleClickOther(event) {
        const { parent } = this.props;
        if (event.detail === parent || event.detail === this) {
            return;
        }

        this.setState({ open: false });
    }

    componentWillMount()
    {
        document.addEventListener(NESTED_MENU_CLICK, this.handleClickOther, false);
    }

    componentWillUnmount() {
        document.removeEventListener(NESTED_MENU_CLICK, this.handleClickOther, false)
    }

    handleClick() {
        const { parent } = this.props;
        const event = new CustomEvent(NESTED_MENU_CLICK, { detail: parent ? parent : this });
        document.dispatchEvent(event);
        this.setState({ open: !this.state.open });
    }


    render() {
        const { label, children, parent } = this.props;
        const childrenWithParent = React.Children.map(children, child => {
            return React.cloneElement(child, {
                parent: parent ? parent : this
            });
        });
        const component = this.state.open ? (
            <ul className="nav child_menu">
                { childrenWithParent }
            </ul>
        ) : '';
        const active = this.state.open ? 'active' : '';
        return (
            <li className={ active }>
                <a onClick={ this.handleClick }>
                    { label }
                </a>
                <CSSTransitionGroup
                    transitionName="slide"
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    { component }
                </CSSTransitionGroup>
            </li>
        );
    }
}

SideBarNestedMenu.propTypes = {
    label: PropTypes.any.isRequired
};

export default SideBarNestedMenu;