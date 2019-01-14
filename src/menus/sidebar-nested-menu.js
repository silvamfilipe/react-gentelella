import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

class SideBarNestedMenu extends Component {

    state = {
        open: false
    };

    wrapperRef = null;

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    setWrapperRef  = node => this.wrapperRef = node;

    handleClickOutside = e => {
        if (!this.state.open) return;

        if (!document.body.className.match(/(nav-sm)/i)) return;

        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.setState({open: false});
        }
    };

    handleClickInSideMenu = e => {
        if (!this.state.open) return;

        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.setState({open: false});
        }
    };

    handleClickMenuItem = e => {
        if (this.state.open && document.body.className.match(/(nav-sm)/i)) {
            this.setState({open: false});
        }
    };

    componentDidMount() {
        document.getElementById('sidebar-menu').addEventListener('mousedown', this.handleClickInSideMenu);
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('onClickMenuItem', this.handleClickMenuItem);
    }

    componentWillUnmount() {
        document.getElementById('sidebar-menu').removeEventListener('mousedown', this.handleClickInSideMenu);
        document.removeEventListener('onClickMenuItem', this.handleClickMenuItem);
    }

    render() {
        const {children, icon, label } = this.props;
        const activeStateClass = this.state.open ? 'active' : '';
        const iconElement = icon ? <i className={"fa fa-" +  icon}/> : '';

        return(

            <li ref={ this.setWrapperRef } className={ activeStateClass }>
                <a onClick={ this.handleClick }>
                    { iconElement } { label }&nbsp; <span className="fa fa-chevron-down"/>
                </a>
                <CSSTransition
                    in={this.state.open}
                    classNames="slide"
                    timeout={700}
                >
                    <ul className="nav child_menu">
                        { children }
                    </ul>
                </CSSTransition>
            </li>

        );
    }
}

SideBarNestedMenu.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string.isRequired
};

SideBarNestedMenu.defaultProps = {
    icon: null
};

export default SideBarNestedMenu;
