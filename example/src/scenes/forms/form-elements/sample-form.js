import React, { Component } from 'react';
import { Formik } from 'formik';
import { Panel, PanelBody, PanelHeader, Form, Field, ToggleButtonGroup, ToggleButtonOption } from 'react-gentelella';
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
          <br />
          <Formik
            onSubmit={ values => {
              console.log(values)}
            }
            render={
            props => (
              <Form onSubmit={ props.handleSubmit }>
                <Field name="firstName" label="First Name" required formProps={ props } />
                <Field name="lastName" label="Last Name" required formProps={ props } />
                <Field name="middleName" label="Middle Name / Initial" formProps={ props } />
                <ToggleButtonGroup name="gender" label="Gender">
                  <ToggleButtonOption checked name="gender" value="male"> &nbsp; Male &nbsp; </ToggleButtonOption>
                  <ToggleButtonOption bsStyle="primary" name="gender" value="female">Female</ToggleButtonOption>
                </ToggleButtonGroup>
              </Form>
            )
          } />

        </PanelBody>
      </Panel>
    );
  }
}

export default SampleForm;
