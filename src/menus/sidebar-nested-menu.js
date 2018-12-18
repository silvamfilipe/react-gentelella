import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

class SideBarNestedMenu extends Component {

  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };



  render() {
    const { children, icon, label } = this.props;
    const activeStateClass = this.state.open ? 'active' : '';

    return(
      <li className={ activeStateClass }>
        <a onClick={ this.handleClick }>
          <i className={"fa fa-" +  icon}/>&nbsp; { label }&nbsp; <span className="fa fa-chevron-down"/>
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
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

SideBarNestedMenu.defaultProps = {
  icon: 'bookmark-o'
};

export default SideBarNestedMenu;
