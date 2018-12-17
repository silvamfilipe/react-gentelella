import React from 'react';

const Footer = ({ children }) => (
    <footer id="footer">
        <div className="pull-right">
            { children }
        </div>
        <div className="clearfix"/>
    </footer>
);

export default Footer;

