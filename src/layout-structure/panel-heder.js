import React from 'react';

const PanelHeader = ({ children }) => (
    <div className="x_title">
        { children }
        <div className="clearfix" />
    </div>
);

export default PanelHeader;