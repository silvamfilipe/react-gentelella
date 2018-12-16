import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ children }) => (
  <div className='col-md-3 left_col'>
    <div className='left_col scroll-view'>
      { children }
    </div>
  </div>
)

Sidebar.propTypes = {
  children: PropTypes.any
}

export default Sidebar
