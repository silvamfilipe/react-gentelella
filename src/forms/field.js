import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, HelpBlock, FormControl } from 'react-bootstrap';

const Field = props => {
  const { type, name, label, required, feedback, feedbackPosition, layout} = props;
  const requiredTag = required ? <span className="required">*</span> : '';
  const touched = retrieveValue('touched', props);
  const error = retrieveValue('error', props);
  const isInvalid = touched && error;
  const validationState = isInvalid ? 'error' : null;
  const inputClass = isInvalid ? 'form-control col-md-7 col-xs-12 parsley-error' : 'form-control col-md-7 col-xs-12';
  const feedBackRender = feedback ? (
    <FormControl.Feedback>
      { feedback }
    </FormControl.Feedback>
  ) : '';
  const inputWithFeedback = !feedback
    ? inputClass
    : feedbackPosition === 'right'
      ? `${inputClass} has-feedback-right`
      : `${inputClass} has-feedback-left`;

  const labelRender = label
    ? (<label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>{ label } { requiredTag }</label>)
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
        {  feedbackPosition !== 'right' ? feedBackRender : '' }
        <input
          type={ type }
          id={ name }
          name={ name }
          required={ required }
          className={ inputWithFeedback }
          { ...prepareProps(props) }
        />
        {  feedbackPosition === 'right' ? feedBackRender : '' }
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
  delete cleanProps.feedback;
  delete cleanProps.feedbackPosition;
  delete cleanProps.layout;
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
      : formProps && formProps.hasOwnProperty(handlers[i])
          ? formProps[handlers[i]]
          : null;

    if (handler) props[property[i]] = handler;
  }
};

const addValue = (formProps, props) => {
  const noFormProps = !formProps || !formProps.values;
  if (noFormProps && props.hasOwnProperty('value')) return;

  if (noFormProps) return;

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
  formProps: PropTypes.object,
  feedback: PropTypes.any,
  feedbackPosition: PropTypes.oneOf(['left', 'right', undefined]),
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'centered']).isRequired
};

Field.defaultProps = {
  type: 'text',
  required: false,
  formProps: undefined,
  label: '',
  feedback: undefined,
  feedbackPosition: undefined,
  layout: 'horizontal'
};

export default Field;
