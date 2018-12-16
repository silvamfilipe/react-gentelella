import React from 'react'
import PropTypes from 'prop-types'

const SidebarFooter = ({ children }) => (
  <div className='sidebar-footer hidden-small'>
    { children }
  </div>
);

SidebarFooter.propTypes = {
  children: PropTypes.any
}

export default SidebarFooter;
