import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AccordionPanel = ({ children }) => children;

AccordionPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

AccordionPanel.defaultProps = {
  active: false
}

export default AccordionPanel;
