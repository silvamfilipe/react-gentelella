import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideBarMenuSection extends Component {

    render() {
        const { label, children } = this.props;
        return (
            <div className="menu_section">
                <h3>{ label }</h3>
                <ul className="nav side-menu">
                    { children }
                </ul>
            </div>
        );
    }
}

SideBarMenuSection.propTypes = {
    label: PropTypes.string.isRequired
};

export default SideBarMenuSection;