import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopUserMenu extends Component {

  state = {
    open: false
  };

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }


  handleClick = () => {
    this.setState({open: !this.state.open})
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('onClickMenuItem', this.menuClicked);
  }

  componentWillUnmount() {
    document.removeEventListener('onClickMenuItem', this.menuClicked);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  menuClicked = (e) => {
    if (!this.state.open) return;

    this.setState({open: false});
  };

  handleClickOutside = e => {
    if (!this.state.open) return;

    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({open: false})
    }
  };

  render() {
    const openClass = this.state.open ? 'open' : '';
    const { name, picture, children } = this.props;
    return (
      <li ref={this.setWrapperRef} className={openClass}>
        <a href="#" onClick={this.handleClick} className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          { picture } { name }
          &nbsp;<span className=" fa fa-angle-down"/>
        </a>
        <ul className="dropdown-menu dropdown-usermenu pull-right">
          { children }
        </ul>
      </li>
    )
  }
}

TopUserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.any,
  children: PropTypes.any
};

TopUserMenu.defaultProps = {
  name: 'Jane Doe',
  picture: <img src="https://randomuser.me/api/portraits/women/44.jpg" alt=""/>
};

export default TopUserMenu
