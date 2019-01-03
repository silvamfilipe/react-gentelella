import React, { Component } from 'react';
import { Formik } from 'formik';

import { loadChildren, renderChild } from './form-utils'

class HorizontalForm extends Component {
  render () {
    const children = loadChildren(this.props.children);

    return (
      <Formik
        render={ props => {
          const rendered = [];
          for (let key in children) {
            rendered.push(renderChild(props, children[key]));
          }
          return (
            <form className="form-horizontal form-label-left" onSubmit={ props.handleSubmit }>
              { rendered }
            </form>
          )
        } }
      />
    );
  }
}

export default HorizontalForm;
