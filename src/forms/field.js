import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, HelpBlock } from 'react-bootstrap';

const Field = props => {
  const { type, name, label, required} = props;
  const requiredTag = required ? <span className="required">*</span> : '';
  const touched = retrieveValue('touched', props);
  const error = retrieveValue('error', props);
  const isInvalid = touched && error;
  const validationState = isInvalid ? 'error' : null;
  const inputClass = isInvalid ? 'form-control col-md-7 col-xs-12 parsley-error' : 'form-control col-md-7 col-xs-12';

  return (
    <FormGroup validationState={ validationState }>
      <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>{ label } { requiredTag }
      </label>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <input
          type={ type }
          id={ name }
          name={ name }
          required={required}
          className={inputClass}
          { ...prepareProps(props) }
        />
        { isInvalid
          ? <HelpBlock>{ error }</HelpBlock>
          : ''
        }
      </div>
    </FormGroup>
  );
};

export const prepareProps = props => {
  const { formProps } = props;
  const cleanProps = { ...props };
  delete cleanProps.formProps;
  addHandlers(formProps, cleanProps);
  addValue(formProps, cleanProps);
  return cleanProps;
};

export const retrieveValue = (property, props) => {
  const propNames = ['value', 'error', 'touched'];
  const formPropNames = ['values', 'errors', 'touched'];
  let results = [];

  const { formProps, name } = props;

  for (let i=0; i<propNames.length; i++) {
    if (props.hasOwnProperty(propNames[i])) {
      results[propNames[i]] = props[propNames[i]];
      continue;
    }

    if (
      formProps &&
      formProps.hasOwnProperty(formPropNames[i]) &&
      formProps[formPropNames[i]].hasOwnProperty(name)
    ) {
      results[propNames[i]] = formProps[formPropNames[i]][name];
      continue;
    }

    results[propNames[i]] = null;
  }

  return results[property];

};

const addHandlers = (formProps, props) => {
  const property = ['onBlur', 'onChange'];
  const handlers = ['handleBlur', 'handleChange'];
  let handler;

  for (let i = 0; i < handlers.length; i++) {
    handler = props.hasOwnProperty(property[i])
      ? props[property[i]]
      : formProps.hasOwnProperty(handlers[i])
          ? formProps[handlers[i]]
          : null;

    if (handler) props[property[i]] = handler;
  }
};

const addValue = (formProps, props) => {
  if (!formProps.values && props.hasOwnProperty('value')) return;

  if (!formProps.values) return;

  const name = props.name;

  props.value = '';
  if (formProps.values.hasOwnProperty(name)) {
    props.value = formProps.values[name];
  }
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool.isRequired,
  formProps: PropTypes.object
};

Field.defaultProps = {
  type: 'text',
  required: false,
  formProps: null,
  label: ''
};

export default Field;
