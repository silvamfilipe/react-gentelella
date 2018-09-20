import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {

    return props.children;
};

Tab.propTypes = {
    active: PropTypes.bool,
    title: PropTypes.any.isRequired
};

Tab.defaultProps = {
    active: false,
};

export default Tab;