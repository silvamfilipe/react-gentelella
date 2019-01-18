import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HelpBlock} from "react-bootstrap";

import {prepareProps, retrieveValue} from "./field";

class Checkbox extends Component {

  handleChange = (e, value) => {
    const {name, formProps} = this.props;
    if (formProps && formProps.setFieldValue) {
      if (e.target.checked) {
        formProps.setFieldValue(name, value);
        return;
      }

      formProps.setFieldValue(name, undefined);

    }

  };

  render() {
    const { name, label, value } = this.props;
    const touched = retrieveValue('touched', this.props);
    const error = retrieveValue('error', this.props);
    const isInvalid = touched && error;
    const validationState = isInvalid ? 'checkbox has-error' : 'checkbox';

    return (
      <div className={ validationState }>
        <label htmlFor={ name }>
          <input type="checkbox" id={ name } { ...prepareProps(this.props) } onChange={ e => this.handleChange(e, value) } />
          { label }
        </label>
        { isInvalid
          ? <HelpBlock>{ error }</HelpBlock>
          : ''
        }
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  onChange: (e, value) => {},
};

export default Checkbox;
