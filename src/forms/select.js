import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, HelpBlock } from 'react-bootstrap'

import { retrieveValue } from './field'

class Select extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.initializeValue()
    }
  }

  initializeValue = () => {
    const { formProps, value, multiple, name } = this.props;
    const noFormProps = !formProps || !formProps.values;
    const formPropsValue = formProps && formProps.values;
    const noValue = !value && noFormProps;
    const defaultValue = multiple ? [] : '';

    if (noValue) {
      return defaultValue;
    }

    if (value) return value;

    if (formPropsValue && formProps.values[name]) {
      return formProps.values[name];
    }

    return defaultValue;
  };

  propagateValue = value => {
    const { name, formProps } = this.props;

    if (!formProps) return;

    const { setFieldValue, values } = formProps;
    if (!setFieldValue) return;

    if (values && values[name])
      setFieldValue(name, value, true);
  };

  handleChange = e => {
    const { multiple } = this.props;
    if (!multiple) {
      this.setState({ value: e.target.value });
      this.propagateValue(e.target.value);
      return;
    }

    let value = [];
    for (let i = 0; i < e.target.options.length; i++) {
      if (e.target.options[i].selected) {
        value.push(e.target.options[i].value);
      }
    }
    this.setState({ value });
    this.propagateValue(value);
  };

  handleBlur = e => {
    const { formProps } = this.props;
    if (!formProps) return;

    const { handleBlur } = formProps;
    if (handleBlur) handleBlur(e);
  };

  label = () => {
    const { label, name, required } = this.props;
    const requiredTag = required ? <span className="required">*</span> : '';

    if (!label) return;

    return  (
      <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>
        { label } { requiredTag }
      </label>
    );
  }

  layoutClass = () => {
    const { layout } = this.props;
    return layout === 'centered'
      ? 'col-md-6 col-sm-6 col-xs-12'
      : layout === 'vertical'
        ? ''
        : 'col-md-9 col-sm-9 col-xs-12';
  };

  clearProps = () => {
    const cleanProps = { ...this.props };
    delete cleanProps.formProps;
    delete cleanProps.label;
    delete cleanProps.layout;
    delete cleanProps.touched;
    delete cleanProps.error;
    delete cleanProps.value;

    return cleanProps;
  };

  render() {
    const { children, label, name } = this.props;
    const touched = retrieveValue('touched', this.props);
    const error = retrieveValue('error', this.props);
    const isInvalid = touched && error;
    const validationState = isInvalid ? 'error' : null;
    const inputClass = isInvalid ? 'form-control parsley-error' : 'form-control';


    return (
      <FormGroup validationState={ validationState }>
        { this.label() }
        <div className={ label ? this.layoutClass() : '' }>
          <select
            id={name}
            className={ inputClass }
            value={ this.state.value }
            onChange={ this.handleChange }
            onBlur={ this.handleBlur }
            { ...this.clearProps() }
          >
            { children }
          </select>
          { isInvalid
            ? <HelpBlock>{ error }</HelpBlock>
            : ''
          }
        </div>
      </FormGroup>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  required: PropTypes.bool.isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'centered']).isRequired,
  multiple: PropTypes.bool.isRequired,
  formProps: PropTypes.object,
};

Select.defaultProps = {
  label: undefined,
  required: false,
  layout: 'horizontal',
  multiple: false,
  formProps: undefined
};

export default Select;
