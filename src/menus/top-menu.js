import React, { Component } from 'react'

class TopMenu extends Component {

  render() {
    const { children } = this.props;
    return (
      <ul className="nav navbar-nav navbar-right">
        { children }
      </ul>
    )
  }
}

export default TopMenu;
