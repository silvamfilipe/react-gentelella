import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('bootstrap/dist/css/bootstrap.css');

class Gentelella extends Component {
  componentWillMount() {
    document.body.className = 'nav-md';

    if (this.props.fixedFooter) {
      document.body.className += ' footer_fixed'
    }
  }

  render() {
    const { children } = this.props;
    return (

      <div className={'container body'}>
        <div className={'main_container'}>
          { children }
        </div>
      </div>
    )
  }
}

Gentelella.propTypes = {
  children: PropTypes.any,
  fixedFooter: PropTypes.bool.isRequired
};

Gentelella.defaultProps = {
  fixedFooter: false
};

export default Gentelella
