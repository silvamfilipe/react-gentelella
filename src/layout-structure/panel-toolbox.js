import React from 'react';

const PanelToolbox = ({ children }) => (
    <ul className="nav navbar-right panel_toolbox">
        { children }
    </ul>
);

export default PanelToolbox;
