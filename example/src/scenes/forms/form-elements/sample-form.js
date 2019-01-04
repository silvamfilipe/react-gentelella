import React, { Component } from 'react';
import { Formik } from 'formik';
import { Panel, PanelBody, PanelHeader, Form, Field } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'

class SampleForm extends Component {
  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Form design <small>different form elements</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          <Formik
            onSubmit={ values => {
              console.log(values)}
            }
            render={
            props => (
              <Form onSubmit={ props.handleSubmit }>
                <Field name="firstName" label="First Name" required formProps={ props } />
              </Form>
            )
          } />

        </PanelBody>
      </Panel>
    );
  }
}

export default SampleForm;
