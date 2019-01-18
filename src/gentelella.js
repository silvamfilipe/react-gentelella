import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageContentProvider from "./layout-structure/page-content-provider";


require('bootstrap/dist/css/bootstrap.css');

class Gentelella extends Component {
  componentWillMount() {
    document.body.className = 'nav-md';

    if (this.props.fixedFooter) {
      document.body.className += ' footer_fixed'
    }

    if (this.props.fixedSidebar) {
      document.body.className += ' menu_fixed'
    }
  }

  render() {
    const { children } = this.props;
    return (

      <div className={'container body'}>
        <div className={'main_container'}>
          <PageContentProvider>
          { children }
          </PageContentProvider>
        </div>
      </div>
    )
  }
}

Gentelella.propTypes = {
  children: PropTypes.any,
  fixedFooter: PropTypes.bool.isRequired,
  fixedSidebar: PropTypes.bool.isRequired
};

Gentelella.defaultProps = {
  fixedFooter: false,
  fixedSidebar: false
};

export default Gentelella
