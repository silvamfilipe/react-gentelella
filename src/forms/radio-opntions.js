import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {retrieveValue} from "./field";
import {FormGroup, HelpBlock} from "react-bootstrap";

/**
 * Radio buttons options list
 */
class RadioOptions extends Component {

  constructor(props) {
    super(props);

    const value = this.retrieveValue();
    this.state = { value };
  }

  handleChange = e => {
    const value = e.target.value;
    this.notify(value);
    this.setState({value});
  };

  handleBlur = e => {
    const { formProps } = this.props;
    const handleBlur = this.props.onBlur
      ? this.props.onBlur
      : formProps && formProps.handleBlur
        ? e => formProps.handleBlur(e)
        : () => {};

    handleBlur(e);

  };

  notify = value => {
    const { name, formProps } = this.props;
    const handleChange = this.props.onChange
      ? this.props.onChange
      : formProps && formProps.setFieldValue
        ? value => formProps.setFieldValue(name, value)
        : () => {};

    handleChange(value);
  };

  retrieveValue = () => {
    const { name, formProps } = this.props;
    const noFormProps = !formProps || !formProps.values;
    if (noFormProps && this.props.hasOwnProperty('value')) return this.props.value;

    if (formProps && formProps.values && formProps.values.hasOwnProperty(name)) {
      return formProps.values[name];
    }

    return null;
  };

  render() {
    const { label, name, options, layout, required } = this.props;
    const requiredTag = required ? <span className="required">*</span> : '';
    const touched = retrieveValue('touched', this.props);
    const error = retrieveValue('error', this.props);
    const isInvalid = touched && error;
    const validationState = isInvalid ? 'error' : null;

    const labelRender = label
      ? layout !== 'vertical'
        ? (<label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name + '0' }>{ label } { requiredTag }</label>)
        : (<label htmlFor={ name + '0' }>{ label } { requiredTag }</label>)
      : '';

    const layoutClass = layout === 'centered'
      ? 'col-md-6 col-sm-6 col-xs-12'
      : layout === 'vertical'
        ? ''
        : 'col-md-9 col-sm-9 col-xs-12';

    return (
      <FormGroup validationState={ validationState }>
        { labelRender }
        <div className={ label ? layoutClass : ''}>
          {
            options.map((element, i) => {
              const checked = element.value === this.state.value;
              return (
                <div key={i} className="radio">
                  <label htmlFor={ name + i}>

                    <input onBlur={ this.handleBlur } checked={checked} onChange={ this.handleChange } type="radio" value={ element.value } name={ name } id={ name + i}/>
                    { element.label }
                  </label>
                </div>
              )
            })
          }
          { isInvalid
            ? <HelpBlock>{ error }</HelpBlock>
            : ''
          }
        </div>
      </FormGroup>
    );
  }
}


RadioOptions.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
             PropTypes.shape({
               label: PropTypes.string.isRequired,
               value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
             })
           ).isRequired,
  formProps: PropTypes.object,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'centered']).isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func
};

RadioOptions.defaultProps = {
  label: undefined,
  formProps: undefined,
  layout: 'horizontal',
  required: false,
  onChange: undefined
};

export default RadioOptions;
