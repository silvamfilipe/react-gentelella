import React, { Component } from 'react'
import PropTypes from 'prop-types'

require('bootstrap/dist/css/bootstrap.css');

class Gentelella extends Component {
  componentWillMount() {
    document.body.className = 'nav-md'
  }

  render() {
    return (
      <div className={'container body'}>
        <div className={'main_container'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Gentelella.propTypes = {
  children: PropTypes.any
}

export default Gentelella
