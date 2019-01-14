import React from 'react';
import PropTypes from 'prop-types';

const SidebarMenuSection = ({ children, title }) => (
  <div className="menu_section">
    <h3>{ title }</h3>
    <ul className="nav side-menu">
      { children }
    </ul>
  </div>
);

SidebarMenuSection.propTypes = {
  title: PropTypes.string.isRequired
};

export default SidebarMenuSection;
