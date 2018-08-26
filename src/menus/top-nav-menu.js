import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {MENU_CLICK} from "./menu-actions";

class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.menuWasClicked = this.menuWasClicked.bind(this);

    }

    handleToggle() {
        const open = ! this.state.open;
        this.setState({ open });
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
        document.addEventListener(MENU_CLICK, this.menuWasClicked, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
        document.removeEventListener(MENU_CLICK, this.menuWasClicked, false);
    }

    menuWasClicked() {
        this.setState({ open: false });
    }

    handleClick(event) {
        if (this.node.contains(event.target)) { return; }
        this.setState({ open: false });
    }

    render() {
        const { label } = this.props;
        const { open } = this.state;
        return (
            <li ref={ node => this.node = node} className={ open ? "open" : ""}>
                <a onClick={this.handleToggle} href="javascript:" className="user-profile dropdown-toggle" data-toggle="dropdown"
                   aria-expanded="false">
                    { label }
                    &nbsp;<span className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu dropdown-usermenu pull-right">
                    { this.props.children }
                </ul>
            </li>
        );
    }
}

TopMenu.propTypes = {
    label: PropTypes.any.isRequired
};

TopMenu.defaultProps = {
    label: (
        <Fragment>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt=""/> John Doe
        </Fragment>
    )
};

export default TopMenu;