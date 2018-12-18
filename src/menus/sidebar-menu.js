import React from 'react';

const SidebarMenu = ({ children }) => (
  <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
    <br />
    { children }
  </div>
);

export default SidebarMenu;
