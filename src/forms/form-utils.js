import Field from './field'
import React from 'react'

const hash = () => Date.now().toString()+Math.random().toString().replace('.','');

export const loadChildren = children => {

  children = Array.isArray(children) ? children : [children];

  const childrenCopy = [];

  for (let childKey in children) {
    if (children.hasOwnProperty(childKey)) {
      const { props } = children[childKey];
      const key = hash();
      const element = children[childKey].type.name;
      childrenCopy[key] = {key: key, element, ...props }
    }
  }

  return childrenCopy;
};


export const renderChild = ({values, errors, status, touched, handleBlur, handleChange, handleSubmit, isSubmitting}, child) => {
  const props = { ...child, values, errors, status, touched, onChange: handleChange, onBlur: handleBlur };

  return renderField(props);
};

const renderField = props => {
  return <Field { ...props } />;
};
