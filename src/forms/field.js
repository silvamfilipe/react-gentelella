import React from 'react';
import PropTypes from 'prop-types';

const Field = props => {
  const { type, name, label, required} = props;
  const requiredTag = required ? <span className="required">*</span> : '';

  return (
    <div className="form-group">
      <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>{ label } { requiredTag }
      </label>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <input
          type={ type }
          id={ name }
          name={ name }
          required={required}
          className="form-control col-md-7 col-xs-12"
          { ...prepareProps(props) }
        />
      </div>
    </div>
  );
};

export const prepareProps = props => {
  const { formProps } = props;
  console.log(formProps);
  const cleanProps = { ...props };
  delete cleanProps.formProps;
  addHandlers(formProps, cleanProps);
  addValue(formProps, cleanProps);
  return cleanProps;
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
