import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, HelpBlock } from 'react-bootstrap';

import ToggleButtonOption from "./toggle-button-option";
import { retrieveValue } from './field';

class ToggleButtonGroup extends Component {

  constructor(props) {
    super(props);
    this.prepareState(props.children);
  }

  retrieveValue = props => {
    const { name, formProps } = props;
    if ((!formProps || !formProps.values) && props.hasOwnProperty('value')) return null;
    if (!formProps.values) return null;

    if (formProps.values.hasOwnProperty(name)) {
      return formProps.values[name];
    }
  };

  prepareState = (children, childOptions = {}) => {
    const { name } = this.props;
    const value = this.retrieveValue(this.props);

    for (let childKey in children) {
      if (children.hasOwnProperty(childKey)) {
        const { props } = children[childKey];
        const key = hash();
        childOptions[key] = {key: key, ...props, onChange: this.handleOptionChange, onBlur: this.handleOptionBlur, name }
      }
    }

    this.state = { value, childOptions };
    this.updateValue(value);
  };

  updateValue = value => {

    const { childOptions } = this.state;
    for (let optionKey in childOptions) {
      if (childOptions.hasOwnProperty(optionKey)) {
        childOptions[optionKey] = { ...childOptions[optionKey], checked: value === childOptions[optionKey].value }
      }
    }

    return childOptions;
  };

  handleOptionChange = (e, value) => {
    const { handleChange } = this.props.formProps;
    const childOptions = this.updateValue(value);

    if (handleChange) { handleChange(e); }

    this.setState({ value, childOptions });
  };

  handleOptionBlur = e => {
    const { handleBlur } = this.props.formProps;
    if (handleBlur) { handleBlur(e); }
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const value = this.retrieveValue(nextProps);
    if (value === this.state.value) return;

    this.setState({value: this.updateValue(value)});
  }

  renderChildOptions = () => {
    const { childOptions } = this.state;
    let optionsJSX = [];

    for (let optionKey in childOptions) {
      if (childOptions.hasOwnProperty(optionKey)) {
        optionsJSX.push(<ToggleButtonOption { ...childOptions[optionKey] }/>);
      }
    }

    return optionsJSX;
  };

  render() {
    const { name, label, required } = this.props;
    const requiredTag = required ? <span className="required">*</span> : '';
    const touched = retrieveValue('touched', this.props);
    const error = retrieveValue('error', this.props);
    const isInvalid = touched && error;
    const validationState = isInvalid ? 'error' : null;

    return (
      <FormGroup validationState={ validationState }>
        <label htmlFor={name} className="control-label col-md-3 col-sm-3 col-xs-12">{ label } {requiredTag}</label>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="btn-group" data-toggle="buttons">
            { this.renderChildOptions() }
          </div>
        </div>

        { isInvalid
          ? <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3">
              <HelpBlock>{ error }</HelpBlock>
            </div>
          </div>
          : ''
        }
      </FormGroup>
    );
  }
}

ToggleButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool.isRequired,
  formProps: PropTypes.object
};

ToggleButtonGroup.defaultProps = {
  required: false,
  formProps: null,
  label: ''
};

const hash = () => Date.now().toString()+Math.random().toString().replace('.','');

export default ToggleButtonGroup;
