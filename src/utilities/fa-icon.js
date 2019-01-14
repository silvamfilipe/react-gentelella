import React from 'react';
import PropTypes from 'prop-types';

const FaIcon = ({ icon }) => <i className={'fa fa-'+icon} />;

FaIcon.propTypes = {
    icon: PropTypes.string.isRequired
};

export default FaIcon;
