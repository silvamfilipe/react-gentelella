import React from 'react';

const TopNavigation = ({ children }) => (
  <div className="top_nav">
    <div className="nav_menu" style={{ minHeight: '57px' }}>
      <nav>
        <div className="nav toggle">
          <a id="menu_toggle"><i className="fa fa-bars"/></a>
        </div>
        { children }
      </nav>
    </div>
  </div>
)

export default  TopNavigation;
